# Oelist Spicetify Boykot Skipper

Spotify Desktop üzerinde Oelist boykot listesindeki sanatçıları otomatik olarak algılayıp şarkıyı atlayan Spicetify extension'ı.

> **Not:** Bu proje Spotify hesabındaki gerçek "Sanatçıyı çalma" / "Don't play this artist" ayarını değiştirmez. Sanatçı eşleştiğinde Spicetify üzerinden şarkıyı otomatik atlayarak extension seviyesinde kalıcı filtreleme yapar.

---

## Özellikler

- Oelist verilerindeki sanatçıları otomatik kontrol eder.
- Boykot listesindeki sanatçı çalmaya başladığında otomatik olarak sonraki şarkıya geçer.
- Aynı sanatçı daha sonra tekrar gelirse yine atlar.
- Arka arkaya gelen birden fazla boykot şarkısını atlayabilir.
- Kendi eklemek istediğiniz sanatçıları `CUSTOM_BOYKOT` listesinden ekleyebilirsiniz.
- Türkçe karakterler için normalize edilmiş isim karşılaştırması kullanır.
- Oelist verisi extension içine gömülüdür; çalışırken Oelist API'sine sürekli istek atmaz.
- Spotify Desktop + Spicetify ile çalışır.

---

## ⚠️ Spicetify Nereden İndirilmeli?

**Spicetify'ı yalnızca resmi Spicetify sitesinden kurmanız önerilir.**

Resmi kurulum sayfası:

https://spicetify.app/docs/getting-started

Resmi Spicetify sitesi:

https://spicetify.app/

Bu projede Spicetify'ın kendisi paketlenmemiştir. GitHub'dan bu repository'yi indirdiğinizde **önce Spicetify'ı resmi sitesindeki kurulum talimatlarıyla kurun**, ardından bu projedeki `-skipper.js` dosyasını Spicetify Extensions klasörüne ekleyin.

Spicetify'ın resmi dokümantasyonunda Windows, Linux ve macOS için kurulum yöntemleri güncel olarak listelenmektedir. citeturn0search2turn0search0


# 1. Gereksinimler

- Spotify Desktop
- Spicetify CLI
- Windows, Linux veya macOS
- Bu repository'deki `oelist_boykot_skipper.js`

### Önemli: Spotify sürümü

Spicetify, Spotify Desktop istemcisini değiştirir. Spotify güncellendiğinde Spicetify uyumluluğu geçici olarak bozulabilir. Böyle bir durumda önce Spicetify'ı güncelleyip yeniden uygulayın.

---

# 2. Spicetify Kurulumu

> **Önemli:** Aşağıdaki komutlar Spicetify'ın resmi kurulum dokümantasyonundan alınmıştır. En güncel yöntemler için her zaman resmi sayfayı kontrol edin: https://spicetify.app/docs/getting-started


## Windows

### Yöntem 1 — Resmi kurulum scripti

**PowerShell** açın ve aşağıdaki komutu çalıştırın:

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex
```

Kurulum bittikten sonra:

```powershell
spicetify --version
```

Bir sürüm numarası görüyorsanız Spicetify kurulmuştur.

### Yöntem 2 — Winget

Windows Terminal / PowerShell:

```powershell
winget install Spicetify.Spicetify
```

Ardından:

```powershell
spicetify --version
```

### Yöntem 3 — Scoop

```powershell
scoop install spicetify-cli
```

### Yöntem 4 — Chocolatey

```powershell
choco install spicetify-cli
```

### Windows'ta Spotify kurulumu hakkında önemli not

Spicetify için normal Spotify Desktop istemcisini kullanmanız önerilir. Microsoft Store sürümüyle `prefs`/kurulum yolu sorunları yaşanabilir.

Sorun yaşarsanız Spotify'ın resmi sitesinden indirilen Desktop sürümünü kullanın.

---

## Linux

Terminal açın:

```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

Sonra:

```bash
spicetify --version
```

Komut bulunamıyorsa PATH'e ekleyin.

### Bash

```bash
echo 'export PATH=$PATH:~/.spicetify' >> ~/.bashrc
source ~/.bashrc
```

### Zsh

```bash
echo 'export PATH=$PATH:~/.spicetify' >> ~/.zshrc
source ~/.zshrc
```

### Arch / AUR

```bash
yay -S spicetify-cli
```

### Homebrew

```bash
brew install spicetify-cli
```

### Linux Spotify izinleri

Spotify APT ile kurulmuşsa bazı sistemlerde Spotify klasörüne yazma izni vermek gerekebilir:

```bash
sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R
```

