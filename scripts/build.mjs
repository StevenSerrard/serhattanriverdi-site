import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import matter from "gray-matter";
import { marked } from "marked";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist");
const escapeHtml = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const publicPath = (value = "") => String(value).trim().replace(/^\//, "");
const slugFromFilename = (filename) => filename.replace(/\.md$/i, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
const dateLabel = (value) => new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date(value));

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
const ignored = new Set([".git", ".github", "content", "dist", "node_modules", "scripts", ".pages.yml", "package.json", "package-lock.json", "CMS_KULLANIM.md"]);
for (const entry of await readdir(root)) {
  if (ignored.has(entry) || entry === "pnpm-lock.yaml") continue;
  await cp(path.join(root, entry), path.join(out, entry), { recursive: true });
}

const home = JSON.parse(await readFile(path.join(root, "content/site/home.json"), "utf8"));
const indexPath = path.join(out, "index.html");
const $ = cheerio.load(await readFile(indexPath, "utf8"), { decodeEntities: false });
$("title").text(home.seo.title);
$("meta[name='description']").attr("content", home.seo.description);
$(".hero-image .eyebrow").first().text(home.hero.eyebrow);
$(".hero-image h1").first().html(home.hero.title.split("\n").map(escapeHtml).join("<br>"));
$(".hero-image .hero-intro").first().text(home.hero.intro);
$(".about-title .name").text(home.about.name);
$(".about-title .title").text(home.about.title);
$(".about-photo img").attr("src", publicPath(home.about.photo)).attr("alt", `${home.about.title} ${home.about.name}`);
$(".about .content-block").html(home.about.paragraphs.map(({ text }) => `<p>${escapeHtml(text)}</p>`).join("\n"));
$(".service-grid").html(home.services.map((service) => `<a class="service-card" href="${escapeHtml(service.url)}"><h3>${escapeHtml(service.title)}</h3><p>Bilgi için tıklayın</p></a>`).join("\n"));
$(".contact-text-final h2").text(home.contact.title);
$(".contact-note").html(home.contact.paragraphs.map(({ text }) => `<p>${escapeHtml(text)}</p>`).join("\n"));
$(".footer-brand p").text(home.footer.text);
const links = $(".footer-contact a");
links.eq(0).find("span").html(home.footer.address.split("\n").map(escapeHtml).join("<br>"));
links.eq(1).attr("href", `tel:+90${home.footer.phone.replace(/\D/g, "").replace(/^0/, "")}`).find("span").text(home.footer.phone);
links.eq(2).attr("href", `mailto:${home.footer.email}`).find("span").text(home.footer.email);
links.eq(4).find("span").text(home.footer.instagram);
await writeFile(indexPath, $.html(), "utf8");

const readCollection = async (folder) => Promise.all((await readdir(path.join(root, "content", folder))).filter((f) => f.endsWith(".md")).map(async (filename) => {
  const parsed = matter(await readFile(path.join(root, "content", folder, filename), "utf8"));
  return { filename, slug: slugFromFilename(filename), ...parsed.data, body: parsed.content };
}));
const [postsRaw, authors, categories] = await Promise.all([readCollection("posts"), readCollection("authors"), readCollection("categories")]);
const posts = postsRaw.filter((post) => post.published).sort((a, b) => new Date(b.date) - new Date(a.date));
const collectionMap = (items, folder) => new Map(items.flatMap((item) => [
  [item.name, item],
  [item.filename, item],
  [item.slug, item],
  [`content/${folder}/${item.filename}`, item]
]));
const authorMap = collectionMap(authors, "authors");
const categoryMap = collectionMap(categories, "categories");
const base = cheerio.load(await readFile(indexPath, "utf8"), { decodeEntities: false });
const sharedHeader = base("header.site-header").toString();
const sharedFooter = base("footer.site-footer").toString();
const sharedWhatsapp = base("a.whatsapp-float").toString();
const shell = ({ title, description, canonical, content }) => `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${escapeHtml(canonical)}"><link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico"><link rel="stylesheet" href="style.css?v=78"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></head><body class="content-page">${sharedHeader}${content}${sharedFooter}${sharedWhatsapp}<script src="script.js?v=25"></script></body></html>`;

const cards = posts.length ? posts.map((post) => {
  const cover = post.cover ? `<img src="${escapeHtml(publicPath(post.cover))}" alt="${escapeHtml(post.title)}">` : "";
  const cats = (Array.isArray(post.categories) ? post.categories : [post.categories]).map((ref) => categoryMap.get(ref)).filter(Boolean);
  return `<article class="post-card"><a class="post-card-media" href="yazilar/${post.slug}.html">${cover}</a><div class="post-card-body"><div class="post-meta">${escapeHtml(dateLabel(post.date))}${cats.length ? ` · ${escapeHtml(cats.map((category) => category.name).join(", "))}` : ""}</div><h2><a href="yazilar/${post.slug}.html">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.summary)}</p><a class="post-read-more" href="yazilar/${post.slug}.html">Yazıyı oku</a></div></article>`;
}).join("\n") : `<div class="empty-state"><h2>Yeni yazılar hazırlanıyor.</h2><p>İçerikler yayımlandığında bu sayfada görüntülenecek.</p></div>`;
await writeFile(path.join(out, "icerikler.html"), shell({ title: "Yazılar | Uzman Klinik Psikolog Serhat Tanrıverdi", description: "Psikoterapi, çocuk ve ergen terapisi ve H.Y.T® hakkında bilgilendirici yazılar.", canonical: "https://serhattanriverdi.com/icerikler.html", content: `<main class="content-main"><section class="content-hero"><div class="container"><p class="eyebrow">İçerikler</p><h1>Yazılar</h1><p>Psikoterapi ve ruh sağlığı üzerine bilgilendirici içerikler.</p></div></section><section class="section"><div class="container post-grid">${cards}</div></section></main>` }), "utf8");

await mkdir(path.join(out, "yazilar"), { recursive: true });
for (const post of posts) {
  const author = authorMap.get(post.author);
  const cats = (Array.isArray(post.categories) ? post.categories : [post.categories]).map((ref) => categoryMap.get(ref)).filter(Boolean);
  const cover = post.cover ? `<figure class="article-cover"><img src="../${escapeHtml(publicPath(post.cover))}" alt="${escapeHtml(post.title)}"></figure>` : "";
  const content = `<main class="content-main"><article class="article"><header class="article-header"><div class="container article-narrow"><p class="eyebrow">${escapeHtml(cats.map((category) => category.name).join(" · ") || "Yazı")}</p><h1>${escapeHtml(post.title)}</h1><p class="article-summary">${escapeHtml(post.summary)}</p><div class="post-meta">${escapeHtml(dateLabel(post.date))}${author ? ` · ${escapeHtml(author.name)}, ${escapeHtml(author.title)}` : ""}</div></div></header><div class="container article-narrow">${cover}<div class="article-body">${marked.parse(post.body)}</div><a class="button secondary" href="../icerikler.html">Tüm yazılara dön</a></div></article></main>`;
  const html = shell({ title: post.seo?.title || `${post.title} | Serhat Tanrıverdi`, description: post.seo?.description || post.summary, canonical: `https://serhattanriverdi.com/yazilar/${post.slug}.html`, content })
    .replaceAll('href="style.css', 'href="../style.css')
    .replaceAll('src="script.js', 'src="../script.js')
    .replaceAll('href="/assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('href="#', 'href="../index.html#')
    .replaceAll('href="index.html', 'href="../index.html')
    .replaceAll('href="cocuk-ergen-terapisi.html', 'href="../cocuk-ergen-terapisi.html')
    .replaceAll('href="yetiskin-terapisi.html', 'href="../yetiskin-terapisi.html')
    .replaceAll('href="hyt.html', 'href="../hyt.html')
    .replaceAll('href="icerikler.html', 'href="../icerikler.html');
  await writeFile(path.join(out, "yazilar", `${post.slug}.html`), html, "utf8");
}

const sitemapPath = path.join(out, "sitemap.xml");
const sitemapEntries = [
  "https://serhattanriverdi.com/icerikler.html",
  ...posts.map((post) => `https://serhattanriverdi.com/yazilar/${post.slug}.html`)
].map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join("\n");
const sitemap = await readFile(sitemapPath, "utf8");
await writeFile(sitemapPath, sitemap.replace("</urlset>", `${sitemapEntries}\n</urlset>`), "utf8");
console.log(`Build complete: ${posts.length} published post(s).`);
