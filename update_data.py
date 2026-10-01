# -*- coding: utf-8 -*-
"""
Rebuild data.js with:
- Dedicated Bosnian romantic cards at the start (as requested)
- Updated anniversary date: 2026-06-16
- Names: Amila & Muhammed
- App Name: Love1606
"""

import json

bosnian_priority_cards = [
    ("love", "Najveća Ljubav", "Volim te najviše na svijetu.", "Zauvijek i bez obzira na sve, ti si na prvom mjestu."),
    ("love", "Moje Sve", "Ti si moje sve.", "Moj početak, moj mir i svaki najljepši trenutak u danu."),
    ("love", "Jedina Prava", "Ti si ljubav mog života.", "Moje srce je izabralo tebe i birat će te svakog novog dana."),
    ("love", "Moje Značenje", "Nikad nećeš znati koliko mi značiš.", "Riječi su premale da opišu šta osjećam u grudima za tebe."),
    ("memory", "Naš 16. Juni 2026", "Datum kada je naša priča počela i kada je moj život dobio najljepši smisao.", "16.06.2026 — Naš datum zauvijek."),
    ("compliment", "Tvoj Predivni Osmijeh", "Tvoj iskreni osmijeh i onaj sjaj u tvojim očima obasjaju svaki moj dan.", "Najljepša si na svijetu."),
    ("love", "Moj Mir i Sigurna Luka", "U tvom zagrljaju zaboravim na sve brige ovoga svijeta. Sa tobom sam kod kuće.", "Moje najsigurnije mjesto."),
    ("future", "Zauvijek Ti i Ja", "Radujem se svakom novom danu, putovanju i godinama koje ćemo provesti zajedno.", "Mi protiv cijelog svijeta."),
    ("quirk", "Tvoj Pogled", "Onaj tvoj slatki pogled kad me krišom posmatraš...", "Uvijek te primijetim i srce mi zaigra."),
    ("compliment", "Ponos Moj", "Nevjerovatno sam ponosan na tebe, na tvoju dobrotu, tvoju snagu i tvoje veliko srce.", "Moja Amila.")
]

# Read original build_data.py to extract seeds and themes
with open("build_data.py", "r", encoding="utf-8") as f:
    orig_code = f.read()

# We can re-use the lists directly
import build_data as bd

all_items = []
# 1. Add priority Bosnian cards first
for cat, title, text, note in bosnian_priority_cards:
    all_items.append({"category": cat, "title": title, "text": text, "note": note})

# 2. Add seeds
for cat, title, text, note in bd.reasons_seed:
    all_items.append({"category": cat, "title": title, "text": text, "note": note})

for cat, title, text, note in bd.reasons_51_to_100:
    all_items.append({"category": cat, "title": title, "text": text, "note": note})

for cat, title, text, note in bd.themes:
    all_items.append({"category": cat, "title": title, "text": text, "note": note})

# Trim or fill to 365
final_reasons = []
for i, item in enumerate(all_items[:365], 1):
    final_reasons.append({
        "id": i,
        "category": item["category"],
        "tag": f"Dan {i}" if i <= 365 else f"Razlog #{i}",
        "title": item["title"],
        "text": item["text"],
        "note": item["note"]
    })

# Coupons (translated / enhanced for Amila & Muhammed)
coupons = [
    {
        "id": "c1",
        "title": "Masaža od 30 Minuta",
        "icon": "💆‍♀️",
        "badge": "Opuštanje",
        "desc": "Kupon za 30 minuta potpune masaže leđa, ramena ili stopala uz tvoju omiljenu muziku. Bez žurbe!",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c2",
        "title": "Ja Perem Suđe & Čistim",
        "icon": "🍽️",
        "badge": "Odmor",
        "desc": "Večeras ne moraš prstom mrdnuti u kuhinji. Sve čistim, perem i sklanjam ja.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c3",
        "title": "Ti Biraš Film i Grickalice",
        "icon": "🎬",
        "badge": "Filmska Noć",
        "desc": "Apsolutna kontrola nad daljinskim upravljačem bez prigovora, plus grickalice po tvojoj želji.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c4",
        "title": "Jedna Pobjeda u Raspravi",
        "icon": "👑",
        "badge": "Zlatna Karta",
        "desc": "Iskoristi bilo kada: odmah priznajem da si bila 100% u pravu, bez ikakvog pogovora!",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c5",
        "title": "Doručak u Krevetu",
        "icon": "🥞",
        "badge": "Jutarnji Luksuz",
        "desc": "Topli doručak i svježa kafa ili čaj servirani direktno u krevet.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c6",
        "title": "Noćni Desert (Moj Trošak)",
        "icon": "🍦",
        "badge": "Slatkiši",
        "desc": "Šta god ti se jede kasno navečer—sladoled, palačinke ili kolači—idem po to odmah!",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c7",
        "title": "Sat Vremena Maženja",
        "icon": "🧸",
        "badge": "Toplina",
        "desc": "Sat vremena neprekidnog maženja i zagrljaja bez telefona i ometanja.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c8",
        "title": "Romantična Večera",
        "icon": "🍷",
        "badge": "Sastanak",
        "desc": "Spremi se za fin izlazak. Rezervacija, hrana i piće su u potpunosti na meni.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c9",
        "title": "Pranje Auta & Pun Rezervoar",
        "icon": "🚗",
        "badge": "Usluga",
        "desc": "Brinem se o autu: pranje iznutra i izvana i pun rezervoar goriva.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c10",
        "title": "Spontani Izlet",
        "icon": "🗺️",
        "badge": "Avantura",
        "desc": "Izaberi destinaciju na mapi za vikend, pakujemo stvari i idemo!",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c11",
        "title": "Spavanje Bez Alarma",
        "icon": "😴",
        "badge": "Odmor",
        "desc": "Tišina u kući, spavanje do kad god želiš bez buđenja i obaveza.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c12",
        "title": "Tvoj Lični Sluga za Taj Dan",
        "icon": "🤵",
        "badge": "VIP Tretman",
        "desc": "Šta god poželiš: donijeti deku, čašu vode ili poslasticu—tvoja želja je moja zapovijed.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c13",
        "title": "Biraš Moj Outfit",
        "icon": "👔",
        "badge": "Stil",
        "desc": "Ti biraš šta ću obući za naš sljedeći izlazak, čak i matching kombinaciju.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c14",
        "title": "Zlatna Želja po Izboru",
        "icon": "✨",
        "badge": "Slobodna Želja",
        "desc": "Vrijedi za apsolutno bilo šta romantično ili slatko što sama zamisliš!",
        "claimed": False,
        "claimedAt": None
    }
]

js_content = f"""// Love1606 • Amila & Muhammed
// Preloaded Data & Settings

const DEFAULT_SETTINGS = {{
  appName: "Love1606",
  partnerName: "Amila",
  yourName: "Muhammed",
  anniversaryDate: "2026-06-16T00:00:00", // 16.06.2026
  deckSize: 365,
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

print(f"data.js updated with Bosnian cards, Love1606 settings, and Amila & Muhammed!")
