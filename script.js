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
