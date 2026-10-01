# 💖 Forever Us — Romantic PWA for Your Girlfriend

A Progressive Web App (PWA) handcrafted with love:
1. ⏳ **The "Us" Counter**: Live timer tracking Years, Months, Days, Hours, Minutes, and Seconds together, plus upcoming milestone celebrations.
2. 🎴 **"Reasons I Love You" Card Deck**: Tinder-style swipeable card deck (touch swipe or button controls) preloaded with **50, 100, or 365** reasons, memories, and compliments, with a **Favorites Vault** to keep her favorite cards forever.
3. 🎟️ **Love Coupons**: Interactive digital scratch-off tickets she can scratch with her finger to reveal and redeem romantic passes (massages, dinner dates, chore passes, argument win, and more!).

---

## 🚀 Quick Local Preview

You don't need any complex build steps or node modules! You can preview it right now:

### Option 1: Open directly in your browser
Double-click `index.html` to open it in Chrome, Edge, Safari, or Brave.

### Option 2: Run a quick local server (recommended for testing PWA features)
In this directory, run:
```bash
npx serve .
# or with Python:
python -m http.server 3000
```
Then open `http://localhost:3000`.

---

## 🎨 How to Personalize for Her

You can customize everything in **two easy ways**:

### Method A: Directly inside the App (Easiest)
1. Open the app and tap the **⚙️ (Settings)** icon in the top right.
2. Enter **Her Name** (e.g., *Maya* or *My Beautiful Girl*).
3. Enter **Your Name**.
4. Pick your exact **Anniversary Date & Time**.
5. Tap **Save & Apply**!

### Method B: Edit `data.js` directly
Open `data.js` and edit the `DEFAULT_SETTINGS` object at the top:
```javascript
const DEFAULT_SETTINGS = {
  partnerName: "Her Name",
  yourName: "Your Name",
  anniversaryDate: "2023-08-15T19:30:00", // Your anniversary
  deckSize: 365,
  soundEnabled: true,
};
```
You can also add or tweak reasons in the `REASONS_DATABASE` array or add custom coupons in `LOVE_COUPONS`!

---

## 🌐 GitHub Repository & Live URLs

- **GitHub Repository**: [https://github.com/muhammedagic237-prog/reasons-i-love-you](https://github.com/muhammedagic237-prog/reasons-i-love-you)
- **Live Hosted App**: [https://muhammedagic237-prog.github.io/reasons-i-love-you/](https://muhammedagic237-prog.github.io/reasons-i-love-you/)

---

## 🚀 1-Click Deploy to Vercel (Optional)
The repository is already on GitHub! To deploy to Vercel:
1. Go to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
2. Click **Import** next to `reasons-i-love-you`.
3. Keep the Framework Preset as **Other** &rarr; Click **Deploy**!
4. You will get a live Vercel URL (e.g. `https://forever-us-alpha.vercel.app`).

---

## 📱 How She Can Install It as a Real App on Her Phone

Once deployed to Vercel, send her the link with these instructions:

### On iPhone (iOS Safari):
1. Open the link in **Safari**.
2. Tap the **Share** button (the square with an arrow pointing up at the bottom).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**. A cute glowing heart icon will appear on her home screen just like an App Store app! When she opens it, it will launch fullscreen with no browser URL bars.

### On Android (Chrome):
1. Open the link in **Chrome**.
2. Tap the three dots (⋮) in the top-right corner.
3. Tap **"Install App"** or **"Add to Home screen"**.

---

## 💡 Tech Specs & Architecture
- **Zero Heavy Frameworks**: Pure HTML5, modern CSS3, and vanilla ES6 JavaScript (~400 lines of total JS logic).
- **Smooth Touch Physics**: Custom pointer-events swipe engine with rotational tilt and elastic snap-back.
- **HTML5 Canvas Scratch-Off**: Real touch/mouse eraser brush that detects > 40% cleared foil to reveal the coupon.
- **Web Audio API Synth**: Gentle harp/bell chimes without loading external audio files.
- **Offline First**: Service Worker caching for instant offline launch.
- **LocalStorage**: Remembers her favorites, claimed coupons, and anniversary dates.
