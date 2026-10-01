// Love1606 • Amila & Muhammed
// Preloaded Data & Settings

const DEFAULT_SETTINGS = {
  appName: "Love1606",
  partnerName: "Amila",
  yourName: "Muhammed",
  anniversaryDate: "2026-06-16T00:00:00", // 16.06.2026
  deckSize: 50,
  categoryFilter: "all",
  soundEnabled: true,
  theme: "love1606"
};

const CATEGORY_META = {
  love: { label: "Ljubav", icon: "❤️", color: "#e11d48", bg: "#ffe4e6" },
  memory: { label: "Uspomena", icon: "📸", color: "#8b5cf6", bg: "#f3e8ff" },
  compliment: { label: "Kompliment", icon: "💫", color: "#d97706", bg: "#fef3c7" },
  quirk: { label: "Slatka Sitnica", icon: "✨", color: "#059669", bg: "#d1fae5" },
  future: { label: "Budućnost", icon: "🔮", color: "#2563eb", bg: "#dbeafe" },
  joke: { label: "Naša Šala", icon: "😂", color: "#db2777", bg: "#fce7f3" }
};

const LOVE_COUPONS = [
  {
    "id": "c1",
    "title": "Argument Win",
    "icon": "👑",
    "badge": "Automatska Pobjeda",
    "desc": "Iskoristi ovaj kupon da automatski dobijes svadju",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c2",
    "title": "Cuddling Time",
    "icon": "🧸",
    "badge": "Neograničeno Maženje",
    "desc": "Mazenje i pazenje koliko god vremenski zelis, sve obaveze moraju se ostaviti",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c3",
    "title": "Getaway",
    "icon": "✈️",
    "badge": "Zajedničko Putovanje",
    "desc": "Odlazak bilo gdje po tvojoj zelji",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c4",
    "title": "Servant of the day",
    "icon": "🤵",
    "badge": "VIP Usluga",
    "desc": "Cijeli dan ti ugadjam sve sto pozelis, Vama na usluzi",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c5",
    "title": "Cinema Time",
    "icon": "🎬",
    "badge": "Filmska Noć",
    "desc": "Biras film po tvom izboru, i grickalice koje zelis",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c6",
    "title": "Listen here...",
    "icon": "🤫",
    "badge": "Posebna Zapovijed",
    "desc": "Moram poslusati sta mi kazes",
    "claimed": false,
    "claimedAt": null
  }
];

