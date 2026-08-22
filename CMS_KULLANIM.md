# Pages CMS kullanım notları

## Panele giriş

1. `https://app.pagescms.org` adresini açın.
2. GitHub hesabınızla giriş yapın.
3. Pages CMS GitHub App'i yalnızca `StevenSerrard/serhattanriverdi-site` deposu için etkinleştirin.
4. `main` dalını seçin.

Depoya yazma yetkisi olmayan kişiler panelden içerik kaydedemez. Yalnızca sizin erişiminiz için Pages CMS içinde e-posta işbirlikçisi eklemeyin ve GitHub deposuna başka kullanıcıya yazma yetkisi vermeyin.

## İçerik türleri

- **Yazılar:** Başlık, tarih, yayın durumu, özet, kapak, yazar, kategori, SEO ve yazı gövdesi.
- **Kategoriler:** Yazılarda seçilebilen kategori kayıtları.
- **Yazarlar:** Yazılarda seçilebilen yazar profilleri.
- **Ana sayfa içeriği:** Giriş, hakkımda, hizmetler, iletişim ve alt bilgi metinleri.
- **Görseller:** `assets/images` altında yönetilir.

## Yayınlama

Pages CMS'de kaydetme işlemi `main` dalına commit oluşturur. Bu commit `Siteyi yayımla` adlı GitHub Actions iş akışını otomatik başlatır. İş akışı tamamlandığında değişiklikler `serhattanriverdi.com` üzerinde görünür.

GitHub deposunda **Settings → Pages → Build and deployment → Source** alanı bir kez **GitHub Actions** olarak seçilmelidir.
