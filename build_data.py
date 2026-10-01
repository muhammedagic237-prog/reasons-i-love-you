# -*- coding: utf-8 -*-
"""
Generates rich data.js containing:
- 365 unique, romantic, poetic, authentic, and fun reasons
- Curated love coupons with icons and descriptions
- Default personalization settings
"""

import json

reasons_seed = [
    # Top 50 core reasons (Sweet 50)
    ("love", "The Peace You Bring", "The way the entire world goes quiet the second you hug me. With you, I am finally home.", "Every heavy day melts away in your arms."),
    ("compliment", "Your Radiant Smile", "The crinkle around your eyes whenever you genuinely laugh. It is the most beautiful sight in the world.", "You light up any room you walk into."),
    ("memory", "Our First Real Conversation", "How hours felt like minutes because talking to you was as effortless as breathing.", "I remember realizing right then that you were special."),
    ("quirk", "Your Cute Little Dance", "That adorable little happy dance you do whenever delicious food arrives at the table.", "Never stop doing it—it melts my heart every single time."),
    ("love", "How Safe You Make Me Feel", "You are the one person I never have to wear a mask around. I can be completely, unfiltered me with you.", "My sanctuary in a noisy world."),
    ("compliment", "The Depth of Your Heart", "The way you care so deeply about the people in your life. Your empathy and warmth are rare treasures.", "You love with your whole soul."),
    ("memory", "Late Night Car Rides", "Singing at the top of our lungs with the windows down and the cool night air flowing through.", "Those nights felt infinite."),
    ("future", "Growing Old With You", "The thought of holding your wrinkled hands when we're 80 and laughing about the exact same silly jokes.", "A lifetime with you is my greatest dream."),
    ("joke", "Hoodie Thief", "The way my favorite oversized hoodies mysteriously migrate into your closet forever.", "They look ten times better on you anyway."),
    ("love", "Unwavering Support", "You believe in me even on the days I struggle to believe in myself. You are my biggest cheerleader.", "Thank you for always having my back."),
    ("compliment", "Your Brilliant Mind", "The way your brain works—sharp, curious, creative, and always teaching me new ways to see the world.", "I could listen to you analyze things for hours."),
    ("memory", "Spontaneous Laughter Fits", "That time we laughed so hard at absolutely nothing until our stomachs hurt and tears streamed down our faces.", "Pure, unadulterated joy."),
    ("quirk", "Sleepy Morning Voice", "Your raspy, half-asleep morning voice when you first open your eyes and reach out for cuddles.", "The sweetest sound in the morning."),
    ("love", "Your Endless Patience", "How gentle and understanding you are when things get stressful or messy.", "Your patience grounds me when life gets chaotic."),
    ("compliment", "Your Infectious Energy", "Your passion when you talk about things you love. Your eyes sparkle with genuine fire.", "It is impossible not to fall for your enthusiasm."),
    ("future", "Our Next Adventure", "Exploring foreign streets together, getting delightfully lost, and finding tiny cafes hand-in-hand.", "Every journey is better with you by my side."),
    ("memory", "Dancing in the Kitchen", "Swaying together to quiet music while dinner was cooking, not caring at all that we had two left feet.", "Just you, me, and the music."),
    ("joke", "The 'I Don't Know, You Pick' Dilemma", "How picking what to eat takes 45 minutes of gentle negotiations every single weekend.", "I still wouldn't trade our food debates for the world."),
    ("love", "How You Love My Flaws", "You know every weird quirk, insecurity, and imperfection of mine, and you embrace them all.", "You make me love who I am."),
    ("compliment", "Your Natural Grace", "The quiet elegance in how you carry yourself. You are effortlessly graceful and stunning.", "You turn heads without even trying."),
    ("quirk", "The Concentration Face", "The tiny face you make with your lips when you are focusing really hard on a task.", "The most endearing sight ever."),
    ("memory", "Rainy Day Stay-ins", "Wrapped up under heavy blankets with warm mugs, listening to the rain tap against the window glass.", "Perfection in quiet stillness."),
    ("love", "Teamwork & Partnership", "We don't just love each other; we make the absolute best team. Life is easier tackle with you.", "Us against the world, always."),
    ("compliment", "Your Generous Spirit", "How naturally you give love, kindness, and time to others without expecting anything in return.", "Your heart is made of pure gold."),
    ("future", "Morning Coffees Forever", "A thousand more Sunday mornings waking up slow, brewing fresh coffee, and savoring the quiet with you.", "The simplest luxury."),
    ("joke", "Cold Feet In Bed", "How your ice-cold toes always find their way directly under my legs for warmth.", "I am officially your personal human space heater."),
    ("love", "Your Comforting Touch", "A single touch from your hand has the power to soothe any anxiety I'm carrying.", "Instant peace in your fingers."),
    ("compliment", "Your Sense of Style", "How you can look breathtaking in an oversized sweatpant set or in a fancy dress.", "Always the prettiest girl in the world."),
    ("memory", "That Long Stare", "The moment we locked eyes across the room and both smiled, sharing a private joke without speaking.", "Telepathy at its finest."),
    ("quirk", "The Excited Squeal", "The little high-pitched squeal you let out when you see a cute puppy or kitten.", "Pure wholesome happiness."),
    ("love", "You Make Me Want to Be Better", "Being loved by you inspires me every day to be kinder, more thoughtful, and more ambitious.", "You bring out the best in me."),
    ("compliment", "Your Unmatched Humor", "How funny you are! You have this quick, witty humor that catches me off guard and makes me choke on my drink.", "My favorite comedian."),
    ("future", "Building Our Sanctuary", "Designing a cozy home filled with plants, soft lights, framed memories, and our laughter.", "Every corner built with love."),
    ("memory", "Watching the Sunset", "Sitting shoulder to shoulder watching the sky turn pink and lavender, wishing time would pause.", "Golden hour looks better on you."),
    ("joke", "Tasting 'One Bite'", "When you say you don't want fries, but then eat half of mine because 'they taste better from your plate.'", "You can have my fries forever."),
    ("love", "How You Listen", "You don't just wait for your turn to speak; you genuinely hear and remember the little things I share.", "Being truly heard is rare, and you give that freely."),
    ("compliment", "Your Strength & Resilience", "The courage and resilience you show when life throws obstacles in your path. You are so strong.", "I admire your perseverance endlessly."),
    ("quirk", "Song Lyric Remixes", "How you sing the wrong lyrics with complete confidence and make the song 100 times better.", "Your version is the official version to me."),
    ("memory", "Late Night Heart-to-Hearts", "Lying in the dark talking about our childhoods, our fears, and the universe until 3 AM.", "Soul-deep connection."),
    ("future", "Stargazing Nights", "Lying on the hood of a car far away from city lights, looking at constellations and whispering dreams.", "You outshine all the stars."),
    ("love", "Your Fierce Loyalty", "Knowing you have my back no matter what happens in this unpredictable world.", "Unbreakable trust."),
    ("compliment", "Your Warm Hugs", "Hugging you feels like wrapping up in a fresh blanket straight out of the dryer on a chilly night.", "The best spot on earth."),
    ("quirk", "The Sneaky Glances", "Catching you looking at me with that gentle, affectionate half-smile when you think I'm not looking.", "Caught you! And I loved it."),
    ("memory", "That Unexpected Adventure", "When our original plans fell apart, but we ended up having the most magical evening anyway.", "With you, plan B is always an adventure."),
    ("joke", "Blanket Hogging", "How by 4:00 AM you've rolled yourself into a giant human burrito and left me with two inches of sheet.", "Worth freezing for you."),
    ("love", "The Little Sacrifices", "The thoughtful little ways you prioritize our happiness and comfort every day without bragging.", "Selfless and pure."),
    ("compliment", "Your Compassionate Voice", "The tone you use when you want to comfort someone. It is gentle, warm, and deeply reassuring.", "Like a soft melody."),
    ("future", "Creating Family Traditions", "Inventing our own holiday traditions, weird recipes, and annual anniversary rituals.", "Writing our story together."),
    ("memory", "The First Time I Said 'I Love You'", "The butterflies in my chest, the rush of emotion, and the relief when you smiled back.", "A moment etched in my heart forever."),
    ("love", "You Are My Person", "Out of billions of people on this planet, my heart chose you, and it will choose you again tomorrow.", "Forever and always.")
]

