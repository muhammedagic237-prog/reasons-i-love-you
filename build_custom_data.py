# -*- coding: utf-8 -*-
"""
Rebuild data.js with:
- Exactly the 6 specified coupons (Argument Win, Cuddling Time, Getaway, Servant of the day, Cinema Time, Listen here...)
- Exactly 50 cards without mentioning "50" anywhere in the tags
- Clean Love1606 settings
"""

import json

# 6 Specific Coupons Requested by User
coupons = [
    {
        "id": "c1",
        "title": "Argument Win",
        "icon": "👑",
        "badge": "Automatska Pobjeda",
        "desc": "Iskoristi ovaj kupon da automatski dobijes svadju",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c2",
        "title": "Cuddling Time",
        "icon": "🧸",
        "badge": "Neograničeno Maženje",
        "desc": "Mazenje i pazenje koliko god vremenski zelis, sve obaveze moraju se ostaviti",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c3",
        "title": "Getaway",
        "icon": "✈️",
        "badge": "Zajedničko Putovanje",
        "desc": "Odlazak bilo gdje po tvojoj zelji",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c4",
        "title": "Servant of the day",
        "icon": "🤵",
        "badge": "VIP Usluga",
        "desc": "Cijeli dan ti ugadjam sve sto pozelis, Vama na usluzi",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c5",
        "title": "Cinema Time",
        "icon": "🎬",
        "badge": "Filmska Noć",
        "desc": "Biras film po tvom izboru, i grickalice koje zelis",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c6",
        "title": "Listen here...",
        "icon": "🤫",
        "badge": "Posebna Zapovijed",
        "desc": "Moram poslusati sta mi kazes",
        "claimed": False,
        "claimedAt": None
    }
]

