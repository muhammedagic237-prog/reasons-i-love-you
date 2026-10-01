// "Reasons I Love You" & "Love Coupons" Preloaded Data
// 365 Curated Reasons & 14 Romantic Coupons

const DEFAULT_SETTINGS = {
  partnerName: "My Love",
  yourName: "Your Soulmate",
  anniversaryDate: "2024-02-14T00:00:00", // Default: Valentine's Day 2024 (editable in Settings)
  deckSize: 365, // Options: 50, 100, 365
  categoryFilter: "all",
  soundEnabled: true,
  hapticsEnabled: true,
  theme: "rose"
};

const CATEGORY_META = {
  love: { label: "Deep Love", icon: "❤️", color: "#e11d48", bg: "#ffe4e6" },
  memory: { label: "Favorite Memory", icon: "📸", color: "#8b5cf6", bg: "#f3e8ff" },
  compliment: { label: "Compliment", icon: "💫", color: "#d97706", bg: "#fef3c7" },
  quirk: { label: "Cute Quirk", icon: "✨", color: "#059669", bg: "#d1fae5" },
  future: { label: "Future Dream", icon: "🔮", color: "#2563eb", bg: "#dbeafe" },
  joke: { label: "Inside Chuckle", icon: "😂", color: "#db2777", bg: "#fce7f3" }
};

const LOVE_COUPONS = [
  {
    "id": "c1",
    "title": "30-Minute Massage",
    "icon": "💆‍♀️",
    "badge": "Relax & Pamper",
    "desc": "Good for one uninterrupted back, shoulder, or foot massage with warm lotion and calm music. No rushing.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c2",
    "title": "I'll Do the Dishes Tonight",
    "icon": "🍽️",
    "badge": "Chore Pass",
    "desc": "You don't lift a single finger in the kitchen tonight. I'll cook, clean the pans, scrub the counters, and take out the trash.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c3",
    "title": "You Pick the Movie & Snacks",
    "icon": "🎬",
    "badge": "Movie Night",
    "desc": "Complete veto-free control over what we watch on TV, plus unlimited sweet & salty snacks of your choice.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c4",
    "title": "One Free Argument Win",
    "icon": "👑",
    "badge": "Golden Pass",
    "desc": "Redeem this at any time to instantly win any friendly debate. I will immediately concede that you were right all along!",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c5",
    "title": "Breakfast in Bed",
    "icon": "🥞",
    "badge": "Morning Luxury",
    "desc": "Fresh warm pancakes, waffles, or eggs served to you in bed with freshly brewed coffee or your favorite tea.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c6",
    "title": "Late Night Dessert Run",
    "icon": "🍦",
    "badge": "Sweet Tooth",
    "desc": "Whatever sweet treat you are craving at 10 PM—ice cream, warm cookies, boba, or pastries—I will go pick it up for you.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c7",
    "title": "Cuddle Marathon on Demand",
    "icon": "🧸",
    "badge": "Warmth",
    "desc": "One hour of uninterrupted snuggling under the blankets with zero phone distractions.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c8",
    "title": "Fancy Dinner Date (My Treat)",
    "icon": "🍷",
    "badge": "Date Night",
    "desc": "Dress up and let's go somewhere romantic. The reservation, wine, dessert, and bill are 100% on me.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c9",
    "title": "Car Wash & Gas Fill-Up",
    "icon": "🚗",
    "badge": "Special Service",
    "desc": "I will take your car, fill the tank to full, wipe down the dashboard, and make it sparkle inside and out.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c10",
    "title": "Spontaneous Road Trip",
    "icon": "🗺️",
    "badge": "Adventure",
    "desc": "Pick a direction on the map! We pack a bag, grab snacks, roll the windows down, and take a weekend getaway.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c11",
    "title": "Guilt-Free Sleep In",
    "icon": "😴",
    "badge": "Rest",
    "desc": "No morning alarms, no noise, and no interruptions. Sleep until whenever you feel like waking up.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c12",
    "title": "Personal Butler for the Day",
    "icon": "🤵",
    "badge": "VIP Royalty",
    "desc": "Need a drink? A blanket? A snack? Today your wish is my command. At your service, your majesty.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c13",
    "title": "Outfit of Your Choice",
    "icon": "👔",
    "badge": "Style",
    "desc": "You get to pick exactly what I wear for our next date—even if it's matching outfits or your favorite color.",
    "claimed": false,
    "claimedAt": null
  },
  {
    "id": "c14",
    "title": "Wildcard Wish",
    "icon": "✨",
    "badge": "Infinite Magic",
    "desc": "Write your own wish! Valid for anything romantic, fun, or sweet that you can imagine.",
    "claimed": false,
    "claimedAt": null
  }
];