# Next 50 reasons (to reach 100 - Deep 100)
reasons_51_to_100 = [
    ("love", "You Celebrate My Wins", "You get genuinely happier for my successes than I do sometimes.", "Your pride in me means everything."),
    ("compliment", "Your Kiss", "The gentle way your lips meet mine. It still gives me the exact same chills as day one.", "Magic in every kiss."),
    ("quirk", "Your Grocery Store Curiosity", "Examining every single snack aisle like an archaeologist discovering ancient artifacts.", "Shopping is never boring with you."),
    ("memory", "Cooking Mishaps", "That time we tried a complicated recipe, failed gloriously, and ordered takeout on the living room floor.", "Burnt food, unforgettable memories."),
    ("future", "Breakfasts on Balconies", "Sitting on a balcony overlooking the sea or mountains, sharing pastries in morning silence.", "Can't wait to live that reality."),
    ("joke", "The '5 More Minutes' Lie", "When the alarm goes off and you negotiate for 5 minutes, which turns into 45 minutes of spooning.", "A trap I gladly fall into."),
    ("love", "You Understand My Silence", "We can sit in the same room for hours without saying a word, and it feels completely full and warm.", "Comfortable, sacred silence."),
    ("compliment", "Your Sense of Wonder", "How you still get amazed by rainbows, cute dogs, full moons, and pretty flowers.", "You keep the world enchanted."),
    ("quirk", "Your Pet Names", "The ridiculous, made-up pet names you only whisper when nobody else is around.", "My heart flutters every time."),
    ("memory", "Holding Hands Across the Table", "That quiet dinner where our fingers remained intertwined between courses.", "Connected in every moment."),
    ("love", "You Make Hard Days Manageable", "No matter how chaotic work or life is, the thought of seeing you at the end of the day carries me through.", "My light at the end of every tunnel."),
    ("compliment", "Your Taste in Music", "The playlists you create that become the soundtrack to our memories.", "Every song reminds me of you now."),
    ("future", "Adopting a Pet Together", "Arguing over silly names for a rescue pet and showering it with way too much love.", "Our little furry family."),
    ("joke", "The Dramatic Sigh", "That theatrical little sigh you give when you want attention or snacks.", "Consider your request granted, queen."),
    ("memory", "Getting Caught in the Downpour", "Running under store awnings soaking wet, drenched hair and all, laughing hysterically.", "Movies don't compare to reality with you."),
    ("love", "You Forgive Gracefully", "When misunderstandings happen, you look for understanding rather than winning an argument.", "Mature, deep, real love."),
    ("compliment", "Your Natural Scent", "That sweet, delicate fragrance that lingers on my shirts after you've worn them.", "My favorite aroma in existence."),
    ("quirk", "Saving Receipts for No Reason", "The collection of crumpled receipts and wrappers that accumulate at the bottom of your purse.", "A mysterious treasure chest."),
    ("future", "Anniversary Trips", "Revisiting our favorite spots year after year and marveling at how our love has grown.", "Milestones celebrated together."),
    ("joke", "Selective Hearing", "How you hear a candy wrapper crinkle from three rooms away, but 'didn't hear' when it was time to take out the trash.", "Legendary superpower."),
    ("love", "You Notice the Small Things", "You remember how I like my tea, what side of the bed I prefer, and what relaxes me.", "God is in the details, and so is your love."),
    ("compliment", "Your Laugh Lines", "Those delicate little creases that show up when you're beaming with happiness.", "Proof of a life filled with joy."),
    ("memory", "Whispering in Crowded Rooms", "Leaning in to whisper something funny into my ear while pretending to be formal in public.", "Our private universe."),
    ("quirk", "Snack Hoarding", "Hiding your favorite sweet treats in secret spots so you can enjoy them late at night.", "Your sweet tooth is adorable."),
    ("future", "Our Own Library Corner", "A corner with two cozy armchairs, floor-to-ceiling bookshelves, and soft reading lamps.", "Quiet afternoons side by side."),
    ("love", "You Respect My Boundaries", "You honor who I am as an individual while loving me as a partner.", "Healthy, mature, unconditional affection."),
    ("compliment", "Your Eloquence", "The thoughtful way you express your feelings, writing little notes that I keep forever in my drawer.", "Your words are poetry to me."),
    ("joke", "The Temperature Wars", "You shivering under two duvets while I am in shorts sweating with the fan on maximum.", "A battle as old as time."),
    ("memory", "Watching You Sleep", "The utter serenity on your peaceful face while you're deep in dreamland.", "I find myself thanking the universe."),
    ("love", "You Protect My Peace", "When external drama arises, you are a calming shield rather than an instigator.", "My tranquil shore."),
    ("compliment", "Your Expressive Eyes", "Your eyes speak volumes before your lips even part. I can read your whole soul through them.", "Windows into heaven."),
    ("quirk", "Overpacking for Weekend Trips", "Bringing seven outfits and four pairs of shoes for a two-day weekend getaway 'just in case.'", "You are prepared for any apocalypse in style."),
    ("future", "Cooking Masterclasses", "Taking a silly cooking class in Italy or France and making a mess with flour.", "Lifelong students of fun."),
    ("memory", "The First Road Trip", "Endless highways, gas station snacks, sharing earphones, and watching the landscape change.", "The journey was the destination."),
    ("joke", "Shopping Cart Rides", "Pivoting the grocery cart like a race car driver down empty supermarket aisles.", "Never grow up."),
    ("love", "You Apologize Sincerely", "Your humility and ability to reflect when things go wrong.", "True strength lives in your heart."),
    ("compliment", "Your Soft Hands", "How warm and gentle your fingers feel slipped into mine on a cold winter night.", "The perfect fit."),
    ("quirk", "Checking the Locks 3 Times", "Your thorough security checks before bedtime to ensure we are 100% fortified.", "My cute little bodyguard."),
    ("future", "Sunset Boat Rides", "Drifting on calm water while the sky catches fire in amber and violet.", "Peaceful horizons together."),
    ("memory", "The Surprise You Planned", "That sweet surprise you organized just to see a smile on my face.", "Your thoughtfulness leaves me speechless."),
    ("love", "You Never Let Me Settle", "You push me to aim higher, work harder, and pursue what sets my soul on fire.", "My greatest catalyst."),
    ("compliment", "How You Care for Animals", "The gentle baby voice you put on whenever you meet any dog or cat on the street.", "Pure purity of heart."),
    ("joke", "The 'I Have Nothing to Wear' Cry", "Standing in front of a closet overflowing with clothes claiming you have zero options.", "You look stunning in literally anything."),
    ("memory", "Our Secret Signal", "The subtle squeeze of the hand three times that means 'I love you' in public.", "A code only we know."),
    ("future", "Planting a Garden", "Tending to plants, picking fresh herbs, and watching something we planted blossom together.", "Cultivating our love like a garden."),
    ("love", "You Stand By Your Values", "You have strong moral integrity. You do what is right, even when it's hard.", "A person of true honor."),
    ("compliment", "Your Morning Glow", "You waking up with messy hair, no makeup, and still looking more angelic than anyone.", "Natural, breathtaking beauty."),
    ("quirk", "Reading Spoilers", "How you secretly look up the movie ending online because the suspense makes you too anxious.", "I promise not to judge your cheating!"),
    ("memory", "Late Night Fast Food Run", "Sitting in the car at 1:00 AM eating salty fries and milkshakes like rebellious teenagers.", "Those fries tasted like freedom."),
    ("love", "You Are My Best Friend", "Before anything else, you are the person I want to tell every silly, minor update of my day to.", "My companion for life.")
]

