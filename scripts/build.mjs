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
const serviceCardClasses = ["service-card-child", "service-card-adult", "service-card-hyt"];
$(".service-grid").html(home.services.map((service, index) => `<a class="service-card ${serviceCardClasses[index] || ""}" href="${escapeHtml(service.url)}"><h3>${escapeHtml(service.title)}</h3><p>Bilgi için tıklayın</p></a>`).join("\n"));
$(".contact-text-final h2").text(home.contact.title);
$(".contact-note").html(home.contact.paragraphs.map(({ text }) => `<p>${escapeHtml(text)}</p>`).join("\n"));
$(".footer-brand p").text(home.footer.text);
const links = $(".footer-contact a");
links.eq(0).find("span").html(home.footer.address.split("\n").map(escapeHtml).join("<br>"));
links.eq(1).attr("href", `tel:+90${home.footer.phone.replace(/\D/g, "").replace(/^0/, "")}`).find("span").text(home.footer.phone);
links.eq(2).attr("href", `mailto:${home.footer.email}`).find("span").text(home.footer.email);
links.eq(4)
  .attr("href", `https://instagram.com/${home.footer.instagram.replace(/^@/, "")}/`)
  .find("span")
  .text(home.footer.instagram);
await writeFile(indexPath, $.html(), "utf8");

const readCollection = async (folder) => Promise.all((await readdir(path.join(root, "content", folder))).filter((f) => f.endsWith(".md")).map(async (filename) => {
  const parsed = matter(await readFile(path.join(root, "content", folder, filename), "utf8"));
  return { filename, slug: slugFromFilename(filename), ...parsed.data, body: parsed.content };
}));
const [postsRaw, categories] = await Promise.all([readCollection("posts"), readCollection("categories")]);
const posts = postsRaw.filter((post) => post.published).sort((a, b) => new Date(b.date) - new Date(a.date));
const collectionMap = (items, folder) => new Map(items.flatMap((item) => [
  [item.name, item],
  [item.filename, item],
  [item.slug, item],
  [`content/${folder}/${item.filename}`, item]
]));
const categoryMap = collectionMap(categories, "categories");

const latestPosts = posts.slice(0, 3);
const homePostsHtml = latestPosts.length ? latestPosts.map((post) => {
  const cover = post.cover
    ? `<a class="home-post-media" href="yazilar/${post.slug}.html"><img src="${escapeHtml(publicPath(post.cover))}" alt="${escapeHtml(post.title)}"></a>`
    : `<a class="home-post-media" href="yazilar/${post.slug}.html" aria-label="${escapeHtml(post.title)}"></a>`;
  const cats = (Array.isArray(post.categories) ? post.categories : [post.categories])
    .map((ref) => categoryMap.get(ref))
    .filter(Boolean);
  return `<article class="home-post-card">${cover}<div class="home-post-body"><div class="post-meta">${escapeHtml(dateLabel(post.date))}${cats.length ? ` · ${escapeHtml(cats.map((category) => category.name).join(", "))}` : ""}</div><h3><a href="yazilar/${post.slug}.html">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.summary)}</p><a class="post-read-more" href="yazilar/${post.slug}.html">Yazıyı oku</a></div></article>`;
}).join("\n") : `<div class="contents-empty">Yayımlanan son yazılar burada görüntülenecek.</div>`;
const homeIndex = cheerio.load(await readFile(indexPath, "utf8"), { decodeEntities: false });
homeIndex(".home-posts-grid").html(homePostsHtml);
await writeFile(indexPath, homeIndex.html(), "utf8");

const base = cheerio.load(await readFile(indexPath, "utf8"), { decodeEntities: false });
const sharedHeader = base("header.site-header").toString();
const contentHeader = sharedHeader
  .replaceAll('href="#', 'href="index.html#')
  .replace('class="dropdown-toggle">İçerikler', 'class="dropdown-toggle active">İçerikler');
const sharedFooter = base("footer.site-footer").toString();
const sharedWhatsapp = base("a.whatsapp-float").toString();
const shell = ({ title, description, canonical, content }) => `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${escapeHtml(canonical)}"><link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico"><link rel="stylesheet" href="style.css?v=86"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></head><body class="content-page">${contentHeader}${content}${sharedFooter}${sharedWhatsapp}<script src="script.js?v=28"></script></body></html>`;