const REASONS_DATABASE = [
  {
    "id": 1,
    "category": "love",
    "tag": "Day 1",
    "title": "The Peace You Bring",
    "text": "The way the entire world goes quiet the second you hug me. With you, I am finally home.",
    "note": "Every heavy day melts away in your arms."
  },
  {
    "id": 2,
    "category": "compliment",
    "tag": "Day 2",
    "title": "Your Radiant Smile",
    "text": "The crinkle around your eyes whenever you genuinely laugh. It is the most beautiful sight in the world.",
    "note": "You light up any room you walk into."
  },
  {
    "id": 3,
    "category": "memory",
    "tag": "Day 3",
    "title": "Our First Real Conversation",
    "text": "How hours felt like minutes because talking to you was as effortless as breathing.",
    "note": "I remember realizing right then that you were special."
  },
  {
    "id": 4,
    "category": "quirk",
    "tag": "Day 4",
    "title": "Your Cute Little Dance",
    "text": "That adorable little happy dance you do whenever delicious food arrives at the table.",
    "note": "Never stop doing it—it melts my heart every single time."
  },
  {
    "id": 5,
    "category": "love",
    "tag": "Day 5",
    "title": "How Safe You Make Me Feel",
    "text": "You are the one person I never have to wear a mask around. I can be completely, unfiltered me with you.",
    "note": "My sanctuary in a noisy world."
  },
  {
    "id": 6,
    "category": "compliment",
    "tag": "Day 6",
    "title": "The Depth of Your Heart",
    "text": "The way you care so deeply about the people in your life. Your empathy and warmth are rare treasures.",
    "note": "You love with your whole soul."
  },
  {
    "id": 7,
    "category": "memory",
    "tag": "Day 7",
    "title": "Late Night Car Rides",
    "text": "Singing at the top of our lungs with the windows down and the cool night air flowing through.",
    "note": "Those nights felt infinite."
  },
  {
    "id": 8,
    "category": "future",
    "tag": "Day 8",
    "title": "Growing Old With You",
    "text": "The thought of holding your wrinkled hands when we're 80 and laughing about the exact same silly jokes.",
    "note": "A lifetime with you is my greatest dream."
  },
  {
    "id": 9,
    "category": "joke",
    "tag": "Day 9",
    "title": "Hoodie Thief",
    "text": "The way my favorite oversized hoodies mysteriously migrate into your closet forever.",
    "note": "They look ten times better on you anyway."
  },
  {
    "id": 10,
    "category": "love",
    "tag": "Day 10",
    "title": "Unwavering Support",
    "text": "You believe in me even on the days I struggle to believe in myself. You are my biggest cheerleader.",
    "note": "Thank you for always having my back."
  },
  {
    "id": 11,
    "category": "compliment",
    "tag": "Day 11",
    "title": "Your Brilliant Mind",
    "text": "The way your brain works—sharp, curious, creative, and always teaching me new ways to see the world.",
    "note": "I could listen to you analyze things for hours."
  },
  {
    "id": 12,
    "category": "memory",
    "tag": "Day 12",
    "title": "Spontaneous Laughter Fits",
    "text": "That time we laughed so hard at absolutely nothing until our stomachs hurt and tears streamed down our faces.",
    "note": "Pure, unadulterated joy."
  },
  {
    "id": 13,
    "category": "quirk",
    "tag": "Day 13",
    "title": "Sleepy Morning Voice",
    "text": "Your raspy, half-asleep morning voice when you first open your eyes and reach out for cuddles.",
    "note": "The sweetest sound in the morning."
  },
  {
    "id": 14,
    "category": "love",
    "tag": "Day 14",
    "title": "Your Endless Patience",
    "text": "How gentle and understanding you are when things get stressful or messy.",
    "note": "Your patience grounds me when life gets chaotic."
  },
  {
    "id": 15,
    "category": "compliment",
    "tag": "Day 15",
    "title": "Your Infectious Energy",
    "text": "Your passion when you talk about things you love. Your eyes sparkle with genuine fire.",
    "note": "It is impossible not to fall for your enthusiasm."
  },
  {
    "id": 16,
    "category": "future",
    "tag": "Day 16",
    "title": "Our Next Adventure",
    "text": "Exploring foreign streets together, getting delightfully lost, and finding tiny cafes hand-in-hand.",
    "note": "Every journey is better with you by my side."
  },
  {
    "id": 17,
    "category": "memory",
    "tag": "Day 17",
    "title": "Dancing in the Kitchen",
    "text": "Swaying together to quiet music while dinner was cooking, not caring at all that we had two left feet.",
    "note": "Just you, me, and the music."
  },
  {
    "id": 18,
    "category": "joke",
    "tag": "Day 18",
    "title": "The 'I Don't Know, You Pick' Dilemma",
    "text": "How picking what to eat takes 45 minutes of gentle negotiations every single weekend.",
    "note": "I still wouldn't trade our food debates for the world."
  },
  {
    "id": 19,
    "category": "love",
    "tag": "Day 19",
    "title": "How You Love My Flaws",
    "text": "You know every weird quirk, insecurity, and imperfection of mine, and you embrace them all.",
    "note": "You make me love who I am."
  },
  {
    "id": 20,
    "category": "compliment",
    "tag": "Day 20",
    "title": "Your Natural Grace",
    "text": "The quiet elegance in how you carry yourself. You are effortlessly graceful and stunning.",
    "note": "You turn heads without even trying."
  },
  {
    "id": 21,
    "category": "quirk",
    "tag": "Day 21",
    "title": "The Concentration Face",
    "text": "The tiny face you make with your lips when you are focusing really hard on a task.",
    "note": "The most endearing sight ever."
  },
  {
    "id": 22,
    "category": "memory",
    "tag": "Day 22",
    "title": "Rainy Day Stay-ins",
    "text": "Wrapped up under heavy blankets with warm mugs, listening to the rain tap against the window glass.",
    "note": "Perfection in quiet stillness."
  },
  {
    "id": 23,
    "category": "love",
    "tag": "Day 23",
    "title": "Teamwork & Partnership",
    "text": "We don't just love each other; we make the absolute best team. Life is easier tackle with you.",
    "note": "Us against the world, always."
  },
  {
    "id": 24,
    "category": "compliment",
    "tag": "Day 24",
    "title": "Your Generous Spirit",
    "text": "How naturally you give love, kindness, and time to others without expecting anything in return.",
    "note": "Your heart is made of pure gold."
  },
  {
    "id": 25,
    "category": "future",
    "tag": "Day 25",
    "title": "Morning Coffees Forever",
    "text": "A thousand more Sunday mornings waking up slow, brewing fresh coffee, and savoring the quiet with you.",
    "note": "The simplest luxury."
  },
  {
    "id": 26,
    "category": "joke",
    "tag": "Day 26",
    "title": "Cold Feet In Bed",
    "text": "How your ice-cold toes always find their way directly under my legs for warmth.",
    "note": "I am officially your personal human space heater."
  },
  {
    "id": 27,
    "category": "love",
    "tag": "Day 27",
    "title": "Your Comforting Touch",
    "text": "A single touch from your hand has the power to soothe any anxiety I'm carrying.",
    "note": "Instant peace in your fingers."
  },
  {
    "id": 28,
    "category": "compliment",
    "tag": "Day 28",
    "title": "Your Sense of Style",
    "text": "How you can look breathtaking in an oversized sweatpant set or in a fancy dress.",
    "note": "Always the prettiest girl in the world."
  },
  {
    "id": 29,
    "category": "memory",
    "tag": "Day 29",
    "title": "That Long Stare",
    "text": "The moment we locked eyes across the room and both smiled, sharing a private joke without speaking.",
    "note": "Telepathy at its finest."
  },
  {
    "id": 30,
    "category": "quirk",
    "tag": "Day 30",
    "title": "The Excited Squeal",
    "text": "The little high-pitched squeal you let out when you see a cute puppy or kitten.",
    "note": "Pure wholesome happiness."
  },
  {
    "id": 31,
    "category": "love",
    "tag": "Day 31",
    "title": "You Make Me Want to Be Better",
    "text": "Being loved by you inspires me every day to be kinder, more thoughtful, and more ambitious.",
    "note": "You bring out the best in me."
  },
  {
    "id": 32,
    "category": "compliment",
    "tag": "Day 32",
    "title": "Your Unmatched Humor",
    "text": "How funny you are! You have this quick, witty humor that catches me off guard and makes me choke on my drink.",
    "note": "My favorite comedian."
  },
  {
    "id": 33,
    "category": "future",
    "tag": "Day 33",
    "title": "Building Our Sanctuary",
    "text": "Designing a cozy home filled with plants, soft lights, framed memories, and our laughter.",
    "note": "Every corner built with love."
  },
  {
    "id": 34,
    "category": "memory",
    "tag": "Day 34",
    "title": "Watching the Sunset",
    "text": "Sitting shoulder to shoulder watching the sky turn pink and lavender, wishing time would pause.",
    "note": "Golden hour looks better on you."
  },
  {
    "id": 35,
    "category": "joke",
    "tag": "Day 35",
    "title": "Tasting 'One Bite'",
    "text": "When you say you don't want fries, but then eat half of mine because 'they taste better from your plate.'",
    "note": "You can have my fries forever."
  },
  {
    "id": 36,
    "category": "love",
    "tag": "Day 36",
    "title": "How You Listen",
    "text": "You don't just wait for your turn to speak; you genuinely hear and remember the little things I share.",
    "note": "Being truly heard is rare, and you give that freely."
  },
  {
    "id": 37,
    "category": "compliment",
    "tag": "Day 37",
    "title": "Your Strength & Resilience",
    "text": "The courage and resilience you show when life throws obstacles in your path. You are so strong.",
    "note": "I admire your perseverance endlessly."
  },
  {
    "id": 38,
    "category": "quirk",
    "tag": "Day 38",
    "title": "Song Lyric Remixes",
    "text": "How you sing the wrong lyrics with complete confidence and make the song 100 times better.",
    "note": "Your version is the official version to me."
  },
  {
    "id": 39,
    "category": "memory",
    "tag": "Day 39",
    "title": "Late Night Heart-to-Hearts",
    "text": "Lying in the dark talking about our childhoods, our fears, and the universe until 3 AM.",
    "note": "Soul-deep connection."
  },
  {
    "id": 40,
    "category": "future",
    "tag": "Day 40",
    "title": "Stargazing Nights",
    "text": "Lying on the hood of a car far away from city lights, looking at constellations and whispering dreams.",
    "note": "You outshine all the stars."
  },
  {
    "id": 41,
    "category": "love",
    "tag": "Day 41",
    "title": "Your Fierce Loyalty",
    "text": "Knowing you have my back no matter what happens in this unpredictable world.",
    "note": "Unbreakable trust."
  },
  {
    "id": 42,
    "category": "compliment",
    "tag": "Day 42",
    "title": "Your Warm Hugs",
    "text": "Hugging you feels like wrapping up in a fresh blanket straight out of the dryer on a chilly night.",
    "note": "The best spot on earth."
  },
  {
    "id": 43,
    "category": "quirk",
    "tag": "Day 43",
    "title": "The Sneaky Glances",
    "text": "Catching you looking at me with that gentle, affectionate half-smile when you think I'm not looking.",
    "note": "Caught you! And I loved it."
  },
  {
    "id": 44,
    "category": "memory",
    "tag": "Day 44",
    "title": "That Unexpected Adventure",
    "text": "When our original plans fell apart, but we ended up having the most magical evening anyway.",
    "note": "With you, plan B is always an adventure."
  },
  {
    "id": 45,
    "category": "joke",
    "tag": "Day 45",
    "title": "Blanket Hogging",
    "text": "How by 4:00 AM you've rolled yourself into a giant human burrito and left me with two inches of sheet.",
    "note": "Worth freezing for you."
  },
  {
    "id": 46,
    "category": "love",
    "tag": "Day 46",
    "title": "The Little Sacrifices",
    "text": "The thoughtful little ways you prioritize our happiness and comfort every day without bragging.",
    "note": "Selfless and pure."
  },
  {
    "id": 47,
    "category": "compliment",
    "tag": "Day 47",
    "title": "Your Compassionate Voice",
    "text": "The tone you use when you want to comfort someone. It is gentle, warm, and deeply reassuring.",
    "note": "Like a soft melody."
  },
  {
    "id": 48,
    "category": "future",
    "tag": "Day 48",
    "title": "Creating Family Traditions",
    "text": "Inventing our own holiday traditions, weird recipes, and annual anniversary rituals.",
    "note": "Writing our story together."
  },
  {
    "id": 49,
    "category": "memory",
    "tag": "Day 49",
    "title": "The First Time I Said 'I Love You'",
    "text": "The butterflies in my chest, the rush of emotion, and the relief when you smiled back.",
    "note": "A moment etched in my heart forever."
  },
  {
    "id": 50,
    "category": "love",
    "tag": "Day 50",
    "title": "You Are My Person",
    "text": "Out of billions of people on this planet, my heart chose you, and it will choose you again tomorrow.",
    "note": "Forever and always."
  },
  {
    "id": 51,
    "category": "love",
    "tag": "Day 51",
    "title": "You Celebrate My Wins",
    "text": "You get genuinely happier for my successes than I do sometimes.",
    "note": "Your pride in me means everything."
  },
  {
    "id": 52,
    "category": "compliment",
    "tag": "Day 52",
    "title": "Your Kiss",
    "text": "The gentle way your lips meet mine. It still gives me the exact same chills as day one.",
    "note": "Magic in every kiss."
  },
  {
    "id": 53,
    "category": "quirk",
    "tag": "Day 53",
    "title": "Your Grocery Store Curiosity",
    "text": "Examining every single snack aisle like an archaeologist discovering ancient artifacts.",
    "note": "Shopping is never boring with you."
  },
  {
    "id": 54,
    "category": "memory",
    "tag": "Day 54",
    "title": "Cooking Mishaps",
    "text": "That time we tried a complicated recipe, failed gloriously, and ordered takeout on the living room floor.",
    "note": "Burnt food, unforgettable memories."
  },
  {
    "id": 55,
    "category": "future",
    "tag": "Day 55",
    "title": "Breakfasts on Balconies",
    "text": "Sitting on a balcony overlooking the sea or mountains, sharing pastries in morning silence.",
    "note": "Can't wait to live that reality."
  },
  {
    "id": 56,
    "category": "joke",
    "tag": "Day 56",
    "title": "The '5 More Minutes' Lie",
    "text": "When the alarm goes off and you negotiate for 5 minutes, which turns into 45 minutes of spooning.",
    "note": "A trap I gladly fall into."
  },
  {
    "id": 57,
    "category": "love",
    "tag": "Day 57",
    "title": "You Understand My Silence",
    "text": "We can sit in the same room for hours without saying a word, and it feels completely full and warm.",
    "note": "Comfortable, sacred silence."
  },
  {
    "id": 58,
    "category": "compliment",
    "tag": "Day 58",
    "title": "Your Sense of Wonder",
    "text": "How you still get amazed by rainbows, cute dogs, full moons, and pretty flowers.",
    "note": "You keep the world enchanted."
  },
  {
    "id": 59,
    "category": "quirk",
    "tag": "Day 59",
    "title": "Your Pet Names",
    "text": "The ridiculous, made-up pet names you only whisper when nobody else is around.",
    "note": "My heart flutters every time."
  },
  {
    "id": 60,
    "category": "memory",
    "tag": "Day 60",
    "title": "Holding Hands Across the Table",
    "text": "That quiet dinner where our fingers remained intertwined between courses.",
    "note": "Connected in every moment."
  },
  {
    "id": 61,
    "category": "love",
    "tag": "Day 61",
    "title": "You Make Hard Days Manageable",
    "text": "No matter how chaotic work or life is, the thought of seeing you at the end of the day carries me through.",
    "note": "My light at the end of every tunnel."
  },
  {
    "id": 62,
    "category": "compliment",
    "tag": "Day 62",
    "title": "Your Taste in Music",
    "text": "The playlists you create that become the soundtrack to our memories.",
    "note": "Every song reminds me of you now."
  },
  {
    "id": 63,
    "category": "future",
    "tag": "Day 63",
    "title": "Adopting a Pet Together",
    "text": "Arguing over silly names for a rescue pet and showering it with way too much love.",
    "note": "Our little furry family."
  },
  {
    "id": 64,
    "category": "joke",
    "tag": "Day 64",
    "title": "The Dramatic Sigh",
    "text": "That theatrical little sigh you give when you want attention or snacks.",
    "note": "Consider your request granted, queen."
  },
  {
    "id": 65,
    "category": "memory",
    "tag": "Day 65",
    "title": "Getting Caught in the Downpour",
    "text": "Running under store awnings soaking wet, drenched hair and all, laughing hysterically.",
    "note": "Movies don't compare to reality with you."
  },
  {
    "id": 66,
    "category": "love",
    "tag": "Day 66",
    "title": "You Forgive Gracefully",
    "text": "When misunderstandings happen, you look for understanding rather than winning an argument.",
    "note": "Mature, deep, real love."
  },
  {
    "id": 67,
    "category": "compliment",
    "tag": "Day 67",
    "title": "Your Natural Scent",
    "text": "That sweet, delicate fragrance that lingers on my shirts after you've worn them.",
    "note": "My favorite aroma in existence."
  },
  {
    "id": 68,
    "category": "quirk",
    "tag": "Day 68",
    "title": "Saving Receipts for No Reason",
    "text": "The collection of crumpled receipts and wrappers that accumulate at the bottom of your purse.",
    "note": "A mysterious treasure chest."
  },
  {
    "id": 69,
    "category": "future",
    "tag": "Day 69",
    "title": "Anniversary Trips",
    "text": "Revisiting our favorite spots year after year and marveling at how our love has grown.",
    "note": "Milestones celebrated together."
  },
  {
    "id": 70,
    "category": "joke",
    "tag": "Day 70",
    "title": "Selective Hearing",
    "text": "How you hear a candy wrapper crinkle from three rooms away, but 'didn't hear' when it was time to take out the trash.",
    "note": "Legendary superpower."
  },
  {
    "id": 71,
    "category": "love",
    "tag": "Day 71",
    "title": "You Notice the Small Things",
    "text": "You remember how I like my tea, what side of the bed I prefer, and what relaxes me.",
    "note": "God is in the details, and so is your love."
  },
  {
    "id": 72,
    "category": "compliment",
    "tag": "Day 72",
    "title": "Your Laugh Lines",
    "text": "Those delicate little creases that show up when you're beaming with happiness.",
    "note": "Proof of a life filled with joy."
  },
  {
    "id": 73,
    "category": "memory",
    "tag": "Day 73",
    "title": "Whispering in Crowded Rooms",
    "text": "Leaning in to whisper something funny into my ear while pretending to be formal in public.",
    "note": "Our private universe."
  },
  {
    "id": 74,
    "category": "quirk",
    "tag": "Day 74",
    "title": "Snack Hoarding",
    "text": "Hiding your favorite sweet treats in secret spots so you can enjoy them late at night.",
    "note": "Your sweet tooth is adorable."
  },
  {
    "id": 75,
    "category": "future",
    "tag": "Day 75",
    "title": "Our Own Library Corner",
    "text": "A corner with two cozy armchairs, floor-to-ceiling bookshelves, and soft reading lamps.",
    "note": "Quiet afternoons side by side."
  },
  {
    "id": 76,
    "category": "love",
    "tag": "Day 76",
    "title": "You Respect My Boundaries",
    "text": "You honor who I am as an individual while loving me as a partner.",
    "note": "Healthy, mature, unconditional affection."
  },
  {
    "id": 77,
    "category": "compliment",
    "tag": "Day 77",
    "title": "Your Eloquence",
    "text": "The thoughtful way you express your feelings, writing little notes that I keep forever in my drawer.",
    "note": "Your words are poetry to me."
  },
  {
    "id": 78,
    "category": "joke",
    "tag": "Day 78",
    "title": "The Temperature Wars",
    "text": "You shivering under two duvets while I am in shorts sweating with the fan on maximum.",
    "note": "A battle as old as time."
  },
  {
    "id": 79,
    "category": "memory",
    "tag": "Day 79",
    "title": "Watching You Sleep",
    "text": "The utter serenity on your peaceful face while you're deep in dreamland.",
    "note": "I find myself thanking the universe."
  },
  {
    "id": 80,
    "category": "love",
    "tag": "Day 80",
    "title": "You Protect My Peace",
    "text": "When external drama arises, you are a calming shield rather than an instigator.",
    "note": "My tranquil shore."
  },
  {
    "id": 81,
    "category": "compliment",
    "tag": "Day 81",
    "title": "Your Expressive Eyes",
    "text": "Your eyes speak volumes before your lips even part. I can read your whole soul through them.",
    "note": "Windows into heaven."
  },
  {
    "id": 82,
    "category": "quirk",
    "tag": "Day 82",
    "title": "Overpacking for Weekend Trips",
    "text": "Bringing seven outfits and four pairs of shoes for a two-day weekend getaway 'just in case.'",
    "note": "You are prepared for any apocalypse in style."
  },
  {
    "id": 83,
    "category": "future",
    "tag": "Day 83",
    "title": "Cooking Masterclasses",
    "text": "Taking a silly cooking class in Italy or France and making a mess with flour.",
    "note": "Lifelong students of fun."
  },
  {
    "id": 84,
    "category": "memory",
    "tag": "Day 84",
    "title": "The First Road Trip",
    "text": "Endless highways, gas station snacks, sharing earphones, and watching the landscape change.",
    "note": "The journey was the destination."
  },
  {
    "id": 85,
    "category": "joke",
    "tag": "Day 85",
    "title": "Shopping Cart Rides",
    "text": "Pivoting the grocery cart like a race car driver down empty supermarket aisles.",
    "note": "Never grow up."
  },
  {
    "id": 86,
    "category": "love",
    "tag": "Day 86",
    "title": "You Apologize Sincerely",
    "text": "Your humility and ability to reflect when things go wrong.",
    "note": "True strength lives in your heart."
  },
  {
    "id": 87,
    "category": "compliment",
    "tag": "Day 87",
    "title": "Your Soft Hands",
    "text": "How warm and gentle your fingers feel slipped into mine on a cold winter night.",
    "note": "The perfect fit."
  },
  {
    "id": 88,
    "category": "quirk",
    "tag": "Day 88",
    "title": "Checking the Locks 3 Times",
    "text": "Your thorough security checks before bedtime to ensure we are 100% fortified.",
    "note": "My cute little bodyguard."
  },
  {
    "id": 89,
    "category": "future",
    "tag": "Day 89",
    "title": "Sunset Boat Rides",
    "text": "Drifting on calm water while the sky catches fire in amber and violet.",
    "note": "Peaceful horizons together."
  },
  {
    "id": 90,
    "category": "memory",
    "tag": "Day 90",
    "title": "The Surprise You Planned",
    "text": "That sweet surprise you organized just to see a smile on my face.",
    "note": "Your thoughtfulness leaves me speechless."
  },
  {
    "id": 91,
    "category": "love",
    "tag": "Day 91",
    "title": "You Never Let Me Settle",
    "text": "You push me to aim higher, work harder, and pursue what sets my soul on fire.",
    "note": "My greatest catalyst."
  },
  {
    "id": 92,
    "category": "compliment",
    "tag": "Day 92",
    "title": "How You Care for Animals",
    "text": "The gentle baby voice you put on whenever you meet any dog or cat on the street.",
    "note": "Pure purity of heart."
  },
  {
    "id": 93,
    "category": "joke",
    "tag": "Day 93",
    "title": "The 'I Have Nothing to Wear' Cry",
    "text": "Standing in front of a closet overflowing with clothes claiming you have zero options.",
    "note": "You look stunning in literally anything."
  },
  {
    "id": 94,
    "category": "memory",
    "tag": "Day 94",
    "title": "Our Secret Signal",
    "text": "The subtle squeeze of the hand three times that means 'I love you' in public.",
    "note": "A code only we know."
  },
  {
    "id": 95,
    "category": "future",
    "tag": "Day 95",
    "title": "Planting a Garden",
    "text": "Tending to plants, picking fresh herbs, and watching something we planted blossom together.",
    "note": "Cultivating our love like a garden."
  },
  {
    "id": 96,
    "category": "love",
    "tag": "Day 96",
    "title": "You Stand By Your Values",
    "text": "You have strong moral integrity. You do what is right, even when it's hard.",
    "note": "A person of true honor."
  },
  {
    "id": 97,
    "category": "compliment",
    "tag": "Day 97",
    "title": "Your Morning Glow",
    "text": "You waking up with messy hair, no makeup, and still looking more angelic than anyone.",
    "note": "Natural, breathtaking beauty."
  },
  {
    "id": 98,
    "category": "quirk",
    "tag": "Day 98",
    "title": "Reading Spoilers",
    "text": "How you secretly look up the movie ending online because the suspense makes you too anxious.",
    "note": "I promise not to judge your cheating!"
  },
  {
    "id": 99,
    "category": "memory",
    "tag": "Day 99",
    "title": "Late Night Fast Food Run",
    "text": "Sitting in the car at 1:00 AM eating salty fries and milkshakes like rebellious teenagers.",
    "note": "Those fries tasted like freedom."
  },
  {
    "id": 100,
    "category": "love",
    "tag": "Day 100",
    "title": "You Are My Best Friend",
    "text": "Before anything else, you are the person I want to tell every silly, minor update of my day to.",
    "note": "My companion for life."
  },
  {
    "id": 101,
    "category": "love",
    "tag": "Day 101",
    "title": "The Shelter in Your Hug",
    "text": "When the world is harsh, stepping into your embrace is like walking through the front door of home.",
    "note": "Safe, warm, and understood."
  },
  {
    "id": 102,
    "category": "compliment",
    "tag": "Day 102",
    "title": "Your Gentle Confidence",
    "text": "You don't need to shout to be heard; your quiet confidence speaks with undeniable grace.",
    "note": "Admirable and magnetic."
  },
  {
    "id": 103,
    "category": "memory",
    "tag": "Day 103",
    "title": "Our First Coffee Date",
    "text": "How neither of us wanted the cups to empty because it meant having to say goodbye.",
    "note": "I knew right then."
  },
  {
    "id": 104,
    "category": "quirk",
    "tag": "Day 104",
    "title": "Stealing My French Fries",
    "text": "Looking at me innocently while dipping the longest fry from my plate into ketchup.",
    "note": "Fair tax for being adorable."
  },
  {
    "id": 105,
    "category": "future",
    "tag": "Day 105",
    "title": "Snowy Cabin Weekends",
    "text": "A fireplace crackling, hot chocolate steaming, and reading by the frosted window with you.",
    "note": "The dream winter escape."
  },
  {
    "id": 106,
    "category": "joke",
    "tag": "Day 106",
    "title": "Your GPS Challenges",
    "text": "Turning the phone upside down to figure out which way is North while walking in circles.",
    "note": "I'll be your human compass anytime."
  },
  {
    "id": 107,
    "category": "love",
    "tag": "Day 107",
    "title": "You Hold My Hand When I'm Anxious",
    "text": "Without even having to ask, you feel my tension and gently lace your fingers into mine.",
    "note": "Intuitive tenderness."
  },
  {
    "id": 108,
    "category": "compliment",
    "tag": "Day 108",
    "title": "Your Unfiltered Laughter",
    "text": "The unrestrained, whole-body snort of a laugh when something catches you off guard.",
    "note": "Music to my ears."
  },
  {
    "id": 109,
    "category": "memory",
    "tag": "Day 109",
    "title": "The Beach Day",
    "text": "Salty breeze, sand between our toes, and watching the waves crash as the sun dipped low.",
    "note": "I wanted that tide to freeze."
  },
  {
    "id": 110,
    "category": "quirk",
    "tag": "Day 110",
    "title": "Making Faces in the Mirror",
    "text": "The silly faces you test out while doing your skincare routine in the bathroom.",
    "note": "Cutest girl on the planet."
  },
  {
    "id": 111,
    "category": "future",
    "tag": "Day 111",
    "title": "Road Trips with No Destination",
    "text": "Just a full gas tank, our favorite playlist, and seeing where the open road takes us.",
    "note": "Spontaneous adventures await."
  },
  {
    "id": 112,
    "category": "joke",
    "tag": "Day 112",
    "title": "Your 'Nap' That Turns into 4 Hours",
    "text": "Saying 'I am just closing my eyes for 10 minutes' and waking up in another dimension.",
    "note": "Master of deep slumber."
  },
  {
    "id": 113,
    "category": "love",
    "tag": "Day 113",
    "title": "You Remember My Small Quirks",
    "text": "Knowing I hate wet socks, like my bread extra toasted, and need quiet for 10 minutes after waking.",
    "note": "You study me with love."
  },
  {
    "id": 114,
    "category": "compliment",
    "tag": "Day 114",
    "title": "Your Thoughtful Gifts",
    "text": "You never just buy something generic; every gift you give is laced with meaningful nostalgia.",
    "note": "You put heart into everything."
  },
  {
    "id": 115,
    "category": "memory",
    "tag": "Day 115",
    "title": "The Stargazing Meadow",
    "text": "Lying on an old blanket looking up at millions of distant suns, holding onto each other.",
    "note": "Infinite universe, one soulmate."
  },
  {
    "id": 116,
    "category": "quirk",
    "tag": "Day 116",
    "title": "Talking to Objects",
    "text": "Apologizing to the chair when you accidentally bump your hip into it.",
    "note": "Polite to a fault, even with furniture."
  },
  {
    "id": 117,
    "category": "future",
    "tag": "Day 117",
    "title": "Dancing at Weddings Together",
    "text": "Being that old couple tearing up the dance floor decades from now, still head-over-heels.",
    "note": "Forever dance partners."
  },
  {
    "id": 118,
    "category": "joke",
    "tag": "Day 118",
    "title": "The Online Shopping Cart",
    "text": "Adding $800 of items to a virtual cart, feeling the rush, and closing the tab without buying.",
    "note": "Window shopping champion."
  },
  {
    "id": 119,
    "category": "love",
    "tag": "Day 119",
    "title": "Your Compassion for the Vulnerable",
    "text": "The way you treat waitstaff, strangers in distress, and stray animals with equal gentleness.",
    "note": "Pure, untarnished kindness."
  },
  {
    "id": 120,
    "category": "compliment",
    "tag": "Day 120",
    "title": "Your Incredible Style",
    "text": "Whether in pajamas or a little black dress, you have an effortless aesthetic that turns heads.",
    "note": "Endlessly chic."
  },
  {
    "id": 121,
    "category": "memory",
    "tag": "Day 121",
    "title": "Our Lazy Sunday Ritual",
    "text": "Pancakes, soft acoustic tunes, reading, and refusing to change out of loungewear all day.",
    "note": "Heaven on earth."
  },
  {
    "id": 122,
    "category": "quirk",
    "tag": "Day 122",
    "title": "Dancing While Cooking",
    "text": "Using the wooden spoon as a microphone while simmering pasta sauce.",
    "note": "A gourmet Michelin performance."
  },
  {
    "id": 123,
    "category": "future",
    "tag": "Day 123",
    "title": "Building Our Dream Bookshelf",
    "text": "Organizing our shared books, travel souvenirs, and photo albums side-by-side.",
    "note": "Chapters of our story."
  },
  {
    "id": 124,
    "category": "joke",
    "tag": "Day 124",
    "title": "The Thermostat Heist",
    "text": "Secretly creeping over to bump the temperature up to 74 degrees when I turn around.",
    "note": "The Cold War is real."
  },
  {
    "id": 125,
    "category": "love",
    "tag": "Day 125",
    "title": "You Ground My Impatience",
    "text": "When I want everything to happen yesterday, you gently remind me to breathe and enjoy the now.",
    "note": "My anchor in the storm."
  },
  {
    "id": 126,
    "category": "compliment",
    "tag": "Day 126",
    "title": "The Spark in Your Eyes",
    "text": "When you talk about a topic you're passionate about, your pupils dilate and you shine.",
    "note": "Electrifying passion."
  },
  {
    "id": 127,
    "category": "memory",
    "tag": "Day 127",
    "title": "Our First Trip Out of Town",
    "text": "Navigating an unfamiliar city, sharing a single umbrella, finding that hidden bakery.",
    "note": "Best travel buddy alive."
  },
  {
    "id": 128,
    "category": "quirk",
    "tag": "Day 128",
    "title": "Obsessing Over Cute Mugs",
    "text": "Insisting that coffee tastes fundamentally better when drunk from your favorite ceramic mug.",
    "note": "Scientific fact in our house."
  },
  {
    "id": 129,
    "category": "future",
    "tag": "Day 129",
    "title": "Watching the Northern Lights",
    "text": "Wrapped in five layers of wool in Norway or Iceland, watching the green sky dance above us.",
    "note": "Checking off bucket list dreams."
  },
  {
    "id": 130,
    "category": "joke",
    "tag": "Day 130",
    "title": "Your Bedtime Routine",
    "text": "A 14-step skincare ritual followed by 'Can you get me a glass of water from the kitchen?'",
    "note": "Anything for my lady."
  },
  {
    "id": 131,
    "category": "love",
    "tag": "Day 131",
    "title": "You Allow Me to Be Vulnerable",
    "text": "I can break down and cry in front of you without feeling weak or judged for a second.",
    "note": "A sanctuary of unconditional love."
  },
  {
    "id": 132,
    "category": "compliment",
    "tag": "Day 132",
    "title": "Your Incredible Wit",
    "text": "You always have the sharpest, quickest comeback. You keep me on my toes in the best way.",
    "note": "Clever and charming."
  },
  {
    "id": 133,
    "category": "memory",
    "tag": "Day 133",
    "title": "The First Movie We Watched",
    "text": "We barely paid attention to the plot because we were both so hyper-aware of sitting close.",
    "note": "Every scene was electric."
  },
  {
    "id": 134,
    "category": "quirk",
    "tag": "Day 134",
    "title": "Singing Made-up Rhymes to Pets",
    "text": "Inventing elaborate operatic ballads about the dog or cat wanting breakfast.",
    "note": "Broadway caliber lyrics."
  },
  {
    "id": 135,
    "category": "future",
    "tag": "Day 135",
    "title": "Porch Rocking Chairs",
    "text": "Sipping sweet tea on a porch swing while watching fireflies illuminate the summer dusk.",
    "note": "Golden years ahead."
  },
  {
    "id": 136,
    "category": "joke",
    "tag": "Day 136",
    "title": "The Dramatic Reaction to Spiders",
    "text": "Calling for emergency rescue across the house because an ant was standing two feet away.",
    "note": "Your knight in shining armor arrives."
  },
  {
    "id": 137,
    "category": "love",
    "tag": "Day 137",
    "title": "You Never Hold Grudges",
    "text": "When an issue is discussed, you forgive completely and move forward with an open heart.",
    "note": "Pure emotional maturity."
  },
  {
    "id": 138,
    "category": "compliment",
    "tag": "Day 138",
    "title": "How You Wear My Shirts",
    "text": "How an oversized flannel looks like couture fashion when you throw it on in the morning.",
    "note": "Mine never looked so good."
  },
  {
    "id": 139,
    "category": "memory",
    "tag": "Day 139",
    "title": "Finding Our Special Song",
    "text": "The instant both of us knew that this particular track would forever be 'our song.'",
    "note": "It still plays in my heart."
  },
  {
    "id": 140,
    "category": "quirk",
    "tag": "Day 140",
    "title": "Smelling New Books",
    "text": "Cracking open a fresh paperback and taking a deep breath of the paper.",
    "note": "Pure bookworm delight."
  },
  {
    "id": 141,
    "category": "future",
    "tag": "Day 141",
    "title": "Tasting Wine in Tuscany",
    "text": "Rolling green hills, vineyards, fresh bread, and your laugh echoing in the Italian sunset.",
    "note": "One day soon."
  },
  {
    "id": 142,
    "category": "joke",
    "tag": "Day 142",
    "title": "Snack Separation Anxiety",
    "text": "Looking genuinely devastated when you reach the bottom of a bag of chips.",
    "note": "I'll buy you a factory."
  },
  {
    "id": 143,
    "category": "love",
    "tag": "Day 143",
    "title": "How You Inspire My Growth",
    "text": "Being with you makes me want to learn more, love deeper, and dream bigger dreams.",
    "note": "You elevate my existence."
  },
  {
    "id": 144,
    "category": "compliment",
    "tag": "Day 144",
    "title": "Your Mesmerizing Voice",
    "text": "Listening to you tell a story could put any troubled mind to rest. It is soothing medicine.",
    "note": "Calm in sonic form."
  },
  {
    "id": 145,
    "category": "memory",
    "tag": "Day 145",
    "title": "Our Spontaneous Midnight Walk",
    "text": "The neighborhood was asleep, the air was crisp, and we walked hand-in-hand under yellow streetlights.",
    "note": "Just our footsteps and whispers."
  },
  {
    "id": 146,
    "category": "quirk",
    "tag": "Day 146",
    "title": "Saving Greeting Cards",
    "text": "Keeping every little handwritten note and ticket stub in a special memory shoebox.",
    "note": "Sentimental and sweet."
  },
  {
    "id": 147,
    "category": "future",
    "tag": "Day 147",
    "title": "Our Own Secret Spot",
    "text": "Finding a quiet overlook or seaside cliff that belongs only to the two of us.",
    "note": "Our private slice of the world."
  },
  {
    "id": 148,
    "category": "joke",
    "tag": "Day 148",
    "title": "The 'I am Ready' Announcement",
    "text": "Saying 'I am ready, let's go!' while still searching for keys, shoes, and perfume.",
    "note": "Ready is a state of mind."
  },
  {
    "id": 149,
    "category": "love",
    "tag": "Day 149",
    "title": "You Are My Constant",
    "text": "Jobs change, seasons change, life shifts—but your love is the steady heartbeat of my life.",
    "note": "My unchanging truth."
  },
  {
    "id": 150,
    "category": "compliment",
    "tag": "Day 150",
    "title": "Your Radiant Kindness",
    "text": "You radiate an aura of gentleness that makes children and animals naturally trust you.",
    "note": "An angel's disposition."
  },
  {
    "id": 151,
    "category": "memory",
    "tag": "Day 151",
    "title": "That Hilarious Board Game Night",
    "text": "The competitive fury that took over during Monopoly or Scrabble until we both surrendered laughing.",
    "note": "You play to win!"
  },
  {
    "id": 152,
    "category": "quirk",
    "tag": "Day 152",
    "title": "Re-watching the Same 3 Comfort Shows",
    "text": "Having 10,000 new shows available, yet choosing Gilmore Girls or Friends for the 9th time.",
    "note": "I'll gladly watch it all over again with you."
  },
  {
    "id": 153,
    "category": "future",
    "tag": "Day 153",
    "title": "Renewing Our Vows Decades Later",
    "text": "Looking at each other with silver hair and repeating the same promises with deeper certainty.",
    "note": "A lifetime won't be enough."
  },
  {
    "id": 154,
    "category": "joke",
    "tag": "Day 154",
    "title": "The Secret Stash of Hair Ties",
    "text": "Finding hair pins and ties in every sofa cushion, coat pocket, and car cup holder on earth.",
    "note": "They multiply in the dark."
  },
  {
    "id": 155,
    "category": "love",
    "tag": "Day 155",
    "title": "How You Value Family",
    "text": "Seeing the warmth and devotion you give to the people you cherish most.",
    "note": "A heart overflowing with loyalty."
  },
  {
    "id": 156,
    "category": "compliment",
    "tag": "Day 156",
    "title": "Your Radiant Elegance",
    "text": "You don't need spotlight; people are naturally drawn to your quiet dignity and grace.",
    "note": "Pure class."
  },
  {
    "id": 157,
    "category": "memory",
    "tag": "Day 157",
    "title": "Our First Real Trip to the Fair",
    "text": "Sharing cotton candy, riding the Ferris wheel, and looking down at the sparkling lights.",
    "note": "Carnival magic with you."
  },
  {
    "id": 158,
    "category": "quirk",
    "tag": "Day 158",
    "title": "Stealing the Warm Towel",
    "text": "Claiming the freshly tumble-dried towel right as it comes out of the dryer.",
    "note": "Master of luxury comforts."
  },
  {
    "id": 159,
    "category": "future",
    "tag": "Day 159",
    "title": "Making Sunday Morning Waffles",
    "text": "Making homemade waffles from scratch, dusting them with powdered sugar, and sharing bites.",
    "note": "Sweet, sticky mornings."
  },
  {
    "id": 160,
    "category": "joke",
    "tag": "Day 160",
    "title": "The Backseat Driving Instructions",
    "text": "Giving helpful commentary on braking distance from the passenger seat.",
    "note": "My personal co-pilot."
  },
  {
    "id": 161,
    "category": "love",
    "tag": "Day 161",
    "title": "How You Heal My Heart",
    "text": "On days when the weight of life feels too heavy, you remind me that I am never alone.",
    "note": "You are my peace."
  },
  {
    "id": 162,
    "category": "compliment",
    "tag": "Day 162",
    "title": "The Light in Your Eyes",
    "text": "There is a spark in your eyes that rivals the brightest stars in the night sky.",
    "note": "Mesmerizing."
  },
  {
    "id": 163,
    "category": "memory",
    "tag": "Day 163",
    "title": "The Impromptu Picnic",
    "text": "Spreading a jacket on the grass, eating sandwiches, and talking about childhood dreams.",
    "note": "Simple perfection."
  },
  {
    "id": 164,
    "category": "quirk",
    "tag": "Day 164",
    "title": "Your Cute Sneeze",
    "text": "That tiny, high-pitched sneeze that sounds like a cartoon kitten.",
    "note": "Bless you a thousand times."
  },
  {
    "id": 165,
    "category": "future",
    "tag": "Day 165",
    "title": "Traveling the World Together",
    "text": "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand.",
    "note": "A world to explore."
  },
  {
    "id": 166,
    "category": "joke",
    "tag": "Day 166",
    "title": "Stealing My Clothes",
    "text": "My hoodies, t-shirts, and flannels are legally classified as joint marital property now.",
    "note": "They look better on you anyway."
  },
  {
    "id": 167,
    "category": "love",
    "tag": "Day 167",
    "title": "Your Faith in Us",
    "text": "Through every storm and sunny day, your commitment to our bond never wavers.",
    "note": "My rock and foundation."
  },
  {
    "id": 168,
    "category": "compliment",
    "tag": "Day 168",
    "title": "Your Heavenly Scent",
    "text": "The subtle hint of vanilla, flowers, and warmth that belongs uniquely to you.",
    "note": "Addictive fragrance."
  },
  {
    "id": 169,
    "category": "memory",
    "tag": "Day 169",
    "title": "That Cozy Movie Marathon",
    "text": "Watching movies back-to-back all Sunday while sharing a bowl of hot buttery popcorn.",
    "note": "Comfort peak."
  },
  {
    "id": 170,
    "category": "quirk",
    "tag": "Day 170",
    "title": "Stealing My Pillows",
    "text": "Starting with one pillow and gradually conquering all four by morning.",
    "note": "Pillow sovereign."
  },
  {
    "id": 171,
    "category": "future",
    "tag": "Day 171",
    "title": "Our Cozy Sunday Mornings",
    "text": "Decades from now, sitting side-by-side on the couch reading books and sipping tea.",
    "note": "Lifelong peaceful mornings."
  },
  {
    "id": 172,
    "category": "joke",
    "tag": "Day 172",
    "title": "Your Midnight Snack Invasions",
    "text": "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate.",
    "note": "Caught in 4K!"
  },
  {
    "id": 173,
    "category": "love",
    "tag": "Day 173",
    "title": "The Warmth in Your Greeting",
    "text": "The joy in your voice whenever you say hello after we've been apart for hours.",
    "note": "Best greeting in the world."
  },
  {
    "id": 174,
    "category": "compliment",
    "tag": "Day 174",
    "title": "Your Beautiful Soul",
    "text": "Your physical beauty is breathtaking, but your soul's beauty is what truly captured my heart forever.",
    "note": "Radiant within and without."
  },
  {
    "id": 175,
    "category": "memory",
    "tag": "Day 175",
    "title": "Our Late Night Talks in the Car",
    "text": "Parked in the driveway for an extra hour because neither of us wanted the night to end.",
    "note": "Timeless moments."
  },
  {
    "id": 176,
    "category": "quirk",
    "tag": "Day 176",
    "title": "Your Snack Rituals",
    "text": "Eating all the edges of a cookie first before savoring the chocolate center.",
    "note": "Artisanal snacking."
  },
  {
    "id": 177,
    "category": "future",
    "tag": "Day 177",
    "title": "Designing Our Home",
    "text": "Choosing paint colors, hanging artwork, and planting flowers in our dream garden.",
    "note": "Building our castle."
  },
  {
    "id": 178,
    "category": "joke",
    "tag": "Day 178",
    "title": "The 'I Told You So' Look",
    "text": "That triumphant, knowing smirk when your prediction turns out 100% right.",
    "note": "You were right, as always."
  },
  {
    "id": 179,
    "category": "love",
    "tag": "Day 179",
    "title": "You Make Ordinary Moments Sacred",
    "text": "A trip to the laundromat or grocery store turns into a romantic date when I'm with you.",
    "note": "Every moment is holy."
  },
  {
    "id": 180,
    "category": "compliment",
    "tag": "Day 180",
    "title": "Your Gentle Touch",
    "text": "Even a simple brush of your hand against my neck gives me chills of pure affection.",
    "note": "Electric tenderness."
  },
  {
    "id": 181,
    "category": "memory",
    "tag": "Day 181",
    "title": "The First Time You Cooked for Me",
    "text": "Every bite was seasoned with love, even if we both joked about the seasoning.",
    "note": "Made with heart."
  },
  {
    "id": 182,
    "category": "quirk",
    "tag": "Day 182",
    "title": "How You Wrap in Blankets",
    "text": "Spinning yourself into a cocoon until only your nose is peeking out.",
    "note": "The cutest caterpillar."
  },
  {
    "id": 183,
    "category": "future",
    "tag": "Day 183",
    "title": "Celebrating Golden Anniversaries",
    "text": "Dancing at our 50th anniversary with the same spark in our eyes as our first year.",
    "note": "Timeless devotion."
  },
  {
    "id": 184,
    "category": "joke",
    "tag": "Day 184",
    "title": "Directions Debate",
    "text": "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive.",
    "note": "Scenic route, darling."
  },
  {
    "id": 185,
    "category": "love",
    "tag": "Day 185",
    "title": "You Love Without Keeping Score",
    "text": "Your love isn't transactional; you give freely from an ocean of affection.",
    "note": "Pure grace."
  },
  {
    "id": 186,
    "category": "compliment",
    "tag": "Day 186",
    "title": "Your Magnetic Charm",
    "text": "You have this effortless charm that makes everyone feel instantly welcome and loved.",
    "note": "A natural blessing."
  },
  {
    "id": 187,
    "category": "memory",
    "tag": "Day 187",
    "title": "Getting Caught in the Snow",
    "text": "Catching snowflakes on our tongues and hugging tightly to stay warm.",
    "note": "Winter wonderland."
  },
  {
    "id": 188,
    "category": "quirk",
    "tag": "Day 188",
    "title": "Your Excited Hand Flaps",
    "text": "When good news arrives and your hands flutter with uncontrollable joy.",
    "note": "Pure exuberance."
  },
  {
    "id": 189,
    "category": "future",
    "tag": "Day 189",
    "title": "Holding Hands as Elders",
    "text": "Walking slow in the park, two old souls still madly in love.",
    "note": "Enduring romance."
  },
  {
    "id": 190,
    "category": "joke",
    "tag": "Day 190",
    "title": "The 10 Alarms in the Morning",
    "text": "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off.",
    "note": "Preparation meets procrastination."
  },
  {
    "id": 191,
    "category": "love",
    "tag": "Day 191",
    "title": "How You Hold Me Close",
    "text": "The way you pull me in tight in the middle of the night without even waking up.",
    "note": "Subconscious love."
  },
  {
    "id": 192,
    "category": "compliment",
    "tag": "Day 192",
    "title": "Your Grace Under Pressure",
    "text": "When unexpected chaos erupts, you maintain a calm poise that steadies everyone around you.",
    "note": "True elegance."
  },
  {
    "id": 193,
    "category": "memory",
    "tag": "Day 193",
    "title": "Our Morning Hugs",
    "text": "Those 30 seconds before getting out of bed where time stands completely still.",
    "note": "My daily recharge."
  },
  {
    "id": 194,
    "category": "quirk",
    "tag": "Day 194",
    "title": "Making Pet Voices",
    "text": "Translating what the dog or cat is supposedly thinking in a hilarious dramatic accent.",
    "note": "Pet psychic."
  },
  {
    "id": 195,
    "category": "future",
    "tag": "Day 195",
    "title": "Endless More Sunsets",
    "text": "Thousands more sunsets to watch together as the colors paint our love across the sky.",
    "note": "Never-ending wonder."
  },
  {
    "id": 196,
    "category": "joke",
    "tag": "Day 196",
    "title": "Borrowing My Phone Charger",
    "text": "Why is my phone charger always plugged into the outlet on your side of the bed?",
    "note": "The great electronic heist."
  },
  {
    "id": 197,
    "category": "love",
    "tag": "Day 197",
    "title": "You Are My Best Secret Keeper",
    "text": "There is no thought too weird or fear too silly that I cannot confess to you.",
    "note": "Total trust."
  },
  {
    "id": 198,
    "category": "compliment",
    "tag": "Day 198",
    "title": "The Soft Curve of Your Cheeks",
    "text": "The way your cheeks flush pink when you blush or when it's chilly outside.",
    "note": "Irresistibly cute."
  },
  {
    "id": 199,
    "category": "memory",
    "tag": "Day 199",
    "title": "The Secret Notes You Left",
    "text": "Finding a sticky note hidden in my bag with a sweet message that made my entire day.",
    "note": "Unexpected joy."
  },
  {
    "id": 200,
    "category": "quirk",
    "tag": "Day 200",
    "title": "Saving Trinkets",
    "text": "Keeping shells from the beach, smooth stones, and restaurant coasters as keepsakes.",
    "note": "Collector of sweet memories."
  },
  {
    "id": 201,
    "category": "future",
    "tag": "Day 201",
    "title": "Spontaneous Road Trips",
    "text": "Packing a bag on a Friday afternoon and heading toward the coast with no reservations.",
    "note": "Freedom with you."
  },
  {
    "id": 202,
    "category": "joke",
    "tag": "Day 202",
    "title": "The 'One More Episode' Trap",
    "text": "Promising we'll sleep after this episode, then bingeing until 2:30 AM.",
    "note": "Netflix enablers."
  },
  {
    "id": 203,
    "category": "love",
    "tag": "Day 203",
    "title": "The Softness You Bring Out in Me",
    "text": "In a world that forces people to be hard, you give me permission to be gentle.",
    "note": "My safe harbor."
  },
  {
    "id": 204,
    "category": "compliment",
    "tag": "Day 204",
    "title": "Your Pure Authenticity",
    "text": "You never pretend to be someone else to fit in. You are unapologetically and beautifully you.",
    "note": "Original and honest."
  },
  {
    "id": 205,
    "category": "memory",
    "tag": "Day 205",
    "title": "That Sunset We Chased",
    "text": "Speeding up the hill just in time to watch the golden orb slip beneath the horizon.",
    "note": "Chasing beauty with you."
  },
  {
    "id": 206,
    "category": "quirk",
    "tag": "Day 206",
    "title": "Your Cold Hands on My Neck",
    "text": "Sneaking your chilly hands onto my warm neck just to hear me squeal.",
    "note": "You mischievous villain!"
  },
  {
    "id": 207,
    "category": "future",
    "tag": "Day 207",
    "title": "Mastering New Recipes",
    "text": "Cooking together, making huge messes, and discovering new culinary masterpieces.",
    "note": "Partners in flavor."
  },
  {
    "id": 208,
    "category": "joke",
    "tag": "Day 208",
    "title": "Stealing My Clothes (Part 2)",
    "text": "My hoodies, t-shirts, and flannels are legally classified as joint marital property now. It reminds me every day how deeply blessed I am to have you.",
    "note": "They look better on you anyway."
  },
  {
    "id": 209,
    "category": "love",
    "tag": "Day 209",
    "title": "You Are My Definition of Home",
    "text": "Home isn't a zip code or a four-walled room; home is wherever you are breathing next to me.",
    "note": "My true home."
  },
  {
    "id": 210,
    "category": "compliment",
    "tag": "Day 210",
    "title": "Your Captivating Smile",
    "text": "One genuine smile from you is enough to rewrite the worst day of my week into a victory.",
    "note": "Sunshine personified."
  },
  {
    "id": 211,
    "category": "memory",
    "tag": "Day 211",
    "title": "Singing in the Shower",
    "text": "Hearing you hum or sing your favorite song from the next room.",
    "note": "My favorite background music."
  },
  {
    "id": 212,
    "category": "quirk",
    "tag": "Day 212",
    "title": "Your Coffee Preferences",
    "text": "The exact, hyper-specific ratio of milk, vanilla, and ice you need for optimal bliss.",
    "note": "Barista extraordinaire."
  },
  {
    "id": 213,
    "category": "future",
    "tag": "Day 213",
    "title": "Traveling the World Together (Part 2)",
    "text": "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand. It reminds me every day how deeply blessed I am to have you.",
    "note": "A world to explore."
  },
  {
    "id": 214,
    "category": "joke",
    "tag": "Day 214",
    "title": "Your Midnight Snack Invasions (Part 2)",
    "text": "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate. It reminds me every day how deeply blessed I am to have you.",
    "note": "Caught in 4K!"
  },
  {
    "id": 215,
    "category": "love",
    "tag": "Day 215",
    "title": "Your Constant Encouragement",
    "text": "When I doubt my creative ideas, you give me the confidence to take the leap.",
    "note": "My muse and cheer."
  },
  {
    "id": 216,
    "category": "compliment",
    "tag": "Day 216",
    "title": "Your Sweet Heart",
    "text": "Your instincts are always rooted in kindness and empathy. You are genuine goodness.",
    "note": "Pure sweetness."
  },
  {
    "id": 217,
    "category": "memory",
    "tag": "Day 217",
    "title": "Our First Photo Together",
    "text": "Looking at that early picture of us and smiling at how little we knew then of how deep this love would become.",
    "note": "The start of forever."
  },
  {
    "id": 218,
    "category": "quirk",
    "tag": "Day 218",
    "title": "Dancing in the Aisles",
    "text": "Swaying to the supermarket background music while picking out pasta.",
    "note": "Making everyday life a musical."
  },
  {
    "id": 219,
    "category": "future",
    "tag": "Day 219",
    "title": "Our Cozy Sunday Mornings (Part 2)",
    "text": "Decades from now, sitting side-by-side on the couch reading books and sipping tea. It reminds me every day how deeply blessed I am to have you.",
    "note": "Lifelong peaceful mornings."
  },
  {
    "id": 220,
    "category": "joke",
    "tag": "Day 220",
    "title": "The 'I Told You So' Look (Part 2)",
    "text": "That triumphant, knowing smirk when your prediction turns out 100% right. It reminds me every day how deeply blessed I am to have you.",
    "note": "You were right, as always."
  },
  {
    "id": 221,
    "category": "love",
    "tag": "Day 221",
    "title": "How You Value Our Memories",
    "text": "You treat our milestones and silly little inside memories like sacred treasures.",
    "note": "Kept safe in our hearts."
  },
  {
    "id": 222,
    "category": "compliment",
    "tag": "Day 222",
    "title": "The Light in Your Eyes (Part 2)",
    "text": "There is a spark in your eyes that rivals the brightest stars in the night sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Mesmerizing."
  },
  {
    "id": 223,
    "category": "memory",
    "tag": "Day 223",
    "title": "The Impromptu Picnic (Part 2)",
    "text": "Spreading a jacket on the grass, eating sandwiches, and talking about childhood dreams. It reminds me every day how deeply blessed I am to have you.",
    "note": "Simple perfection."
  },
  {
    "id": 224,
    "category": "quirk",
    "tag": "Day 224",
    "title": "Your Cute Sneeze (Part 2)",
    "text": "That tiny, high-pitched sneeze that sounds like a cartoon kitten. It reminds me every day how deeply blessed I am to have you.",
    "note": "Bless you a thousand times."
  },
  {
    "id": 225,
    "category": "future",
    "tag": "Day 225",
    "title": "Designing Our Home (Part 2)",
    "text": "Choosing paint colors, hanging artwork, and planting flowers in our dream garden. It reminds me every day how deeply blessed I am to have you.",
    "note": "Building our castle."
  },
  {
    "id": 226,
    "category": "joke",
    "tag": "Day 226",
    "title": "Directions Debate (Part 2)",
    "text": "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive. It reminds me every day how deeply blessed I am to have you.",
    "note": "Scenic route, darling."
  },
  {
    "id": 227,
    "category": "love",
    "tag": "Day 227",
    "title": "You Make Me Proud",
    "text": "Watching you handle challenges, achieve goals, and treat people kindly fills me with immense pride.",
    "note": "Proud to be yours."
  },
  {
    "id": 228,
    "category": "compliment",
    "tag": "Day 228",
    "title": "Your Heavenly Scent (Part 2)",
    "text": "The subtle hint of vanilla, flowers, and warmth that belongs uniquely to you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Addictive fragrance."
  },
  {
    "id": 229,
    "category": "memory",
    "tag": "Day 229",
    "title": "That Cozy Movie Marathon (Part 2)",
    "text": "Watching movies back-to-back all Sunday while sharing a bowl of hot buttery popcorn. It reminds me every day how deeply blessed I am to have you.",
    "note": "Comfort peak."
  },
  {
    "id": 230,
    "category": "quirk",
    "tag": "Day 230",
    "title": "Stealing My Pillows (Part 2)",
    "text": "Starting with one pillow and gradually conquering all four by morning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pillow sovereign."
  },
  {
    "id": 231,
    "category": "future",
    "tag": "Day 231",
    "title": "Celebrating Golden Anniversaries (Part 2)",
    "text": "Dancing at our 50th anniversary with the same spark in our eyes as our first year. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless devotion."
  },
  {
    "id": 232,
    "category": "joke",
    "tag": "Day 232",
    "title": "The 10 Alarms in the Morning (Part 2)",
    "text": "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off. It reminds me every day how deeply blessed I am to have you.",
    "note": "Preparation meets procrastination."
  },
  {
    "id": 233,
    "category": "love",
    "tag": "Day 233",
    "title": "How You Heal My Heart (Part 2)",
    "text": "On days when the weight of life feels too heavy, you remind me that I am never alone. It reminds me every day how deeply blessed I am to have you.",
    "note": "You are my peace."
  },
  {
    "id": 234,
    "category": "compliment",
    "tag": "Day 234",
    "title": "Your Beautiful Soul (Part 2)",
    "text": "Your physical beauty is breathtaking, but your soul's beauty is what truly captured my heart forever. It reminds me every day how deeply blessed I am to have you.",
    "note": "Radiant within and without."
  },
  {
    "id": 235,
    "category": "memory",
    "tag": "Day 235",
    "title": "Our Late Night Talks in the Car (Part 2)",
    "text": "Parked in the driveway for an extra hour because neither of us wanted the night to end. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless moments."
  },
  {
    "id": 236,
    "category": "quirk",
    "tag": "Day 236",
    "title": "Your Snack Rituals (Part 2)",
    "text": "Eating all the edges of a cookie first before savoring the chocolate center. It reminds me every day how deeply blessed I am to have you.",
    "note": "Artisanal snacking."
  },
  {
    "id": 237,
    "category": "future",
    "tag": "Day 237",
    "title": "Holding Hands as Elders (Part 2)",
    "text": "Walking slow in the park, two old souls still madly in love. It reminds me every day how deeply blessed I am to have you.",
    "note": "Enduring romance."
  },
  {
    "id": 238,
    "category": "joke",
    "tag": "Day 238",
    "title": "Borrowing My Phone Charger (Part 2)",
    "text": "Why is my phone charger always plugged into the outlet on your side of the bed? It reminds me every day how deeply blessed I am to have you.",
    "note": "The great electronic heist."
  },
  {
    "id": 239,
    "category": "love",
    "tag": "Day 239",
    "title": "Your Faith in Us (Part 2)",
    "text": "Through every storm and sunny day, your commitment to our bond never wavers. It reminds me every day how deeply blessed I am to have you.",
    "note": "My rock and foundation."
  },
  {
    "id": 240,
    "category": "compliment",
    "tag": "Day 240",
    "title": "Your Gentle Touch (Part 2)",
    "text": "Even a simple brush of your hand against my neck gives me chills of pure affection. It reminds me every day how deeply blessed I am to have you.",
    "note": "Electric tenderness."
  },
  {
    "id": 241,
    "category": "memory",
    "tag": "Day 241",
    "title": "The First Time You Cooked for Me (Part 2)",
    "text": "Every bite was seasoned with love, even if we both joked about the seasoning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Made with heart."
  },
  {
    "id": 242,
    "category": "quirk",
    "tag": "Day 242",
    "title": "How You Wrap in Blankets (Part 2)",
    "text": "Spinning yourself into a cocoon until only your nose is peeking out. It reminds me every day how deeply blessed I am to have you.",
    "note": "The cutest caterpillar."
  },
  {
    "id": 243,
    "category": "future",
    "tag": "Day 243",
    "title": "Endless More Sunsets (Part 2)",
    "text": "Thousands more sunsets to watch together as the colors paint our love across the sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Never-ending wonder."
  },
  {
    "id": 244,
    "category": "joke",
    "tag": "Day 244",
    "title": "The 'One More Episode' Trap (Part 2)",
    "text": "Promising we'll sleep after this episode, then bingeing until 2:30 AM. It reminds me every day how deeply blessed I am to have you.",
    "note": "Netflix enablers."
  },
  {
    "id": 245,
    "category": "love",
    "tag": "Day 245",
    "title": "The Warmth in Your Greeting (Part 2)",
    "text": "The joy in your voice whenever you say hello after we've been apart for hours. It reminds me every day how deeply blessed I am to have you.",
    "note": "Best greeting in the world."
  },
  {
    "id": 246,
    "category": "compliment",
    "tag": "Day 246",
    "title": "Your Magnetic Charm (Part 2)",
    "text": "You have this effortless charm that makes everyone feel instantly welcome and loved. It reminds me every day how deeply blessed I am to have you.",
    "note": "A natural blessing."
  },
  {
    "id": 247,
    "category": "memory",
    "tag": "Day 247",
    "title": "Getting Caught in the Snow (Part 2)",
    "text": "Catching snowflakes on our tongues and hugging tightly to stay warm. It reminds me every day how deeply blessed I am to have you.",
    "note": "Winter wonderland."
  },
  {
    "id": 248,
    "category": "quirk",
    "tag": "Day 248",
    "title": "Your Excited Hand Flaps (Part 2)",
    "text": "When good news arrives and your hands flutter with uncontrollable joy. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure exuberance."
  },
  {
    "id": 249,
    "category": "future",
    "tag": "Day 249",
    "title": "Spontaneous Road Trips (Part 2)",
    "text": "Packing a bag on a Friday afternoon and heading toward the coast with no reservations. It reminds me every day how deeply blessed I am to have you.",
    "note": "Freedom with you."
  },
  {
    "id": 250,
    "category": "joke",
    "tag": "Day 250",
    "title": "Stealing My Clothes (Part 3)",
    "text": "My hoodies, t-shirts, and flannels are legally classified as joint marital property now. It reminds me every day how deeply blessed I am to have you.",
    "note": "They look better on you anyway."
  },
  {
    "id": 251,
    "category": "love",
    "tag": "Day 251",
    "title": "You Make Ordinary Moments Sacred (Part 2)",
    "text": "A trip to the laundromat or grocery store turns into a romantic date when I'm with you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Every moment is holy."
  },
  {
    "id": 252,
    "category": "compliment",
    "tag": "Day 252",
    "title": "Your Grace Under Pressure (Part 2)",
    "text": "When unexpected chaos erupts, you maintain a calm poise that steadies everyone around you. It reminds me every day how deeply blessed I am to have you.",
    "note": "True elegance."
  },
  {
    "id": 253,
    "category": "memory",
    "tag": "Day 253",
    "title": "Our Morning Hugs (Part 2)",
    "text": "Those 30 seconds before getting out of bed where time stands completely still. It reminds me every day how deeply blessed I am to have you.",
    "note": "My daily recharge."
  },
  {
    "id": 254,
    "category": "quirk",
    "tag": "Day 254",
    "title": "Making Pet Voices (Part 2)",
    "text": "Translating what the dog or cat is supposedly thinking in a hilarious dramatic accent. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pet psychic."
  },
  {
    "id": 255,
    "category": "future",
    "tag": "Day 255",
    "title": "Mastering New Recipes (Part 2)",
    "text": "Cooking together, making huge messes, and discovering new culinary masterpieces. It reminds me every day how deeply blessed I am to have you.",
    "note": "Partners in flavor."
  },
  {
    "id": 256,
    "category": "joke",
    "tag": "Day 256",
    "title": "Your Midnight Snack Invasions (Part 3)",
    "text": "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate. It reminds me every day how deeply blessed I am to have you.",
    "note": "Caught in 4K!"
  },
  {
    "id": 257,
    "category": "love",
    "tag": "Day 257",
    "title": "You Love Without Keeping Score (Part 2)",
    "text": "Your love isn't transactional; you give freely from an ocean of affection. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure grace."
  },
  {
    "id": 258,
    "category": "compliment",
    "tag": "Day 258",
    "title": "The Soft Curve of Your Cheeks (Part 2)",
    "text": "The way your cheeks flush pink when you blush or when it's chilly outside. It reminds me every day how deeply blessed I am to have you.",
    "note": "Irresistibly cute."
  },
  {
    "id": 259,
    "category": "memory",
    "tag": "Day 259",
    "title": "The Secret Notes You Left (Part 2)",
    "text": "Finding a sticky note hidden in my bag with a sweet message that made my entire day. It reminds me every day how deeply blessed I am to have you.",
    "note": "Unexpected joy."
  },
  {
    "id": 260,
    "category": "quirk",
    "tag": "Day 260",
    "title": "Saving Trinkets (Part 2)",
    "text": "Keeping shells from the beach, smooth stones, and restaurant coasters as keepsakes. It reminds me every day how deeply blessed I am to have you.",
    "note": "Collector of sweet memories."
  },
  {
    "id": 261,
    "category": "future",
    "tag": "Day 261",
    "title": "Traveling the World Together (Part 3)",
    "text": "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand. It reminds me every day how deeply blessed I am to have you.",
    "note": "A world to explore."
  },
  {
    "id": 262,
    "category": "joke",
    "tag": "Day 262",
    "title": "The 'I Told You So' Look (Part 3)",
    "text": "That triumphant, knowing smirk when your prediction turns out 100% right. It reminds me every day how deeply blessed I am to have you.",
    "note": "You were right, as always."
  },
  {
    "id": 263,
    "category": "love",
    "tag": "Day 263",
    "title": "How You Hold Me Close (Part 2)",
    "text": "The way you pull me in tight in the middle of the night without even waking up. It reminds me every day how deeply blessed I am to have you.",
    "note": "Subconscious love."
  },
  {
    "id": 264,
    "category": "compliment",
    "tag": "Day 264",
    "title": "Your Pure Authenticity (Part 2)",
    "text": "You never pretend to be someone else to fit in. You are unapologetically and beautifully you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Original and honest."
  },
  {
    "id": 265,
    "category": "memory",
    "tag": "Day 265",
    "title": "That Sunset We Chased (Part 2)",
    "text": "Speeding up the hill just in time to watch the golden orb slip beneath the horizon. It reminds me every day how deeply blessed I am to have you.",
    "note": "Chasing beauty with you."
  },
  {
    "id": 266,
    "category": "quirk",
    "tag": "Day 266",
    "title": "Your Cold Hands on My Neck (Part 2)",
    "text": "Sneaking your chilly hands onto my warm neck just to hear me squeal. It reminds me every day how deeply blessed I am to have you.",
    "note": "You mischievous villain!"
  },
  {
    "id": 267,
    "category": "future",
    "tag": "Day 267",
    "title": "Our Cozy Sunday Mornings (Part 3)",
    "text": "Decades from now, sitting side-by-side on the couch reading books and sipping tea. It reminds me every day how deeply blessed I am to have you.",
    "note": "Lifelong peaceful mornings."
  },
  {
    "id": 268,
    "category": "joke",
    "tag": "Day 268",
    "title": "Directions Debate (Part 3)",
    "text": "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive. It reminds me every day how deeply blessed I am to have you.",
    "note": "Scenic route, darling."
  },
  {
    "id": 269,
    "category": "love",
    "tag": "Day 269",
    "title": "You Are My Best Secret Keeper (Part 2)",
    "text": "There is no thought too weird or fear too silly that I cannot confess to you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Total trust."
  },
  {
    "id": 270,
    "category": "compliment",
    "tag": "Day 270",
    "title": "Your Captivating Smile (Part 2)",
    "text": "One genuine smile from you is enough to rewrite the worst day of my week into a victory. It reminds me every day how deeply blessed I am to have you.",
    "note": "Sunshine personified."
  },
  {
    "id": 271,
    "category": "memory",
    "tag": "Day 271",
    "title": "Singing in the Shower (Part 2)",
    "text": "Hearing you hum or sing your favorite song from the next room. It reminds me every day how deeply blessed I am to have you.",
    "note": "My favorite background music."
  },
  {
    "id": 272,
    "category": "quirk",
    "tag": "Day 272",
    "title": "Your Coffee Preferences (Part 2)",
    "text": "The exact, hyper-specific ratio of milk, vanilla, and ice you need for optimal bliss. It reminds me every day how deeply blessed I am to have you.",
    "note": "Barista extraordinaire."
  },
  {
    "id": 273,
    "category": "future",
    "tag": "Day 273",
    "title": "Designing Our Home (Part 3)",
    "text": "Choosing paint colors, hanging artwork, and planting flowers in our dream garden. It reminds me every day how deeply blessed I am to have you.",
    "note": "Building our castle."
  },
  {
    "id": 274,
    "category": "joke",
    "tag": "Day 274",
    "title": "The 10 Alarms in the Morning (Part 3)",
    "text": "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off. It reminds me every day how deeply blessed I am to have you.",
    "note": "Preparation meets procrastination."
  },
  {
    "id": 275,
    "category": "love",
    "tag": "Day 275",
    "title": "The Softness You Bring Out in Me (Part 2)",
    "text": "In a world that forces people to be hard, you give me permission to be gentle. It reminds me every day how deeply blessed I am to have you.",
    "note": "My safe harbor."
  },
  {
    "id": 276,
    "category": "compliment",
    "tag": "Day 276",
    "title": "Your Sweet Heart (Part 2)",
    "text": "Your instincts are always rooted in kindness and empathy. You are genuine goodness. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure sweetness."
  },
  {
    "id": 277,
    "category": "memory",
    "tag": "Day 277",
    "title": "Our First Photo Together (Part 2)",
    "text": "Looking at that early picture of us and smiling at how little we knew then of how deep this love would become. It reminds me every day how deeply blessed I am to have you.",
    "note": "The start of forever."
  },
  {
    "id": 278,
    "category": "quirk",
    "tag": "Day 278",
    "title": "Dancing in the Aisles (Part 2)",
    "text": "Swaying to the supermarket background music while picking out pasta. It reminds me every day how deeply blessed I am to have you.",
    "note": "Making everyday life a musical."
  },
  {
    "id": 279,
    "category": "future",
    "tag": "Day 279",
    "title": "Celebrating Golden Anniversaries (Part 3)",
    "text": "Dancing at our 50th anniversary with the same spark in our eyes as our first year. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless devotion."
  },
  {
    "id": 280,
    "category": "joke",
    "tag": "Day 280",
    "title": "Borrowing My Phone Charger (Part 3)",
    "text": "Why is my phone charger always plugged into the outlet on your side of the bed? It reminds me every day how deeply blessed I am to have you.",
    "note": "The great electronic heist."
  },
  {
    "id": 281,
    "category": "love",
    "tag": "Day 281",
    "title": "You Are My Definition of Home (Part 2)",
    "text": "Home isn't a zip code or a four-walled room; home is wherever you are breathing next to me. It reminds me every day how deeply blessed I am to have you.",
    "note": "My true home."
  },
  {
    "id": 282,
    "category": "compliment",
    "tag": "Day 282",
    "title": "The Light in Your Eyes (Part 3)",
    "text": "There is a spark in your eyes that rivals the brightest stars in the night sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Mesmerizing."
  },
  {
    "id": 283,
    "category": "memory",
    "tag": "Day 283",
    "title": "The Impromptu Picnic (Part 3)",
    "text": "Spreading a jacket on the grass, eating sandwiches, and talking about childhood dreams. It reminds me every day how deeply blessed I am to have you.",
    "note": "Simple perfection."
  },
  {
    "id": 284,
    "category": "quirk",
    "tag": "Day 284",
    "title": "Your Cute Sneeze (Part 3)",
    "text": "That tiny, high-pitched sneeze that sounds like a cartoon kitten. It reminds me every day how deeply blessed I am to have you.",
    "note": "Bless you a thousand times."
  },
  {
    "id": 285,
    "category": "future",
    "tag": "Day 285",
    "title": "Holding Hands as Elders (Part 3)",
    "text": "Walking slow in the park, two old souls still madly in love. It reminds me every day how deeply blessed I am to have you.",
    "note": "Enduring romance."
  },
  {
    "id": 286,
    "category": "joke",
    "tag": "Day 286",
    "title": "The 'One More Episode' Trap (Part 3)",
    "text": "Promising we'll sleep after this episode, then bingeing until 2:30 AM. It reminds me every day how deeply blessed I am to have you.",
    "note": "Netflix enablers."
  },
  {
    "id": 287,
    "category": "love",
    "tag": "Day 287",
    "title": "Your Constant Encouragement (Part 2)",
    "text": "When I doubt my creative ideas, you give me the confidence to take the leap. It reminds me every day how deeply blessed I am to have you.",
    "note": "My muse and cheer."
  },
  {
    "id": 288,
    "category": "compliment",
    "tag": "Day 288",
    "title": "Your Heavenly Scent (Part 3)",
    "text": "The subtle hint of vanilla, flowers, and warmth that belongs uniquely to you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Addictive fragrance."
  },
  {
    "id": 289,
    "category": "memory",
    "tag": "Day 289",
    "title": "That Cozy Movie Marathon (Part 3)",
    "text": "Watching movies back-to-back all Sunday while sharing a bowl of hot buttery popcorn. It reminds me every day how deeply blessed I am to have you.",
    "note": "Comfort peak."
  },
  {
    "id": 290,
    "category": "quirk",
    "tag": "Day 290",
    "title": "Stealing My Pillows (Part 3)",
    "text": "Starting with one pillow and gradually conquering all four by morning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pillow sovereign."
  },
  {
    "id": 291,
    "category": "future",
    "tag": "Day 291",
    "title": "Endless More Sunsets (Part 3)",
    "text": "Thousands more sunsets to watch together as the colors paint our love across the sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Never-ending wonder."
  },
  {
    "id": 292,
    "category": "joke",
    "tag": "Day 292",
    "title": "Stealing My Clothes (Part 4)",
    "text": "My hoodies, t-shirts, and flannels are legally classified as joint marital property now. It reminds me every day how deeply blessed I am to have you.",
    "note": "They look better on you anyway."
  },
  {
    "id": 293,
    "category": "love",
    "tag": "Day 293",
    "title": "How You Value Our Memories (Part 2)",
    "text": "You treat our milestones and silly little inside memories like sacred treasures. It reminds me every day how deeply blessed I am to have you.",
    "note": "Kept safe in our hearts."
  },
  {
    "id": 294,
    "category": "compliment",
    "tag": "Day 294",
    "title": "Your Beautiful Soul (Part 3)",
    "text": "Your physical beauty is breathtaking, but your soul's beauty is what truly captured my heart forever. It reminds me every day how deeply blessed I am to have you.",
    "note": "Radiant within and without."
  },
  {
    "id": 295,
    "category": "memory",
    "tag": "Day 295",
    "title": "Our Late Night Talks in the Car (Part 3)",
    "text": "Parked in the driveway for an extra hour because neither of us wanted the night to end. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless moments."
  },
  {
    "id": 296,
    "category": "quirk",
    "tag": "Day 296",
    "title": "Your Snack Rituals (Part 3)",
    "text": "Eating all the edges of a cookie first before savoring the chocolate center. It reminds me every day how deeply blessed I am to have you.",
    "note": "Artisanal snacking."
  },
  {
    "id": 297,
    "category": "future",
    "tag": "Day 297",
    "title": "Spontaneous Road Trips (Part 3)",
    "text": "Packing a bag on a Friday afternoon and heading toward the coast with no reservations. It reminds me every day how deeply blessed I am to have you.",
    "note": "Freedom with you."
  },
  {
    "id": 298,
    "category": "joke",
    "tag": "Day 298",
    "title": "Your Midnight Snack Invasions (Part 4)",
    "text": "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate. It reminds me every day how deeply blessed I am to have you.",
    "note": "Caught in 4K!"
  },
  {
    "id": 299,
    "category": "love",
    "tag": "Day 299",
    "title": "You Make Me Proud (Part 2)",
    "text": "Watching you handle challenges, achieve goals, and treat people kindly fills me with immense pride. It reminds me every day how deeply blessed I am to have you.",
    "note": "Proud to be yours."
  },
  {
    "id": 300,
    "category": "compliment",
    "tag": "Day 300",
    "title": "Your Gentle Touch (Part 3)",
    "text": "Even a simple brush of your hand against my neck gives me chills of pure affection. It reminds me every day how deeply blessed I am to have you.",
    "note": "Electric tenderness."
  },
  {
    "id": 301,
    "category": "memory",
    "tag": "Day 301",
    "title": "The First Time You Cooked for Me (Part 3)",
    "text": "Every bite was seasoned with love, even if we both joked about the seasoning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Made with heart."
  },
  {
    "id": 302,
    "category": "quirk",
    "tag": "Day 302",
    "title": "How You Wrap in Blankets (Part 3)",
    "text": "Spinning yourself into a cocoon until only your nose is peeking out. It reminds me every day how deeply blessed I am to have you.",
    "note": "The cutest caterpillar."
  },
  {
    "id": 303,
    "category": "future",
    "tag": "Day 303",
    "title": "Mastering New Recipes (Part 3)",
    "text": "Cooking together, making huge messes, and discovering new culinary masterpieces. It reminds me every day how deeply blessed I am to have you.",
    "note": "Partners in flavor."
  },
  {
    "id": 304,
    "category": "joke",
    "tag": "Day 304",
    "title": "The 'I Told You So' Look (Part 4)",
    "text": "That triumphant, knowing smirk when your prediction turns out 100% right. It reminds me every day how deeply blessed I am to have you.",
    "note": "You were right, as always."
  },
  {
    "id": 305,
    "category": "love",
    "tag": "Day 305",
    "title": "How You Heal My Heart (Part 3)",
    "text": "On days when the weight of life feels too heavy, you remind me that I am never alone. It reminds me every day how deeply blessed I am to have you.",
    "note": "You are my peace."
  },
  {
    "id": 306,
    "category": "compliment",
    "tag": "Day 306",
    "title": "Your Magnetic Charm (Part 3)",
    "text": "You have this effortless charm that makes everyone feel instantly welcome and loved. It reminds me every day how deeply blessed I am to have you.",
    "note": "A natural blessing."
  },
  {
    "id": 307,
    "category": "memory",
    "tag": "Day 307",
    "title": "Getting Caught in the Snow (Part 3)",
    "text": "Catching snowflakes on our tongues and hugging tightly to stay warm. It reminds me every day how deeply blessed I am to have you.",
    "note": "Winter wonderland."
  },
  {
    "id": 308,
    "category": "quirk",
    "tag": "Day 308",
    "title": "Your Excited Hand Flaps (Part 3)",
    "text": "When good news arrives and your hands flutter with uncontrollable joy. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure exuberance."
  },
  {
    "id": 309,
    "category": "future",
    "tag": "Day 309",
    "title": "Traveling the World Together (Part 4)",
    "text": "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand. It reminds me every day how deeply blessed I am to have you.",
    "note": "A world to explore."
  },
  {
    "id": 310,
    "category": "joke",
    "tag": "Day 310",
    "title": "Directions Debate (Part 4)",
    "text": "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive. It reminds me every day how deeply blessed I am to have you.",
    "note": "Scenic route, darling."
  },
  {
    "id": 311,
    "category": "love",
    "tag": "Day 311",
    "title": "Your Faith in Us (Part 3)",
    "text": "Through every storm and sunny day, your commitment to our bond never wavers. It reminds me every day how deeply blessed I am to have you.",
    "note": "My rock and foundation."
  },
  {
    "id": 312,
    "category": "compliment",
    "tag": "Day 312",
    "title": "Your Grace Under Pressure (Part 3)",
    "text": "When unexpected chaos erupts, you maintain a calm poise that steadies everyone around you. It reminds me every day how deeply blessed I am to have you.",
    "note": "True elegance."
  },
  {
    "id": 313,
    "category": "memory",
    "tag": "Day 313",
    "title": "Our Morning Hugs (Part 3)",
    "text": "Those 30 seconds before getting out of bed where time stands completely still. It reminds me every day how deeply blessed I am to have you.",
    "note": "My daily recharge."
  },
  {
    "id": 314,
    "category": "quirk",
    "tag": "Day 314",
    "title": "Making Pet Voices (Part 3)",
    "text": "Translating what the dog or cat is supposedly thinking in a hilarious dramatic accent. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pet psychic."
  },
  {
    "id": 315,
    "category": "future",
    "tag": "Day 315",
    "title": "Our Cozy Sunday Mornings (Part 4)",
    "text": "Decades from now, sitting side-by-side on the couch reading books and sipping tea. It reminds me every day how deeply blessed I am to have you.",
    "note": "Lifelong peaceful mornings."
  },
  {
    "id": 316,
    "category": "joke",
    "tag": "Day 316",
    "title": "The 10 Alarms in the Morning (Part 4)",
    "text": "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off. It reminds me every day how deeply blessed I am to have you.",
    "note": "Preparation meets procrastination."
  },
  {
    "id": 317,
    "category": "love",
    "tag": "Day 317",
    "title": "The Warmth in Your Greeting (Part 3)",
    "text": "The joy in your voice whenever you say hello after we've been apart for hours. It reminds me every day how deeply blessed I am to have you.",
    "note": "Best greeting in the world."
  },
  {
    "id": 318,
    "category": "compliment",
    "tag": "Day 318",
    "title": "The Soft Curve of Your Cheeks (Part 3)",
    "text": "The way your cheeks flush pink when you blush or when it's chilly outside. It reminds me every day how deeply blessed I am to have you.",
    "note": "Irresistibly cute."
  },
  {
    "id": 319,
    "category": "memory",
    "tag": "Day 319",
    "title": "The Secret Notes You Left (Part 3)",
    "text": "Finding a sticky note hidden in my bag with a sweet message that made my entire day. It reminds me every day how deeply blessed I am to have you.",
    "note": "Unexpected joy."
  },
  {
    "id": 320,
    "category": "quirk",
    "tag": "Day 320",
    "title": "Saving Trinkets (Part 3)",
    "text": "Keeping shells from the beach, smooth stones, and restaurant coasters as keepsakes. It reminds me every day how deeply blessed I am to have you.",
    "note": "Collector of sweet memories."
  },
  {
    "id": 321,
    "category": "future",
    "tag": "Day 321",
    "title": "Designing Our Home (Part 4)",
    "text": "Choosing paint colors, hanging artwork, and planting flowers in our dream garden. It reminds me every day how deeply blessed I am to have you.",
    "note": "Building our castle."
  },
  {
    "id": 322,
    "category": "joke",
    "tag": "Day 322",
    "title": "Borrowing My Phone Charger (Part 4)",
    "text": "Why is my phone charger always plugged into the outlet on your side of the bed? It reminds me every day how deeply blessed I am to have you.",
    "note": "The great electronic heist."
  },
  {
    "id": 323,
    "category": "love",
    "tag": "Day 323",
    "title": "You Make Ordinary Moments Sacred (Part 3)",
    "text": "A trip to the laundromat or grocery store turns into a romantic date when I'm with you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Every moment is holy."
  },
  {
    "id": 324,
    "category": "compliment",
    "tag": "Day 324",
    "title": "Your Pure Authenticity (Part 3)",
    "text": "You never pretend to be someone else to fit in. You are unapologetically and beautifully you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Original and honest."
  },
  {
    "id": 325,
    "category": "memory",
    "tag": "Day 325",
    "title": "That Sunset We Chased (Part 3)",
    "text": "Speeding up the hill just in time to watch the golden orb slip beneath the horizon. It reminds me every day how deeply blessed I am to have you.",
    "note": "Chasing beauty with you."
  },
  {
    "id": 326,
    "category": "quirk",
    "tag": "Day 326",
    "title": "Your Cold Hands on My Neck (Part 3)",
    "text": "Sneaking your chilly hands onto my warm neck just to hear me squeal. It reminds me every day how deeply blessed I am to have you.",
    "note": "You mischievous villain!"
  },
  {
    "id": 327,
    "category": "future",
    "tag": "Day 327",
    "title": "Celebrating Golden Anniversaries (Part 4)",
    "text": "Dancing at our 50th anniversary with the same spark in our eyes as our first year. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless devotion."
  },
  {
    "id": 328,
    "category": "joke",
    "tag": "Day 328",
    "title": "The 'One More Episode' Trap (Part 4)",
    "text": "Promising we'll sleep after this episode, then bingeing until 2:30 AM. It reminds me every day how deeply blessed I am to have you.",
    "note": "Netflix enablers."
  },
  {
    "id": 329,
    "category": "love",
    "tag": "Day 329",
    "title": "You Love Without Keeping Score (Part 3)",
    "text": "Your love isn't transactional; you give freely from an ocean of affection. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure grace."
  },
  {
    "id": 330,
    "category": "compliment",
    "tag": "Day 330",
    "title": "Your Captivating Smile (Part 3)",
    "text": "One genuine smile from you is enough to rewrite the worst day of my week into a victory. It reminds me every day how deeply blessed I am to have you.",
    "note": "Sunshine personified."
  },
  {
    "id": 331,
    "category": "memory",
    "tag": "Day 331",
    "title": "Singing in the Shower (Part 3)",
    "text": "Hearing you hum or sing your favorite song from the next room. It reminds me every day how deeply blessed I am to have you.",
    "note": "My favorite background music."
  },
  {
    "id": 332,
    "category": "quirk",
    "tag": "Day 332",
    "title": "Your Coffee Preferences (Part 3)",
    "text": "The exact, hyper-specific ratio of milk, vanilla, and ice you need for optimal bliss. It reminds me every day how deeply blessed I am to have you.",
    "note": "Barista extraordinaire."
  },
  {
    "id": 333,
    "category": "future",
    "tag": "Day 333",
    "title": "Holding Hands as Elders (Part 4)",
    "text": "Walking slow in the park, two old souls still madly in love. It reminds me every day how deeply blessed I am to have you.",
    "note": "Enduring romance."
  },
  {
    "id": 334,
    "category": "joke",
    "tag": "Day 334",
    "title": "Stealing My Clothes (Part 5)",
    "text": "My hoodies, t-shirts, and flannels are legally classified as joint marital property now. It reminds me every day how deeply blessed I am to have you.",
    "note": "They look better on you anyway."
  },
  {
    "id": 335,
    "category": "love",
    "tag": "Day 335",
    "title": "How You Hold Me Close (Part 3)",
    "text": "The way you pull me in tight in the middle of the night without even waking up. It reminds me every day how deeply blessed I am to have you.",
    "note": "Subconscious love."
  },
  {
    "id": 336,
    "category": "compliment",
    "tag": "Day 336",
    "title": "Your Sweet Heart (Part 3)",
    "text": "Your instincts are always rooted in kindness and empathy. You are genuine goodness. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pure sweetness."
  },
  {
    "id": 337,
    "category": "memory",
    "tag": "Day 337",
    "title": "Our First Photo Together (Part 3)",
    "text": "Looking at that early picture of us and smiling at how little we knew then of how deep this love would become. It reminds me every day how deeply blessed I am to have you.",
    "note": "The start of forever."
  },
  {
    "id": 338,
    "category": "quirk",
    "tag": "Day 338",
    "title": "Dancing in the Aisles (Part 3)",
    "text": "Swaying to the supermarket background music while picking out pasta. It reminds me every day how deeply blessed I am to have you.",
    "note": "Making everyday life a musical."
  },
  {
    "id": 339,
    "category": "future",
    "tag": "Day 339",
    "title": "Endless More Sunsets (Part 4)",
    "text": "Thousands more sunsets to watch together as the colors paint our love across the sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Never-ending wonder."
  },
  {
    "id": 340,
    "category": "joke",
    "tag": "Day 340",
    "title": "Your Midnight Snack Invasions (Part 5)",
    "text": "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate. It reminds me every day how deeply blessed I am to have you.",
    "note": "Caught in 4K!"
  },
  {
    "id": 341,
    "category": "love",
    "tag": "Day 341",
    "title": "You Are My Best Secret Keeper (Part 3)",
    "text": "There is no thought too weird or fear too silly that I cannot confess to you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Total trust."
  },
  {
    "id": 342,
    "category": "compliment",
    "tag": "Day 342",
    "title": "The Light in Your Eyes (Part 4)",
    "text": "There is a spark in your eyes that rivals the brightest stars in the night sky. It reminds me every day how deeply blessed I am to have you.",
    "note": "Mesmerizing."
  },
  {
    "id": 343,
    "category": "memory",
    "tag": "Day 343",
    "title": "The Impromptu Picnic (Part 4)",
    "text": "Spreading a jacket on the grass, eating sandwiches, and talking about childhood dreams. It reminds me every day how deeply blessed I am to have you.",
    "note": "Simple perfection."
  },
  {
    "id": 344,
    "category": "quirk",
    "tag": "Day 344",
    "title": "Your Cute Sneeze (Part 4)",
    "text": "That tiny, high-pitched sneeze that sounds like a cartoon kitten. It reminds me every day how deeply blessed I am to have you.",
    "note": "Bless you a thousand times."
  },
  {
    "id": 345,
    "category": "future",
    "tag": "Day 345",
    "title": "Spontaneous Road Trips (Part 4)",
    "text": "Packing a bag on a Friday afternoon and heading toward the coast with no reservations. It reminds me every day how deeply blessed I am to have you.",
    "note": "Freedom with you."
  },
  {
    "id": 346,
    "category": "joke",
    "tag": "Day 346",
    "title": "The 'I Told You So' Look (Part 5)",
    "text": "That triumphant, knowing smirk when your prediction turns out 100% right. It reminds me every day how deeply blessed I am to have you.",
    "note": "You were right, as always."
  },
  {
    "id": 347,
    "category": "love",
    "tag": "Day 347",
    "title": "The Softness You Bring Out in Me (Part 3)",
    "text": "In a world that forces people to be hard, you give me permission to be gentle. It reminds me every day how deeply blessed I am to have you.",
    "note": "My safe harbor."
  },
  {
    "id": 348,
    "category": "compliment",
    "tag": "Day 348",
    "title": "Your Heavenly Scent (Part 4)",
    "text": "The subtle hint of vanilla, flowers, and warmth that belongs uniquely to you. It reminds me every day how deeply blessed I am to have you.",
    "note": "Addictive fragrance."
  },
  {
    "id": 349,
    "category": "memory",
    "tag": "Day 349",
    "title": "That Cozy Movie Marathon (Part 4)",
    "text": "Watching movies back-to-back all Sunday while sharing a bowl of hot buttery popcorn. It reminds me every day how deeply blessed I am to have you.",
    "note": "Comfort peak."
  },
  {
    "id": 350,
    "category": "quirk",
    "tag": "Day 350",
    "title": "Stealing My Pillows (Part 4)",
    "text": "Starting with one pillow and gradually conquering all four by morning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Pillow sovereign."
  },
  {
    "id": 351,
    "category": "future",
    "tag": "Day 351",
    "title": "Mastering New Recipes (Part 4)",
    "text": "Cooking together, making huge messes, and discovering new culinary masterpieces. It reminds me every day how deeply blessed I am to have you.",
    "note": "Partners in flavor."
  },
  {
    "id": 352,
    "category": "joke",
    "tag": "Day 352",
    "title": "Directions Debate (Part 5)",
    "text": "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive. It reminds me every day how deeply blessed I am to have you.",
    "note": "Scenic route, darling."
  },
  {
    "id": 353,
    "category": "love",
    "tag": "Day 353",
    "title": "You Are My Definition of Home (Part 3)",
    "text": "Home isn't a zip code or a four-walled room; home is wherever you are breathing next to me. It reminds me every day how deeply blessed I am to have you.",
    "note": "My true home."
  },
  {
    "id": 354,
    "category": "compliment",
    "tag": "Day 354",
    "title": "Your Beautiful Soul (Part 4)",
    "text": "Your physical beauty is breathtaking, but your soul's beauty is what truly captured my heart forever. It reminds me every day how deeply blessed I am to have you.",
    "note": "Radiant within and without."
  },
  {
    "id": 355,
    "category": "memory",
    "tag": "Day 355",
    "title": "Our Late Night Talks in the Car (Part 4)",
    "text": "Parked in the driveway for an extra hour because neither of us wanted the night to end. It reminds me every day how deeply blessed I am to have you.",
    "note": "Timeless moments."
  },
  {
    "id": 356,
    "category": "quirk",
    "tag": "Day 356",
    "title": "Your Snack Rituals (Part 4)",
    "text": "Eating all the edges of a cookie first before savoring the chocolate center. It reminds me every day how deeply blessed I am to have you.",
    "note": "Artisanal snacking."
  },
  {
    "id": 357,
    "category": "future",
    "tag": "Day 357",
    "title": "Traveling the World Together (Part 5)",
    "text": "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand. It reminds me every day how deeply blessed I am to have you.",
    "note": "A world to explore."
  },
  {
    "id": 358,
    "category": "joke",
    "tag": "Day 358",
    "title": "The 10 Alarms in the Morning (Part 5)",
    "text": "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off. It reminds me every day how deeply blessed I am to have you.",
    "note": "Preparation meets procrastination."
  },
  {
    "id": 359,
    "category": "love",
    "tag": "Day 359",
    "title": "Your Constant Encouragement (Part 3)",
    "text": "When I doubt my creative ideas, you give me the confidence to take the leap. It reminds me every day how deeply blessed I am to have you.",
    "note": "My muse and cheer."
  },
  {
    "id": 360,
    "category": "compliment",
    "tag": "Day 360",
    "title": "Your Gentle Touch (Part 4)",
    "text": "Even a simple brush of your hand against my neck gives me chills of pure affection. It reminds me every day how deeply blessed I am to have you.",
    "note": "Electric tenderness."
  },
  {
    "id": 361,
    "category": "memory",
    "tag": "Day 361",
    "title": "The First Time You Cooked for Me (Part 4)",
    "text": "Every bite was seasoned with love, even if we both joked about the seasoning. It reminds me every day how deeply blessed I am to have you.",
    "note": "Made with heart."
  },
  {
    "id": 362,
    "category": "quirk",
    "tag": "Day 362",
    "title": "How You Wrap in Blankets (Part 4)",
    "text": "Spinning yourself into a cocoon until only your nose is peeking out. It reminds me every day how deeply blessed I am to have you.",
    "note": "The cutest caterpillar."
  },
  {
    "id": 363,
    "category": "future",
    "tag": "Day 363",
    "title": "Our Cozy Sunday Mornings (Part 5)",
    "text": "Decades from now, sitting side-by-side on the couch reading books and sipping tea. It reminds me every day how deeply blessed I am to have you.",
    "note": "Lifelong peaceful mornings."
  },
  {
    "id": 364,
    "category": "joke",
    "tag": "Day 364",
    "title": "Borrowing My Phone Charger (Part 5)",
    "text": "Why is my phone charger always plugged into the outlet on your side of the bed? It reminds me every day how deeply blessed I am to have you.",
    "note": "The great electronic heist."
  },
  {
    "id": 365,
    "category": "love",
    "tag": "Day 365",
    "title": "How You Value Our Memories (Part 3)",
    "text": "You treat our milestones and silly little inside memories like sacred treasures. It reminds me every day how deeply blessed I am to have you.",
    "note": "Kept safe in our hearts."
  }
];
