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
    <p>HipnoMeditatif Yeniden İşleme Terapisi, kısa adıyla H.Y.T®, Dr. Haluk Alan tarafından geliştirilen, asimilatif ve bütüncül bir terapi tekniğidir. İlk olarak “Hipnotik Yeniden İşleme Terapisi” adıyla tanıtılan bu yaklaşım, zaman içinde kuramsal ve uygulamaya dönük gelişmeler doğrultusunda “HipnoMeditatif Yeniden İşleme Terapisi” olarak adlandırılmıştır.</p>

    <p>H.Y.T®, bilinç ve bilinçdışı süreçleri birlikte ele alan; hipnomeditatif, imgesel ve çift yönlü uyarım temelli teknikleri bütüncül bir yapı içinde kullanan entegratif bir yaklaşımdır. Bu yönüyle yalnızca geçmiş yaşantılarla değil, bu yaşantıların bugünkü etkileri ve geleceğe yönelik olumsuz beklentilerle de çalışmayı amaçlar.</p>

    <p>Bu yaklaşımda geçmiş, şimdi ve gelecek zamansal bir bütünlük içinde ele alınır. Geçmiş deneyimlerin bugünkü tetikleyicileri, bedensel ve duygusal etkileri ya da geleceğe dair olumsuz yaşam algıları terapi sürecinin parçası olabilir. Bu nedenle H.Y.T®, yalnızca anıların yeniden ele alınmasıyla sınırlı kalmaz; kişinin deneyimini daha geniş bir zaman çizgisi içinde değerlendirmeye çalışır.</p>

    <p>H.Y.T® danışan merkezli bir tekniktir. Çalışılacak konu, danışanın yaşadığı deneyimin onda bıraktığı etki üzerinden belirlenir. Terapi sürecinde danışanın hedefleri, motivasyonu ve sürece katılımı önemli bir yer tutar. Bu nedenle yaklaşım, “sorun kimdeyse çözüm de oradadır” anlayışıyla danışanın aktif katılımını merkeze alır.</p>

    <p>H.Y.T® üzerine akademik çalışmalar yapılmış ve farklı lisansüstü araştırmalara konu olmuştur. Klinik uygulamalar ve ilk bilimsel veriler, bu yöntemin özellikle yeniden işlemleme temelli terapi yaklaşımları içinde dikkat çeken bir konuma sahip olduğunu göstermektedir.</p>
  `
}
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
