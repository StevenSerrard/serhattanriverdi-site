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
const revealElements = document.querySelectorAll('.scroll-reveal');

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
const hytTabs = document.querySelectorAll('.hyt-tab');
const hytContent = document.querySelector('#hyt-content');

const hytTexts = {
  "hyt-nedir": {
    title: "H.Y.T®; HipnoMeditatif Yeniden İşleme Terapisi",
    text: `
      <p>HipnoMeditatif Yeniden İşlemleme Terapisi (H.Y.T), geçmiş yaşantıların bugünkü duygusal ve zihinsel etkilerini ele alan yeniden işlemleme temelli bir terapi yaklaşımıdır.</p>
      <p>Bu yaklaşımda amaç, kişinin zorlayıcı deneyimlerini daha bütünlüklü biçimde ele alabilmesi ve bu deneyimlerin bugünkü yaşamındaki etkilerini anlamlandırabilmesidir.</p>
    `
  },
  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p>H.Y.T; geçmiş yaşantıların etkisinin sürdüğü, yoğun duygusal tepkilerin ortaya çıktığı ya da kişinin bazı deneyimleri anlamlandırmakta zorlandığı durumlarda kullanılabilir.</p>
      <p>Kaygı, travmatik yaşantılar, bedensel gerginlikler, yoğun stres tepkileri, tekrar eden duygusal zorlanmalar ve geçmiş deneyimlerin bugünkü ilişkiler üzerindeki etkileri bu çalışma alanı içinde ele alınabilir.</p>
    `
  },
  "hyt-teori": {
    title: "HYT’nin teorik arka planı",
    text: `
      <p>H.Y.T’nin teorik arka planı; hipnoz, meditasyon, yeniden işlemleme ve zihinsel-duygusal deneyimlerin bütünleştirilmesi ekseninde ele alınır.</p>
      <p>Bu yaklaşımda kişinin dikkatini içsel yaşantılarına yöneltebildiği, duygusal ve zihinsel süreçlerini daha sakin bir farkındalıkla izleyebildiği bir çalışma zemini oluşturulur.</p>
    `
  },
  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p>Hipnoz her birey ve her klinik durum için uygun olmayabilir. Uygulama öncesinde kişinin ruhsal durumu, ihtiyaçları ve uygunluğu dikkatle değerlendirilmelidir.</p>
      <p>Gerçeklik değerlendirmesinin belirgin biçimde bozulduğu durumlarda, ağır dissosiyatif belirtilerde, akut psikiyatrik krizlerde veya kişinin hipnoz uygulamasına yönelik belirgin kaygı ya da isteksizlik yaşadığı durumlarda dikkatli olunmalıdır.</p>
    `
  },
  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p>Hipnoz, kişinin kontrolünü kaybettiği ya da iradesinin ortadan kalktığı bir durum değildir. Terapi bağlamında hipnoz, kişinin dikkatini ve içsel deneyimini belirli bir odakta toplamasına yardımcı olan bir yöntem olarak ele alınır.</p>
      <p>Hipnoz sırasında kişi tamamen pasif değildir; sürece katılımı, güven ilişkisi ve hazır oluşu önemlidir. Bu nedenle hipnoz, dışarıdan uygulanan gizemli bir müdahale değil, terapötik çerçevede yürütülen yapılandırılmış bir çalışmadır.</p>
    `
  }
};

if (hytTabs.length > 0 && hytContent) {
  hytTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      hytTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');

      const selected = hytTexts[tab.dataset.content];
      if (!selected) return;

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

hytTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    hytTabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');

    const selected = hytTexts[tab.dataset.content];

    hytContent.classList.remove('fade-content');
    void hytContent.offsetWidth;

    hytContent.innerHTML = `
      <h1>${selected.title}</h1>
      ${selected.text}
    `;

    hytContent.classList.add('fade-content');
  });
});