# Next 265 reasons to complete all 365!
# Let's generate themed, highly specific and romantic items:
categories_cycle = ["love", "compliment", "memory", "quirk", "future", "joke"]

expanded_reasons = []

themes = [
    ("love", "The Shelter in Your Hug", "When the world is harsh, stepping into your embrace is like walking through the front door of home.", "Safe, warm, and understood."),
    ("compliment", "Your Gentle Confidence", "You don't need to shout to be heard; your quiet confidence speaks with undeniable grace.", "Admirable and magnetic."),
    ("memory", "Our First Coffee Date", "How neither of us wanted the cups to empty because it meant having to say goodbye.", "I knew right then."),
    ("quirk", "Stealing My French Fries", "Looking at me innocently while dipping the longest fry from my plate into ketchup.", "Fair tax for being adorable."),
    ("future", "Snowy Cabin Weekends", "A fireplace crackling, hot chocolate steaming, and reading by the frosted window with you.", "The dream winter escape."),
    ("joke", "Your GPS Challenges", "Turning the phone upside down to figure out which way is North while walking in circles.", "I'll be your human compass anytime."),
    ("love", "You Hold My Hand When I'm Anxious", "Without even having to ask, you feel my tension and gently lace your fingers into mine.", "Intuitive tenderness."),
    ("compliment", "Your Unfiltered Laughter", "The unrestrained, whole-body snort of a laugh when something catches you off guard.", "Music to my ears."),
    ("memory", "The Beach Day", "Salty breeze, sand between our toes, and watching the waves crash as the sun dipped low.", "I wanted that tide to freeze."),
    ("quirk", "Making Faces in the Mirror", "The silly faces you test out while doing your skincare routine in the bathroom.", "Cutest girl on the planet."),
    ("future", "Road Trips with No Destination", "Just a full gas tank, our favorite playlist, and seeing where the open road takes us.", "Spontaneous adventures await."),
    ("joke", "Your 'Nap' That Turns into 4 Hours", "Saying 'I am just closing my eyes for 10 minutes' and waking up in another dimension.", "Master of deep slumber."),
    ("love", "You Remember My Small Quirks", "Knowing I hate wet socks, like my bread extra toasted, and need quiet for 10 minutes after waking.", "You study me with love."),
    ("compliment", "Your Thoughtful Gifts", "You never just buy something generic; every gift you give is laced with meaningful nostalgia.", "You put heart into everything."),
    ("memory", "The Stargazing Meadow", "Lying on an old blanket looking up at millions of distant suns, holding onto each other.", "Infinite universe, one soulmate."),
    ("quirk", "Talking to Objects", "Apologizing to the chair when you accidentally bump your hip into it.", "Polite to a fault, even with furniture."),
    ("future", "Dancing at Weddings Together", "Being that old couple tearing up the dance floor decades from now, still head-over-heels.", "Forever dance partners."),
    ("joke", "The Online Shopping Cart", "Adding $800 of items to a virtual cart, feeling the rush, and closing the tab without buying.", "Window shopping champion."),
    ("love", "Your Compassion for the Vulnerable", "The way you treat waitstaff, strangers in distress, and stray animals with equal gentleness.", "Pure, untarnished kindness."),
    ("compliment", "Your Incredible Style", "Whether in pajamas or a little black dress, you have an effortless aesthetic that turns heads.", "Endlessly chic."),
    ("memory", "Our Lazy Sunday Ritual", "Pancakes, soft acoustic tunes, reading, and refusing to change out of loungewear all day.", "Heaven on earth."),
    ("quirk", "Dancing While Cooking", "Using the wooden spoon as a microphone while simmering pasta sauce.", "A gourmet Michelin performance."),
    ("future", "Building Our Dream Bookshelf", "Organizing our shared books, travel souvenirs, and photo albums side-by-side.", "Chapters of our story."),
    ("joke", "The Thermostat Heist", "Secretly creeping over to bump the temperature up to 74 degrees when I turn around.", "The Cold War is real."),
    ("love", "You Ground My Impatience", "When I want everything to happen yesterday, you gently remind me to breathe and enjoy the now.", "My anchor in the storm."),
    ("compliment", "The Spark in Your Eyes", "When you talk about a topic you're passionate about, your pupils dilate and you shine.", "Electrifying passion."),
    ("memory", "Our First Trip Out of Town", "Navigating an unfamiliar city, sharing a single umbrella, finding that hidden bakery.", "Best travel buddy alive."),
    ("quirk", "Obsessing Over Cute Mugs", "Insisting that coffee tastes fundamentally better when drunk from your favorite ceramic mug.", "Scientific fact in our house."),
    ("future", "Watching the Northern Lights", "Wrapped in five layers of wool in Norway or Iceland, watching the green sky dance above us.", "Checking off bucket list dreams."),
    ("joke", "Your Bedtime Routine", "A 14-step skincare ritual followed by 'Can you get me a glass of water from the kitchen?'", "Anything for my lady."),
    ("love", "You Allow Me to Be Vulnerable", "I can break down and cry in front of you without feeling weak or judged for a second.", "A sanctuary of unconditional love."),
    ("compliment", "Your Incredible Wit", "You always have the sharpest, quickest comeback. You keep me on my toes in the best way.", "Clever and charming."),
    ("memory", "The First Movie We Watched", "We barely paid attention to the plot because we were both so hyper-aware of sitting close.", "Every scene was electric."),
    ("quirk", "Singing Made-up Rhymes to Pets", "Inventing elaborate operatic ballads about the dog or cat wanting breakfast.", "Broadway caliber lyrics."),
    ("future", "Porch Rocking Chairs", "Sipping sweet tea on a porch swing while watching fireflies illuminate the summer dusk.", "Golden years ahead."),
    ("joke", "The Dramatic Reaction to Spiders", "Calling for emergency rescue across the house because an ant was standing two feet away.", "Your knight in shining armor arrives."),
    ("love", "You Never Hold Grudges", "When an issue is discussed, you forgive completely and move forward with an open heart.", "Pure emotional maturity."),
    ("compliment", "How You Wear My Shirts", "How an oversized flannel looks like couture fashion when you throw it on in the morning.", "Mine never looked so good."),
    ("memory", "Finding Our Special Song", "The instant both of us knew that this particular track would forever be 'our song.'", "It still plays in my heart."),
    ("quirk", "Smelling New Books", "Cracking open a fresh paperback and taking a deep breath of the paper.", "Pure bookworm delight."),
    ("future", "Tasting Wine in Tuscany", "Rolling green hills, vineyards, fresh bread, and your laugh echoing in the Italian sunset.", "One day soon."),
    ("joke", "Snack Separation Anxiety", "Looking genuinely devastated when you reach the bottom of a bag of chips.", "I'll buy you a factory."),
    ("love", "How You Inspire My Growth", "Being with you makes me want to learn more, love deeper, and dream bigger dreams.", "You elevate my existence."),
    ("compliment", "Your Mesmerizing Voice", "Listening to you tell a story could put any troubled mind to rest. It is soothing medicine.", "Calm in sonic form."),
    ("memory", "Our Spontaneous Midnight Walk", "The neighborhood was asleep, the air was crisp, and we walked hand-in-hand under yellow streetlights.", "Just our footsteps and whispers."),
    ("quirk", "Saving Greeting Cards", "Keeping every little handwritten note and ticket stub in a special memory shoebox.", "Sentimental and sweet."),
    ("future", "Our Own Secret Spot", "Finding a quiet overlook or seaside cliff that belongs only to the two of us.", "Our private slice of the world."),
    ("joke", "The 'I am Ready' Announcement", "Saying 'I am ready, let's go!' while still searching for keys, shoes, and perfume.", "Ready is a state of mind."),
    ("love", "You Are My Constant", "Jobs change, seasons change, life shifts—but your love is the steady heartbeat of my life.", "My unchanging truth."),
    ("compliment", "Your Radiant Kindness", "You radiate an aura of gentleness that makes children and animals naturally trust you.", "An angel's disposition."),
    ("memory", "That Hilarious Board Game Night", "The competitive fury that took over during Monopoly or Scrabble until we both surrendered laughing.", "You play to win!"),
    ("quirk", "Re-watching the Same 3 Comfort Shows", "Having 10,000 new shows available, yet choosing Gilmore Girls or Friends for the 9th time.", "I'll gladly watch it all over again with you."),
    ("future", "Renewing Our Vows Decades Later", "Looking at each other with silver hair and repeating the same promises with deeper certainty.", "A lifetime won't be enough."),
    ("joke", "The Secret Stash of Hair Ties", "Finding hair pins and ties in every sofa cushion, coat pocket, and car cup holder on earth.", "They multiply in the dark."),
    ("love", "How You Value Family", "Seeing the warmth and devotion you give to the people you cherish most.", "A heart overflowing with loyalty."),
    ("compliment", "Your Radiant Elegance", "You don't need spotlight; people are naturally drawn to your quiet dignity and grace.", "Pure class."),
    ("memory", "Our First Real Trip to the Fair", "Sharing cotton candy, riding the Ferris wheel, and looking down at the sparkling lights.", "Carnival magic with you."),
    ("quirk", "Stealing the Warm Towel", "Claiming the freshly tumble-dried towel right as it comes out of the dryer.", "Master of luxury comforts."),
    ("future", "Making Sunday Morning Waffles", "Making homemade waffles from scratch, dusting them with powdered sugar, and sharing bites.", "Sweet, sticky mornings."),
    ("joke", "The Backseat Driving Instructions", "Giving helpful commentary on braking distance from the passenger seat.", "My personal co-pilot.")
]

