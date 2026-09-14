/* OELIST BOYKOT SKIPPER — Spicetify
 *
 * KENDİ EKLEYECEĞİN İSİMLER:
 * Aşağıdaki CUSTOM_BOYKOT listesine isimleri tırnak içinde ekle.
 * Örnek:
 *   "Ahmet Kaya",
 *   "Yeni Sanatçı",
 *
 * Sonra:
 *   spicetify apply
 *
 * Chrome extension gerekmez. Oelist API'ye canlı istek yapılmaz.
 */
(() => {
  "use strict";

  const VERSION = "2.2.0";

  // ============================================================
  // KENDİ BOYKOT LİSTEN — BURAYI DÜZENLE
  // ============================================================
  const CUSTOM_BOYKOT = [
    "Ahmet Kaya",
  ];
  // ============================================================

  // Oelist'ten alınan Spotify kayıtları (build sırasında gömüldü).
  const OELIST_MATCHES = [["ezhel omer sercan i pekcioglu","Ezhel (Ömer Sercan İpekçioğlu)"],["kutsi ahmet kutsi karadogan","Kutsi (Ahmet Kutsi Karadoğan)"],["sagopa kajmer yunus ozyavuz","Sagopa Kajmer (Yunus Özyavuz)"],["alisan serkan burak tektas","Alişan (Serkan Burak Tektaş)"],["burak gurpinar stickduster","Burak Gürpınar (stickduster)"],["kivircik ali ali ozutemiz","Kıvırcık Ali (Ali Özütemiz)"],["saian necati guney erkurt","Saian (Necati Güney Erkurt)"],["suavi mehmet suavi saygan","Suavi (Mehmet Suavi Saygan)"],["uzi utku cihan yalcinkaya","Uzi (Utku Cihan Yalçınkaya)"],["gazapizm anil murat acar","Gazapizm (Anıl Murat Acar)"],["omer sercan i pekcioglu","Ezhel (Ömer Sercan İpekçioğlu)"],["hayki ragip aytug tunal","Hayki (Ragıp Aytuğ Tunal)"],["teoman teoman yakupoglu","Teoman (Teoman Yakupoğlu)"],["hozan dino yusuf sahin","Hozan Dino (Yusuf Şahin)"],["ahmet kutsi karadogan","Kutsi (Ahmet Kutsi Karadoğan)"],["utku cihan yalcinkaya","Uzi (Utku Cihan Yalçınkaya)"],["sahe bedo sahin gunes","Şahe Bedo (Şahin Güneş)"],["ceza bilgin ozcalkan","Ceza (Bilgin Özçalkan)"],["kalben kalben sagdic","Kalben (Kalben Sağdıç)"],["serkan burak tektas","Alişan (Serkan Burak Tektaş)"],["ati242 atilla serin","Ati242 (Atilla Serin)"],["bilal hanci kafalar","Bilal Hancı (Kafalar)"],["necati guney erkurt","Saian (Necati Güney Erkurt)"],["mehmet suavi saygan","Suavi (Mehmet Suavi Saygan)"],["saniser sarp palaur","Şanışer (Sarp Palaur)"],["haluk tolga i lhan","Haluk Tolga İlhan"],["heijan dogan tarda","Heijan (Doğan Tarda)"],["paptircem sena gul","Paptircem (Sena Gül)"],["sila sila gencoglu","Sıla ( Sıla Gençoğlu)"],["blok3 hakan aydin","Blok3 (Hakan Aydın)"],["buyuk ev ablukada","Büyük Ev Ablukada"],["ragip aytug tunal","Hayki (Ragıp Aytuğ Tunal)"],["mahsun kirmizigul","Mahsun Kırmızıgül"],["muhlis berberoglu","Muhlis Berberoğlu"],["nez nezihe kalkan","Nez (Nezihe Kalkan)"],["i brahim tatlises","İbrahim Tatlıses"],["banu banu kirbag","Banu (Banu Kırbağ)"],["hidra fatih uslu","Hidra (Fatih Uslu)"],["mustafa ozarslan","Mustafa Özarslan"],["ozbi onur dursun","Ozbi (Onur Dursun)"],["system of a down","System of a Down"],["teoman yakupoglu","Teoman (Teoman Yakupoğlu)"],["bulent ortacgil","Bülent Ortaçgil"],["bilgin ozcalkan","Ceza (Bilgin Özçalkan)"],["demet sagiroglu","Demet Sağıroğlu"],["dogan duru redd","Doğan Duru (Redd)"],["ezginin gunlugu","Ezginin Günlüğü"],["feridun duzagac","Feridun Düzağaç"],["anil murat acar","Gazapizm (Anıl Murat Acar)"],["hakan yesilyurt","Hakan Yeşilyurt"],["kardes turkuler","Kardeş Türküler"],["kucuk i skender","Küçük İskender"],["sabahat akkiraz","Sabahat Akkiraz"],["servet kocakaya","Servet Kocakaya"],["ali ekber eren","Ali Ekber Eren"],["aysegul aldinc","Ayşegül Aldinç"],["burak gurpinar","Burak Gürpınar (stickduster)"],["erdal erzincan","Erdal Erzincan"],["gece yolculari","Gece Yolcuları"],["hakan vreskala","Hakan Vreskala"],["kerem kabadayi","Kerem Kabadayı"],["naside gokturk","Naşide Göktürk"],["niyazi koyuncu","Niyazi Koyuncu"],["orhan gencebay","Orhan Gencebay"],["pinar aydinlar","Pınar Aydınlar"],["zulfu livaneli","Zülfü Livaneli"],["sukriye tutkun","Şükriye Tutkun"],["belkis akkale","Belkıs Akkale"],["derya koroglu","Derya Köroğlu"],["edip akbayram","Edip Akbayram"],["engin nursani","Engin Nurşani"],["gaye su akyol","Gaye Su Akyol"],["huseyin turan","Hüseyin Turan"],["kalben sagdic","Kalben (Kalben Sağdıç)"],["levent yuksel","Levent Yüksel"],["nezihe kalkan","Nez (Nezihe Kalkan)"],["no1 can bozok","No1 (Can Bozok)"],["pervin chakar","Pervin Chakar"],["sagopa kajmer","Sagopa Kajmer (Yunus Özyavuz)"],["yunus ozyavuz","Sagopa Kajmer (Yunus Özyavuz)"],["sertab erener","Sertab Erener"],["sila gencoglu","Sıla ( Sıla Gençoğlu)"],["tulay maciran","Tülay Maciran"],["yasemin goksu","Yasemin Göksu"],["i lkay akkaya","İlkay Akkaya"],["siyar berwari","Şiyar Berwari"],["abidin biter","Abidin Biter"],["atilla serin","Ati242 (Atilla Serin)"],["berkay sahin","Berkay Şahin"],["cahit berkay","Cahit Berkay"],["ceylan ertem","Ceylan Ertem"],["ender balkir","Ender Balkır"],["erdogan emir","Erdoğan Emir"],["grup vitamin","Grup Vitamin"],["gulben ergen","Gülben Ergen"],["halit bilgic","Halit Bilgiç"],["haluk levent","Haluk Levent"],["hayko cepkin","Hayko Cepkin"],["kivircik ali","Kıvırcık Ali (Ali Özütemiz)"],["ali ozutemiz","Kıvırcık Ali (Ali Özütemiz)"],["mehmet erdem","Mehmet Erdem"],["mikail aslan","Mikail Aslan"],["mor ve otesi","Mor ve Ötesi"],["rojbin kizil","Rojbin Kızıl"],["rojda senses","Rojda Şenses"],["sansar salvo","Sansar Salvo"],["selda bagcan","Selda Bağcan"],["yavuz bingol","Yavuz Bingöl"],["yildiz tilbe","Yıldız Tilbe"],["sebnem ferah","Şebnem Ferah"],["sivan perwer","Şivan Perwer"],["ahmet aslan","Ahmet Aslan"],["ajda pekkan","Ajda Pekkan"],["aram serhad","Aram Serhad"],["aylin aslim","Aylin Aslım"],["aynur dogan","Aynur Doğan"],["azad bedran","Azad Bedran"],["banu kirbag","Banu (Banu Kırbağ)"],["bengu beker","Bengü Beker"],["bilal hanci","Bilal Hancı (Kafalar)"],["hakan aydin","Blok3 (Hakan Aydın)"],["stickduster","Burak Gürpınar (stickduster)"],["ferhat tunc","Ferhat Tunç"],["gulten kaya","Gülten Kaya"],["halil sezai","Halil Sezai"],["hande mehan","Hande Mehan"],["harun tekin","Harun Tekin"],["dogan tarda","Heijan (Doğan Tarda)"],["yusuf sahin","Hozan Dino (Yusuf Şahin)"],["kalan muzik","Kalan Müzik"],["latif dogan","Latif Doğan"],["mabel matiz","Mabel Matiz"],["melek mosso","Melek Mosso"],["nazan oncel","Nazan Öncel"],["nihat dogan","Nihat Doğan"],["niran unsal","Niran Ünsal"],["onur dursun","Ozbi (Onur Dursun)"],["yahya babuz","Yahya Babuz"],["zuhal olcay","Zuhal Olcay"],["oyku gurman","Öykü Gürman"],["umit yilmaz","Ümit Yılmaz"],["sahin gunes","Şahe Bedo (Şahin Güneş)"],["sarp palaur","Şanışer (Sarp Palaur)"],["arzu sahin","Arzu Şahin"],["can bonomo","Can Bonomo"],["cem adrian","Cem Adrian"],["dogan duru","Doğan Duru (Redd)"],["emrah anul","Emrah Anul"],["emre altug","Emre Altuğ"],["erol evgin","Erol Evgin"],["grup yorum","Grup Yorum"],["gunes duru","Güneş Duru"],["fatih uslu","Hidra (Fatih Uslu)"],["hozan dino","Hozan Dino (Yusuf Şahin)"],["mem ararat","Mem Ararat"],["oguz aksac","Oğuz Aksaç"],["seda sayan","Seda Sayan"],["sezen aksu","Sezen Aksu"],["sumer ezgu","Sümer Ezgü"],["xec herdem","Xecê Herdem"],["yasar kurt","Yaşar Kurt"],["sevval sam","Şevval Sam"],["dodan mir","Dodan Mir"],["fazil say","Fazıl Say"],["fuat saka","Fuat Saka"],["leman sam","Leman Sam"],["can bozok","No1 (Can Bozok)"],["onur akin","Onur Akın"],["paptircem","Paptircem (Sena Gül)"],["tolga sag","Tolga Sağ"],["sahe bedo","Şahe Bedo (Şahin Güneş)"],["eren boz","Eren Boz"],["gazapizm","Gazapizm (Anıl Murat Acar)"],["mogollar","Moğollar"],["sena gul","Paptircem (Sena Gül)"],["kafalar","Bilal Hancı (Kafalar)"],["mengene","Mengene"],["saniser","Şanışer (Sarp Palaur)"],["alisan","Alişan (Serkan Burak Tektaş)"],["ati242","Ati242 (Atilla Serin)"],["gripin","Gripin"],["heijan","Heijan (Doğan Tarda)"],["kalben","Kalben (Kalben Sağdıç)"],["teoman","Teoman (Teoman Yakupoğlu)"],["bajar","Bajar"],["blok3","Blok3 (Hakan Aydın)"],["ezhel","Ezhel (Ömer Sercan İpekçioğlu)"],["hayki","Hayki (Ragıp Aytuğ Tunal)"],["hidra","Hidra (Fatih Uslu)"],["kutsi","Kutsi (Ahmet Kutsi Karadoğan)"],["saian","Saian (Necati Güney Erkurt)"],["suavi","Suavi (Mehmet Suavi Saygan)"],["banu","Banu (Banu Kırbağ)"],["ceza","Ceza (Bilgin Özçalkan)"],["redd","Doğan Duru (Redd)"],["ozbi","Ozbi (Onur Dursun)"],["sila","Sıla ( Sıla Gençoğlu)"],["xece","Xece"],["nez","Nez (Nezihe Kalkan)"],["no1","No1 (Can Bozok)"],["uzi","Uzi (Utku Cihan Yalçınkaya)"]];

  function normalize(value) {
    return String(value ?? "")
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/[ıİ]/g, "i")
      .replace(/[şŞ]/g, "s")
      .replace(/[ğĞ]/g, "g")
      .replace(/[üÜ]/g, "u")
      .replace(/[öÖ]/g, "o")
      .replace(/[çÇ]/g, "c")
      .replace(/[’'`]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const boycott = new Map();

  // Oelist kayıtlarını ekle.
  for (const [normalized, display] of OELIST_MATCHES) {
    boycott.set(normalized, display);
  }

  // KULLANICININ EKLEDİĞİ İSİMLERİ EKLE.
  for (const name of CUSTOM_BOYKOT) {
    const n = normalize(name);
    if (n) boycott.set(n, name.trim());
  }

  function getArtistNames(item) {
    const names = [];

    const add = (value) => {
      if (typeof value === "string" && value.trim()) names.push(value.trim());
      else if (value && typeof value === "object") {
        const name = value.name || value.title || value.artistName;
        if (typeof name === "string" && name.trim()) names.push(name.trim());
      }
    };

    const arrays = [
      item?.artists,
      item?.metadata?.artists,
      item?.track?.artists,
      item?.track?.metadata?.artists
    ];

    for (const arr of arrays) {
      if (Array.isArray(arr)) arr.forEach(add);
    }

    [
      item?.metadata?.artist_name,
      item?.metadata?.artist,
      item?.metadata?.artist_names,
      item?.artist,
      item?.track?.artist,
      item?.track?.metadata?.artist_name
    ].forEach(add);

    return [...new Set(names)];
  }

  function findBoycottMatch(artists) {
    for (const artist of artists) {
      const n = normalize(artist);
      if (!n) continue;

      // Önce tam eşleşme.
      if (boycott.has(n)) return boycott.get(n);

      // Spotify bazen sanatçı adını parantez/ek bilgi ile döndürebilir.
      // Örn. "Ahmet Kaya - Remastered" gibi durumlarda tam kelime eşleşmesi.
      for (const [alias, display] of boycott) {
        if (alias.length < 4) continue;
        const pattern = new RegExp(
          "(^|\\s)" +
          alias.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&") +
          "($|\\s)",
          "i"
        );
        if (pattern.test(n)) return display;
      }
    }
    return null;
  }

  function currentItem() {
    const data = Spicetify.Player?.data;
    return data?.item ||
           data?.track ||
           data?.track_window?.current_track ||
           null;
  }

  function trackId(item) {
    return item?.uri ||
           item?.id ||
           item?.track?.uri ||
           `${item?.name || ""}|${item?.artist || ""}`;
  }

  let lastTrack = "";
  let skipInProgress = false;
  let lastSkipAt = 0;

  function currentItem() {
    const data = Spicetify.Player?.data;
    return data?.item ||
           data?.track ||
           data?.track_window?.current_track ||
           null;
  }

  function trackId(item) {
    return item?.uri ||
           item?.id ||
           item?.track?.uri ||
           `${item?.name || ""}|${item?.artist || ""}`;
  }

  function getCurrentBlock() {
    const item = currentItem();
    if (!item) return null;

    const artists = getArtistNames(item);
    const hit = findBoycottMatch(artists);

    return { item, artists, hit };
  }

  async function checkTrack() {
    const result = getCurrentBlock();
    if (!result) return;

    const { item, hit } = result;
    const id = trackId(item);
    if (!id) return;

    // Aynı track için aynı olay/poll döngüsünde tekrar tekrar skip etme.
    if (id === lastTrack && skipInProgress) return;

    if (!hit) {
      lastTrack = id;
      return;
    }

    // Boykot parçası daha önce görülmüş olsa bile, parça tekrar sonradan
    // kuyruğa/recommendation'a gelirse yeniden engellenmelidir.
    // Bu nedenle "hit gördüm, bir daha bakma" cache'i kullanılmaz.

    if (skipInProgress) return;

    // Spotify bazen next() çağrısından hemen sonra eski track metadata'sını
    // kısa süre daha döndürebilir. Çok kısa bir cooldown bu çift çağrıyı engeller.
    const now = Date.now();
    if (now - lastSkipAt < 250) return;

    lastTrack = id;
    lastSkipAt = now;
    skipInProgress = true;

    try {
      Spicetify.showNotification(
        `⚠️ Boykot listesinde: ${hit} — şarkı atlanıyor`
      );

      await new Promise(resolve => setTimeout(resolve, 50));

      if (typeof Spicetify.Player.next === "function") {
        await Spicetify.Player.next();
      }
    } catch (error) {
      console.error("[Oelist Boykot Skipper] Skip hatası:", error);
    } finally {
      // Yeni parça songchange/poll ile kontrol edilebilsin.
      setTimeout(() => {
        skipInProgress = false;
      }, 150);
    }
  }

  function start() {
    if (!window.Spicetify?.Player) {
      setTimeout(start, 500);
      return;
    }

    Spicetify.Player.addEventListener("songchange", checkTrack);

    // songchange olayına ek olarak sürekli düşük maliyetli kontrol.
    // Böylece Spotify'ın event'i kaçırdığı veya aynı sanatçının daha sonra
    // recommendation/queue üzerinden geri geldiği durumlarda da parça yakalanır.
    setTimeout(checkTrack, 400);
    setTimeout(checkTrack, 1000);

    setInterval(() => {
      checkTrack().catch(error =>
        console.error("[Oelist Boykot Skipper] Poll hatası:", error)
      );
    }, 350);

    console.log(
      `[Oelist Boykot Skipper ${VERSION}] aktif. ` +
      `${boycott.size} kayıt + ${CUSTOM_BOYKOT.length} özel isim yüklendi.`
    );
  }

  start();
})();