# 50 Carefully Curated Love Cards
bosnian_50_cards = [
    ("love", "Najveća Ljubav", "Volim te najviše na svijetu.", "Zauvijek i bez obzira na sve, ti si na prvom mjestu."),
    ("love", "Moje Sve", "Ti si moje sve.", "Moj početak, moj mir i svaki najljepši trenutak u danu."),
    ("love", "Jedina Prava", "Ti si ljubav mog života.", "Moje srce je izabralo tebe i birat će te svakog novog dana."),
    ("love", "Moje Značenje", "Nikad nećeš znati koliko mi značiš.", "Riječi su premale da opišu šta osjećam u grudima za tebe."),
    ("memory", "Naš 16. Juni 2026", "Datum kada je naša priča počela i kada je moj život dobio najljepši smisao.", "16.06.2026 — Naš datum zauvijek."),
    ("compliment", "Tvoj Predivni Osmijeh", "Tvoj iskreni osmijeh i onaj sjaj u tvojim očima obasjaju svaki moj dan.", "Najljepša si na svijetu."),
    ("love", "Moj Mir i Sigurna Luka", "U tvom zagrljaju zaboravim na sve brige ovoga svijeta. Sa tobom sam kod kuće.", "Moje najsigurnije mjesto."),
    ("future", "Zauvijek Ti i Ja", "Radujem se svakom novom danu, putovanju i godinama koje ćemo provesti zajedno.", "Mi protiv cijelog svijeta."),
    ("quirk", "Tvoj Pogled", "Onaj tvoj slatki pogled kad me krišom posmatraš...", "Uvijek te primijetim i srce mi zaigra."),
    ("compliment", "Ponos Moj", "Nevjerovatno sam ponosan na tebe, na tvoju dobrotu, tvoju snagu i tvoje veliko srce.", "Moja Amila."),
    ("love", "Hvala Ti Što Postojiš", "Život sa tobom je ljepši, topliji i puniji radosti nego što sam ikada zamišljao.", "Ti si moj najdraži dar."),
    ("compliment", "Tvoja Ljepota", "Prelijepa si u svakom izdanju—i kada se dotjeraš, i u pidžami sa neurednom kosom.", "Uvijek najslađa djevojka."),
    ("memory", "Naši Noćni Razgovori", "Oni sati kada zaboravimo na vrijeme i pričamo o svemu dok svi spavaju.", "Naš mali tajni svijet."),
    ("quirk", "Tvoje Maženje", "Način na koji se priviješ uz mene kad ti je hladno ili kad ti treba pažnja.", "Nikad te ne bih pustio."),
    ("love", "Moje Povjerenje", "Ti si jedina osoba pred kojom mogu biti 100% ja, bez ijedne maske ili ustručavanja.", "Potpuno povjerenje."),
    ("future", "Naša Putovanja", "Sva mjesta koja ćemo posjetiti, držati se za ruke i stvarati uspomene za čitav život.", "Svijet je naš."),
    ("compliment", "Tvoj Nježni Glas", "Smiri me čim te čujem, ma kakav dan da sam imao.", "Melem za moju dušu."),
    ("joke", "Kradljivica Dukserica", "Kako sve moje najudobnije dukserice nekako završe u tvom ormaru...", "Priznajem, tebi stoje bolje."),
    ("love", "Moja Podrška", "Hvala ti što vjeruješ u mene i što si uvijek tu da me digneš kad je najteže.", "Moja najveća snaga."),
    ("memory", "Naša Prva Kafa", "Osjećaj leptirića u stomaku koji još uvijek osjetim svaki put kad te ugledam.", "Isti osjećaj i danas."),
    ("quirk", "Tvoj Mali Ples", "Onaj preslatki ples koji napraviš kad stigne tvoja omiljena hrana.", "Topim se svaki put."),
    ("compliment", "Tvoja Čista Duša", "Tvoja dobrota prema ljudima i empatija čine te posebnom u ovom svijetu.", "Zlatno srce."),
    ("love", "Ti Si Moj Dom", "Nije važno gdje se nalazimo, gdje god si ti—tu sam kod kuće.", "Moje utočište."),
    ("future", "Zajednička Jutra", "Još hiljade nedjeljnih jutara, kafa u tišini i buđenja jedno pored drugog.", "Moja omiljena rutina."),
    ("joke", "Hladna Stopala", "Način na koji svoja ledena stopala staviš pod moje noge da se ugriju.", "Tvoj lični radijator zauvijek."),
    ("love", "Moj Razlog Za Osmijeh", "I u najtežim trenucima, samo pomisao na tebe mi vrati osmijeh na lice.", "Moja radost."),
    ("compliment", "Tvoje Oči", "Mogao bih se izgubiti u tvom pogledu satima. Imaš najtoplije oči na svijetu.", "Moje ogledalo."),
    ("memory", "Naše Vožnje Autom", "Glasna muzika, držanje za ruku i pjevanje na sav glas kroz noć.", "Neprocjenjivi trenuci."),
    ("quirk", "Tvoje Brbljanje", "Kada mi sa tolikim uzbuđenjem prepričavaš nešto što se desilo tokom dana.", "Obožavam te slušati."),
    ("love", "Čuvam Te", "Uvijek ću biti tvoj štit, tvoja sigurnost i neko na koga se uvijek možeš osloniti.", "Tu sam, bez brige."),
    ("future", "Naš Dom", "Zajednički prostor uređen s ljubavlju, pun smijeha, topline i naših fotografija.", "Gradimo našu bajku."),
    ("joke", "Biranje Šta Ćemo Jesti", "Pola sata pregovora oko hrane i tvoje 'ne znam, šta ti hoćeš'...", "I opet bih birao s tobom."),
    ("compliment", "Tvoja Pamet", "Način na koji razmišljaš, tvoja snalažljivost i mudrost me uvijek iznova oduševe.", "Pametna moja."),
    ("love", "Birao Bih Te Opet", "Da imam još hiljadu života, u svakom bih tražio i izabrao samo tebe.", "Samo ti."),
    ("memory", "Trenutak Kada Sam Znao", "Onaj trenutak kada sam te pogledao i shvatio: ovo je djevojka mog života.", "Zauvijek urezano u srcu."),
    ("quirk", "Tvoj Slatki Zijev", "Kad si pospana pa zijevneš kao mala beba i tražiš zagrljaj.", "Neodoljiva si."),
    ("love", "Zajedno Smo Jači", "Nijedan problem na ovom svijetu nije prevelik kada smo ti i ja zajedno.", "Tim za pobjedu."),
    ("compliment", "Tvoj Miris", "Tvoj miris koji ostane na mojoj majici i koji me odmah podsjeti na tebe.", "Najdraži miris."),
    ("future", "Gledanje Zalaska Sunca", "Sjedeći jedno uz drugo, posmatrati nebo i znati da imamo jedno drugo.", "Mir u duši."),
    ("joke", "Boj za Pokrivač", "Kako do 4 ujutro umotaš sav jorgan oko sebe a meni ostane dva centimetra...", "Sve bih ti dao."),
    ("love", "Ti Si Moj Prioritet", "Tvoja sreća i tvoj osmijeh su mi važniji od bilo čega drugog.", "Ti si na prvom mjestu."),
    ("compliment", "Tvoj Smisao Za Humor", "Kako me znaš nasmijati do suza čak i kad sam neraspoložen.", "Moja omiljena osoba."),
    ("memory", "Kiša i Naš Smijeh", "Trčanje po kiši i smijanje bez ikakvog razloga.", "Filmski momenti s tobom."),
    ("quirk", "Tvoj Dodir Ruke", "Način na koji mi stisneš ruku dok šetamo ulicom.", "Povezani u svakom koraku."),
    ("love", "Ti Si Moja Najveća Sreća", "Zahvalan sam Bogu za svaki dan koji provodim kao tvoj dečko.", "Blagoslov mog života."),
    ("future", "Starost Sa Tobom", "Zamišljam nas za 50 godina, sijedih kosa, i dalje zaljubljenih kao prvog dana.", "Ljubav do kraja."),
    ("compliment", "Tvoj Stil", "Imaš urođenu eleganciju i šarm kakav se rijetko viđa.", "Prava dama."),
    ("love", "Moje Utočište", "Svijet vani može biti bučan i težak, ali sa tobom je sve mirno i jasno.", "Moja oaza."),
    ("joke", "Kada Kažeš 'Spremna Sam'", "Kažeš 'spremna sam' a još tražiš ključeve, telefon i karmin...", "Sve ti opraštam jer si preslatka."),
    ("love", "Ljubav Bez Kraja", "Ovo je tek početak naše prelijepe priče. Volim te, Amila, beskrajno!", "Tvoj Muhammed zauvijek.")
]