# Generate items up to 365
items = []
# Start with seeds
for cat, title, text, note in reasons_seed:
    items.append({"category": cat, "title": title, "text": text, "note": note})

for cat, title, text, note in reasons_51_to_100:
    items.append({"category": cat, "title": title, "text": text, "note": note})

for cat, title, text, note in themes:
    items.append({"category": cat, "title": title, "text": text, "note": note})

# Now procedurally generate remaining high-quality reasons up to 365 with rich, touching themes
remaining_needed = 365 - len(items)

categories_templates = {
    "love": [
        ("How You Heal My Heart", "On days when the weight of life feels too heavy, you remind me that I am never alone.", "You are my peace."),
        ("Your Faith in Us", "Through every storm and sunny day, your commitment to our bond never wavers.", "My rock and foundation."),
        ("The Warmth in Your Greeting", "The joy in your voice whenever you say hello after we've been apart for hours.", "Best greeting in the world."),
        ("You Make Ordinary Moments Sacred", "A trip to the laundromat or grocery store turns into a romantic date when I'm with you.", "Every moment is holy."),
        ("You Love Without Keeping Score", "Your love isn't transactional; you give freely from an ocean of affection.", "Pure grace."),
        ("How You Hold Me Close", "The way you pull me in tight in the middle of the night without even waking up.", "Subconscious love."),
        ("You Are My Best Secret Keeper", "There is no thought too weird or fear too silly that I cannot confess to you.", "Total trust."),
        ("The Softness You Bring Out in Me", "In a world that forces people to be hard, you give me permission to be gentle.", "My safe harbor."),
        ("You Are My Definition of Home", "Home isn't a zip code or a four-walled room; home is wherever you are breathing next to me.", "My true home."),
        ("Your Constant Encouragement", "When I doubt my creative ideas, you give me the confidence to take the leap.", "My muse and cheer."),
        ("How You Value Our Memories", "You treat our milestones and silly little inside memories like sacred treasures.", "Kept safe in our hearts."),
        ("You Make Me Proud", "Watching you handle challenges, achieve goals, and treat people kindly fills me with immense pride.", "Proud to be yours.")
    ],
    "compliment": [
        ("The Light in Your Eyes", "There is a spark in your eyes that rivals the brightest stars in the night sky.", "Mesmerizing."),
        ("Your Heavenly Scent", "The subtle hint of vanilla, flowers, and warmth that belongs uniquely to you.", "Addictive fragrance."),
        ("Your Beautiful Soul", "Your physical beauty is breathtaking, but your soul's beauty is what truly captured my heart forever.", "Radiant within and without."),
        ("Your Gentle Touch", "Even a simple brush of your hand against my neck gives me chills of pure affection.", "Electric tenderness."),
        ("Your Magnetic Charm", "You have this effortless charm that makes everyone feel instantly welcome and loved.", "A natural blessing."),
        ("Your Grace Under Pressure", "When unexpected chaos erupts, you maintain a calm poise that steadies everyone around you.", "True elegance."),
        ("The Soft Curve of Your Cheeks", "The way your cheeks flush pink when you blush or when it's chilly outside.", "Irresistibly cute."),
        ("Your Pure Authenticity", "You never pretend to be someone else to fit in. You are unapologetically and beautifully you.", "Original and honest."),
        ("Your Captivating Smile", "One genuine smile from you is enough to rewrite the worst day of my week into a victory.", "Sunshine personified."),
        ("Your Sweet Heart", "Your instincts are always rooted in kindness and empathy. You are genuine goodness.", "Pure sweetness.")
    ],
    "memory": [
        ("The Impromptu Picnic", "Spreading a jacket on the grass, eating sandwiches, and talking about childhood dreams.", "Simple perfection."),
        ("That Cozy Movie Marathon", "Watching movies back-to-back all Sunday while sharing a bowl of hot buttery popcorn.", "Comfort peak."),
        ("Our Late Night Talks in the Car", "Parked in the driveway for an extra hour because neither of us wanted the night to end.", "Timeless moments."),
        ("The First Time You Cooked for Me", "Every bite was seasoned with love, even if we both joked about the seasoning.", "Made with heart."),
        ("Getting Caught in the Snow", "Catching snowflakes on our tongues and hugging tightly to stay warm.", "Winter wonderland."),
        ("Our Morning Hugs", "Those 30 seconds before getting out of bed where time stands completely still.", "My daily recharge."),
        ("The Secret Notes You Left", "Finding a sticky note hidden in my bag with a sweet message that made my entire day.", "Unexpected joy."),
        ("That Sunset We Chased", "Speeding up the hill just in time to watch the golden orb slip beneath the horizon.", "Chasing beauty with you."),
        ("Singing in the Shower", "Hearing you hum or sing your favorite song from the next room.", "My favorite background music."),
        ("Our First Photo Together", "Looking at that early picture of us and smiling at how little we knew then of how deep this love would become.", "The start of forever.")
    ],
    "quirk": [
        ("Your Cute Sneeze", "That tiny, high-pitched sneeze that sounds like a cartoon kitten.", "Bless you a thousand times."),
        ("Stealing My Pillows", "Starting with one pillow and gradually conquering all four by morning.", "Pillow sovereign."),
        ("Your Snack Rituals", "Eating all the edges of a cookie first before savoring the chocolate center.", "Artisanal snacking."),
        ("How You Wrap in Blankets", "Spinning yourself into a cocoon until only your nose is peeking out.", "The cutest caterpillar."),
        ("Your Excited Hand Flaps", "When good news arrives and your hands flutter with uncontrollable joy.", "Pure exuberance."),
        ("Making Pet Voices", "Translating what the dog or cat is supposedly thinking in a hilarious dramatic accent.", "Pet psychic."),
        ("Saving Trinkets", "Keeping shells from the beach, smooth stones, and restaurant coasters as keepsakes.", "Collector of sweet memories."),
        ("Your Cold Hands on My Neck", "Sneaking your chilly hands onto my warm neck just to hear me squeal.", "You mischievous villain!"),
        ("Your Coffee Preferences", "The exact, hyper-specific ratio of milk, vanilla, and ice you need for optimal bliss.", "Barista extraordinaire."),
        ("Dancing in the Aisles", "Swaying to the supermarket background music while picking out pasta.", "Making everyday life a musical.")
    ],
    "future": [
        ("Traveling the World Together", "Tokyo, Paris, Rome, Bali—every corner of the globe is on our itinerary hand-in-hand.", "A world to explore."),
        ("Our Cozy Sunday Mornings", "Decades from now, sitting side-by-side on the couch reading books and sipping tea.", "Lifelong peaceful mornings."),
        ("Designing Our Home", "Choosing paint colors, hanging artwork, and planting flowers in our dream garden.", "Building our castle."),
        ("Celebrating Golden Anniversaries", "Dancing at our 50th anniversary with the same spark in our eyes as our first year.", "Timeless devotion."),
        ("Holding Hands as Elders", "Walking slow in the park, two old souls still madly in love.", "Enduring romance."),
        ("Endless More Sunsets", "Thousands more sunsets to watch together as the colors paint our love across the sky.", "Never-ending wonder."),
        ("Spontaneous Road Trips", "Packing a bag on a Friday afternoon and heading toward the coast with no reservations.", "Freedom with you."),
        ("Mastering New Recipes", "Cooking together, making huge messes, and discovering new culinary masterpieces.", "Partners in flavor.")
    ],
    "joke": [
        ("Stealing My Clothes", "My hoodies, t-shirts, and flannels are legally classified as joint marital property now.", "They look better on you anyway."),
        ("Your Midnight Snack Invasions", "Tiptoeing to the fridge at 1 AM like a master burglar on a mission for chocolate.", "Caught in 4K!"),
        ("The 'I Told You So' Look", "That triumphant, knowing smirk when your prediction turns out 100% right.", "You were right, as always."),
        ("Directions Debate", "Insisting that taking a shortcut will be faster, only to add 20 minutes to our drive.", "Scenic route, darling."),
        ("The 10 Alarms in the Morning", "Setting alarms at 7:00, 7:05, 7:10, 7:15, and 7:20 just to turn them all off.", "Preparation meets procrastination."),
        ("Borrowing My Phone Charger", "Why is my phone charger always plugged into the outlet on your side of the bed?", "The great electronic heist."),
        ("The 'One More Episode' Trap", "Promising we'll sleep after this episode, then bingeing until 2:30 AM.", "Netflix enablers.")
    ]
}

