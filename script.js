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
      <p>Bu bölümde H.Y.T’nin temel yapısı ve terapi sürecindeki yeri açıklanacaktır.</p>
    `
  },
  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p>H.Y.T; geçmiş yaşantıların etkisinin sürdüğü, yoğun duygusal tepkilerin ortaya çıktığı ya da kişinin bazı deneyimleri anlamlandırmakta zorlandığı durumlarda tercih edilebilir.</p>
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
      <p>Hipnoz her birey ve her klinik durum için uygun olmayabilir. Bu nedenle uygulama öncesinde kişinin ruhsal durumu, ihtiyaçları ve uygunluğu dikkatle değerlendirilmelidir.</p>
    `
  },
  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p>Hipnoz, kişinin kontrolünü kaybettiği ya da iradesinin ortadan kalktığı bir durum değildir. Terapi bağlamında hipnoz, kişinin dikkatini ve içsel deneyimini belirli bir odakta toplamasına yardımcı olan bir yöntem olarak ele alınır.</p>
    `
  }
};

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