final_reasons = []
for i, item in enumerate(bosnian_50_cards, 1):
    final_reasons.append({
        "id": i,
        "category": item[0],
        "tag": "✨ Za Amilu ✨",
        "title": item[1],
        "text": item[2],
        "note": item[3]
    })

js_content = f"""// Love1606 • Amila & Muhammed
// Preloaded Data & Settings

const DEFAULT_SETTINGS = {{
  appName: "Love1606",
  partnerName: "Amila",
  yourName: "Muhammed",
  anniversaryDate: "2026-06-16T00:00:00", // 16.06.2026
  deckSize: 50,
  categoryFilter: "all",
  soundEnabled: true,
  theme: "love1606"
}};

const CATEGORY_META = {{
  love: {{ label: "Ljubav", icon: "❤️", color: "#e11d48", bg: "#ffe4e6" }},
  memory: {{ label: "Uspomena", icon: "📸", color: "#8b5cf6", bg: "#f3e8ff" }},
  compliment: {{ label: "Kompliment", icon: "💫", color: "#d97706", bg: "#fef3c7" }},
  quirk: {{ label: "Slatka Sitnica", icon: "✨", color: "#059669", bg: "#d1fae5" }},
  future: {{ label: "Budućnost", icon: "🔮", color: "#2563eb", bg: "#dbeafe" }},
  joke: {{ label: "Naša Šala", icon: "😂", color: "#db2777", bg: "#fce7f3" }}
}};

const LOVE_COUPONS = {json.dumps(coupons, indent=2, ensure_ascii=False)};

const REASONS_DATABASE = {json.dumps(final_reasons, indent=2, ensure_ascii=False)};
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"data.js updated with exactly {len(final_reasons)} cards and {len(coupons)} coupons!")
