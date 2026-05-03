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
const hytCta = `
  <div class="hyt-cta">
    <a class="button primary" href="index.html#iletisim">
      Randevu ve Bilgi İçin İletişime Geçin
    </a>
  </div>
`;

const hytTexts = {
  "hyt-nedir": {
    title: "H.Y.T®; HipnoMeditatif Yeniden İşleme Terapisi",
    text: `
      <p>
      HYT bundan yaklaşık 7 yıl önce “Hipnotik Yeniden İşleme Terapisi” adı altında terapi dünyasına tanıtılmıştı. Ancak zamanla hem içeriğindeki kimi değişiklikler, hem de SEPİ gibi bazı uluslararası kongre ve özel görüşmelerde otörlerden alınan geri bildirimlere bağlı olarak bundan böyle “HipnoMeditatif (Holistik) Yeniden İşleme Terapisi, HYT” olarak isimlendirilmesine karar verilmiştir.
      </p>

      <h2>Tanım</h2>

      <p>
      HipnoMeditatif Yeniden İşleme Terapisi, HYT; Dr. Haluk ALAN tarafından geliştirilen asimilatif, bütüncül bir terapi tekniğidir.
      </p>

      <p>
      HYT, bilinç ile bilinçdışını beraberce işleme sürecine dahil eden ve çift yönlü uyarımlarla bazı hipnotik (meditatif, imgesel) tekniklerden oluşan entegratif bir yaklaşımdır. Bu uygulamada hipnotik bazı teknikler eşliğinde çift yönlü uyarımlarla ilgili problem üzerinde desensitizasyon elde edilmektedir.
      </p>

      <p>
      Bu modelde, çift yönlü uyarımlarla hipnomeditatif tekniklerin “birlikte” kullanımından daha çok, asimilatif mantıkla her ikisinin homojen entegratif bir uygulaması söz konusudur. Beraberce kullanıma yönelik daha önceleri birtakım çalışmalar yapılmış ama konunun uzmanları tarafından farklı yaklaşımlarla değerlendirilmiştir (American Journal of Clinical Hypnosis 43:3,4 January/April 2001). HYT içindeki hipnoz ve çift yönlü uyarımların entegratif düzenlemesi, “birlikte kullanım” olmadıkları için, daha önceki bu uygulamalarla (2001) karıştırılmamalı ve aynı kategoride değerlendirilmemelidir.
      </p>

      <p>
      HYT, geçmiş, şimdi ve geleceği zamansal bir bütünlük içinde beraberce ele alan ve işleyen bir tekniktir. Bu yüzden sadece anılarla sınırlı kalmaz, geleceğe yönelik bireyin imge dünyasında yer alan gelecek yönelimli olası olumsuz yaşam algıları üzerinde de etkin bir şekilde çalışır. Geçmiş anıların şimdiki zaman diliminde tetikleyicileri olabilir. Güncel yaşam aktiviteleri nedeniyle ortaya çıkan duygusal ve duyumsal etkilenmeler geçmişi bugün gibi yaşantılamaya neden olabilir. Bu gibi durumlarda güncel tetikleyicilere yer verilir. Güncel tetikleyiciler hedefe doğru yol alan birey için önlerine çıkan çakıl taşları gibidir. Zamansal boyutta ele alındığında her üç zaman dilimine hitap etmesi nedeniyle HYT, zamanlar üstü bir teknik olarak kabul edilebilir.
      </p>

      <p>
      HYT; danışan merkezli bir tekniktir. Yaşanan travmalar ve olumsuz yaşam deneyimlerinin bireyde bıraktığı etkiler bağlamında toptancı bir zihniyet ya da herhangi bir önyargıya varmadan tamamen danışan merkezli bir protokol çerçevesinde üzerinde çalışılacak olaya odaklanılır. Yaşanan deneyimin hastada bıraktığı etki ana çalışma konusudur. “Sorun kimdeyse çözüm de oradadır” prensibinden hareketle hedef olay çerçevesinde hazırlanan protokole uygun olarak çalışmaya başlanır. Sorunun tanınmasından tedavisine kadar her kademede danışan sürece dahil edilir. Olayın kahramanına rağmen tedaviden herhangi bir sonuç alınamayacağı kabul edilir. Bu yüzden danışan terapi sürecinin en önemli temel unsurudur. Terapinin henüz başında hastadan “terapi hedefleri” adı altında terapi sonunda varılmak istenen sonuca yönelik talep alınır. Danışanın terapiye olan motivasyonunu sağlayan bu yaklaşım terapiste de yol gösterici olur.
      </p>

      <p>
      HYT, Üsküdar Üniversitesi Sağlık Bilimleri Enstitüsü, Nörobilim Ana Bilim Dalında Prof. Dr. Sinan Canan Hocanın moderatörlüğünde Yüksek Lisans tezi olarak kabul edilmiştir. İlk bilimsel çalışmanın sonuçları HYT’nin etkili olduğu yönündedir.
      </p>

      <p>
      HYT çeşitli üniversitelerde Yüksek Lisans ve Doktora çalışmalarında (Sağlık Bilimleri Üniversitesi Hamidiye Sağlık Bilimleri Enstitüsü GETAT Doktora tezi) tez konusu olarak kabul edilmekte ve bu yöndeki çalışmalar devam etmektedir.
      </p>

      <p>
      Yüzlerce klinik uygulama ve söz konusu çalışmaların ilk verileri ışığında şunu söylemek mümkündür; HYT, hızlı sonuç alınması, kolay uygulanabilirliği ve diğer terapi türlerine kolay entegrasyonu nedeniyle dikkat çekmektedir.
      </p>
      <p class="source-note">
  <strong>Kaynakça</strong><br>
  Bu içerikte yer alan bilgiler ilgili literatür ve uygulama kaynaklarından derlenmiştir.
  Daha detaylı bilgi için 
  <a href="https://hyttr.com/hizmetler/hipnozla-ilgili-yanlis-bildiklerimiz" target="_blank">
    ilgili kaynağı inceleyebilirsiniz
  </a>.
</p>
    `
  },

  "hyt-kullanim": {
    title: "HYT nerelerde kullanılabilir?",
    text: `
      <p><strong>HYT içinde barındırdığı iki temel tekniğin kullanıldığı sorunlarda doğal olarak kullanılabilir.</strong></p>

      <p>Panik Bozukluğu, Kaygı Bozuklukları, OKB, Depresyon, Komplike Yas, Rahatsız Edici Anılar, olumsuz yaşam deneyimleri, Fobiler, Özgül fobiler, Ağrı Rahatsızlıkları, Yeme Bozuklukları, Performans Kaygısı, Stres Yönetimi, Bağımlılıklar, Cinsel ve/veya Fiziksel Taciz, Tecavüz, Beden Algısı Bozuklukları, Cinsel İşlev Bozuklukları, Davranım Bozuklukları, Özgüven Sorunları, Migren, Fibromiyalji ve Fantom Ağrısı, Kompleks ve basit travma ve Travma sonrası stres bozukluğu gibi alanlarda kullanılabilmektedir.</p>
    <p class="source-note">
  <strong>Kaynakça</strong><br>
  Bu içerikte yer alan bilgiler ilgili literatür ve uygulama kaynaklarından derlenmiştir.
  Daha detaylı bilgi için 
  <a href="https://hyttr.com/hizmetler/hipnozla-ilgili-yanlis-bildiklerimiz" target="_blank">
    ilgili kaynağı inceleyebilirsiniz
  </a>.
</p>
    `
  },

  "hyt-teori": {
  title: "HYT’nin teorik arka planı",
  text: `
    <p>
    <strong>HYT’nin Teorik arka planı</strong>
    </p>

    <p>
    HYT’nin teorik alt yapısı, iki bilgi işleme modeli ve sahne yapım teorisi (Scene Contruction Theory) üzerinde şekillenmektedir. Bilgi işleme modellerinden biri Çift Yönlü Uyarımları (ÇYU) terapi dünyasına katarak muhteşem bir tekniği bize sunan Shapiro’nun Adaptif Bilgi İşleme Modeli (Shapiro, 2001), bir diğeri de “Tahmine Dayalı İşleme Modeli”dir (Friston ve ark. 2006; Clark, 2013; Hohwy, 2013; Chamberlin, 2019).
    </p>

    <p>
    Beyinde doğuştan var olan bir bilgi işleme sisteminin varlığı göz önüne alındığında, Olumsuz yaşam deneyimleri ya da travmaların beynin fiziksel bilgi işleme sisteminin biyokimyasal dengesini bozmuş olabileceğini söylemek mümkündür. Bu dengesizlik bilgi işleme sürecinin bir çözüme ulaşmasını engelleyebilir. Travmatik süreçler; olağan uyum mekanizmalarının bozulmasına yol açar. Otörler; bu sürecin bilgi işlemeyi durduğunu ve bilgiyi anksiyete oluşturan orijinal haliyle dondurduğunu (DÜĞÜM) öne sürmektedir(Shapiro, 2016).
    </p>

    <p>
    Travmatik olaylar ya da olumsuz yaşam deneyimleri, bilgi işleme sisteminde tıkanmaya yol açtığından artık orada yeni bir işlemlemeye gereksinim doğar. Yeniden işlemleme yapılmadığında süreç, ego-distonik haliyle kalır. Amaç, sürecin egoya uyumlu hale getirilmesidir. Bu konuda Alladin (2013) şöyle der; “ (Bu gibi durumlarda) …Gevşeme ve rahatlama yetmez, tedavinin önemli olan parçası; travmatik olan olayı (anıyı) yeniden işlemektir. Yeniden işlemleme yaptığınızda kaygı düzeyiniz azalıyor.”
    </p>

    <p>
    Hipnoz durumunda kişinin hafıza işleme yeteneklerinin arttığı varsayımıyla birlikte hafızadan geri çağrılan anıların, temsili görseller ile ifade edilmesinin hipokampal alanlardaki nöronal ağ aktivitesinde etkinlik gösterdiği düşünülmektedir. HYT uygulamasının hem sığınak çalışmasında hem de travmatik anıyı yeniden işleme sürecinde (V döngüsü) simge ve semboller kullanılır. Sağ ve sol taraftaki pozitif bilişle bağlantılı temsili görsellerin, tahmin hatasını en aza indirme görevinde adeta belleğin referans noktaları gibi görev aldığı ve bunların yeniden işlemleme sürecini kolaylaştırıcı bir etki yarattığı düşünülmektedir. Tost tekniği mantığından hareketle terapi sonucunda hızlı ve kalıcı değişim ve dönüşümün bu sayede sağlandığı kabul edilmektedir.
    </p>

    <p>
    HYT, sığınak çalışmasından başlayarak seansın sonlandırılmasına kadar her aşamasında Porges’in (2009) Polivagal Teorisine uyumlu bir çalışma modeli sunmaktadır. Özellikle travma tedavilerinde ve anksiyöz durumlarda danışanların güvenli bir ortamda terapiye alınmaları hem teşhis (anı ya da imgeye ulaşmak) hem de tedavi (yeniden işlemleme) bakımından oldukça önemlidir. Masson (2016)’ya göre; Göz hareketleri ve çift yönlü uyarımın hipnozla birlikte kullanılmasının ventral vagal sistemi etkileyerek kişinin sempatik sinir sistemini inhibe etmesini sağladığı düşünülmektedir. Bu durum parasempatik sistemin (PSS) aktif hale geçmesine katkıda bulunur. PSS aktif hale geçmesi istendik güvenli ortamın sağlanıyor olması bakımından önemlidir. Travmatik süreçlerin yaşandığı ya da tekrardan aktiflendiği şartlarda yeni öğrenmeler gerçekleştirilemezken, bu güvenli ortamda Hipokampüs merkezli bilgi işleme süreci daha geniş bir hafıza taraması ve yeniden yapılandırmayı gerçekleştirerek yeni öğrenmelerin yolunu açıyor olabilir. (Chadwick, Mullally & Maguire, 2012; Chamberlin, 2019; Baror & Bar, 2016; Hassabis & Maguire, 2009)
    </p>
    <p class="source-note">
  <strong>Kaynakça</strong><br>
  Bu içerikte yer alan bilgiler ilgili literatür ve uygulama kaynaklarından derlenmiştir.
  Daha detaylı bilgi için 
  <a href="https://hyttr.com/hizmetler/hipnozla-ilgili-yanlis-bildiklerimiz" target="_blank">
    ilgili kaynağı inceleyebilirsiniz
  </a>.
</p>
  `
},

  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p>
      Hipnoterapide yetkinlik önemli bir meseledir. Hipnozu biliyor olmak yetki alanı dışındakilere, tedavi amacıyla hastalara müdahale etme yetkisini vermez. <strong>Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı sertifikası yoksa lütfen o kişiye güvenmeyin.</strong> (HYT, ZYT, MYT ve HBMT gibi sadece hipnotik tekniklerden oluşmayan uygulamalarda Sağlık Bakanlığı “Hipnoz Uygulama Sertifikası” gerekli olmamakla birlikte, terapistin ilgili eğitimlerden geçtiğine dair belgeyi talep edebilirsiniz.)
      </p>

      <p>
      Organik  beyin sendromları, psikotik yetmezliğe yatkın kişiler, bipolar bozukluk yaşayanlar,  paranoid sorunları olanlar, dissosiyatif bozukluğu olanlar ve border-line kişilik yapısı olanlar hipnoz için zayıf adaylardırlar ya da özel dikkat gösterilmesi gereken grubu oluştururlar (Brown ve Fromm, 1986).
      </p>
      <p class="source-note">
  <strong>Kaynakça</strong><br>
  Bu içerikte yer alan bilgiler ilgili literatür ve uygulama kaynaklarından derlenmiştir.
  Daha detaylı bilgi için 
  <a href="https://hyttr.com/hizmetler/hipnozla-ilgili-yanlis-bildiklerimiz" target="_blank">
    ilgili kaynağı inceleyebilirsiniz
  </a>.
</p>
    `
  },

  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p>
      <strong>Hipnoz hakkında bilgisi olduğunu iddia edenlerin çoğunun yanlış ve eksik bilgilere sahip olduklarını göreceksiniz.</strong> Alacağınız en sık cevap, köstekli bir saat ve uyuyup zombiye dönmüş bir garip insan olacaktır. Oysa klinik (tıbbi) hipnozun yani hipnoterapinin bu anlatılanlarla yakından ve uzaktan bir alakası yoktur. Doğru ve gerçekçi bilgilendirme çok önemlidir. Sadece bilgilendirme yapmakla sınırlı kalmayın bir de ellerine bu konuda hazırlanmış broşürler verin, arada bir geri dönüp bakabilsinler.
      </p>

      <p>
      <strong>Ya uyanamazsam?</strong> Bu korku ile hipnozdan kaçınanlara verdiğim cevap şudur; hipnoz bir uyku değil ki uyanmayasın. Burada hipnozun bir uyku olmadığını, hipnoz seansı boyunca aksine bir telkin verilmediği müddetçe, tüm olup bitenlerden haberdar olacaklarını hastalarınıza anlatmalısınız. Hipnoz aslında her gün doğal bir şekilde yaşadığımız bir durumdur. Hastaların hipnozdan çıkmak için bir hipnoterapiste ihtiyaçları yoktur. Hipnoterapist kişinin daha kolay hipnoza dahil olmasına yardımcı olan tecrübeli bir yardımcı, bir copilottur. Aslında hastaya hipnoz yapılmamış, hipnoz olmasında yardımcı olunmuştur. Dolayısıyla nasıl hipnoz olduysa o şekilde hipnozdan da rahatlıkla çıkabilecektir.
      </p>

      <p>
      <strong>Hipnoz altındayken ya tüm sırlarımı açık eder miyim?</strong> Siz bir şeyi açıklamak istemediğiniz sürece o şey sizin bilinçaltı dünyanızda öylece kalmaya devam edecektir. Hangi trans seviyesinde olursanız olun istemediğiniz takdirde o bilgileri dışarıya vermezsiniz. Evet, hatırlarsınız, hatta tekrar yaşarsınız, katartik cevap bile verebilirsiniz ama söylemek istemiyorsanız söylemezsiniz. Hipnoterapi amaçlı hipnozdayken size, ne yasa dışı, ne de ahlak dışı bir şey yaptırılamaz. Her şeyden öte etik kurallar çerçevesinde çalışan ve ne yapması gerektiğini bilen, güvendiğiniz bir terapistin yanındasınız. Yetkili, bilgili ve tecrübeli bir terapist sizin sırlarınızla değil, terapinizle ilgilenir. Psikoterapistler merakla değil, bilgiyle, özenle ve empatiyle etik bir yaklaşım sunarlar. Bu yüzden hipnoterapi için güvenilir ve yetkili kişilere (doktor ve/ veya uzm. psikolog) müracaat ediniz. Yeterli güven sağlanmadığında zaten ne terapi, ne de hipnoz olmayacağınızı bilmelisiniz.
      </p>    

      <p>
      <strong>Terapist benim zihnimi kontrol altına alabilir mi?</strong> Telkine açık hale gelmek başka, telkini kabul etmek başka bir şeydir. Telkine açık hale gelen bir birey tüm telkinleri kabul edecek diye bir kural yoktur. Hipnotik dil kalıpları bölümünde de ifade edildiği üzere, hipnoterapinin en önemli ayaklarından biri telkindir. Hipnoterapide telkinler egosintonik yani egoya uyumlu olmak durumundadır aksi takdirde verilen telkinler her hangi bir işe yaramayacak ve suje tarafından kabul edilmeyecektir. Hipnoterapi amacına uyumlu olmayan telkinlerde kişi rahatlıkla hipnozdan çıkabilir. Kaldı ki, hipnoterapist ne kadar tecrübeli ve yetenekli olursa olsun hem hipnoza girmek ve hem de terapide başarılı olmak için sujenin yardımına ve seansa katılımda bulunmasına ihtiyaç duyar. Terapistin, hastanın zihnini kontrol altına almak gibi bir amacı olmamakla birlikte, asıl istediği bilinçaltına ulaşarak egoya uyumlu telkinleri bireye ulaştırabilmektir.
      </p> 

      <p>
      <strong>Hipnoza girmek benim zayıf karakterli biri olduğumu mu gösterir?</strong> Sanılanın aksine hipnoza yatkın kişiler daha çok; iyi bir hafızaya sahip, dikkatini odaklayabilen, hayali canlandırmada (imajinasyon) etkin, eleştirel olmayan, duygularını rahatlıkla ifade edebilen, “kendini bırakabilme” cesaretine sahip zeki bireylerdir. Dolayısıyla, hipnoz olmak herhangi bir kişilik bozukluğu ya da olumsuz kişilik özelliklerinin bir göstergesi olamaz. Gün içerisinde birçok kez kendiliğinden hipnoza girip çıktığımızı, hipnozun doğal bir olgu olduğunu ve yine her hipnozun bir otohipnoz olduğu gerçeğini düşündüğümüzde bu mit’in anlamsızlığı hemen anlaşılacaktır.
      </p> 
    
      <p>
      <strong>Hipnoza girmek tehlikeli mi?</strong> Hipnozun bizzat kendisi tehlikeli değildir. <strong>Ancak meslek dışı şarlatanların elinde neye evrilir bilemem.</strong> Bir bistüri cerrahın elinde hayat kurtaran alet olarak işlev görürken, bir caninin elinde hayatı söndüren alete döner. Bu yüzden kimden ne tür yardım talebinde bulunduğunuza lütfen dikkat edin. Son yönetmelikle birlikte artık doktor ve uzman psikologlar Sağlık Bakanlığınca sertifikalandırılıyorlar. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı “Hipnoz Uygulama Sertifikası” yoksa lütfen o kişiye güvenmeyin ve kendinizi ona teslim etmeyin. (HYT, ZYT, MYT ve HBMT gibi sadece hipnotik tekniklerden oluşmayan uygulamalarda hipnoz sertifikası zorunlu olmamakla birlikte terapistinizin uygulayacak olduğu tekniğin eğitimini almış olması gerekmektedir.)
      </p> 
    
      <p>
      <strong>Bir kez hipnoz olduktan sonra artık o hipnoterapiste bağımlı hale gelir miyim?</strong> Hipnozun benim de kabul ettiğim bir teorik yaklaşımı onun öğrenilebilir bir durum olduğunu açıklar. Bunun ardında otohipnoz yatar. Otohipnoz, terapiste bağımlı kalmayı önleyen, sürekliliği sağlayan ve bireyin kendine güven duymasına katkıda bulunan bir süreç olarak kabul edilir. Diğer bir değişle hipnoterapi geleneksel terapi yöntemlerine kıyasla terapi sürelerini kısaltan bir etkiye sahiptir. Bu durum bağımlı kalmayı değil, özgürlüğü işaret eder. Başlarda yaşanan etkileşim bağımlılıktan ziyade terapötik ittifak gereği bağlılığı ifade etmektedir. Dolayısıyla hipnoterapiste bir bağımlılık söz konusu değildir.
      </p>
      <p>
<p class="source-note">
  <strong>Kaynakça</strong><br>
  Bu içerikte yer alan bilgiler ilgili literatür ve uygulama kaynaklarından derlenmiştir.
  Daha detaylı bilgi için 
  <a href="https://hyttr.com/hizmetler/hipnozla-ilgili-yanlis-bildiklerimiz" target="_blank">
    ilgili kaynağı inceleyebilirsiniz
  </a>.
</p>
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
  ${hytCta}
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
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);

    formStatus.textContent = "Mesajınız gönderiliyor...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        formStatus.textContent = "Mesajınız başarıyla gönderildi.";
        form.reset();
      } else {
        formStatus.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
      }
    } catch (error) {
      formStatus.textContent = "Bağlantı hatası. Lütfen tekrar deneyin.";
    }
  });
}
// Scroll sonrası header küçülme efekti
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});
// Aktif sayfayı dropdown'da otomatik işaretleme
const currentPage = window.location.pathname.split("/").pop();

const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

dropdownLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
// Üst menüde "Hizmetler" linkini aktif yap
const servicesLink = document.querySelector(".services-link");

if (
  currentPage === "hyt.html" ||
  currentPage === "yetiskin-terapisi.html" ||
  currentPage === "cocuk-ergen-terapisi.html"
) {
  servicesLink.classList.add("active");
}
// Aktif sayfayı dropdown ve üst menüde otomatik işaretleme
(() => {
  const page = window.location.pathname.split("/").pop() || "index.html";

  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

  dropdownLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === page) {
      link.classList.add("active");
    }
  });

  const servicesLink = document.querySelector(".services-link");

  if (
    servicesLink &&
    (
      page === "hyt.html" ||
      page === "yetiskin-terapisi.html" ||
      page === "cocuk-ergen-terapisi.html"
    )
  ) {
    servicesLink.classList.add("active");
  }
})();