Spotify AUR üzerinden kurulmuşsa:

```bash
sudo chmod a+wr /opt/spotify
sudo chmod a+wr /opt/spotify/Apps -R
```

> Snap Spotify değiştirilemediği için Spicetify ile kullanılması önerilmez. Gerekirse Snap sürümünü kaldırıp APT/uyumlu normal Spotify Desktop sürümüne geçin.

---

## macOS

Terminal açın:

```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

veya Homebrew:

```bash
brew install spicetify-cli
```

Spotify yolu gerekiyorsa:

```bash
spicetify config spotify_path "/Applications/Spotify.app/Contents/Resources"
```

Sonra:

```bash
spicetify --version
```

---

# 3. Spicetify'ı İlk Kez Hazırlama

Spotify'ı açın ve hesabınıza giriş yapın.

Yeni kurulmuş Spotify'ın gerekli dosyaları oluşturması için Spotify'ı en az yaklaşık 60 saniye açık bırakmanız önerilir.

Ardından terminalde:

```bash
spicetify
```

İlk kurulum için:

```bash
spicetify backup apply
```

DevTools'u da açmak isterseniz:

```bash
spicetify backup apply enable-devtools
```

Başarılı olursa Spotify yeniden başlatılabilir ve Spicetify aktif hale gelir.

---

# 4. Bu Extension'ı Kurma

ZIP dosyasını açın.

İçindeki:

```text
oelist_boykot_skipper.js
```

dosyasını Spicetify Extensions klasörüne kopyalayın.

## Windows

```text
%appdata%\spicetify\Extensions\
```

Örneğin:

```text
C:\Users\KULLANICI\AppData\Roaming\spicetify\Extensions\oelist_boykot_skipper.js
```

## Linux / macOS

```text
~/.config/spicetify/Extensions/
```

Örneğin:

```text
~/.config/spicetify/Extensions/oelist_boykot_skipper.js
```

Extensions klasörünün yerini bulmak için:

```bash
spicetify config-dir
```

veya:

```bash
spicetify -c
```

---

# 5. Extension'ı Spicetify'a Tanıtma

Terminal / PowerShell'de:

```bash
spicetify config extensions oelist_boykot_skipper.js
```

Ardından:

```bash
spicetify apply
```

Spotify yeniden açıldığında extension aktif olmalıdır.

Spicetify'ın resmi extension kurulumu da aynı mantıktadır: `.js` dosyasını `Extensions` klasörüne koyup `spicetify config extensions ...` ve `spicetify apply` çalıştırılır.

---

# 6. Kendi Boykot Listenizi Eklemek

`oelist_boykot_skipper.js` dosyasını açın.

Dosyanın üst tarafında şu bölümü bulun:

```js
const CUSTOM_BOYKOT = [
  "Ahmet Kaya",
];
```

Buraya istediğiniz sanatçıları ekleyebilirsiniz:

```js
const CUSTOM_BOYKOT = [
  "Ahmet Kaya",
  "Sanatçı 2",
  "Sanatçı 3",
];
```

Sonra:

```bash
spicetify apply
```

çalıştırın.

Spotify'da sanatçı tekrar çalmaya çalıştığında extension eşleşmeyi yapıp şarkıyı atlar.

---

# 7. Extension Nasıl Çalışıyor?

Extension mevcut Spotify parçasının sanatçı bilgisini kontrol eder.

Kontrol edilen kaynaklar arasında Spotify'ın mevcut track metadata alanları bulunur.

Sanatçı adı:

1. Normalize edilir.
2. Oelist sanatçılarıyla karşılaştırılır.
3. `CUSTOM_BOYKOT` listesiyle karşılaştırılır.
4. Eşleşme varsa şarkı otomatik olarak atlanır.

Örneğin:

```text
Sanatçı → Oelist'te var
        ↓
Boykot eşleşmesi
        ↓
⚠️ Boykot listesinde
        ↓
Sonraki şarkıya geç
```

Aynı sanatçı daha sonra tekrar gelirse tekrar kontrol edilir ve tekrar atlanır.

---

# 8. Spotify'ın Kendi "Sanatçıyı Engelle" Özelliği

Spotify uygulamasında bazı hesaplarda **"Bu sanatçıyı çalma" / "Don't play this artist"** özelliği bulunabilir.

Bu proje ise Spotify hesabındaki bu ayarı değiştirmez.

Spotify'ın resmi Web API'sinde bu hesabın sanatçı engelleme ayarını programatik olarak açıp kapatan herkese açık bir endpoint bulunmadığı için extension bunu resmi API üzerinden doğrudan açamaz.

Bu nedenle proje aynı sonucu **extension seviyesinde** uygular:

```text
Boykot sanatçısı → şarkı başlamadan/başladıktan hemen sonra tespit
                → otomatik skip
                → sanatçı tekrar gelirse tekrar skip