const cards = posts.length ? posts.map((post) => {
  const cover = post.cover ? `<img src="${escapeHtml(publicPath(post.cover))}" alt="${escapeHtml(post.title)}">` : "";
  const cats = (Array.isArray(post.categories) ? post.categories : [post.categories]).map((ref) => categoryMap.get(ref)).filter(Boolean);
  return `<article class="post-card"><a class="post-card-media" href="yazilar/${post.slug}.html">${cover}</a><div class="post-card-body"><div class="post-meta">${escapeHtml(dateLabel(post.date))}${cats.length ? ` · ${escapeHtml(cats.map((category) => category.name).join(", "))}` : ""}</div><h2><a href="yazilar/${post.slug}.html">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.summary)}</p><a class="post-read-more" href="yazilar/${post.slug}.html">Yazıyı oku</a></div></article>`;
}).join("\n") : `<div class="empty-state"><h2>Yeni yazılar hazırlanıyor.</h2><p>İçerikler yayımlandığında bu sayfada görüntülenecek.</p></div>`;
const videos = [
  "https://www.instagram.com/reel/Da-QjdRIHfJ/",
  "https://www.instagram.com/reel/DXChNUljVMR/",
  "https://www.instagram.com/reel/DR9I1JdCGgK/"
].map((url) => `<div class="content-video-card"><blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote></div>`).join("\n");
const contentHub = `<main class="content-main content-hub">
  <section class="content-hero">
    <div class="container">
      <h1 class="content-hero-title">İçerikler</h1>
    </div>
  </section>
  <section class="section content-chooser-section">
    <div class="container">
      <div class="content-choice-grid">
        <button class="content-choice content-choice--articles" type="button" data-content-choice="yazilar" aria-expanded="false">
          <span class="content-choice-icon"><i class="fa-regular fa-pen-to-square"></i></span>
          <strong>Yazılar</strong>
        </button>
        <button class="content-choice content-choice--videos" type="button" data-content-choice="videolar" aria-expanded="false">
          <span class="content-choice-icon"><i class="fa-solid fa-play"></i></span>
          <strong>Videolar</strong>
        </button>
      </div>
      <section class="content-expand-panel" id="yazilar" data-content-panel hidden>
        <div class="content-panel-heading"><p class="eyebrow">İçerikler</p><h2>Yazılar</h2></div>
        <div class="post-grid">${cards}</div>
      </section>
      <section class="content-expand-panel" id="videolar" data-content-panel hidden>
        <div class="content-panel-heading"><p class="eyebrow">İçerikler</p><h2>Videolar</h2></div>
        <div class="content-video-grid">${videos}</div>
        <div class="content-video-action"><a class="button secondary" href="https://www.instagram.com/psk.tanriverdi/" target="_blank" rel="noopener noreferrer">Tüm Videolar</a></div>
      </section>
    </div>
  </section>
</main><script async src="https://www.instagram.com/embed.js"></script>`;
await writeFile(path.join(out, "icerikler.html"), shell({ title: "İçerikler | Uzman Klinik Psikolog Serhat Tanrıverdi", description: "Psikoterapi, ruh sağlığı ve psikoloji üzerine yazılar ve videolar.", canonical: "https://serhattanriverdi.com/icerikler.html", content: contentHub }), "utf8");
const legacyRedirect = (target) => `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="https://serhattanriverdi.com/${target}"><script>window.location.replace("${target}");</script></head><body></body></html>`;
await writeFile(path.join(out, "yazilar.html"), legacyRedirect("icerikler.html#yazilar"), "utf8");
await writeFile(path.join(out, "videolar.html"), legacyRedirect("icerikler.html#videolar"), "utf8");

await mkdir(path.join(out, "yazilar"), { recursive: true });
for (const post of posts) {
  const cats = (Array.isArray(post.categories) ? post.categories : [post.categories]).map((ref) => categoryMap.get(ref)).filter(Boolean);
  const cover = post.cover ? `<figure class="article-cover"><img src="../${escapeHtml(publicPath(post.cover))}" alt="${escapeHtml(post.title)}"></figure>` : "";
  const content = `<main class="content-main"><article class="article"><header class="article-header"><div class="container article-narrow"><p class="eyebrow">${escapeHtml(cats.map((category) => category.name).join(" · ") || "Yazı")}</p><h1>${escapeHtml(post.title)}</h1><p class="article-summary">${escapeHtml(post.summary)}</p><div class="post-meta">${escapeHtml(dateLabel(post.date))} · ${escapeHtml(home.about.name)}, ${escapeHtml(home.about.title)}</div></div></header><div class="container article-narrow">${cover}<div class="article-body">${marked.parse(post.body)}</div><a class="button secondary" href="../icerikler.html#yazilar">Tüm yazılara dön</a></div></article></main>`;
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
