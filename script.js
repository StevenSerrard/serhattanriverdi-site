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
      <p>HYT içinde barındırdığı iki temel tekniğin kullanıldığı sorunlarda doğal olarak kullanılabilir.</p>

      <p>Panik Bozukluğu, Kaygı Bozuklukları, OKB, Depresyon, Komplike Yas, Rahatsız Edici Anılar, olumsuz yaşam deneyimleri, Fobiler, Özgül fobiler, Ağrı Rahatsızlıkları, Yeme Bozuklukları, Performans Kaygısı, Stres Yönetimi, Bağımlılıklar, Cinsel ve/veya Fiziksel Taciz, Tecavüz, Beden Algısı Bozuklukları, Cinsel İşlev Bozuklukları, Davranım Bozuklukları, Özgüven Sorunları, Migren, Fibromiyalji ve Fantom Ağrısı, Kompleks ve basit travma ve Travma sonrası stres bozukluğu gibi alanlarda kullanılabilmektedir.</p>
    `
  },

  "hyt-teori": {
    title: "HYT’nin teorik arka planı",
    text: `
      <p><strong>HYT’nin Teorik Arka Planı</strong></p>

      <p>HYT’nin teorik alt yapısı, iki bilgi işleme modeli ve sahne yapım teorisi (Scene Construction Theory) üzerinde şekillenmektedir. Bilgi işleme modellerinden biri, Çift Yönlü Uyarımları (ÇYU) terapi dünyasına kazandıran Shapiro’nun Adaptif Bilgi İşleme Modeli (Shapiro, 2001), diğeri ise Tahmine Dayalı İşleme Modeli’dir (Friston ve ark., 2006; Clark, 2013; Hohwy, 2013; Chamberlin, 2019).</p>

      <p>Beyinde doğuştan var olan bir bilgi işleme sisteminin varlığı göz önüne alındığında, olumsuz yaşam deneyimleri ya da travmaların bu sistemin biyokimyasal dengesini bozmuş olabileceği düşünülmektedir. Bu dengesizlik, bilgi işleme sürecinin tamamlanmasını engelleyebilir. Travmatik süreçler, uyum mekanizmalarının bozulmasına yol açabilir ve bilgi işlemeyi durdurarak bilgiyi anksiyete oluşturan orijinal haliyle “donmuş” şekilde tutabilir (Shapiro, 2016).</p>

      <p>Travmatik olaylar ya da olumsuz yaşam deneyimleri bilgi işleme sisteminde tıkanmaya yol açtığında, yeniden işlemleme gereksinimi ortaya çıkar. Bu süreç yeniden yapılandırılmadığında, deneyim ego-distonik biçimde kalabilir. Amaç, bu sürecin egoya uyumlu hale getirilmesidir. Alladin (2013) bu durumu şu şekilde ifade eder: “Gevşeme ve rahatlama yeterli değildir; tedavinin önemli parçası travmatik anının yeniden işlenmesidir.”</p>

      <p>Hipnoz durumunda, hafıza işleme süreçlerinin etkinliğinin arttığı varsayımıyla birlikte, geri çağrılan anıların temsili imgelerle ifade edilmesinin hipokampal ağ aktivitesi üzerinde etkili olduğu düşünülmektedir. HYT uygulamasında, hem sığınak çalışmasında hem de travmatik anının yeniden işlenmesi sürecinde sembol ve imgesel temsiller kullanılır.</p>

      <p>Sağ ve sol taraftaki pozitif bilişle bağlantılı temsili görsellerin, tahmin hatasını azaltma sürecinde belleğin referans noktaları gibi işlev gördüğü ve yeniden işlemlemeyi kolaylaştırdığı düşünülmektedir. Bu yaklaşımın, terapi sürecinde daha hızlı ve kalıcı dönüşümlerle ilişkili olabileceği kabul edilmektedir.</p>

      <p>HYT, sığınak çalışmasından seansın sonlandırılmasına kadar tüm aşamalarında Porges’in (2009) Polivagal Teorisi ile uyumlu bir çerçeve sunar. Özellikle travma ve yoğun kaygı durumlarında, danışanın güvenli bir fizyolojik ve duygusal ortamda sürece dahil edilmesi büyük önem taşır.</p>

      <p>Göz hareketleri ve çift yönlü uyarımın hipnozla birlikte kullanılmasının ventral vagal sistemi aktive ederek sempatik sinir sistemini inhibe ettiği ve parasempatik sistemi devreye soktuğu düşünülmektedir (Masson, 2016). Bu durum, güvenlik hissinin oluşmasını ve yeniden işlemleme sürecinin daha sağlıklı ilerlemesini destekleyebilir.</p>

      <p>Güvenli fizyolojik koşullar altında, hipokampüs merkezli bilgi işleme süreçlerinin daha geniş bir hafıza taraması ve yeniden yapılandırma gerçekleştirdiği, bunun da yeni öğrenmelerin önünü açtığı düşünülmektedir (Chadwick, Mullally & Maguire, 2012; Chamberlin, 2019; Baror & Bar, 2016; Hassabis & Maguire, 2009).</p>
    `
  },

  "hipnoz-kullanilmaz": {
    title: "Hipnoz hangi durumlarda kullanılmaz?",
    text: `
      <p><strong>Hipnoz hangi durumlarda kullanılmaz?</strong></p>

      <p>Hipnoterapide yetkinlik önemli bir meseledir. Hipnozu biliyor olmak, yetki alanı dışındakilere tedavi amacıyla hastalara müdahale etme yetkisini vermez. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı yetkinliği yoksa lütfen o kişiye güvenmeyin ve kendinizi ona teslim etmeyin.</p>

      <p>HYT, ZYT, MYT ve HBMT gibi sadece hipnotik tekniklerden oluşmayan uygulamalarda Sağlık Bakanlığı “Hipnoz Uygulama Sertifikası” gerekli olmamakla birlikte, terapistin ilgili eğitimlerden geçtiğine dair belgeyi talep edebilirsiniz.</p>

      <p>Organik beyin sendromları, psikotik yetmezliğe yatkın kişiler, bipolar bozukluk yaşayanlar, paranoid sorunları olanlar, dissosiyatif bozukluğu olanlar ve borderline kişilik yapısı olanlar hipnoz için zayıf adaylardır ya da özel dikkat gösterilmesi gereken grubu oluştururlar (Brown ve Fromm, 1986).</p>
    `
  },

  "yanlis-bilinenler": {
    title: "Hipnozla ilgili yanlış bildiklerimiz",
    text: `
      <p><strong>Hipnozla ilgili yanlış bildiklerimiz</strong></p>

      <p>Mitler hipnoz dünyasının karabulutlarıdır. Sırf yanlış bilinenler yüzünden birçok hasta bu çok önemli terapötik teknikten yararlanmamaktadır. Bu konuda terapistlere büyük görevler düşmektedir. Uzun yıllardır çeşitli korkularla boş bırakılan bu alanda artık maalesef daha çok alan dışı kişilerin söyledikleri kabul görmektedir. Artık gerçeklerin bütün açıklığı ile paylaşılması zamanı gelmiştir. Son alınan bakanlık kararı bu konuda esaslı bir değişimi sağlayacaktır.</p>

      <p>Hipnoz hakkında bilgisi olduğunu iddia edenlerin çoğunun yanlış ve eksik bilgilere sahip olduklarını göreceksiniz. Alacağınız en sık cevap, köstekli bir saat ve uyuyup zombiye dönmüş bir garip insan olacaktır. Oysa klinik (tıbbi) hipnozun yani hipnoterapinin bu anlatılanlarla yakından ve uzaktan bir alakası yoktur. Doğru ve gerçekçi bilgilendirme çok önemlidir. Sadece bilgilendirme yapmakla sınırlı kalmayın bir de ellerine bu konuda hazırlanmış broşürler verin, arada bir geri dönüp bakabilsinler.</p>

      <p>İyi bir terapötik ittifak oluşturulmasında hazırlık aşamasının (mayalama süreci) önemi yadsınamaz. Bu yüzden çok önemli hipnotik mitlere kısaca değinmek istiyorum. Sizlere bu tür sorularla gelenlere aşağıdaki açıklamaları yapabilirsiniz:</p>

      <h3>Ya uyanamazsam?</h3>
      <p>Bu korku ile hipnozdan kaçınanlara verdiğim cevap şudur; hipnoz bir uyku değil ki uyanmayasın. Burada hipnozun bir uyku olmadığını, hipnoz seansı boyunca aksine bir telkin verilmediği müddetçe, tüm olup bitenlerden haberdar olacaklarını hastalarınıza anlatmalısınız. Hipnoz aslında her gün doğal bir şekilde yaşadığımız bir durumdur. Hastaların hipnozdan çıkmak için bir hipnoterapiste ihtiyaçları yoktur. Hipnoterapist kişinin daha kolay hipnoza dahil olmasına yardımcı olan tecrübeli bir yardımcı, bir copilottur. Aslında hastaya hipnoz yapılmamış, hipnoz olmasında yardımcı olunmuştur. Dolayısıyla nasıl hipnoz olduysa o şekilde hipnozdan da rahatlıkla çıkabilecektir.</p>

      <h3>Hipnoz altındayken ya tüm sırlarımı açık edersem?</h3>
      <p>Siz bir şeyi açıklamak istemediğiniz sürece o şey sizin bilinçaltı dünyanızda öylece kalmaya devam edecektir. Hangi trans seviyesinde olursanız olun istemediğiniz takdirde o bilgileri dışarıya vermezsiniz. Evet, hatırlarsınız, hatta tekrar yaşarsınız, katartik cevap bile verebilirsiniz ama söylemek istemiyorsanız söylemezsiniz. Hipnoterapi amaçlı hipnozdayken size, ne yasa dışı, ne de ahlak dışı bir şey yaptırılamaz. Her şeyden öte etik kurallar çerçevesinde çalışan ve ne yapması gerektiğini bilen, güvendiğiniz bir terapistin yanındasınız. Yetkili, bilgili ve tecrübeli bir terapist sizin sırlarınızla değil, terapinizle ilgilenir. Psikoterapistler merakla değil, bilgiyle, özenle ve empatiyle etik bir yaklaşım sunarlar. Bu yüzden hipnoterapi için güvenilir ve yetkili kişilere (doktor ve/ veya uzm. psikolog) müracaat ediniz. Yeterli güven sağlanmadığında zaten ne terapi, ne de hipnoz olmayacağınızı bilmelisiniz.</p>

      <h3>Terapist benim zihnimi kontrol altına alırsa</h3>
      <p>Telkine açık hale gelmek başka, telkini kabul etmek başka bir şeydir. Telkine açık hale gelen bir birey tüm telkinleri kabul edecek diye bir kural yoktur. Hipnoterapide telkinler egosintonik yani egoya uyumlu olmak durumundadır; aksi takdirde verilen telkinler herhangi bir işe yaramayacak ve suje tarafından kabul edilmeyecektir. Hipnoterapi amacına uyumlu olmayan telkinlerde kişi rahatlıkla hipnozdan çıkabilir. Kaldı ki, hipnoterapist ne kadar tecrübeli ve yetenekli olursa olsun hem hipnoza girmek ve hem de terapide başarılı olmak için sujenin yardımına ve seansa katılımda bulunmasına ihtiyaç duyar. Terapistin, hastanın zihnini kontrol altına almak gibi bir amacı olmamakla birlikte, asıl istediği bilinçaltına ulaşarak egoya uyumlu telkinleri bireye ulaştırabilmektir.</p>

      <h3>Hipnoz, hipnoterapistin gücüne bağlı bir durumdur</h3>
      <p>Kitabın içinde birkaç kez ifade edildiği üzere bu kanı yanlış bir bilgiden kaynaklanmaktadır. Özellikle meslek dışı kişiler, kendilerinde var olan ekstra bir güçle hipnozu gerçekleştiriyorlarmış imajını yaymaya çalışırlar. Bu yanıltma farklı beklentilerin gelişmesine neden olur. Hipnoterapi; hipnoterapist ve sujenin birlikte gerçekleştirdiği bir girişim olup, sujenin onayı ve katılımı olmadan gerçekleşemez. Hipnoterapistlerin ekstra bir güçleri yoktur. Öte yandan hipnoz olmak son derece kolay ve doğal bir durum olup, ekstra güçlere ihtiyaç göstermez.</p>

      <h3>Hipnoza girmek benim zayıf karakterli biri olduğumu gösterir</h3>
      <p>Sanılanın aksine hipnoza yatkın kişiler daha çok; iyi bir hafızaya sahip, dikkatini odaklayabilen, hayali canlandırmada etkin, eleştirel olmayan, duygularını rahatlıkla ifade edebilen, “kendini bırakabilme” cesaretine sahip zeki bireylerdir. Dolayısıyla, hipnoz olmak herhangi bir kişilik bozukluğu ya da olumsuz kişilik özelliklerinin bir göstergesi olamaz. Gün içerisinde birçok kez kendiliğinden hipnoza girip çıktığımızı, hipnozun doğal bir olgu olduğunu ve yine her hipnozun bir otohipnoz olduğu gerçeğini düşündüğümüzde bu mitin anlamsızlığı hemen anlaşılacaktır.</p>

      <h3>Hipnoza girmek tehlikelidir</h3>
      <p>Hipnozun bizzat kendisi tehlikeli değildir. Ancak meslek dışı şarlatanların elinde neye evrilir bilemem. Bir bistüri cerrahın elinde hayat kurtaran alet olarak işlev görürken, bir caninin elinde hayatı söndüren alete döner. Bu yüzden kimden ne tür yardım talebinde bulunduğunuza lütfen dikkat edin. Son yönetmelikle birlikte artık doktor ve uzman psikologlar Sağlık Bakanlığınca sertifikalandırılıyorlar. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı “Hipnoz Uygulama Sertifikası” yoksa lütfen o kişiye güvenmeyin ve kendinizi ona teslim etmeyin. HYT, ZYT, MYT ve HBMT gibi sadece hipnotik tekniklerden oluşmayan uygulamalarda hipnoz sertifikası zorunlu olmamakla birlikte terapistinizin uygulayacak olduğu tekniğin eğitimini almış olması gerekmektedir.</p>

      <h3>Bir kez hipnoz olduktan sonra artık o hipnoterapiste bağımlı hale gelirim</h3>
      <p>Hipnozun benim de kabul ettiğim bir teorik yaklaşımı onun öğrenilebilir bir durum olduğunu açıklar. Bunun ardında otohipnoz yatar. Otohipnoz, terapiste bağımlı kalmayı önleyen, sürekliliği sağlayan ve bireyin kendine güven duymasına katkıda bulunan bir süreç olarak kabul edilir. Diğer bir deyişle hipnoterapi geleneksel terapi yöntemlerine kıyasla terapi sürelerini kısaltan bir etkiye sahiptir. Bu durum bağımlı kalmayı değil, özgürlüğü işaret eder. Başlarda yaşanan etkileşim bağımlılıktan ziyade terapötik ittifak gereği bağlılığı ifade etmektedir. Dolayısıyla hipnoterapiste bir bağımlılık söz konusu değildir.</p>

      <h3>Hipnoz bir terapi yöntemidir</h3>
      <p>Hipnoz bir terapi yöntemi değil, diğer terapilere yardımcı bir uygulamadır. Hipnozun klinik uygulamalara katkısının olduğu bilinen bir gerçektir. İçinde anksiyete bozukluklarının da bulunduğu ve terapilerinde “sadece BDT” veya “hipnozla birlikte BDT” uygulamalarına yer veren bir dizi psikoterapi uygulamasını karşılaştıran 18 çalışmanın meta analiz sonucu; “hipnozla desteklenen BDT’nin”, “sadece BDT’ye” göre daha fazla klinik kazanım sağladığı yönündedir (Kirsch ve diğerleri, 1995). Bu durum hipnozun etkili ve sonuç alıcı bir yardımcı olduğunu göstermektedir.</p>

      <h3>Hipnozdayken mutlaka gevşemeliyim</h3>
      <p>Sujelerin hipnoza dahil olduklarında bir miktar rahatlama yaşadıkları doğrudur. Ama bu mecburi ya da mutlak değildir. Kimi seanslarımda, seansın henüz başlarında; “…şimdi lütfen bulunduğunuz ânı ve yeri deneyimlemeye, duyumsamaya çalışın, bırakın nasıl deneyimliyorsanız öyle olsun… Şimdi bütünüyle bedeninize odaklanın, başınızın koltuğun başlığı ile sırtınızın koltuğun sırtlığı ile ve ayaklarınızın koltuğun ayaklığı ile olan temasına odaklanın… Bu temasın sizde meydana getirdiği değişikliği hissedin… Ne hissediyorsunuz, nasıl duyumsuyorsunuz? Sadece deneyimleyin… Bunun şöyle ya da böyle olması gerekmiyor. Nasılsa öyle… Burada yanlış ya da doğru, eksik ya da fazla yoktur. Duyumsadığınız şekliyle deneyiminizi kabul edin… Bilinçaltınızın size verdiği izin doğrultusunda şu ânı nasıl deneyimliyor ya da duyumsuyorsanız bırakın öyle olsun…” derim. Bu yaklaşım, özellikle düşük kendilik değerine sahip hastaların seansa güvenmelerine ve kendilerini iyi hissetmelerine neden olur. Seansa katılımı sağlar. Dolayısıyla illaki gevşeme, serbestleşme gerekmez. Ancak işin doğası gereği bir rahatlama, gevşeme ve serbestleşme çoğu zaman yaşanır.</p>
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