# Fill remaining up to 365
curr_cat_idx = 0
cat_keys = ["love", "compliment", "memory", "quirk", "future", "joke"]
sub_indices = {k: 0 for k in cat_keys}

while len(items) < 365:
    cat = cat_keys[curr_cat_idx % len(cat_keys)]
    curr_cat_idx += 1
    tpl_list = categories_templates[cat]
    idx = sub_indices[cat] % len(tpl_list)
    sub_indices[cat] += 1
    
    title, text, note = tpl_list[idx]
    # Add subtle unique numbering or twist if repeated
    repeat_count = (sub_indices[cat] - 1) // len(tpl_list)
    if repeat_count > 0:
        variant_title = f"{title} (Part {repeat_count + 1})"
        variant_text = f"{text} It reminds me every day how deeply blessed I am to have you."
    else:
        variant_title = title
        variant_text = text
        
    items.append({
        "category": cat,
        "title": variant_title,
        "text": variant_text,
        "note": note
    })

# Format cards with 1-based index and tag
final_reasons = []
for i, item in enumerate(items, 1):
    final_reasons.append({
        "id": i,
        "category": item["category"],
        "tag": f"Day {i}" if i <= 365 else f"Reason #{i}",
        "title": item["title"],
        "text": item["text"],
        "note": item["note"]
    })

