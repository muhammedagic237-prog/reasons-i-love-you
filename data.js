// Love1606 • Amila & Muhammed
// Preloaded Data & Settings

const DEFAULT_SETTINGS = {
  appName: "Love1606",
  partnerName: "Amila",
  yourName: "Muhammed",
  anniversaryDate: "2026-06-16T00:00:00", // 16.06.2026
  deckSize: 365,
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
    "title": "Masaža od 30 Minuta",
    "icon": "💆‍♀️",
    "badge": "Opuštanje",
    "desc": "Kupon za 30 minuta potpune masaže leđa, ramena ili stopala uz tvoju omiljenu muziku. Bez žurbe!",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c2",
    "title": "Ja Perem Suđe & Čistim",
    "icon": "🍽️",
    "badge": "Odmor",
    "desc": "Večeras ne moraš prstom mrdnuti u kuhinji. Sve čistim, perem i sklanjam ja.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c3",
    "title": "Ti Biraš Film i Grickalice",
    "icon": "🎬",
    "badge": "Filmska Noć",
    "desc": "Apsolutna kontrola nad daljinskim upravljačem bez prigovora, plus grickalice po tvojoj želji.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c4",
    "title": "Jedna Pobjeda u Raspravi",
    "icon": "👑",
    "badge": "Zlatna Karta",
    "desc": "Iskoristi bilo kada: odmah priznajem da si bila 100% u pravu, bez ikakvog pogovora!",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c5",
    "title": "Doručak u Krevetu",
    "icon": "🥞",
    "badge": "Jutarnji Luksuz",
    "desc": "Topli doručak i svježa kafa ili čaj servirani direktno u krevet.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c6",
    "title": "Noćni Desert (Moj Trošak)",
    "icon": "🍦",
    "badge": "Slatkiši",
    "desc": "Šta god ti se jede kasno navečer—sladoled, palačinke ili kolači—idem po to odmah!",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c7",
    "title": "Sat Vremena Maženja",
    "icon": "🧸",
    "badge": "Toplina",
    "desc": "Sat vremena neprekidnog maženja i zagrljaja bez telefona i ometanja.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c8",
    "title": "Romantična Večera",
    "icon": "🍷",
    "badge": "Sastanak",
    "desc": "Spremi se za fin izlazak. Rezervacija, hrana i piće su u potpunosti na meni.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c9",
    "title": "Pranje Auta & Pun Rezervoar",
    "icon": "🚗",
    "badge": "Usluga",
    "desc": "Brinem se o autu: pranje iznutra i izvana i pun rezervoar goriva.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c10",
    "title": "Spontani Izlet",
    "icon": "🗺️",
    "badge": "Avantura",
    "desc": "Izaberi destinaciju na mapi za vikend, pakujemo stvari i idemo!",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c11",
    "title": "Spavanje Bez Alarma",
    "icon": "😴",
    "badge": "Odmor",
    "desc": "Tišina u kući, spavanje do kad god želiš bez buđenja i obaveza.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c12",
    "title": "Tvoj Lični Sluga za Taj Dan",
    "icon": "🤵",
    "badge": "VIP Tretman",
    "desc": "Šta god poželiš: donijeti deku, čašu vode ili poslasticu—tvoja želja je moja zapovijed.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c13",
    "title": "Biraš Moj Outfit",
    "icon": "👔",
    "badge": "Stil",
    "desc": "Ti biraš šta ću obući za naš sljedeći izlazak, čak i matching kombinaciju.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c14",
    "title": "Zlatna Želja po Izboru",
    "icon": "✨",
    "badge": "Slobodna Želja",
    "desc": "Vrijedi za apsolutno bilo šta romantično ili slatko što sama zamisliš!",
    "claimed": false,
    "claimedAt": null
  }
];

