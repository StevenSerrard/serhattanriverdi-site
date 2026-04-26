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

/* Scroll reveal */
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
  }, {
    threshold: 0.25
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* HYT content tabs */
const hytTabs = document.querySelectorAll('.hyt-tab');
const hytContent = document.querySelector('#hyt-content');

const hytTexts = {

  /* ⚠️ BURAYI BOŞ BIRAKIYORUZ → HTML GÖSTERİLECEK */
  "hyt-nedir": null,

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
      <p>H.Y.T’nin teorik arka planı; hipnoz, meditasyon, yeniden işlemleme ve zihinsel-duygusal deneyimlerin bütünleştirilmesi ekseninde ele alınır.</p>
    `
  },

  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p>Hipnoz her birey ve her klinik durum için uygun olmayabilir. Uygulama öncesinde kişinin ruhsal durumu dikkatle değerlendirilmelidir.</p>
    `
  },

  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p>Hipnoz, kişinin kontrolünü kaybettiği bir durum değildir. Terapötik bağlamda dikkat ve içsel odaklanmayı artıran bir yöntemdir.</p>
    `
  }
};

if (hytTabs.length > 0 && hytContent) {

  hytTabs.forEach((tab) => {
    tab.addEventListener('click', () => {

      hytTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');

      const selected = hytTexts[tab.dataset.content];

      /* 🔥 EN KRİTİK KISIM */
      if (!selected) return; // hyt-nedir → HTML kalacak

      hytContent.classList.remove('fade-content');
      void hytContent.offsetWidth;

      hytContent.innerHTML = `
        <h1>${selected.title}</h1>
        ${selected.text}
      `;

      hytContent.classList.add('fade-content');
    });
  });

}