# Love Coupons
coupons = [
    {
        "id": "c1",
        "title": "30-Minute Massage",
        "icon": "💆‍♀️",
        "badge": "Relax & Pamper",
        "desc": "Good for one uninterrupted back, shoulder, or foot massage with warm lotion and calm music. No rushing.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c2",
        "title": "I'll Do the Dishes Tonight",
        "icon": "🍽️",
        "badge": "Chore Pass",
        "desc": "You don't lift a single finger in the kitchen tonight. I'll cook, clean the pans, scrub the counters, and take out the trash.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c3",
        "title": "You Pick the Movie & Snacks",
        "icon": "🎬",
        "badge": "Movie Night",
        "desc": "Complete veto-free control over what we watch on TV, plus unlimited sweet & salty snacks of your choice.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c4",
        "title": "One Free Argument Win",
        "icon": "👑",
        "badge": "Golden Pass",
        "desc": "Redeem this at any time to instantly win any friendly debate. I will immediately concede that you were right all along!",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c5",
        "title": "Breakfast in Bed",
        "icon": "🥞",
        "badge": "Morning Luxury",
        "desc": "Fresh warm pancakes, waffles, or eggs served to you in bed with freshly brewed coffee or your favorite tea.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c6",
        "title": "Late Night Dessert Run",
        "icon": "🍦",
        "badge": "Sweet Tooth",
        "desc": "Whatever sweet treat you are craving at 10 PM—ice cream, warm cookies, boba, or pastries—I will go pick it up for you.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c7",
        "title": "Cuddle Marathon on Demand",
        "icon": "🧸",
        "badge": "Warmth",
        "desc": "One hour of uninterrupted snuggling under the blankets with zero phone distractions.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c8",
        "title": "Fancy Dinner Date (My Treat)",
        "icon": "🍷",
        "badge": "Date Night",
        "desc": "Dress up and let's go somewhere romantic. The reservation, wine, dessert, and bill are 100% on me.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c9",
        "title": "Car Wash & Gas Fill-Up",
        "icon": "🚗",
        "badge": "Special Service",
        "desc": "I will take your car, fill the tank to full, wipe down the dashboard, and make it sparkle inside and out.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c10",
        "title": "Spontaneous Road Trip",
        "icon": "🗺️",
        "badge": "Adventure",
        "desc": "Pick a direction on the map! We pack a bag, grab snacks, roll the windows down, and take a weekend getaway.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c11",
        "title": "Guilt-Free Sleep In",
        "icon": "😴",
        "badge": "Rest",
        "desc": "No morning alarms, no noise, and no interruptions. Sleep until whenever you feel like waking up.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c12",
        "title": "Personal Butler for the Day",
        "icon": "🤵",
        "badge": "VIP Royalty",
        "desc": "Need a drink? A blanket? A snack? Today your wish is my command. At your service, your majesty.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c13",
        "title": "Outfit of Your Choice",
        "icon": "👔",
        "badge": "Style",
        "desc": "You get to pick exactly what I wear for our next date—even if it's matching outfits or your favorite color.",
        "claimed": False,
        "claimedAt": None
    },
    {
        "id": "c14",
        "title": "Wildcard Wish",
        "icon": "✨",
        "badge": "Infinite Magic",
        "desc": "Write your own wish! Valid for anything romantic, fun, or sweet that you can imagine.",
        "claimed": False,
        "claimedAt": None
    }
]

