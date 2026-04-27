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
  "hyt-nedir": {
    title: "H.Y.T®; HipnoMeditatif Yeniden İşleme Terapisi",
    text: `
      <p>HYT bundan yaklaşık 7 yıl önce “Hipnotik Yeniden İşleme Terapisi” adı altında terapi dünyasına tanıtılmıştı. Ancak zamanla hem içeriğindeki kimi değişiklikler, hem de SEPİ gibi bazı uluslararası kongre ve özel görüşmelerde otörlerden alınan geri bildirimlere bağlı olarak bundan böyle “HipnoMeditatif (Holistik) Yeniden İşleme Terapisi, HYT” olarak isimlendirilmesine karar verilmiştir.</p>

      <h2>Tanım</h2>

      <p>HipnoMeditatif Yeniden İşleme Terapisi, HYT; Dr. Haluk ALAN tarafından geliştirilen asimilatif, bütüncül bir terapi tekniğidir.</p>

      <p>HYT, bilinç ile bilinçdışını beraberce işleme sürecine dahil eden ve çift yönlü uyarımlarla bazı hipnotik (meditatif, imgesel) tekniklerden oluşan entegratif bir yaklaşımdır. Bu uygulamada hipnotik bazı teknikler eşliğinde çift yönlü uyarımlarla ilgili problem üzerinde desensitizasyon elde edilmektedir.</p>

      <p>Bu modelde, çift yönlü uyarımlarla hipnomeditatif tekniklerin “birlikte” kullanımından daha çok, asimilatif mantıkla her ikisinin homojen entegratif bir uygulaması söz konusudur. Beraberce kullanıma yönelik daha önceleri birtakım çalışmalar yapılmış ama konunun uzmanları tarafından farklı yaklaşımlarla değerlendirilmiştir (American Journal of Clinical Hypnosis 43:3,4 January/April 2001). HYT içindeki hipnoz ve çift yönlü uyarımların entegratif düzenlemesi, “birlikte kullanım” olmadıkları için, daha önceki bu uygulamalarla (2001) karıştırılmamalı ve aynı kategoride değerlendirilmemelidir.</p>

      <p>HYT, geçmiş, şimdi ve geleceği zamansal bir bütünlük içinde beraberce ele alan ve işleyen bir tekniktir. Bu yüzden sadece anılarla sınırlı kalmaz, geleceğe yönelik bireyin imge dünyasında yer alan gelecek yönelimli olası olumsuz yaşam algıları üzerinde de etkin bir şekilde çalışır. Geçmiş anıların şimdiki zaman diliminde tetikleyicileri olabilir. Güncel yaşam aktiviteleri nedeniyle ortaya çıkan duygusal ve duyumsal etkilenmeler geçmişi bugün gibi yaşantılamaya neden olabilir. Bu gibi durumlarda güncel tetikleyicilere yer verilir. Güncel tetikleyiciler hedefe doğru yol alan birey için önlerine çıkan çakıl taşları gibidir. Zamansal boyutta ele alındığında her üç zaman dilimine hitap etmesi nedeniyle HYT, zamanlar üstü bir teknik olarak kabul edilebilir.</p>

      <p>HYT; danışan merkezli bir tekniktir. Yaşanan travmalar ve olumsuz yaşam deneyimlerinin bireyde bıraktığı etkiler bağlamında toptancı bir zihniyet ya da herhangi bir önyargıya varmadan tamamen danışan merkezli bir protokol çerçevesinde üzerinde çalışılacak olaya odaklanılır. Yaşanan deneyimin hastada bıraktığı etki ana çalışma konusudur. “Sorun kimdeyse çözüm de oradadır” prensibinden hareketle hedef olay çerçevesinde hazırlanan protokole uygun olarak çalışmaya başlanır. Sorunun tanınmasından tedavisine kadar her kademede danışan sürece dahil edilir. Olayın kahramanına rağmen tedaviden herhangi bir sonuç alınamayacağı kabul edilir. Bu yüzden danışan terapi sürecinin en önemli temel unsurudur. Terapinin henüz başında hastadan “terapi hedefleri” adı altında terapi sonunda varılmak istenen sonuca yönelik talep alınır. Danışanın terapiye olan motivasyonunu sağlayan bu yaklaşım terapiste de yol gösterici olur.</p>

      <p>HYT, Üsküdar Üniversitesi Sağlık Bilimleri Enstitüsü, Nörobilim Ana Bilim Dalında Prof. Dr. Sinan Canan Hocanın moderatörlüğünde Yüksek Lisans tezi olarak kabul edilmiştir. İlk bilimsel çalışmanın sonuçları HYT’nin etkili olduğu yönündedir.</p>

      <p>HYT çeşitli üniversitelerde Yüksek Lisans ve Doktora çalışmalarında (Sağlık Bilimleri Üniversitesi Hamidiye Sağlık Bilimleri Enstitüsü GETAT Doktora tezi) tez konusu olarak kabul edilmekte ve bu yöndeki çalışmalar devam etmektedir.</p>

      <p>Yüzlerce klinik uygulama ve söz konusu çalışmaların ilk verileri ışığında şunu söylemek mümkündür; HYT, hızlı sonuç alınması, kolay uygulanabilirliği ve diğer terapi türlerine kolay entegrasyonu nedeniyle dikkat çekmektedir.</p>
    `
  },

  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p><strong>HYT içinde barındırdığı iki temel tekniğin kullanıldığı sorunlarda doğal olarak kullanılabilir.</strong></p>

      <p>Panik Bozukluğu, Kaygı Bozuklukları, OKB, Depresyon, Komplike Yas, Rahatsız Edici Anılar, olumsuz yaşam deneyimleri, Fobiler, Özgül fobiler, Ağrı Rahatsızlıkları, Yeme Bozuklukları, Performans Kaygısı, Stres Yönetimi, Bağımlılıklar, Cinsel ve/veya Fiziksel Taciz, Tecavüz, Beden Algısı Bozuklukları, Cinsel İşlev Bozuklukları, Davranım Bozuklukları, Özgüven Sorunları, Migren, Fibromiyalji ve Fantom Ağrısı, Kompleks ve basit travma ve Travma sonrası stres bozukluğu gibi alanlarda kullanılabilmektedir.</p>
    `
  },

  "hyt-teori": {
  title: "HYT’nin teorik arka planı",
  text: `
    <p><strong>HYT’nin Teorik arka planı</strong></p>

    <p>HYT’nin teorik alt yapısı, iki bilgi işleme modeli ve sahne yapım teorisi (Scene Contruction Theory) üzerinde şekillenmektedir. Bilgi işleme modellerinden biri Çift Yönlü Uyarımları (ÇYU) terapi dünyasına katarak muhteşem bir tekniği bize sunan Shapiro’nun Adaptif Bilgi İşleme Modeli (Shapiro, 2001), bir diğeri de “Tahmine Dayalı İşleme Modeli”dir (Friston ve ark. 2006; Clark, 2013; Hohwy, 2013; Chamberlin, 2019).</p>

    <p>Beyinde doğuştan var olan bir bilgi işleme sisteminin varlığı göz önüne alındığında, Olumsuz yaşam deneyimleri ya da travmaların beynin fiziksel bilgi işleme sisteminin biyokimyasal dengesini bozmuş olabileceğini söylemek mümkündür. Bu dengesizlik bilgi işleme sürecinin bir çözüme ulaşmasını engelleyebilir. Travmatik süreçler; olağan uyum mekanizmalarının bozulmasına yol açar. Otörler; bu sürecin bilgi işlemeyi durduğunu ve bilgiyi anksiyete oluşturan orijinal haliyle dondurduğunu (DÜĞÜM) öne sürmektedir(Shapiro, 2016).</p>

    <p>Travmatik olaylar ya da olumsuz yaşam deneyimleri, bilgi işleme sisteminde tıkanmaya yol açtığından artık orada yeni bir işlemlemeye gereksinim doğar. Yeniden işlemleme yapılmadığında süreç, ego-distonik haliyle kalır. Amaç, sürecin egoya uyumlu hale getirilmesidir. Bu konuda Alladin (2013) şöyle der; “ (Bu gibi durumlarda) …Gevşeme ve rahatlama yetmez, tedavinin önemli olan parçası; travmatik olan olayı (anıyı) yeniden işlemektir. Yeniden işlemleme yaptığınızda kaygı düzeyiniz azalıyor.”</p>

    <p>Hipnoz durumunda kişinin hafıza işleme yeteneklerinin arttığı varsayımıyla birlikte hafızadan geri çağrılan anıların, temsili görseller ile ifade edilmesinin hipokampal alanlardaki nöronal ağ aktivitesinde etkinlik gösterdiği düşünülmektedir. HYT uygulamasının hem sığınak çalışmasında hem de travmatik anıyı yeniden işleme sürecinde (V döngüsü) simge ve semboller kullanılır. Sağ ve sol taraftaki pozitif bilişle bağlantılı temsili görsellerin, tahmin hatasını en aza indirme görevinde adeta belleğin referans noktaları gibi görev aldığı ve bunların yeniden işlemleme sürecini kolaylaştırıcı bir etki yarattığı düşünülmektedir. Tost tekniği mantığından hareketle terapi sonucunda hızlı ve kalıcı değişim ve dönüşümün bu sayede sağlandığı kabul edilmektedir.</p>

    <p>HYT, sığınak çalışmasından başlayarak seansın sonlandırılmasına kadar her aşamasında Porges’in (2009) Polivagal Teorisine uyumlu bir çalışma modeli sunmaktadır. Özellikle travma tedavilerinde ve anksiyöz durumlarda danışanların güvenli bir ortamda terapiye alınmaları hem teşhis (anı ya da imgeye ulaşmak) hem de tedavi (yeniden işlemleme) bakımından oldukça önemlidir. Masson (2016)’ya göre; Göz hareketleri ve çift yönlü uyarımın hipnozla birlikte kullanılmasının ventral vagal sistemi etkileyerek kişinin sempatik sinir sistemini inhibe etmesini sağladığı düşünülmektedir. Bu durum parasempatik sistemin (PSS) aktif hale geçmesine katkıda bulunur. PSS aktif hale geçmesi istendik güvenli ortamın sağlanıyor olması bakımından önemlidir. Travmatik süreçlerin yaşandığı ya da tekrardan aktiflendiği şartlarda yeni öğrenmeler gerçekleştirilemezken, bu güvenli ortamda Hipokampüs merkezli bilgi işleme süreci daha geniş bir hafıza taraması ve yeniden yapılandırmayı gerçekleştirerek yeni öğrenmelerin yolunu açıyor olabilir. (Chadwick, Mullally & Maguire, 2012; Chamberlin, 2019; Baror & Bar, 2016; Hassabis & Maguire, 2009)</p>
  `
},

  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p><strong>Hipnoterapide yetkinlik önemli bir meseledir. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı sertifikası yoksa lütfen o kişiye güvenmeyin.</strong></p>

      <p>Organik beyin sendromları, psikotik durumlar, bipolar bozukluk, dissosiyatif bozukluk ve borderline yapı gibi durumlarda dikkat gereklidir.</p>
    `
  },

  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p><strong>Mitler hipnoz dünyasının karabulutlarıdır. Sırf yanlış bilinenler yüzünden birçok hasta bu teknikten yararlanamamaktadır.</strong></p>

      <p>Hipnoz kontrol kaybı değildir. Kişi süreç boyunca bilinçlidir.</p>

      <p>Hipnoz bağımlılık oluşturmaz, aksine kişinin içsel düzenleme kapasitesini artırır.</p>
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

      hytContent.classList.remove('fade-content');
      void hytContent.offsetWidth;

      hytContent.innerHTML = `
        <h1>${selected.title}</h1>
        ${selected.text}
      `;

      hytContent.classList.add('fade-content');

      hytContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  const defaultTab = document.querySelector('[data-content="hyt-nedir"]');
  if (defaultTab) {
    defaultTab.click();
  }
}
