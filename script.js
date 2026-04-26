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
  }, {
    threshold: 0.25
  });

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* =========================
   HYT TAB SYSTEM
========================= */
const hytTabs = document.querySelectorAll('.hyt-tab');
const hytContent = document.querySelector('#hyt-content');


const hytTexts = {

  /* =========================
     H.Y.T NEDİR
  ========================= */
  "hyt-nedir": {
    title: "H.Y.T®; HipnoMeditatif Yeniden İşleme Terapisi",
    text: `
      <p>HYT bundan yaklaşık 7 yıl önce “Hipnotik Yeniden İşleme Terapisi” adı altında terapi dünyasına tanıtılmıştı. Ancak zamanla hem içeriğindeki kimi değişiklikler, hem de SEPİ gibi bazı uluslararası kongre ve özel görüşmelerde otörlerden alınan geri bildirimlere bağlı olarak bundan böyle “HipnoMeditatif (Holistik) Yeniden İşleme Terapisi, HYT” olarak isimlendirilmesine karar verilmiştir.</p>

      <h2>Tanım</h2>

      <p>HipnoMeditatif Yeniden İşleme Terapisi, HYT; Dr. Haluk ALAN tarafından geliştirilen asimilatif, bütüncül bir terapi tekniğidir.</p>

      <p>HYT, bilinç ile bilinçdışını beraberce işleme sürecine dahil eden ve çift yönlü uyarımlarla bazı hipnotik (meditatif, imgesel) tekniklerden oluşan entegratif bir yaklaşımdır.</p>

      <p>Bu modelde, teknikler yan yana değil, bütünleşmiş şekilde kullanılır.</p>

      <p>HYT, geçmiş, şimdi ve geleceği birlikte ele alır. Bu nedenle sadece anılar değil, güncel tetikleyiciler ve geleceğe dair algılar da çalışılır.</p>

      <p>HYT danışan merkezlidir. Sürecin odağında kişinin yaşadığı olay değil, o olayın kişi üzerindeki etkisi vardır.</p>

      <p>Bilimsel çalışmalar ve klinik uygulamalar, HYT’nin etkili ve uygulanabilir bir yöntem olduğunu göstermektedir.</p>
    `
  },


  /* =========================
     KULLANIM ALANLARI
  ========================= */
  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p>HYT içinde barındırdığı iki temel tekniğin kullanıldığı sorunlarda doğal olarak kullanılabilir.</p>

      <p>Panik Bozukluğu, Kaygı Bozuklukları, OKB, Depresyon, Komplike Yas, Rahatsız Edici Anılar, olumsuz yaşam deneyimleri, Fobiler, Özgül fobiler, Ağrı Rahatsızlıkları, Yeme Bozuklukları, Performans Kaygısı, Stres Yönetimi, Bağımlılıklar, Cinsel ve/veya Fiziksel Taciz, Tecavüz, Beden Algısı Bozuklukları, Cinsel İşlev Bozuklukları, Davranım Bozuklukları, Özgüven Sorunları, Migren, Fibromiyalji ve Fantom Ağrısı, Kompleks ve basit travma ve Travma sonrası stres bozukluğu gibi alanlarda kullanılabilmektedir.</p>
    `
  },


  /* =========================
     TEORİK ARKA PLAN
  ========================= */
  "hyt-teori": {
    title: "HYT’nin teorik arka planı",
    text: `
      <p><strong>HYT’nin Teorik Arka Planı</strong></p>

      <p>HYT’nin teorik alt yapısı, iki bilgi işleme modeli ve sahne yapım teorisi üzerine kuruludur.</p>

      <p>Travmatik deneyimler bilgi işleme sisteminde tıkanmalara neden olabilir.</p>

      <p>HYT bu süreci yeniden işlemleyerek daha uyumlu hale getirmeyi amaçlar.</p>

      <p>Hipnoz, imgelem ve çift yönlü uyarım birlikte çalışır.</p>
    `
  },


  /* =========================
     KULLANILMAYAN DURUMLAR
  ========================= */
  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p><strong>Hipnoz hangi durumlarda kullanılmaz?</strong></p>

      <p>Hipnoterapide yetkinlik önemlidir. Yetkisiz kişilere güvenilmemelidir.</p>

      <p>Organik beyin hastalıkları, psikotik durumlar ve bazı kişilik yapıları dikkat gerektirir.</p>
    `
  },


  /* =========================
     YANLIŞ BİLİNENLER
  ========================= */
  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p><strong>Hipnozla ilgili yanlış bildiklerimiz</strong></p>

      <p>Hipnoz kontrol kaybı değildir. Kişi süreç boyunca bilinçlidir.</p>

      <p>Hipnoz bir terapi değil, terapilere yardımcı bir araçtır.</p>

      <p>Hipnoz bağımlılık oluşturmaz.</p>
    `
  }
};


/* =========================
   TAB CLICK
========================= */
if (hytTabs.length > 0 && hytContent) {

  hytTabs.forEach((tab) => {
    tab.addEventListener('click', () => {

      hytTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');

      const selected = hytTexts[tab.dataset.content];
      if (!selected) return;

      /* Fade reset */
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