```

---

# 9. Spotify Güncellendikten Sonra

Spotify sık sık güncellenebilir. Spotify güncellendikten sonra extension çalışmazsa önce:

```bash
spicetify backup apply
```

deneyin.

Spicetify'ın da güncellenmesi gerekiyorsa:

```bash
spicetify update
```

Gerekirse:

```bash
spicetify restore backup apply
```

> Yeni Spotify sürümü Spicetify tarafından henüz desteklenmiyorsa extension'ın çalışmaması normal olabilir. Bu durumda Spicetify'ın yeni Spotify sürümüyle uyumluluk sağlamasını beklemek gerekebilir.

---

# 10. Extension'ı Kaldırma

Extension'ı Spicetify ayarından kaldırmak için:

```bash
spicetify config extensions oelist_boykot_skipper.js-
```

Ardından:

```bash
spicetify apply
```

Daha sonra `oelist_boykot_skipper.js` dosyasını Extensions klasöründen silebilirsiniz.

---

# 11. Spicetify'ı Tamamen Geri Alma

Spotify'ı tamamen vanilla hale getirmek için:

```bash
spicetify restore
```

Bu işlem Spicetify'ın Spotify'a yaptığı değişiklikleri kaldırır.

---

# 12. Sorun Giderme

## `spicetify: command not found`

Kurulumun PATH'e eklenmiş olduğundan emin olun.

Linux/macOS:

```bash
echo $PATH
```

Gerekirse:

```bash
echo 'export PATH=$PATH:~/.spicetify' >> ~/.bashrc
source ~/.bashrc
```

Zsh kullanıyorsanız:

```bash
echo 'export PATH=$PATH:~/.spicetify' >> ~/.zshrc
source ~/.zshrc
```

---

## Extension görünmüyor / çalışmıyor

Şunları sırayla çalıştırın:

```bash
spicetify config extensions
```

Listede:

```text
oelist_boykot_skipper.js
```

olduğunu kontrol edin.

Yoksa:

```bash
spicetify config extensions oelist_boykot_skipper.js
spicetify apply
```

Spotify'ı tamamen kapatıp tekrar açmayı da deneyin.

---

## Spotify açılıyor ama extension çalışmıyor

DevTools'u açın:

```bash
spicetify enable-devtools
```

Spotify içinde:

```text
Ctrl + Shift + I
```

Windows/Linux'ta,

```text
Cmd + Option + I
```

macOS'ta kullanabilirsiniz.

Console bölümünde extension'ın hata verip vermediğini kontrol edin.

---

## Spotify güncellendi ve Spicetify bozuldu

Önce:

```bash
spicetify backup apply
```

Sonra gerekirse:

```bash
spicetify update
```

veya:

```bash
spicetify restore backup apply
```

---

# 13. Proje Yapısı

```text
Oelist-Spicetify-Boykot-Skipper/
├── oelist_boykot_skipper.js
├── oelist.json
└── README.md
```

### `oelist_boykot_skipper.js`

Ana Spicetify extension'ıdır.

### `oelist.json`

Projede kullanılan Oelist verisinin referans kopyasıdır.

### `README.md`

Kurulum, kullanım ve sorun giderme dokümantasyonudur.

---

# 14. GitHub'a Yükleme

Repository oluşturduktan sonra bu dosyaları yükleyebilirsiniz:

```text
oelist_boykot_skipper.js
oelist.json
README.md
```

Örnek Git komutları:

```bash
git init
git add .
git commit -m "Initial release"
git branch -M main
git remote add origin REPOSITORY_URL
git push -u origin main
```

---

# 15. Lisans / Sorumluluk

Bu proje Spotify, Spicetify veya Oelist ile resmi olarak bağlantılı değildir.

Spotify, Spicetify ve Oelist kendi ilgili marka ve projeleridir.

Oelist verisinin kullanım koşulları ve ilgili kaynakların lisans/şartları ayrıca kontrol edilmelidir.

---

## Resmi Spicetify Kaynakları

- Spicetify ana sayfa: https://spicetify.app/
- Kurulum: https://spicetify.app/docs/getting-started
- Extensions: https://spicetify.app/docs/customization/extensions
- Extension geliştirme: https://spicetify.app/docs/development/extensions
- CLI komutları: https://spicetify.app/docs/cli/commands
- Configuration: https://spicetify.app/docs/customization/config-file

