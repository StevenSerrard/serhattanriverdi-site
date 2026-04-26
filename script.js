/* =========================
   MOBILE MENU
========================= */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
    });
  });
}


/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll('.scroll-reveal');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.25 });

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* =========================
   HYT TAB SYSTEM
========================= */
const hytTabs = document.querySelectorAll('.hyt-tab');
const hytContent = document.querySelector('#hyt-content');

const hytTexts = {

  "hyt-nedir": null, // HTML'den gelsin

  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p>HYT içinde barındırdığı iki temel tekniğin kullanıldığı sorunlarda doğal olarak kullanılabilir.</p>

      <p>Panik Bozukluğu, Kaygı Bozuklukları, OKB, Depresyon, Komplike Yas, Rahatsız Edici Anılar, olumsuz yaşam deneyimleri, Fobiler, Özgül fobiler, Ağrı Rahatsızlıkları, Yeme Bozuklukları, Performans Kaygısı, Stres Yönetimi, Bağımlılıklar, Cinsel ve/veya Fiziksel Taciz, Tecavüz, Beden Algısı Bozuklukları, Cinsel İşlev Bozuklukları, Davranım Bozuklukları, Özgüven Sorunları, Migren, Fibromiyalji ve Fantom Ağrısı, Kompleks ve basit travma ve Travma sonrası stres bozukluğu gibi alanlarda kullanılabilmektedir.</p>
    `
  },

  "hyt-teori": {
    title: "HYT’nin teorik arka planı",
    text: `
      <p><strong>HYT’nin Teorik arka planı</strong></p>

      <p>HYT’nin teorik alt yapısı, iki bilgi işleme modeli ve sahne yapım teorisi (Scene Construction Theory) üzerinde şekillenmektedir. Bilgi işleme modellerinden biri Çift Yönlü Uyarımları (ÇYU) terapi dünyasına katan Shapiro’nun Adaptif Bilgi İşleme Modeli (Shapiro, 2001), diğeri ise Tahmine Dayalı İşleme Modeli’dir.</p>

      <p>Travmatik deneyimler bilgi işleme sisteminde tıkanmaya yol açabilir ve yeniden işlemleme ihtiyacı doğar.</p>

      <p>HYT bu süreci yeniden işleyerek daha uyumlu hale getirmeyi hedefler.</p>
    `
  },

  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p>Hipnoterapide yetkinlik önemli bir meseledir. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı sertifikası yoksa lütfen o kişiye güvenmeyin.</p>

      <p>Organik beyin sendromları, psikotik durumlar, bipolar bozukluk, dissosiyatif bozukluk ve borderline yapı gibi durumlarda dikkat gereklidir.</p>
    `
  },

  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p>Mitler hipnoz dünyasının karabulutlarıdır. Sırf yanlış bilinenler yüzünden birçok hasta bu teknikten yararlanamamaktadır.</p>

      <p>Hipnoz kontrol kaybı değildir. Kişi süreç boyunca bilinçlidir.</p>

      <p>Hipnoz bağımlılık oluşturmaz, aksine kişinin içsel düzenleme kapasitesini artırır.</p>
    `
  }
};


/* =========================
   TAB CLICK (PREMIUM)
========================= */
if (hytTabs.length > 0 && hytContent) {

  hytTabs.forEach((tab) => {
    tab.addEventListener('click', () => {

      /* ACTIVE BUTTON */
      hytTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');

      const selected = hytTexts[tab.dataset.content];

      /* HTML'deki içerik korunacak */
      if (!selected) return;

      /* ANIMATION RESET */
      hytContent.classList.remove('fade-content');
      void hytContent.offsetWidth;

      /* CONTENT UPDATE */
      hytContent.innerHTML = `
        <h1>${selected.title}</h1>
        ${selected.text}
      `;

      hytContent.classList.add('fade-content');

      /* SMOOTH SCROLL */
      hytContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });
  });

}