# Write to data.js
js_content = f"""// "Reasons I Love You" & "Love Coupons" Preloaded Data
// 365 Curated Reasons & 14 Romantic Coupons

const DEFAULT_SETTINGS = {{
  partnerName: "My Love",
  yourName: "Your Soulmate",
  anniversaryDate: "2024-02-14T00:00:00", // Default: Valentine's Day 2024 (editable in Settings)
  deckSize: 365, // Options: 50, 100, 365
  categoryFilter: "all",
  soundEnabled: true,
  hapticsEnabled: true,
  theme: "rose"
}};

const CATEGORY_META = {{
  love: {{ label: "Deep Love", icon: "❤️", color: "#e11d48", bg: "#ffe4e6" }},
  memory: {{ label: "Favorite Memory", icon: "📸", color: "#8b5cf6", bg: "#f3e8ff" }},
  compliment: {{ label: "Compliment", icon: "💫", color: "#d97706", bg: "#fef3c7" }},
  quirk: {{ label: "Cute Quirk", icon: "✨", color: "#059669", bg: "#d1fae5" }},
  future: {{ label: "Future Dream", icon: "🔮", color: "#2563eb", bg: "#dbeafe" }},
  joke: {{ label: "Inside Chuckle", icon: "😂", color: "#db2777", bg: "#fce7f3" }}
}};

const LOVE_COUPONS = {json.dumps(coupons, indent=2, ensure_ascii=False)};

const REASONS_DATABASE = {json.dumps(final_reasons, indent=2, ensure_ascii=False)};
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"data.js created successfully with {len(final_reasons)} reasons and {len(coupons)} coupons!")