const REASONS_DATABASE = [
  {
    "id": 1,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Najveća Ljubav",
    "text": "Volim te najviše na svijetu.",
    "note": "Zauvijek i bez obzira na sve, ti si na prvom mjestu."
  },
  {
    "id": 2,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moje Sve",
    "text": "Ti si moje sve.",
    "note": "Moj početak, moj mir i svaki najljepši trenutak u danu."
  },
  {
    "id": 3,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Jedina Prava",
    "text": "Ti si ljubav mog života.",
    "note": "Moje srce je izabralo tebe i birat će te svakog novog dana."
  },
  {
    "id": 4,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moje Značenje",
    "text": "Nikad nećeš znati koliko mi značiš.",
    "note": "Riječi su premale da opišu šta osjećam u grudima za tebe."
  },
  {
    "id": 5,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Naš 16. Juni 2026",
    "text": "Datum kada je naša priča počela i kada je moj život dobio najljepši smisao.",
    "note": "16.06.2026 — Naš datum zauvijek."
  },
  {
    "id": 6,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Predivni Osmijeh",
    "text": "Tvoj iskreni osmijeh i onaj sjaj u tvojim očima obasjaju svaki moj dan.",
    "note": "Najljepša si na svijetu."
  },
  {
    "id": 7,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moj Mir i Sigurna Luka",
    "text": "U tvom zagrljaju zaboravim na sve brige ovoga svijeta. Sa tobom sam kod kuće.",
    "note": "Moje najsigurnije mjesto."
  },
  {
    "id": 8,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Zauvijek Ti i Ja",
    "text": "Radujem se svakom novom danu, putovanju i godinama koje ćemo provesti zajedno.",
    "note": "Mi protiv cijelog svijeta."
  },
  {
    "id": 9,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Pogled",
    "text": "Onaj tvoj slatki pogled kad me krišom posmatraš...",
    "note": "Uvijek te primijetim i srce mi zaigra."
  },
  {
    "id": 10,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Ponos Moj",
    "text": "Nevjerovatno sam ponosan na tebe, na tvoju dobrotu, tvoju snagu i tvoje veliko srce.",
    "note": "Moja Amila."
  },
  {
    "id": 11,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Hvala Ti Što Postojiš",
    "text": "Život sa tobom je ljepši, topliji i puniji radosti nego što sam ikada zamišljao.",
    "note": "Ti si moj najdraži dar."
  },
  {
    "id": 12,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoja Ljepota",
    "text": "Prelijepa si u svakom izdanju—i kada se dotjeraš, i u pidžami sa neurednom kosom.",
    "note": "Uvijek najslađa djevojka."
  },
  {
    "id": 13,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Naši Noćni Razgovori",
    "text": "Oni sati kada zaboravimo na vrijeme i pričamo o svemu dok svi spavaju.",
    "note": "Naš mali tajni svijet."
  },
  {
    "id": 14,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoje Maženje",
    "text": "Način na koji se priviješ uz mene kad ti je hladno ili kad ti treba pažnja.",
    "note": "Nikad te ne bih pustio."
  },
  {
    "id": 15,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moje Povjerenje",
    "text": "Ti si jedina osoba pred kojom mogu biti 100% ja, bez ijedne maske ili ustručavanja.",
    "note": "Potpuno povjerenje."
  },
  {
    "id": 16,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Naša Putovanja",
    "text": "Sva mjesta koja ćemo posjetiti, držati se za ruke i stvarati uspomene za čitav život.",
    "note": "Svijet je naš."
  },
  {
    "id": 17,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Nježni Glas",
    "text": "Smiri me čim te čujem, ma kakav dan da sam imao.",
    "note": "Melem za moju dušu."
  },
  {
    "id": 18,
    "category": "joke",
    "tag": "✨ Za Amilu ✨",
    "title": "Kradljivica Dukserica",
    "text": "Kako sve moje najudobnije dukserice nekako završe u tvom ormaru...",
    "note": "Priznajem, tebi stoje bolje."
  },
  {
    "id": 19,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moja Podrška",
    "text": "Hvala ti što vjeruješ u mene i što si uvijek tu da me digneš kad je najteže.",
    "note": "Moja najveća snaga."
  },
  {
    "id": 20,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Naša Prva Kafa",
    "text": "Osjećaj leptirića u stomaku koji još uvijek osjetim svaki put kad te ugledam.",
    "note": "Isti osjećaj i danas."
  },
  {
    "id": 21,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Mali Ples",
    "text": "Onaj preslatki ples koji napraviš kad stigne tvoja omiljena hrana.",
    "note": "Topim se svaki put."
  },
  {
    "id": 22,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoja Čista Duša",
    "text": "Tvoja dobrota prema ljudima i empatija čine te posebnom u ovom svijetu.",
    "note": "Zlatno srce."
  },
  {
    "id": 23,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Ti Si Moj Dom",
    "text": "Nije važno gdje se nalazimo, gdje god si ti—tu sam kod kuće.",
    "note": "Moje utočište."
  },
  {
    "id": 24,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Zajednička Jutra",
    "text": "Još hiljade nedjeljnih jutara, kafa u tišini i buđenja jedno pored drugog.",
    "note": "Moja omiljena rutina."
  },
  {
    "id": 25,
    "category": "joke",
    "tag": "✨ Za Amilu ✨",
    "title": "Hladna Stopala",
    "text": "Način na koji svoja ledena stopala staviš pod moje noge da se ugriju.",
    "note": "Tvoj lični radijator zauvijek."
  },
  {
    "id": 26,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moj Razlog Za Osmijeh",
    "text": "I u najtežim trenucima, samo pomisao na tebe mi vrati osmijeh na lice.",
    "note": "Moja radost."
  },
  {
    "id": 27,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoje Oči",
    "text": "Mogao bih se izgubiti u tvom pogledu satima. Imaš najtoplije oči na svijetu.",
    "note": "Moje ogledalo."
  },
  {
    "id": 28,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Naše Vožnje Autom",
    "text": "Glasna muzika, držanje za ruku i pjevanje na sav glas kroz noć.",
    "note": "Neprocjenjivi trenuci."
  },
  {
    "id": 29,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoje Brbljanje",
    "text": "Kada mi sa tolikim uzbuđenjem prepričavaš nešto što se desilo tokom dana.",
    "note": "Obožavam te slušati."
  },
  {
    "id": 30,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Čuvam Te",
    "text": "Uvijek ću biti tvoj štit, tvoja sigurnost i neko na koga se uvijek možeš osloniti.",
    "note": "Tu sam, bez brige."
  },
  {
    "id": 31,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Naš Dom",
    "text": "Zajednički prostor uređen s ljubavlju, pun smijeha, topline i naših fotografija.",
    "note": "Gradimo našu bajku."
  },
  {
    "id": 32,
    "category": "joke",
    "tag": "✨ Za Amilu ✨",
    "title": "Biranje Šta Ćemo Jesti",
    "text": "Pola sata pregovora oko hrane i tvoje 'ne znam, šta ti hoćeš'...",
    "note": "I opet bih birao s tobom."
  },
  {
    "id": 33,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoja Pamet",
    "text": "Način na koji razmišljaš, tvoja snalažljivost i mudrost me uvijek iznova oduševe.",
    "note": "Pametna moja."
  },
  {
    "id": 34,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Birao Bih Te Opet",
    "text": "Da imam još hiljadu života, u svakom bih tražio i izabrao samo tebe.",
    "note": "Samo ti."
  },
  {
    "id": 35,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Trenutak Kada Sam Znao",
    "text": "Onaj trenutak kada sam te pogledao i shvatio: ovo je djevojka mog života.",
    "note": "Zauvijek urezano u srcu."
  },
  {
    "id": 36,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Slatki Zijev",
    "text": "Kad si pospana pa zijevneš kao mala beba i tražiš zagrljaj.",
    "note": "Neodoljiva si."
  },
  {
    "id": 37,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Zajedno Smo Jači",
    "text": "Nijedan problem na ovom svijetu nije prevelik kada smo ti i ja zajedno.",
    "note": "Tim za pobjedu."
  },
  {
    "id": 38,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Miris",
    "text": "Tvoj miris koji ostane na mojoj majici i koji me odmah podsjeti na tebe.",
    "note": "Najdraži miris."
  },
  {
    "id": 39,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Gledanje Zalaska Sunca",
    "text": "Sjedeći jedno uz drugo, posmatrati nebo i znati da imamo jedno drugo.",
    "note": "Mir u duši."
  },
  {
    "id": 40,
    "category": "joke",
    "tag": "✨ Za Amilu ✨",
    "title": "Boj za Pokrivač",
    "text": "Kako do 4 ujutro umotaš sav jorgan oko sebe a meni ostane dva centimetra...",
    "note": "Sve bih ti dao."
  },
  {
    "id": 41,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Ti Si Moj Prioritet",
    "text": "Tvoja sreća i tvoj osmijeh su mi važniji od bilo čega drugog.",
    "note": "Ti si na prvom mjestu."
  },
  {
    "id": 42,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Smisao Za Humor",
    "text": "Kako me znaš nasmijati do suza čak i kad sam neraspoložen.",
    "note": "Moja omiljena osoba."
  },
  {
    "id": 43,
    "category": "memory",
    "tag": "✨ Za Amilu ✨",
    "title": "Kiša i Naš Smijeh",
    "text": "Trčanje po kiši i smijanje bez ikakvog razloga.",
    "note": "Filmski momenti s tobom."
  },
  {
    "id": 44,
    "category": "quirk",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Dodir Ruke",
    "text": "Način na koji mi stisneš ruku dok šetamo ulicom.",
    "note": "Povezani u svakom koraku."
  },
  {
    "id": 45,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Ti Si Moja Najveća Sreća",
    "text": "Zahvalan sam Bogu za svaki dan koji provodim kao tvoj dečko.",
    "note": "Blagoslov mog života."
  },
  {
    "id": 46,
    "category": "future",
    "tag": "✨ Za Amilu ✨",
    "title": "Starost Sa Tobom",
    "text": "Zamišljam nas za 50 godina, sijedih kosa, i dalje zaljubljenih kao prvog dana.",
    "note": "Ljubav do kraja."
  },
  {
    "id": 47,
    "category": "compliment",
    "tag": "✨ Za Amilu ✨",
    "title": "Tvoj Stil",
    "text": "Imaš urođenu eleganciju i šarm kakav se rijetko viđa.",
    "note": "Prava dama."
  },
  {
    "id": 48,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Moje Utočište",
    "text": "Svijet vani može biti bučan i težak, ali sa tobom je sve mirno i jasno.",
    "note": "Moja oaza."
  },
  {
    "id": 49,
    "category": "joke",
    "tag": "✨ Za Amilu ✨",
    "title": "Kada Kažeš 'Spremna Sam'",
    "text": "Kažeš 'spremna sam' a još tražiš ključeve, telefon i karmin...",
    "note": "Sve ti opraštam jer si preslatka."
  },
  {
    "id": 50,
    "category": "love",
    "tag": "✨ Za Amilu ✨",
    "title": "Ljubav Bez Kraja",
    "text": "Ovo je tek početak naše prelijepe priče. Volim te, Amila, beskrajno!",
    "note": "Tvoj Muhammed zauvijek."
  }
];
