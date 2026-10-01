/**
 * "Forever Us" - Reasons I Love You, Us Counter & Love Coupons
 * Clean, lightweight, zero-dependency PWA engine
 */

(() => {
  'use strict';

  // --- State & Storage Keys ---
  const STORAGE_KEYS = {
    SETTINGS: 'forever_us_settings',
    FAVORITES: 'forever_us_favorites',
    COUPONS: 'forever_us_coupons',
    DECK_PROGRESS: 'forever_us_deck_progress'
  };

  let state = {
    settings: { ...DEFAULT_SETTINGS },
    favorites: [],
    couponsState: {}, // { [couponId]: { scratched: bool, claimed: bool, claimedAt: string } }
    currentDeckSize: 365,
    currentCategory: 'all',
    activeDeck: [],
    deckIndex: 0,
    undoStack: [],
    currentTab: 'tab-counter'
  };

  // --- Sound Effects Synthesizer (Web Audio API) ---
  const AudioEngine = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },
    play(type) {
      if (!state.settings.soundEnabled) return;
      try {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        if (type === 'swipe') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === 'heart') {
          // Soft romantic chime
          const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
          notes.forEach((freq, idx) => {
            const noteOsc = this.ctx.createOscillator();
            const noteGain = this.ctx.createGain();
            noteOsc.connect(noteGain);
            noteGain.connect(this.ctx.destination);
            noteOsc.type = 'triangle';
            noteOsc.frequency.setValueAtTime(freq, now + idx * 0.05);
            noteGain.gain.setValueAtTime(0.06, now + idx * 0.05);
            noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);
            noteOsc.start(now + idx * 0.05);
            noteOsc.stop(now + idx * 0.05 + 0.35);
          });
        } else if (type === 'claim') {
          // Joyful bell
          [440, 554.37, 659.25].forEach((freq, i) => {
            const o = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            o.connect(g);
            g.connect(this.ctx.destination);
            o.type = 'sine';
            o.frequency.setValueAtTime(freq, now + i * 0.08);
            g.gain.setValueAtTime(0.07, now + i * 0.08);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);
            o.start(now + i * 0.08);
            o.stop(now + i * 0.08 + 0.4);
          });
        }
      } catch (e) {
        console.warn('Audio not allowed yet', e);
      }
    }
  };

  // --- Background & Confetti Particles Engine ---
  const ParticleEngine = {
    bgCanvas: document.getElementById('bg-canvas'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    bgCtx: null,
    confettiCtx: null,
    hearts: [],
    confettis: [],

    init() {
      this.bgCtx = this.bgCanvas.getContext('2d');
      this.confettiCtx = this.confettiCanvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Create ambient floating hearts
      for (let i = 0; i < 18; i++) {
        this.hearts.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 10 + Math.random() * 14,
          speedY: 0.3 + Math.random() * 0.6,
          speedX: (Math.random() - 0.5) * 0.4,
          opacity: 0.15 + Math.random() * 0.25,
          angle: Math.random() * Math.PI * 2
        });
      }

      this.animate();
    },

    resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.bgCanvas.width = w;
      this.bgCanvas.height = h;
      this.confettiCanvas.width = w;
      this.confettiCanvas.height = h;
    },

    drawHeart(ctx, x, y, size, color, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
      ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },

    burst(x, y) {
      const colors = ['#f43f5e', '#ec4899', '#f59e0b', '#fb7185', '#fda4af', '#fcd34d'];
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2.5 + Math.random() * 5.5;
        this.confettis.push({
          x: x || window.innerWidth / 2,
          y: y || window.innerHeight / 2,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 2,
          size: 6 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
          isHeart: Math.random() > 0.4
        });
      }
    },

    animate() {
      requestAnimationFrame(() => this.animate());

      // 1. Draw ambient floating hearts
      this.bgCtx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
      const w = this.bgCanvas.width;
      const h = this.bgCanvas.height;

      this.hearts.forEach(p => {
        p.y -= p.speedY;
        p.x += Math.sin(p.angle) * p.speedX;
        p.angle += 0.02;
        if (p.y < -20) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }
        this.drawHeart(this.bgCtx, p.x, p.y, p.size, '#f43f5e', p.opacity);
      });

      // 2. Draw confetti explosions
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
      for (let i = this.confettis.length - 1; i >= 0; i--) {
        const c = this.confettis[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.12; // gravity
        c.alpha -= c.decay;

        if (c.alpha <= 0) {
          this.confettis.splice(i, 1);
          continue;
        }

        if (c.isHeart) {
          this.drawHeart(this.confettiCtx, c.x, c.y, c.size, c.color, c.alpha);
        } else {
          this.confettiCtx.save();
          this.confettiCtx.globalAlpha = c.alpha;
          this.confettiCtx.fillStyle = c.color;
          this.confettiCtx.fillRect(c.x, c.y, c.size, c.size * 0.6);
          this.confettiCtx.restore();
        }
      }
    }
  };

  // --- Storage Helper ---
  function loadPersistedState() {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (savedSettings) state.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) };

      const savedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (savedFavs) state.favorites = JSON.parse(savedFavs);

      const savedCoupons = localStorage.getItem(STORAGE_KEYS.COUPONS);
      if (savedCoupons) state.couponsState = JSON.parse(savedCoupons);

      const savedProgress = localStorage.getItem(STORAGE_KEYS.DECK_PROGRESS);
      if (savedProgress) {
        const p = JSON.parse(savedProgress);
        if (typeof p.deckIndex === 'number') state.deckIndex = p.deckIndex;
      }
    } catch (e) {
      console.error('Failed to load local storage:', e);
    }
  }

  function savePersistedState() {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings));
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
      localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(state.couponsState));
      localStorage.setItem(STORAGE_KEYS.DECK_PROGRESS, JSON.stringify({ deckIndex: state.deckIndex }));
    } catch (e) {
      console.error('Failed to save local storage:', e);
    }
  }

  // --- Feature 1: The "Us" Counter ---
  const UsCounter = {
    intervalId: null,

    start() {
      this.updateDisplay();
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.updateDisplay(), 1000);
    },

    updateDisplay() {
      const startDate = new Date(state.settings.anniversaryDate);
      const now = new Date();
      if (isNaN(startDate.getTime())) return;

      let diff = now.getTime() - startDate.getTime();
      const isPast = diff >= 0;
      diff = Math.abs(diff);

      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;

      // Accurate calendar year/month/day calculation
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      if (years < 0) {
        years = 0; months = 0; days = Math.floor(diff / (1000 * 60 * 60 * 24));
      }

      const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

      const elYears = document.getElementById('time-years');
      const elMonths = document.getElementById('time-months');
      const elDays = document.getElementById('time-days');
      const elHours = document.getElementById('time-hours');
      const elMinutes = document.getElementById('time-minutes');
      const elSeconds = document.getElementById('time-seconds');

      if (elYears) elYears.textContent = pad(years);
      if (elMonths) elMonths.textContent = pad(months);
      if (elDays) elDays.textContent = pad(days);
      if (elHours) elHours.textContent = pad(hours);
      if (elMinutes) elMinutes.textContent = pad(minutes);
      if (elSeconds) elSeconds.textContent = pad(seconds);

      // Milestone calculation
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const milestones = [100, 200, 300, 365, 500, 730, 1000, 1500, 1825, 2000, 2500, 3000];
      const nextMilestone = milestones.find(m => m > totalDays) || (totalDays + 100);
      const daysToNext = nextMilestone - totalDays;

      const titleEl = document.getElementById('milestone-title');
      const descEl = document.getElementById('milestone-desc');
      if (titleEl && descEl) {
        titleEl.textContent = `${nextMilestone} Days of Loving You`;
        descEl.textContent = `Only ${daysToNext} day${daysToNext === 1 ? '' : 's'} until our next big milestone! (${totalDays} days together and counting).`;
      }
    }
  };

  // --- Feature 2: "Reasons I Love You" Swipe Deck ---
  const DeckEngine = {
    arenaEl: document.getElementById('deck-arena'),
    emptyEl: document.getElementById('deck-empty'),
    counterEl: document.getElementById('card-counter-display'),
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    topCardEl: null,

    init() {
      this.filterDeck();
      this.bindControls();
    },

    filterDeck() {
      // 1. Slice by deck size (50, 100, or 365)
      let list = REASONS_DATABASE.slice(0, state.currentDeckSize);

      // 2. Filter by category if not 'all'
      if (state.currentCategory !== 'all') {
        list = list.filter(item => item.category === state.currentCategory);
      }

      state.activeDeck = list;
      if (state.deckIndex >= state.activeDeck.length) {
        state.deckIndex = 0;
      }
      this.render();
    },

    render() {
      // Clear existing cards
      const existing = this.arenaEl.querySelectorAll('.swipe-card');
      existing.forEach(card => card.remove());

      const remaining = state.activeDeck.slice(state.deckIndex);

      if (remaining.length === 0) {
        this.emptyEl.classList.add('active');
        this.counterEl.textContent = `Completed (${state.activeDeck.length}/${state.activeDeck.length})`;
        return;
      }

      this.emptyEl.classList.remove('active');
      this.counterEl.textContent = `Card ${state.deckIndex + 1} of ${state.activeDeck.length}`;

      // Render top 3 cards in stack for 3D realism
      const cardsToRender = remaining.slice(0, 3);
      cardsToRender.reverse().forEach((item, index) => {
        const stackPos = cardsToRender.length - 1 - index;
        const cardEl = this.createCardElement(item, stackPos);
        this.arenaEl.appendChild(cardEl);

        if (stackPos === 0) {
          this.topCardEl = cardEl;
          this.attachDragEvents(cardEl, item);
        }
      });
    },

    createCardElement(item, stackPos) {
      const card = document.createElement('div');
      card.className = `swipe-card ${stackPos === 0 ? 'is-top' : stackPos === 1 ? 'is-second' : 'is-third'}`;
      card.dataset.id = item.id;

      const meta = CATEGORY_META[item.category] || { label: 'Reason', icon: '❤️', color: '#e11d48', bg: '#ffe4e6' };

      card.innerHTML = `
        <div class="card-stamp like">LOVE IT ❤️</div>
        <div class="card-stamp nope">NEXT ✨</div>

        <div class="card-header-row">
          <span class="card-category-badge" style="color: ${meta.color}; background: ${meta.bg}">
            <span>${meta.icon}</span> ${meta.label}
          </span>
          <span class="card-day-indicator">${item.tag}</span>
        </div>

        <div class="card-body-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">"${item.text}"</p>
        </div>

        ${item.note ? `
          <div class="card-note-box">
            <p class="card-note-text">💭 ${item.note}</p>
          </div>
        ` : ''}
      `;

      return card;
    },

    attachDragEvents(card, item) {
      const onPointerDown = (e) => {
        this.isDragging = true;
        this.startX = e.clientX || (e.touches && e.touches[0].clientX);
        this.startY = e.clientY || (e.touches && e.touches[0].clientY);
        this.currentX = this.startX;
        this.currentY = this.startY;
        card.style.transition = 'none';

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) return;
        this.currentX = e.clientX || (e.touches && e.touches[0].clientX);
        this.currentY = e.clientY || (e.touches && e.touches[0].clientY);

        const deltaX = this.currentX - this.startX;
        const deltaY = this.currentY - this.startY;
        const rotate = deltaX * 0.07;

        card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`;

        // Stamp opacity
        const likeStamp = card.querySelector('.card-stamp.like');
        const nopeStamp = card.querySelector('.card-stamp.nope');

        if (deltaX > 0) {
          likeStamp.style.opacity = Math.min(1, deltaX / 90);
          nopeStamp.style.opacity = 0;
        } else {
          nopeStamp.style.opacity = Math.min(1, Math.abs(deltaX) / 90);
          likeStamp.style.opacity = 0;
        }
      };

      const onPointerUp = (e) => {
        if (!this.isDragging) return;
        this.isDragging = false;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);

        const deltaX = this.currentX - this.startX;
        const threshold = 90;

        if (deltaX > threshold) {
          this.swipeOut(card, item, 'right');
        } else if (deltaX < -threshold) {
          this.swipeOut(card, item, 'left');
        } else {
          // Snap back
          card.style.transition = 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          card.style.transform = '';
          const likeStamp = card.querySelector('.card-stamp.like');
          const nopeStamp = card.querySelector('.card-stamp.nope');
          if (likeStamp) likeStamp.style.opacity = 0;
          if (nopeStamp) nopeStamp.style.opacity = 0;
        }
      };

      card.addEventListener('pointerdown', onPointerDown);
    },

    swipeOut(card, item, direction) {
      AudioEngine.play(direction === 'right' ? 'heart' : 'swipe');

      const flyX = direction === 'right' ? window.innerWidth + 200 : -window.innerWidth - 200;
      const flyRot = direction === 'right' ? 35 : -35;

      card.style.transition = 'transform 0.4s ease-out, opacity 0.3s ease';
      card.style.transform = `translate(${flyX}px, 60px) rotate(${flyRot}deg)`;
      card.style.opacity = '0';

      if (direction === 'right') {
        this.addToFavorites(item);
        ParticleEngine.burst(window.innerWidth / 2, window.innerHeight * 0.4);
      }

      state.undoStack.push({ item, index: state.deckIndex, direction });
      state.deckIndex++;
      savePersistedState();

      setTimeout(() => {
        card.remove();
        this.render();
      }, 350);
    },

    addToFavorites(item) {
      if (!state.favorites.some(f => f.id === item.id)) {
        state.favorites.unshift(item);
        savePersistedState();
        App.updateFavoritesBadge();
      }
    },

    undo() {
      if (state.undoStack.length === 0) return;
      const last = state.undoStack.pop();
      state.deckIndex = Math.max(0, state.deckIndex - 1);
      savePersistedState();
      AudioEngine.play('swipe');
      this.render();
    },

    shuffle() {
      // Fisher-Yates shuffle
      const remaining = state.activeDeck.slice(state.deckIndex);
      for (let i = remaining.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
      }
      state.activeDeck = [...state.activeDeck.slice(0, state.deckIndex), ...remaining];
      AudioEngine.play('swipe');
      this.render();
    },

    bindControls() {
      document.getElementById('btn-swipe-right').addEventListener('click', () => {
        if (!this.topCardEl) return;
        const item = state.activeDeck[state.deckIndex];
        if (item) this.swipeOut(this.topCardEl, item, 'right');
      });

      document.getElementById('btn-swipe-left').addEventListener('click', () => {
        if (!this.topCardEl) return;
        const item = state.activeDeck[state.deckIndex];
        if (item) this.swipeOut(this.topCardEl, item, 'left');
      });

      document.getElementById('btn-undo').addEventListener('click', () => this.undo());
      document.getElementById('btn-shuffle').addEventListener('click', () => this.shuffle());
      document.getElementById('btn-restart-deck').addEventListener('click', () => {
        state.deckIndex = 0;
        state.undoStack = [];
        savePersistedState();
        this.render();
      });

      // Deck Size pills
      const sizePills = document.querySelectorAll('#deck-size-pills .pill-opt');
      sizePills.forEach(pill => {
        pill.addEventListener('click', () => {
          sizePills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.currentDeckSize = parseInt(pill.dataset.size, 10);
          state.deckIndex = 0;
          this.filterDeck();
        });
      });

      // Category filter chips
      const catChips = document.querySelectorAll('#category-filter-chips .cat-chip');
      catChips.forEach(chip => {
        chip.addEventListener('click', () => {
          catChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          state.currentCategory = chip.dataset.cat;
          state.deckIndex = 0;
          this.filterDeck();
        });
      });

      // Keyboard arrow shortcuts
      window.addEventListener('keydown', (e) => {
        if (state.currentTab !== 'tab-deck') return;
        if (e.key === 'ArrowRight' || e.key === 'l') {
          document.getElementById('btn-swipe-right').click();
        } else if (e.key === 'ArrowLeft' || e.key === 'h') {
          document.getElementById('btn-swipe-left').click();
        } else if (e.key === 'z') {
          document.getElementById('btn-undo').click();
        }
      });
    }
  };

  // --- Feature 3: Love Coupons (Scratch-Off & Digital Tickets) ---
  const CouponsEngine = {
    containerEl: document.getElementById('coupons-container'),
    statsEl: document.getElementById('coupons-stats'),
    currentFilter: 'all',

    init() {
      this.bindFilter();
      this.render();
    },

    bindFilter() {
      const chips = document.querySelectorAll('#coupon-filter-bar .cat-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentFilter = chip.dataset.cfilter;
          this.render();
        });
      });
    },

    render() {
      this.containerEl.innerHTML = '';
      let claimedCount = 0;

      LOVE_COUPONS.forEach(c => {
        if (state.couponsState[c.id]?.claimed) claimedCount++;
      });
      this.statsEl.textContent = `${claimedCount} / ${LOVE_COUPONS.length} Redeemed`;

      const filtered = LOVE_COUPONS.filter(c => {
        const isClaimed = state.couponsState[c.id]?.claimed;
        if (this.currentFilter === 'available') return !isClaimed;
        if (this.currentFilter === 'claimed') return isClaimed;
        return true;
      });

      filtered.forEach(coupon => {
        const ticketEl = this.createTicketElement(coupon);
        this.containerEl.appendChild(ticketEl);
      });
    },

    createTicketElement(coupon) {
      const cState = state.couponsState[coupon.id] || { scratched: false, claimed: false, claimedAt: null };
      const ticket = document.createElement('div');
      ticket.className = 'coupon-ticket';
      ticket.id = `coupon-${coupon.id}`;

      ticket.innerHTML = `
        <div class="coupon-top">
          <span class="coupon-badge-tag">${coupon.badge}</span>
          <span class="coupon-ticket-id">PASS #${coupon.id.toUpperCase()}</span>
        </div>

        <div class="coupon-body">
          <div class="coupon-prize">
            <div class="coupon-prize-icon">${coupon.icon}</div>
            <div class="coupon-prize-info">
              <h3>${coupon.title}</h3>
              <p>${coupon.desc}</p>
            </div>
          </div>

          <!-- Scratch Canvas (Only if not already revealed) -->
          ${!cState.scratched ? `
            <div class="scratch-overlay-wrap" id="scratch-wrap-${coupon.id}">
              <canvas class="scratch-canvas" id="canvas-${coupon.id}"></canvas>
              <div class="scratch-hint">✨ Scratch to Reveal ✨</div>
            </div>
          ` : ''}
        </div>

        <div class="coupon-footer">
          <div>
            ${!cState.scratched ? `
              <button class="reveal-fallback-btn" data-reveal="${coupon.id}">Tap to reveal</button>
            ` : ''}
          </div>

          <div>
            ${cState.claimed ? `
              <div class="claimed-stamp">
                <span>✔️</span> Claimed ${cState.claimedAt || ''}
              </div>
            ` : `
              <button class="claim-btn" data-claim="${coupon.id}">
                <span>🎟️</span> Redeem Coupon
              </button>
            `}
          </div>
        </div>
      `;

      // Set up scratch canvas if unrevealed
      if (!cState.scratched) {
        setTimeout(() => this.setupScratchCanvas(coupon.id), 50);
      }

      // Bind claim button
      const claimBtn = ticket.querySelector(`[data-claim="${coupon.id}"]`);
      if (claimBtn) {
        claimBtn.addEventListener('click', () => this.claimCoupon(coupon.id, claimBtn));
      }

      // Bind fallback reveal button
      const revealBtn = ticket.querySelector(`[data-reveal="${coupon.id}"]`);
      if (revealBtn) {
        revealBtn.addEventListener('click', () => this.revealCoupon(coupon.id));
      }

      return ticket;
    },

    setupScratchCanvas(couponId) {
      const wrap = document.getElementById(`scratch-wrap-${couponId}`);
      const canvas = document.getElementById(`canvas-${couponId}`);
      if (!wrap || !canvas) return;

      const rect = wrap.getBoundingClientRect();
      const width = rect.width || wrap.offsetWidth || 340;
      const height = rect.height || wrap.offsetHeight || 120;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      // Create glamorous metallic gold/rose foil gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#d97706');
      grad.addColorStop(0.3, '#f59e0b');
      grad.addColorStop(0.5, '#fbbf24');
      grad.addColorStop(0.7, '#f59e0b');
      grad.addColorStop(1, '#b45309');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Add cute decorative patterns
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 24; i++) {
        const x = (i * 35) % width;
        const y = Math.floor((i * 35) / width) * 30 + 15;
        ctx.font = '14px sans-serif';
        ctx.fillText('💖', x, y);
      }

      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText('✨ SCRATCH WITH FINGER ✨', width / 2, height / 2 + 5);

      let isScratching = false;

      const getPos = (e) => {
        const r = canvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        return {
          x: clientX - r.left,
          y: clientY - r.top
        };
      };

      const scratch = (x, y) => {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();
      };

      const checkScratchPercentage = () => {
        try {
          const imgData = ctx.getImageData(0, 0, width, height);
          let transparentPixels = 0;
          const totalPixels = imgData.data.length / 4;

          for (let i = 3; i < imgData.data.length; i += 16) { // sampled check
            if (imgData.data[i] === 0) transparentPixels += 4;
          }

          if (transparentPixels / totalPixels > 0.38) {
            this.revealCoupon(couponId);
          }
        } catch (e) {
          // Fallback if security/tainted
        }
      };

      canvas.addEventListener('pointerdown', (e) => {
        isScratching = true;
        const pos = getPos(e);
        scratch(pos.x, pos.y);
      });

      canvas.addEventListener('pointermove', (e) => {
        if (!isScratching) return;
        const pos = getPos(e);
        scratch(pos.x, pos.y);
      });

      const onEnd = () => {
        if (!isScratching) return;
        isScratching = false;
        checkScratchPercentage();
      };

      canvas.addEventListener('pointerup', onEnd);
      canvas.addEventListener('pointercancel', onEnd);
      canvas.addEventListener('pointerleave', onEnd);
    },

    revealCoupon(couponId) {
      if (!state.couponsState[couponId]) state.couponsState[couponId] = {};
      state.couponsState[couponId].scratched = true;
      savePersistedState();

      const wrap = document.getElementById(`scratch-wrap-${couponId}`);
      if (wrap) {
        wrap.style.opacity = '0';
        setTimeout(() => wrap.remove(), 400);
      }

      AudioEngine.play('heart');
      ParticleEngine.burst();
    },

    claimCoupon(couponId, btn) {
      if (!state.couponsState[couponId]) state.couponsState[couponId] = {};
      state.couponsState[couponId].scratched = true;
      state.couponsState[couponId].claimed = true;

      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      state.couponsState[couponId].claimedAt = today;
      savePersistedState();

      AudioEngine.play('claim');
      ParticleEngine.burst();
      this.render();
    }
  };

  // --- Favorites Vault Modal ---
  const FavoritesVault = {
    modalEl: document.getElementById('modal-favorites'),
    listEl: document.getElementById('favorites-list-container'),

    init() {
      document.getElementById('btn-open-favs').addEventListener('click', () => this.open());
      document.getElementById('btn-close-favs').addEventListener('click', () => this.close());
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) this.close();
      });
    },

    open() {
      this.render();
      this.modalEl.classList.add('active');
    },

    close() {
      this.modalEl.classList.remove('active');
    },

    render() {
      this.listEl.innerHTML = '';
      if (state.favorites.length === 0) {
        this.listEl.innerHTML = `
          <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
            <div style="font-size: 38px; margin-bottom: 8px;">💌</div>
            <p style="font-size: 14px;">No favorited cards yet.</p>
            <p style="font-size: 12px; margin-top: 4px;">Swipe cards to the right or tap the heart to save your favorite reasons here!</p>
          </div>
        `;
        return;
      }

      state.favorites.forEach((fav) => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.innerHTML = `
          <div class="favorite-item-top">
            <span class="fav-title">${fav.title}</span>
            <button class="fav-remove-btn" data-remove="${fav.id}" title="Remove">&times;</button>
          </div>
          <p class="fav-text">"${fav.text}"</p>
          ${fav.note ? `<p style="font-size: 11px; color: #9f1239; margin-top: 6px;">💭 ${fav.note}</p>` : ''}
        `;

        item.querySelector(`[data-remove="${fav.id}"]`).addEventListener('click', () => {
          state.favorites = state.favorites.filter(f => f.id !== fav.id);
          savePersistedState();
          App.updateFavoritesBadge();
          this.render();
        });

        this.listEl.appendChild(item);
      });
    }
  };

  // --- Settings & Personalization ---
  const SettingsManager = {
    modalEl: document.getElementById('modal-settings'),
    form: document.getElementById('settings-form'),

    init() {
      document.getElementById('btn-open-settings').addEventListener('click', () => this.open());
      document.getElementById('btn-close-settings').addEventListener('click', () => this.close());
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) this.close();
      });

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.save();
      });

      document.getElementById('btn-reset-data').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your deck progress and claimed coupons?')) {
          localStorage.clear();
          location.reload();
        }
      });
    },

    open() {
      document.getElementById('input-partner-name').value = state.settings.partnerName;
      document.getElementById('input-your-name').value = state.settings.yourName;
      // Convert date string for datetime-local input
      const dateObj = new Date(state.settings.anniversaryDate);
      if (!isNaN(dateObj.getTime())) {
        const iso = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        document.getElementById('input-anniversary-date').value = iso;
      }
      document.getElementById('input-sound-toggle').checked = state.settings.soundEnabled;
      this.modalEl.classList.add('active');
    },

    close() {
      this.modalEl.classList.remove('active');
    },

    save() {
      state.settings.partnerName = document.getElementById('input-partner-name').value.trim() || 'My Love';
      state.settings.yourName = document.getElementById('input-your-name').value.trim() || 'Your Soulmate';
      const dateVal = document.getElementById('input-anniversary-date').value;
      if (dateVal) state.settings.anniversaryDate = new Date(dateVal).toISOString();
      state.settings.soundEnabled = document.getElementById('input-sound-toggle').checked;

      savePersistedState();
      App.applyPersonalization();
      UsCounter.updateDisplay();
      this.close();
      ParticleEngine.burst();
    }
  };

  // --- Main App Controller ---
  const App = {
    init() {
      loadPersistedState();
      ParticleEngine.init();
      this.applyPersonalization();
      this.updateFavoritesBadge();

      // Navigation tabs
      this.bindNavigation();

      // Start modules
      UsCounter.start();
      DeckEngine.init();
      CouponsEngine.init();
      FavoritesVault.init();
      SettingsManager.init();

      // Register PWA service worker
      this.registerServiceWorker();
    },

    applyPersonalization() {
      const headerTitle = document.getElementById('header-partner-title');
      const coupleTitle = document.getElementById('couple-names-display');

      if (headerTitle) headerTitle.textContent = `For ${state.settings.partnerName}`;
      if (coupleTitle) coupleTitle.textContent = `${state.settings.yourName} & ${state.settings.partnerName}`;
    },

    updateFavoritesBadge() {
      const badge = document.getElementById('fav-count-badge');
      if (badge) badge.textContent = state.favorites.length;
    },

    bindNavigation() {
      const navButtons = document.querySelectorAll('.nav-tab-btn');
      navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetTab = btn.dataset.tab;
          this.switchTab(targetTab);
        });
      });

      // Quick prompt buttons on Home tab
      const goDeck = document.getElementById('quick-go-deck');
      if (goDeck) goDeck.addEventListener('click', () => this.switchTab('tab-deck'));

      const goCoupons = document.getElementById('quick-go-coupons');
      if (goCoupons) goCoupons.addEventListener('click', () => this.switchTab('tab-coupons'));
    },

    switchTab(tabId) {
      state.currentTab = tabId;

      // Update nav buttons
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
      });

      // Update tab panes
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
      });

      AudioEngine.play('swipe');

      if (tabId === 'tab-deck') {
        DeckEngine.render();
      } else if (tabId === 'tab-coupons') {
        CouponsEngine.render();
      }
    },

    registerServiceWorker() {
      if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('ServiceWorker registered:', reg.scope))
            .catch(err => console.log('ServiceWorker registration error:', err));
        });
      }
    }
  };

  // Launch when DOM is ready
  document.addEventListener('DOMContentLoaded', () => App.init());
})();