const REASONS_DATABASE = [
  {
    "id": 1,
    "category": "love",
    "tag": "Dan 1",
    "title": "Najveća Ljubav",
    "text": "Volim te najviše na svijetu.",
    "note": "Zauvijek i bez obzira na sve, ti si na prvom mjestu."
  },
  {
    "id": 2,
    "category": "love",
    "tag": "Dan 2",
    "title": "Moje Sve",
    "text": "Ti si moje sve.",
    "note": "Moj početak, moj mir i svaki najljepši trenutak u danu."
  },
  {
    "id": 3,
    "category": "love",
    "tag": "Dan 3",
    "title": "Jedina Prava",
    "text": "Ti si ljubav mog života.",
    "note": "Moje srce je izabralo tebe i birat će te svakog novog dana."
  },
  {
    "id": 4,
    "category": "love",
    "tag": "Dan 4",
    "title": "Moje Značenje",
    "text": "Nikad nećeš znati koliko mi značiš.",
    "note": "Riječi su premale da opišu šta osjećam u grudima za tebe."
  },
  {
    "id": 5,
    "category": "memory",
    "tag": "Dan 5",
    "title": "Naš 16. Juni 2026",
    "text": "Datum kada je naša priča počela i kada je moj život dobio najljepši smisao.",
    "note": "16.06.2026 — Naš datum zauvijek."
  },
  {
    "id": 6,
    "category": "compliment",
    "tag": "Dan 6",
    "title": "Tvoj Predivni Osmijeh",
    "text": "Tvoj iskreni osmijeh i onaj sjaj u tvojim očima obasjaju svaki moj dan.",
    "note": "Najljepša si na svijetu."
  },
  {
    "id": 7,
    "category": "love",
    "tag": "Dan 7",
    "title": "Moj Mir i Sigurna Luka",
    "text": "U tvom zagrljaju zaboravim na sve brige ovoga svijeta. Sa tobom sam kod kuće.",
    "note": "Moje najsigurnije mjesto."
  },
  {
    "id": 8,
    "category": "future",
    "tag": "Dan 8",
    "title": "Zauvijek Ti i Ja",
    "text": "Radujem se svakom novom danu, putovanju i godinama koje ćemo provesti zajedno.",
    "note": "Mi protiv cijelog svijeta."
  },
  {
    "id": 9,
    "category": "quirk",
    "tag": "Dan 9",
    "title": "Tvoj Pogled",
    "text": "Onaj tvoj slatki pogled kad me krišom posmatraš...",
    "note": "Uvijek te primijetim i srce mi zaigra."
  },
  {
    "id": 10,
    "category": "compliment",
    "tag": "Dan 10",
    "title": "Ponos Moj",
    "text": "Nevjerovatno sam ponosan na tebe, na tvoju dobrotu, tvoju snagu i tvoje veliko srce.",
    "note": "Moja Amila."
  },
  {
    "id": 11,
    "category": "love",
    "tag": "Dan 11",
    "title": "The Peace You Bring",
    "text": "The way the entire world goes quiet the second you hug me. With you, I am finally home.",
    "note": "Every heavy day melts away in your arms."
  },
  {
    "id": 12,
    "category": "compliment",
    "tag": "Dan 12",
    "title": "Your Radiant Smile",
    "text": "The crinkle around your eyes whenever you genuinely laugh. It is the most beautiful sight in the world.",
    "note": "You light up any room you walk into."
  },
  {
    "id": 13,
    "category": "memory",
    "tag": "Dan 13",
    "title": "Our First Real Conversation",
    "text": "How hours felt like minutes because talking to you was as effortless as breathing.",
    "note": "I remember realizing right then that you were special."
  },
  {
    "id": 14,
    "category": "quirk",
    "tag": "Dan 14",
    "title": "Your Cute Little Dance",
    "text": "That adorable little happy dance you do whenever delicious food arrives at the table.",
    "note": "Never stop doing it—it melts my heart every single time."
  },
  {
    "id": 15,
    "category": "love",
    "tag": "Dan 15",
    "title": "How Safe You Make Me Feel",
    "text": "You are the one person I never have to wear a mask around. I can be completely, unfiltered me with you.",
    "note": "My sanctuary in a noisy world."
  },
  {
    "id": 16,
    "category": "compliment",
    "tag": "Dan 16",
    "title": "The Depth of Your Heart",
    "text": "The way you care so deeply about the people in your life. Your empathy and warmth are rare treasures.",
    "note": "You love with your whole soul."
  },
  {
    "id": 17,
    "category": "memory",
    "tag": "Dan 17",
    "title": "Late Night Car Rides",
    "text": "Singing at the top of our lungs with the windows down and the cool night air flowing through.",
    "note": "Those nights felt infinite."
  },
  {
    "id": 18,
    "category": "future",
    "tag": "Dan 18",
    "title": "Growing Old With You",
    "text": "The thought of holding your wrinkled hands when we're 80 and laughing about the exact same silly jokes.",
    "note": "A lifetime with you is my greatest dream."
  },
  {
    "id": 19,
    "category": "joke",
    "tag": "Dan 19",
    "title": "Hoodie Thief",
    "text": "The way my favorite oversized hoodies mysteriously migrate into your closet forever.",
    "note": "They look ten times better on you anyway."
  },
  {
    "id": 20,
    "category": "love",
    "tag": "Dan 20",
    "title": "Unwavering Support",
    "text": "You believe in me even on the days I struggle to believe in myself. You are my biggest cheerleader.",
    "note": "Thank you for always having my back."
  },
  {
    "id": 21,
    "category": "compliment",
    "tag": "Dan 21",
    "title": "Your Brilliant Mind",
    "text": "The way your brain works—sharp, curious, creative, and always teaching me new ways to see the world.",
    "note": "I could listen to you analyze things for hours."
  },
  {
    "id": 22,
    "category": "memory",
    "tag": "Dan 22",
    "title": "Spontaneous Laughter Fits",
    "text": "That time we laughed so hard at absolutely nothing until our stomachs hurt and tears streamed down our faces.",
    "note": "Pure, unadulterated joy."
  },
  {
    "id": 23,
    "category": "quirk",
    "tag": "Dan 23",
    "title": "Sleepy Morning Voice",
    "text": "Your raspy, half-asleep morning voice when you first open your eyes and reach out for cuddles.",
    "note": "The sweetest sound in the morning."
  },
  {
    "id": 24,
    "category": "love",
    "tag": "Dan 24",
    "title": "Your Endless Patience",
    "text": "How gentle and understanding you are when things get stressful or messy.",
    "note": "Your patience grounds me when life gets chaotic."
  },
  {
    "id": 25,
    "category": "compliment",
    "tag": "Dan 25",
    "title": "Your Infectious Energy",
    "text": "Your passion when you talk about things you love. Your eyes sparkle with genuine fire.",
    "note": "It is impossible not to fall for your enthusiasm."
  },
  {
    "id": 26,
    "category": "future",
    "tag": "Dan 26",
    "title": "Our Next Adventure",
    "text": "Exploring foreign streets together, getting delightfully lost, and finding tiny cafes hand-in-hand.",
    "note": "Every journey is better with you by my side."
  },
  {
    "id": 27,
    "category": "memory",
    "tag": "Dan 27",
    "title": "Dancing in the Kitchen",
    "text": "Swaying together to quiet music while dinner was cooking, not caring at all that we had two left feet.",
    "note": "Just you, me, and the music."
  },
  {
    "id": 28,
    "category": "joke",
    "tag": "Dan 28",
    "title": "The 'I Don't Know, You Pick' Dilemma",
    "text": "How picking what to eat takes 45 minutes of gentle negotiations every single weekend.",
    "note": "I still wouldn't trade our food debates for the world."
  },
  {
    "id": 29,
    "category": "love",
    "tag": "Dan 29",
    "title": "How You Love My Flaws",
    "text": "You know every weird quirk, insecurity, and imperfection of mine, and you embrace them all.",
    "note": "You make me love who I am."
  },
  {
    "id": 30,
    "category": "compliment",
    "tag": "Dan 30",
    "title": "Your Natural Grace",
    "text": "The quiet elegance in how you carry yourself. You are effortlessly graceful and stunning.",
    "note": "You turn heads without even trying."
  },
  {
    "id": 31,
    "category": "quirk",
    "tag": "Dan 31",
    "title": "The Concentration Face",
    "text": "The tiny face you make with your lips when you are focusing really hard on a task.",
    "note": "The most endearing sight ever."
  },
  {
    "id": 32,
    "category": "memory",
    "tag": "Dan 32",
    "title": "Rainy Day Stay-ins",
    "text": "Wrapped up under heavy blankets with warm mugs, listening to the rain tap against the window glass.",
    "note": "Perfection in quiet stillness."
  },
  {
    "id": 33,
    "category": "love",
    "tag": "Dan 33",
    "title": "Teamwork & Partnership",
    "text": "We don't just love each other; we make the absolute best team. Life is easier tackle with you.",
    "note": "Us against the world, always."
  },
  {
    "id": 34,
    "category": "compliment",
    "tag": "Dan 34",
    "title": "Your Generous Spirit",
    "text": "How naturally you give love, kindness, and time to others without expecting anything in return.",
    "note": "Your heart is made of pure gold."
  },
  {
    "id": 35,
    "category": "future",
    "tag": "Dan 35",
    "title": "Morning Coffees Forever",
    "text": "A thousand more Sunday mornings waking up slow, brewing fresh coffee, and savoring the quiet with you.",
    "note": "The simplest luxury."
  },
  {
    "id": 36,
    "category": "joke",
    "tag": "Dan 36",
    "title": "Cold Feet In Bed",
    "text": "How your ice-cold toes always find their way directly under my legs for warmth.",
    "note": "I am officially your personal human space heater."
  },
  {
    "id": 37,
    "category": "love",
    "tag": "Dan 37",
    "title": "Your Comforting Touch",
    "text": "A single touch from your hand has the power to soothe any anxiety I'm carrying.",
    "note": "Instant peace in your fingers."
  },
  {
    "id": 38,
    "category": "compliment",
    "tag": "Dan 38",
    "title": "Your Sense of Style",
    "text": "How you can look breathtaking in an oversized sweatpant set or in a fancy dress.",
    "note": "Always the prettiest girl in the world."
  },
  {
    "id": 39,
    "category": "memory",
    "tag": "Dan 39",
    "title": "That Long Stare",
    "text": "The moment we locked eyes across the room and both smiled, sharing a private joke without speaking.",
    "note": "Telepathy at its finest."
  },
  {
    "id": 40,
    "category": "quirk",
    "tag": "Dan 40",
    "title": "The Excited Squeal",
    "text": "The little high-pitched squeal you let out when you see a cute puppy or kitten.",
    "note": "Pure wholesome happiness."
  },
  {
    "id": 41,
    "category": "love",
    "tag": "Dan 41",
    "title": "You Make Me Want to Be Better",
    "text": "Being loved by you inspires me every day to be kinder, more thoughtful, and more ambitious.",
    "note": "You bring out the best in me."
  },
  {
    "id": 42,
    "category": "compliment",
    "tag": "Dan 42",
    "title": "Your Unmatched Humor",
    "text": "How funny you are! You have this quick, witty humor that catches me off guard and makes me choke on my drink.",
    "note": "My favorite comedian."
  },
  {
    "id": 43,
    "category": "future",
    "tag": "Dan 43",
    "title": "Building Our Sanctuary",
    "text": "Designing a cozy home filled with plants, soft lights, framed memories, and our laughter.",
    "note": "Every corner built with love."
  },
  {
    "id": 44,
    "category": "memory",
    "tag": "Dan 44",
    "title": "Watching the Sunset",
    "text": "Sitting shoulder to shoulder watching the sky turn pink and lavender, wishing time would pause.",
    "note": "Golden hour looks better on you."
  },
  {
    "id": 45,
    "category": "joke",
    "tag": "Dan 45",
    "title": "Tasting 'One Bite'",
    "text": "When you say you don't want fries, but then eat half of mine because 'they taste better from your plate.'",
    "note": "You can have my fries forever."
  },
  {
    "id": 46,
    "category": "love",
    "tag": "Dan 46",
    "title": "How You Listen",
    "text": "You don't just wait for your turn to speak; you genuinely hear and remember the little things I share.",
    "note": "Being truly heard is rare, and you give that freely."
  },
  {
    "id": 47,
    "category": "compliment",
    "tag": "Dan 47",
    "title": "Your Strength & Resilience",
    "text": "The courage and resilience you show when life throws obstacles in your path. You are so strong.",
    "note": "I admire your perseverance endlessly."
  },
  {
    "id": 48,
    "category": "quirk",
    "tag": "Dan 48",
    "title": "Song Lyric Remixes",
    "text": "How you sing the wrong lyrics with complete confidence and make the song 100 times better.",
    "note": "Your version is the official version to me."
  },
  {
    "id": 49,
    "category": "memory",
    "tag": "Dan 49",
    "title": "Late Night Heart-to-Hearts",
    "text": "Lying in the dark talking about our childhoods, our fears, and the universe until 3 AM.",
    "note": "Soul-deep connection."
  },
  {
    "id": 50,
    "category": "future",
    "tag": "Dan 50",
    "title": "Stargazing Nights",
    "text": "Lying on the hood of a car far away from city lights, looking at constellations and whispering dreams.",
    "note": "You outshine all the stars."
  },
  {
    "id": 51,
    "category": "love",
    "tag": "Dan 51",
    "title": "Your Fierce Loyalty",
    "text": "Knowing you have my back no matter what happens in this unpredictable world.",
    "note": "Unbreakable trust."
  },
  {
    "id": 52,
    "category": "compliment",
    "tag": "Dan 52",
    "title": "Your Warm Hugs",
    "text": "Hugging you feels like wrapping up in a fresh blanket straight out of the dryer on a chilly night.",
    "note": "The best spot on earth."
  },
  {
    "id": 53,
    "category": "quirk",
    "tag": "Dan 53",
    "title": "The Sneaky Glances",
    "text": "Catching you looking at me with that gentle, affectionate half-smile when you think I'm not looking.",
    "note": "Caught you! And I loved it."
  },
  {
    "id": 54,
    "category": "memory",
    "tag": "Dan 54",
    "title": "That Unexpected Adventure",
    "text": "When our original plans fell apart, but we ended up having the most magical evening anyway.",
    "note": "With you, plan B is always an adventure."
  },
  {
    "id": 55,
    "category": "joke",
    "tag": "Dan 55",
    "title": "Blanket Hogging",
    "text": "How by 4:00 AM you've rolled yourself into a giant human burrito and left me with two inches of sheet.",
    "note": "Worth freezing for you."
  },
  {
    "id": 56,
    "category": "love",
    "tag": "Dan 56",
    "title": "The Little Sacrifices",
    "text": "The thoughtful little ways you prioritize our happiness and comfort every day without bragging.",
    "note": "Selfless and pure."
  },
  {
    "id": 57,
    "category": "compliment",
    "tag": "Dan 57",
    "title": "Your Compassionate Voice",
    "text": "The tone you use when you want to comfort someone. It is gentle, warm, and deeply reassuring.",
    "note": "Like a soft melody."
  },
  {
    "id": 58,
    "category": "future",
    "tag": "Dan 58",
    "title": "Creating Family Traditions",
    "text": "Inventing our own holiday traditions, weird recipes, and annual anniversary rituals.",
    "note": "Writing our story together."
  },
  {
    "id": 59,
    "category": "memory",
    "tag": "Dan 59",
    "title": "The First Time I Said 'I Love You'",
    "text": "The butterflies in my chest, the rush of emotion, and the relief when you smiled back.",
    "note": "A moment etched in my heart forever."
  },
  {
    "id": 60,
    "category": "love",
    "tag": "Dan 60",
    "title": "You Are My Person",
    "text": "Out of billions of people on this planet, my heart chose you, and it will choose you again tomorrow.",
    "note": "Forever and always."
  },
  {
    "id": 61,
    "category": "love",
    "tag": "Dan 61",
    "title": "You Celebrate My Wins",
    "text": "You get genuinely happier for my successes than I do sometimes.",
    "note": "Your pride in me means everything."
  },
  {
    "id": 62,
    "category": "compliment",
    "tag": "Dan 62",
    "title": "Your Kiss",
    "text": "The gentle way your lips meet mine. It still gives me the exact same chills as day one.",
    "note": "Magic in every kiss."
  },
  {
    "id": 63,
    "category": "quirk",
    "tag": "Dan 63",
    "title": "Your Grocery Store Curiosity",
    "text": "Examining every single snack aisle like an archaeologist discovering ancient artifacts.",
    "note": "Shopping is never boring with you."
  },
  {
    "id": 64,
    "category": "memory",
    "tag": "Dan 64",
    "title": "Cooking Mishaps",
    "text": "That time we tried a complicated recipe, failed gloriously, and ordered takeout on the living room floor.",
    "note": "Burnt food, unforgettable memories."
  },
  {
    "id": 65,
    "category": "future",
    "tag": "Dan 65",
    "title": "Breakfasts on Balconies",
    "text": "Sitting on a balcony overlooking the sea or mountains, sharing pastries in morning silence.",
    "note": "Can't wait to live that reality."
  },
  {
    "id": 66,
    "category": "joke",
    "tag": "Dan 66",
    "title": "The '5 More Minutes' Lie",
    "text": "When the alarm goes off and you negotiate for 5 minutes, which turns into 45 minutes of spooning.",
    "note": "A trap I gladly fall into."
  },
  {
    "id": 67,
    "category": "love",
    "tag": "Dan 67",
    "title": "You Understand My Silence",
    "text": "We can sit in the same room for hours without saying a word, and it feels completely full and warm.",
    "note": "Comfortable, sacred silence."
  },
  {
    "id": 68,
    "category": "compliment",
    "tag": "Dan 68",
    "title": "Your Sense of Wonder",
    "text": "How you still get amazed by rainbows, cute dogs, full moons, and pretty flowers.",
    "note": "You keep the world enchanted."
  },
  {
    "id": 69,
    "category": "quirk",
    "tag": "Dan 69",
    "title": "Your Pet Names",
    "text": "The ridiculous, made-up pet names you only whisper when nobody else is around.",
    "note": "My heart flutters every time."
  },
  {
    "id": 70,
    "category": "memory",
    "tag": "Dan 70",
    "title": "Holding Hands Across the Table",
    "text": "That quiet dinner where our fingers remained intertwined between courses.",
    "note": "Connected in every moment."
  },
  {
    "id": 71,
    "category": "love",
    "tag": "Dan 71",
    "title": "You Make Hard Days Manageable",
    "text": "No matter how chaotic work or life is, the thought of seeing you at the end of the day carries me through.",
    "note": "My light at the end of every tunnel."
  },
  {
    "id": 72,
    "category": "compliment",
    "tag": "Dan 72",
    "title": "Your Taste in Music",
    "text": "The playlists you create that become the soundtrack to our memories.",
    "note": "Every song reminds me of you now."
  },
  {
    "id": 73,
    "category": "future",
    "tag": "Dan 73",
    "title": "Adopting a Pet Together",
    "text": "Arguing over silly names for a rescue pet and showering it with way too much love.",
    "note": "Our little furry family."
  },
  {
    "id": 74,
    "category": "joke",
    "tag": "Dan 74",
    "title": "The Dramatic Sigh",
    "text": "That theatrical little sigh you give when you want attention or snacks.",
    "note": "Consider your request granted, queen."
  },
  {
    "id": 75,
    "category": "memory",
    "tag": "Dan 75",
    "title": "Getting Caught in the Downpour",
    "text": "Running under store awnings soaking wet, drenched hair and all, laughing hysterically.",
    "note": "Movies don't compare to reality with you."
  },
  {
    "id": 76,
    "category": "love",
    "tag": "Dan 76",
    "title": "You Forgive Gracefully",
    "text": "When misunderstandings happen, you look for understanding rather than winning an argument.",
    "note": "Mature, deep, real love."
  },
  {
    "id": 77,
    "category": "compliment",
    "tag": "Dan 77",
    "title": "Your Natural Scent",
    "text": "That sweet, delicate fragrance that lingers on my shirts after you've worn them.",
    "note": "My favorite aroma in existence."
  },
  {
    "id": 78,
    "category": "quirk",
    "tag": "Dan 78",
    "title": "Saving Receipts for No Reason",
    "text": "The collection of crumpled receipts and wrappers that accumulate at the bottom of your purse.",
    "note": "A mysterious treasure chest."
  },
  {
    "id": 79,
    "category": "future",
    "tag": "Dan 79",
    "title": "Anniversary Trips",
    "text": "Revisiting our favorite spots year after year and marveling at how our love has grown.",
    "note": "Milestones celebrated together."
  },
  {
    "id": 80,
    "category": "joke",
    "tag": "Dan 80",
    "title": "Selective Hearing",
    "text": "How you hear a candy wrapper crinkle from three rooms away, but 'didn't hear' when it was time to take out the trash.",
    "note": "Legendary superpower."
  },
  {
    "id": 81,
    "category": "love",
    "tag": "Dan 81",
    "title": "You Notice the Small Things",
    "text": "You remember how I like my tea, what side of the bed I prefer, and what relaxes me.",
    "note": "God is in the details, and so is your love."
  },
  {
    "id": 82,
    "category": "compliment",
    "tag": "Dan 82",
    "title": "Your Laugh Lines",
    "text": "Those delicate little creases that show up when you're beaming with happiness.",
    "note": "Proof of a life filled with joy."
  },
  {
    "id": 83,
    "category": "memory",
    "tag": "Dan 83",
    "title": "Whispering in Crowded Rooms",
    "text": "Leaning in to whisper something funny into my ear while pretending to be formal in public.",
    "note": "Our private universe."
  },
  {
    "id": 84,
    "category": "quirk",
    "tag": "Dan 84",
    "title": "Snack Hoarding",
    "text": "Hiding your favorite sweet treats in secret spots so you can enjoy them late at night.",
    "note": "Your sweet tooth is adorable."
  },
  {
    "id": 85,
    "category": "future",
    "tag": "Dan 85",
    "title": "Our Own Library Corner",
    "text": "A corner with two cozy armchairs, floor-to-ceiling bookshelves, and soft reading lamps.",
    "note": "Quiet afternoons side by side."
  },
  {
    "id": 86,
    "category": "love",
    "tag": "Dan 86",
    "title": "You Respect My Boundaries",
    "text": "You honor who I am as an individual while loving me as a partner.",
    "note": "Healthy, mature, unconditional affection."
  },
  {
    "id": 87,
    "category": "compliment",
    "tag": "Dan 87",
    "title": "Your Eloquence",
    "text": "The thoughtful way you express your feelings, writing little notes that I keep forever in my drawer.",
    "note": "Your words are poetry to me."
  },
  {
    "id": 88,
    "category": "joke",
    "tag": "Dan 88",
    "title": "The Temperature Wars",
    "text": "You shivering under two duvets while I am in shorts sweating with the fan on maximum.",
    "note": "A battle as old as time."
  },
  {
    "id": 89,
    "category": "memory",
    "tag": "Dan 89",
    "title": "Watching You Sleep",
    "text": "The utter serenity on your peaceful face while you're deep in dreamland.",
    "note": "I find myself thanking the universe."
  },
  {
    "id": 90,
    "category": "love",
    "tag": "Dan 90",
    "title": "You Protect My Peace",
    "text": "When external drama arises, you are a calming shield rather than an instigator.",
    "note": "My tranquil shore."
  },
  {
    "id": 91,
    "category": "compliment",
    "tag": "Dan 91",
    "title": "Your Expressive Eyes",
    "text": "Your eyes speak volumes before your lips even part. I can read your whole soul through them.",
    "note": "Windows into heaven."
  },
  {
    "id": 92,
    "category": "quirk",
    "tag": "Dan 92",
    "title": "Overpacking for Weekend Trips",
    "text": "Bringing seven outfits and four pairs of shoes for a two-day weekend getaway 'just in case.'",
    "note": "You are prepared for any apocalypse in style."
  },
  {
    "id": 93,
    "category": "future",
    "tag": "Dan 93",
    "title": "Cooking Masterclasses",
    "text": "Taking a silly cooking class in Italy or France and making a mess with flour.",
    "note": "Lifelong students of fun."
  },
  {
    "id": 94,
    "category": "memory",
    "tag": "Dan 94",
    "title": "The First Road Trip",
    "text": "Endless highways, gas station snacks, sharing earphones, and watching the landscape change.",
    "note": "The journey was the destination."
  },
  {
    "id": 95,
    "category": "joke",
    "tag": "Dan 95",
    "title": "Shopping Cart Rides",
    "text": "Pivoting the grocery cart like a race car driver down empty supermarket aisles.",
    "note": "Never grow up."
  },
  {
    "id": 96,
    "category": "love",
    "tag": "Dan 96",
    "title": "You Apologize Sincerely",
    "text": "Your humility and ability to reflect when things go wrong.",
    "note": "True strength lives in your heart."
  },
  {
    "id": 97,
    "category": "compliment",
    "tag": "Dan 97",
    "title": "Your Soft Hands",
    "text": "How warm and gentle your fingers feel slipped into mine on a cold winter night.",
    "note": "The perfect fit."
  },
  {
    "id": 98,
    "category": "quirk",
    "tag": "Dan 98",
    "title": "Checking the Locks 3 Times",
    "text": "Your thorough security checks before bedtime to ensure we are 100% fortified.",
    "note": "My cute little bodyguard."
  },
  {
    "id": 99,
    "category": "future",
    "tag": "Dan 99",
    "title": "Sunset Boat Rides",
    "text": "Drifting on calm water while the sky catches fire in amber and violet.",
    "note": "Peaceful horizons together."
  },
  {
    "id": 100,
    "category": "memory",
    "tag": "Dan 100",
    "title": "The Surprise You Planned",
    "text": "That sweet surprise you organized just to see a smile on my face.",
    "note": "Your thoughtfulness leaves me speechless."
  },
  {
    "id": 101,
    "category": "love",
    "tag": "Dan 101",
    "title": "You Never Let Me Settle",
    "text": "You push me to aim higher, work harder, and pursue what sets my soul on fire.",
    "note": "My greatest catalyst."
  },
  {
    "id": 102,
    "category": "compliment",
    "tag": "Dan 102",
    "title": "How You Care for Animals",
    "text": "The gentle baby voice you put on whenever you meet any dog or cat on the street.",
    "note": "Pure purity of heart."
  },
  {
    "id": 103,
    "category": "joke",
    "tag": "Dan 103",
    "title": "The 'I Have Nothing to Wear' Cry",
    "text": "Standing in front of a closet overflowing with clothes claiming you have zero options.",
    "note": "You look stunning in literally anything."
  },
  {
    "id": 104,
    "category": "memory",
    "tag": "Dan 104",
    "title": "Our Secret Signal",
    "text": "The subtle squeeze of the hand three times that means 'I love you' in public.",
    "note": "A code only we know."
  },
  {
    "id": 105,
    "category": "future",
    "tag": "Dan 105",
    "title": "Planting a Garden",
    "text": "Tending to plants, picking fresh herbs, and watching something we planted blossom together.",
    "note": "Cultivating our love like a garden."
  },
  {
    "id": 106,
    "category": "love",
    "tag": "Dan 106",
    "title": "You Stand By Your Values",
    "text": "You have strong moral integrity. You do what is right, even when it's hard.",
    "note": "A person of true honor."
  },
  {
    "id": 107,
    "category": "compliment",
    "tag": "Dan 107",
    "title": "Your Morning Glow",
    "text": "You waking up with messy hair, no makeup, and still looking more angelic than anyone.",
    "note": "Natural, breathtaking beauty."
  },
  {
    "id": 108,
    "category": "quirk",
    "tag": "Dan 108",
    "title": "Reading Spoilers",
    "text": "How you secretly look up the movie ending online because the suspense makes you too anxious.",
    "note": "I promise not to judge your cheating!"
  },
  {
    "id": 109,
    "category": "memory",
    "tag": "Dan 109",
    "title": "Late Night Fast Food Run",
    "text": "Sitting in the car at 1:00 AM eating salty fries and milkshakes like rebellious teenagers.",
    "note": "Those fries tasted like freedom."
  },
  {
    "id": 110,
    "category": "love",
    "tag": "Dan 110",
    "title": "You Are My Best Friend",
    "text": "Before anything else, you are the person I want to tell every silly, minor update of my day to.",
    "note": "My companion for life."
  },
  {
    "id": 111,
    "category": "love",
    "tag": "Dan 111",
    "title": "The Shelter in Your Hug",
    "text": "When the world is harsh, stepping into your embrace is like walking through the front door of home.",
    "note": "Safe, warm, and understood."
  },
  {
    "id": 112,
    "category": "compliment",
    "tag": "Dan 112",
    "title": "Your Gentle Confidence",
    "text": "You don't need to shout to be heard; your quiet confidence speaks with undeniable grace.",
    "note": "Admirable and magnetic."
  },
  {
    "id": 113,
    "category": "memory",
    "tag": "Dan 113",
    "title": "Our First Coffee Date",
    "text": "How neither of us wanted the cups to empty because it meant having to say goodbye.",
    "note": "I knew right then."
  },
  {
    "id": 114,
    "category": "quirk",
    "tag": "Dan 114",
    "title": "Stealing My French Fries",
    "text": "Looking at me innocently while dipping the longest fry from my plate into ketchup.",
    "note": "Fair tax for being adorable."
  },
  {
    "id": 115,
    "category": "future",
    "tag": "Dan 115",
    "title": "Snowy Cabin Weekends",
    "text": "A fireplace crackling, hot chocolate steaming, and reading by the frosted window with you.",
    "note": "The dream winter escape."
  },
  {
    "id": 116,
    "category": "joke",
    "tag": "Dan 116",
    "title": "Your GPS Challenges",
    "text": "Turning the phone upside down to figure out which way is North while walking in circles.",
    "note": "I'll be your human compass anytime."
  },
  {
    "id": 117,
    "category": "love",
    "tag": "Dan 117",
    "title": "You Hold My Hand When I'm Anxious",
    "text": "Without even having to ask, you feel my tension and gently lace your fingers into mine.",
    "note": "Intuitive tenderness."
  },
  {
    "id": 118,
    "category": "compliment",
    "tag": "Dan 118",
    "title": "Your Unfiltered Laughter",
    "text": "The unrestrained, whole-body snort of a laugh when something catches you off guard.",
    "note": "Music to my ears."
  },
  {
    "id": 119,
    "category": "memory",
    "tag": "Dan 119",
    "title": "The Beach Day",
    "text": "Salty breeze, sand between our toes, and watching the waves crash as the sun dipped low.",
    "note": "I wanted that tide to freeze."
  },
  {
    "id": 120,
    "category": "quirk",
    "tag": "Dan 120",
    "title": "Making Faces in the Mirror",
    "text": "The silly faces you test out while doing your skincare routine in the bathroom.",
    "note": "Cutest girl on the planet."
  },
  {
    "id": 121,
    "category": "future",
    "tag": "Dan 121",
    "title": "Road Trips with No Destination",
    "text": "Just a full gas tank, our favorite playlist, and seeing where the open road takes us.",
    "note": "Spontaneous adventures await."
  },
  {
    "id": 122,
    "category": "joke",
    "tag": "Dan 122",
    "title": "Your 'Nap' That Turns into 4 Hours",
    "text": "Saying 'I am just closing my eyes for 10 minutes' and waking up in another dimension.",
    "note": "Master of deep slumber."
  },
  {
    "id": 123,
    "category": "love",
    "tag": "Dan 123",
    "title": "You Remember My Small Quirks",
    "text": "Knowing I hate wet socks, like my bread extra toasted, and need quiet for 10 minutes after waking.",
    "note": "You study me with love."
  },
  {
    "id": 124,
    "category": "compliment",
    "tag": "Dan 124",
    "title": "Your Thoughtful Gifts",
    "text": "You never just buy something generic; every gift you give is laced with meaningful nostalgia.",
    "note": "You put heart into everything."
  },
  {
    "id": 125,
    "category": "memory",
    "tag": "Dan 125",
    "title": "The Stargazing Meadow",
    "text": "Lying on an old blanket looking up at millions of distant suns, holding onto each other.",
    "note": "Infinite universe, one soulmate."
  },
  {
    "id": 126,
    "category": "quirk",
    "tag": "Dan 126",
    "title": "Talking to Objects",
    "text": "Apologizing to the chair when you accidentally bump your hip into it.",
    "note": "Polite to a fault, even with furniture."
  },
  {
    "id": 127,
    "category": "future",
    "tag": "Dan 127",
    "title": "Dancing at Weddings Together",
    "text": "Being that old couple tearing up the dance floor decades from now, still head-over-heels.",
    "note": "Forever dance partners."
  },
  {
    "id": 128,
    "category": "joke",
    "tag": "Dan 128",
    "title": "The Online Shopping Cart",
    "text": "Adding $800 of items to a virtual cart, feeling the rush, and closing the tab without buying.",
    "note": "Window shopping champion."
  },
  {
    "id": 129,
    "category": "love",
    "tag": "Dan 129",
    "title": "Your Compassion for the Vulnerable",
    "text": "The way you treat waitstaff, strangers in distress, and stray animals with equal gentleness.",
    "note": "Pure, untarnished kindness."
  },
  {
    "id": 130,
    "category": "compliment",
    "tag": "Dan 130",
    "title": "Your Incredible Style",
    "text": "Whether in pajamas or a little black dress, you have an effortless aesthetic that turns heads.",
    "note": "Endlessly chic."
  },
  {
    "id": 131,
    "category": "memory",
    "tag": "Dan 131",
    "title": "Our Lazy Sunday Ritual",
    "text": "Pancakes, soft acoustic tunes, reading, and refusing to change out of loungewear all day.",
    "note": "Heaven on earth."
  },
  {
    "id": 132,
    "category": "quirk",
    "tag": "Dan 132",
    "title": "Dancing While Cooking",
    "text": "Using the wooden spoon as a microphone while simmering pasta sauce.",
    "note": "A gourmet Michelin performance."
  },
  {
    "id": 133,
    "category": "future",
    "tag": "Dan 133",
    "title": "Building Our Dream Bookshelf",
    "text": "Organizing our shared books, travel souvenirs, and photo albums side-by-side.",
    "note": "Chapters of our story."
  },
  {
    "id": 134,
    "category": "joke",
    "tag": "Dan 134",
    "title": "The Thermostat Heist",
    "text": "Secretly creeping over to bump the temperature up to 74 degrees when I turn around.",
    "note": "The Cold War is real."
  },
  {
    "id": 135,
    "category": "love",
    "tag": "Dan 135",
    "title": "You Ground My Impatience",
    "text": "When I want everything to happen yesterday, you gently remind me to breathe and enjoy the now.",
    "note": "My anchor in the storm."
  },
  {
    "id": 136,
    "category": "compliment",
    "tag": "Dan 136",
    "title": "The Spark in Your Eyes",
    "text": "When you talk about a topic you're passionate about, your pupils dilate and you shine.",
    "note": "Electrifying passion."
  },
  {
    "id": 137,
    "category": "memory",
    "tag": "Dan 137",
    "title": "Our First Trip Out of Town",
    "text": "Navigating an unfamiliar city, sharing a single umbrella, finding that hidden bakery.",
    "note": "Best travel buddy alive."
  },
  {
    "id": 138,
    "category": "quirk",
    "tag": "Dan 138",
    "title": "Obsessing Over Cute Mugs",
    "text": "Insisting that coffee tastes fundamentally better when drunk from your favorite ceramic mug.",
    "note": "Scientific fact in our house."
  },
  {
    "id": 139,
    "category": "future",
    "tag": "Dan 139",
    "title": "Watching the Northern Lights",
    "text": "Wrapped in five layers of wool in Norway or Iceland, watching the green sky dance above us.",
    "note": "Checking off bucket list dreams."
  },
  {
    "id": 140,
    "category": "joke",
    "tag": "Dan 140",
    "title": "Your Bedtime Routine",
    "text": "A 14-step skincare ritual followed by 'Can you get me a glass of water from the kitchen?'",
    "note": "Anything for my lady."
  },
  {
    "id": 141,
    "category": "love",
    "tag": "Dan 141",
    "title": "You Allow Me to Be Vulnerable",
    "text": "I can break down and cry in front of you without feeling weak or judged for a second.",
    "note": "A sanctuary of unconditional love."
  },
  {
    "id": 142,
    "category": "compliment",
    "tag": "Dan 142",
    "title": "Your Incredible Wit",
    "text": "You always have the sharpest, quickest comeback. You keep me on my toes in the best way.",
    "note": "Clever and charming."
  },
  {
    "id": 143,
    "category": "memory",
    "tag": "Dan 143",
    "title": "The First Movie We Watched",
    "text": "We barely paid attention to the plot because we were both so hyper-aware of sitting close.",
    "note": "Every scene was electric."
  },
  {
    "id": 144,
    "category": "quirk",
    "tag": "Dan 144",
    "title": "Singing Made-up Rhymes to Pets",
    "text": "Inventing elaborate operatic ballads about the dog or cat wanting breakfast.",
    "note": "Broadway caliber lyrics."
  },
  {
    "id": 145,
    "category": "future",
    "tag": "Dan 145",
    "title": "Porch Rocking Chairs",
    "text": "Sipping sweet tea on a porch swing while watching fireflies illuminate the summer dusk.",
    "note": "Golden years ahead."
  },
  {
    "id": 146,
    "category": "joke",
    "tag": "Dan 146",
    "title": "The Dramatic Reaction to Spiders",
    "text": "Calling for emergency rescue across the house because an ant was standing two feet away.",
    "note": "Your knight in shining armor arrives."
  },
  {
    "id": 147,
    "category": "love",
    "tag": "Dan 147",
    "title": "You Never Hold Grudges",
    "text": "When an issue is discussed, you forgive completely and move forward with an open heart.",
    "note": "Pure emotional maturity."
  },
  {
    "id": 148,
    "category": "compliment",
    "tag": "Dan 148",
    "title": "How You Wear My Shirts",
    "text": "How an oversized flannel looks like couture fashion when you throw it on in the morning.",
    "note": "Mine never looked so good."
  },
  {
    "id": 149,
    "category": "memory",
    "tag": "Dan 149",
    "title": "Finding Our Special Song",
    "text": "The instant both of us knew that this particular track would forever be 'our song.'",
    "note": "It still plays in my heart."
  },
  {
    "id": 150,
    "category": "quirk",
    "tag": "Dan 150",
    "title": "Smelling New Books",
    "text": "Cracking open a fresh paperback and taking a deep breath of the paper.",
    "note": "Pure bookworm delight."
  },
  {
    "id": 151,
    "category": "future",
    "tag": "Dan 151",
    "title": "Tasting Wine in Tuscany",
    "text": "Rolling green hills, vineyards, fresh bread, and your laugh echoing in the Italian sunset.",
    "note": "One day soon."
  },
  {
    "id": 152,
    "category": "joke",
    "tag": "Dan 152",
    "title": "Snack Separation Anxiety",
    "text": "Looking genuinely devastated when you reach the bottom of a bag of chips.",
    "note": "I'll buy you a factory."
  },
  {
    "id": 153,
    "category": "love",
    "tag": "Dan 153",
    "title": "How You Inspire My Growth",
    "text": "Being with you makes me want to learn more, love deeper, and dream bigger dreams.",
    "note": "You elevate my existence."
  },
  {
    "id": 154,
    "category": "compliment",
    "tag": "Dan 154",
    "title": "Your Mesmerizing Voice",
    "text": "Listening to you tell a story could put any troubled mind to rest. It is soothing medicine.",
    "note": "Calm in sonic form."
  },
  {
    "id": 155,
    "category": "memory",
    "tag": "Dan 155",
    "title": "Our Spontaneous Midnight Walk",
    "text": "The neighborhood was asleep, the air was crisp, and we walked hand-in-hand under yellow streetlights.",
    "note": "Just our footsteps and whispers."
  },
  {
    "id": 156,
    "category": "quirk",
    "tag": "Dan 156",
    "title": "Saving Greeting Cards",
    "text": "Keeping every little handwritten note and ticket stub in a special memory shoebox.",
    "note": "Sentimental and sweet."
  },
  {
    "id": 157,
    "category": "future",
    "tag": "Dan 157",
    "title": "Our Own Secret Spot",
    "text": "Finding a quiet overlook or seaside cliff that belongs only to the two of us.",
    "note": "Our private slice of the world."
  },
  {
    "id": 158,
    "category": "joke",
    "tag": "Dan 158",
    "title": "The 'I am Ready' Announcement",
    "text": "Saying 'I am ready, let's go!' while still searching for keys, shoes, and perfume.",
    "note": "Ready is a state of mind."
  },
  {
    "id": 159,
    "category": "love",
    "tag": "Dan 159",
    "title": "You Are My Constant",
    "text": "Jobs change, seasons change, life shifts—but your love is the steady heartbeat of my life.",
    "note": "My unchanging truth."
  },
  {
    "id": 160,
    "category": "compliment",
    "tag": "Dan 160",
    "title": "Your Radiant Kindness",
    "text": "You radiate an aura of gentleness that makes children and animals naturally trust you.",
    "note": "An angel's disposition."
  },
  {
    "id": 161,
    "category": "memory",
    "tag": "Dan 161",
    "title": "That Hilarious Board Game Night",
    "text": "The competitive fury that took over during Monopoly or Scrabble until we both surrendered laughing.",
    "note": "You play to win!"
  },
  {
    "id": 162,
    "category": "quirk",
    "tag": "Dan 162",
    "title": "Re-watching the Same 3 Comfort Shows",
    "text": "Having 10,000 new shows available, yet choosing Gilmore Girls or Friends for the 9th time.",
    "note": "I'll gladly watch it all over again with you."
  },
  {
    "id": 163,
    "category": "future",
    "tag": "Dan 163",
    "title": "Renewing Our Vows Decades Later",
    "text": "Looking at each other with silver hair and repeating the same promises with deeper certainty.",
    "note": "A lifetime won't be enough."
  },
  {
    "id": 164,
    "category": "joke",
    "tag": "Dan 164",
    "title": "The Secret Stash of Hair Ties",
    "text": "Finding hair pins and ties in every sofa cushion, coat pocket, and car cup holder on earth.",
    "note": "They multiply in the dark."
  },
  {
    "id": 165,
    "category": "love",
    "tag": "Dan 165",
    "title": "How You Value Family",
    "text": "Seeing the warmth and devotion you give to the people you cherish most.",
    "note": "A heart overflowing with loyalty."
  },
  {
    "id": 166,
    "category": "compliment",
    "tag": "Dan 166",
    "title": "Your Radiant Elegance",
    "text": "You don't need spotlight; people are naturally drawn to your quiet dignity and grace.",
    "note": "Pure class."
  },
  {
    "id": 167,
    "category": "memory",
    "tag": "Dan 167",
    "title": "Our First Real Trip to the Fair",
    "text": "Sharing cotton candy, riding the Ferris wheel, and looking down at the sparkling lights.",
    "note": "Carnival magic with you."
  },
  {
    "id": 168,
    "category": "quirk",
    "tag": "Dan 168",
    "title": "Stealing the Warm Towel",
    "text": "Claiming the freshly tumble-dried towel right as it comes out of the dryer.",
    "note": "Master of luxury comforts."
  },
  {
    "id": 169,
    "category": "future",
    "tag": "Dan 169",
    "title": "Making Sunday Morning Waffles",
    "text": "Making homemade waffles from scratch, dusting them with powdered sugar, and sharing bites.",
    "note": "Sweet, sticky mornings."
  },
  {
    "id": 170,
    "category": "joke",
    "tag": "Dan 170",
    "title": "The Backseat Driving Instructions",
    "text": "Giving helpful commentary on braking distance from the passenger seat.",
    "note": "My personal co-pilot."
  }
];
