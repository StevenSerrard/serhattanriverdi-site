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

    <p>Hipnoterapide yetkinlik önemli bir meseledir. Hipnozu biliyor olmak, yetki alanı dışındaki kişilere tedavi amacıyla müdahale etme hakkı vermez. Eğer hipnoterapistinizin Sağlık Bakanlığı onaylı bir yetkinliği yoksa, bu konuda dikkatli olmanız ve kendinizi o kişiye teslim etmemeniz önemlidir.</p>

    <p>HYT, ZYT, MYT ve HBMT gibi yalnızca hipnotik tekniklerden oluşmayan uygulamalarda Sağlık Bakanlığı “Hipnoz Uygulama Sertifikası” zorunlu olmasa da, terapistin ilgili eğitimleri aldığına dair belge talep edilebilir.</p>

    <p>Organik beyin sendromları, psikotik bozukluklara yatkınlık, bipolar bozukluk, paranoid özellikler, dissosiyatif bozukluklar ve borderline kişilik yapısı olan bireyler hipnoz açısından zayıf adaylar olabilir ya da özel dikkat gerektiren gruplar arasında yer alır (Brown & Fromm, 1986).</p>
  `
},
  "yanlis-bilinenler": {
  title: "Hipnozla ilgili yanlış bildiklerimiz",
  text: `
    <p><strong>Hipnozla ilgili yanlış bildiklerimiz</strong></p>

    <p>Mitler hipnoz dünyasının karabulutlarıdır. Sırf yanlış bilinenler yüzünden birçok kişi bu önemli terapötik teknikten yararlanamamaktadır. Bu konuda terapistlere önemli görevler düşmektedir. Uzun yıllar boş bırakılan bu alanda, çoğu zaman alan dışı kişilerin söylemleri etkili olmuştur. Bu nedenle doğru bilginin açık biçimde paylaşılması büyük önem taşır.</p>

    <p>Hipnoz hakkında bilgi sahibi olduğunu düşünen birçok kişinin aslında eksik ya da hatalı bilgilere sahip olduğu görülmektedir. Köstekli saat, uyutma ya da kontrol kaybı gibi imgeler klinik hipnozla ilişkili değildir. Bu nedenle doğru bilgilendirme sürecin önemli bir parçasıdır.</p>

    <h3>Ya uyanamazsam?</h3>
    <p>Hipnoz bir uyku hali değildir. Kişi süreç boyunca olan bitenin farkındadır. İstediği zaman bu durumdan çıkabilir. Hipnoterapist bu süreci kolaylaştıran bir rehberdir.</p>

    <h3>Hipnoz altındayken tüm sırlarımı açık eder miyim?</h3>
    <p>Kişi istemediği hiçbir bilgiyi paylaşmaz. Hipnoz altında da kontrol bireydedir. Etik bir terapötik ortamda, kişi yalnızca paylaşmak istediği kadarını ifade eder.</p>

    <h3>Terapist zihnimi kontrol edebilir mi?</h3>
    <p>Telkine açık olmak, telkini kabul etmek anlamına gelmez. Kişi kendi değerleriyle uyumlu olmayan hiçbir telkini kabul etmez. Hipnoterapide amaç kontrol değil, içsel süreçlere ulaşmaktır.</p>

    <h3>Hipnoz terapistin gücüne mi bağlıdır?</h3>
    <p>Hipnoz, terapist ve danışanın birlikte yürüttüğü bir süreçtir. Kişinin katılımı ve isteği olmadan gerçekleşmez. Terapistin “özel bir gücü” olduğu düşüncesi doğru değildir.</p>

    <h3>Hipnoza girmek zayıflık mıdır?</h3>
    <p>Aksine, odaklanabilen, hayal gücü gelişmiş ve içsel süreçlerine temas edebilen bireyler hipnoza daha yatkındır. Bu bir zayıflık değil, bir kapasitedir.</p>

    <h3>Hipnoz tehlikeli midir?</h3>
    <p>Hipnoz kendi başına tehlikeli değildir. Ancak yetkin olmayan kişiler tarafından uygulanması risk oluşturabilir. Bu nedenle uzman ve yetkili kişilerle çalışmak önemlidir.</p>

    <h3>Hipnoz bağımlılık yapar mı?</h3>
    <p>Hipnoz bağımlılık oluşturmaz. Aksine otohipnoz yoluyla kişinin kendi kendine düzenleme kapasitesini artırır ve bağımsızlığını destekler.</p>

    <h3>Hipnoz bir terapi yöntemi midir?</h3>
    <p>Hipnoz tek başına bir terapi yöntemi değil, terapilere yardımcı bir uygulamadır. Yapılan çalışmalar, hipnozla desteklenen terapilerin daha etkili olabileceğini göstermektedir.</p>

    <h3>Hipnozda mutlaka gevşemeli miyim?</h3>
    <p>Gevşeme sıklıkla görülse de zorunlu değildir. Kişi deneyimi kendi içsel süreci doğrultusunda yaşar. Önemli olan deneyimin nasıl olduğu değil, nasıl deneyimlendiğidir.</p>
  `
},

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
