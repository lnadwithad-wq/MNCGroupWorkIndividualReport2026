/* ==================== 1. REPORT CONTENT & DECK DESIGNS ==================== */
const REPORT_SECTIONS = [
  {
    id: 0,
    sectionTitle: "1. My Role",
    // Set the background image for this section's slide deck:
    slideBg: "assets/slide-bg-1.jpg",
    slides: [
      {
        title: "Scriptwriting and Recording",
        content:
          "My responsibilities included writing the script and recording myself presenting in front of the camera. These were relatively straightforward, as I was already comfortable speaking English."
      },
      {
        title: "Video Editing",
        content:
          "This was the most challenging part because I had never edited a video before. I had to learn almost everything from scratch by watching YouTube and TikTok tutorials, trying out different effects and gradually figuring out my own editing workflow."
      },
      {
        title: "Working with Bao",
        content:
          "After spending many hours editing my section, I received some help from Bao, who further improved the audio quality of my recording. His help made the final product better."
      }
    ]
  },
  {
    id: 1,
    sectionTitle: "2. My Thoughts and Feelings",
    slideBg: "assets/slide-bg-2.jpg", // Can point to slide-bg-1.jpg until you add the rest
    slides: [
      {
        title: "Excitement and Curiosity",
        content:
          "Initially, I was excited about making a video essay because it was something different from the usual PowerPoint presentations we were used to."
      },
      {
        title: "Feeling Overwhelmed",
        content:
          "However, I soon realized how much work was involved. I was particularly overwhelmed when I started editing because I had very little technical knowledge. The lack of a shared editing theme also made things more difficult, as everyone's videos ended up looking quite different."
      },
      {
        title: "Concern for My Teammates",
        content:
          "I was also concerned when Khoi initially wanted to take on almost all the editing responsibilities. Although I appreciated his enthusiasm, I didn't think it was reasonable for one person to carry such a heavy workload. I was glad that we managed to discuss this and encourage everyone to contribute."
      },
      {
        title: "Exhaustion and Achievement",
        content:
          "Towards the end, I was extremely exhausted after spending tens of hours editing and eventually pulling an all-nighter. Nevertheless, finishing my section gave me a strong sense of satisfaction and achievement. I was especially proud that I had managed to learn something completely new and contribute to the group's final product."
      }
    ]
  },
  {
    id: 2,
    sectionTitle: "3. Teamwork and Collaboration",
    slideBg: "assets/slide-bg-3.jpg",
    slides: [
      {
        title: "Communication",
        content:
          "We mainly communicated through face-to-face discussions during class and our group chat. These were where we exchanged ideas, discussed arrangements and coordinated our work."
      },
      {
        title: "Decision-making",
        content:
          "Initially, we discussed different opinions and tried to reach compromises. However, once we started producing the video, we became more flexible and adjusted our plans as we went along. Since none of us had much experience with video production, we often had to figure things out along the way."
      },
      {
        title: "Different Contributions",
        content:
          "Not everyone contributed in exactly the same way or to the same extent. I think this was partly due to the nature of the project, as not everyone was equally comfortable speaking English in front of a camera or had the technical skills needed for editing. We therefore took on different responsibilities based on our individual strengths and abilities."
      },
      {
        title: "Coordination Challenges",
        content:
          "Our collaboration wasn't always smooth. We experienced delays, unclear responsibilities and differences in editing styles. In particular, we hadn't properly discussed the overall visual direction or agreed on the workload beforehand."
      },
      {
        title: "Overall Experience",
        content:
          "Despite these difficulties, I had a positive experience working with my teammates. Everyone eventually contributed in their own way, and I appreciated the fact that we managed to complete something quite ambitious despite our limited experience."
      }
    ]
  },
  {
    id: 3,
    sectionTitle: "4. Skills and Lessons",
    slideBg: "assets/slide-bg-4.jpg",
    slides: [
      {
        title: "Technical Skills",
        content:
          "The most obvious skill I gained was video editing. Through online tutorials and repeated experimentation, I became familiar with different editing techniques, audio synchronization, transitions and visual effects."
      },
      {
        title: "Self-directed Learning",
        content:
          "I also learned how to teach myself something completely unfamiliar. I realized that I didn't necessarily need to know how to do something beforehand; I could gradually develop the necessary skills through research, practice and experimentation."
      },
      {
        title: "Teamwork and Coordination",
        content:
          "I learned that simply dividing tasks among members isn't enough to ensure effective collaboration. We also need to agree on the overall direction, set clear expectations and make sure that everyone's contributions fit together."
      }
    ]
  },
  {
    id: 4,
    sectionTitle: "5. What I'd Do Differently",
    slideBg: "assets/slide-bg-5.jpg",
    slides: [
      {
        title: "Agree on a Common Direction",
        content:
          "If I could do this project again, I'd suggest agreeing on a common visual theme and editing style before everyone started working on their individual sections. This would help us produce a more consistent final video."
      },
      {
        title: "Plan and Divide Work Better",
        content:
          "I'd also encourage the group to clarify everyone's responsibilities, discuss individual availability and set intermediate deadlines instead of leaving too much work until the final week."
      },
      {
        title: "Prepare Better Equipment",
        content:
          "On my part, I'd prepare better recording equipment, particularly a proper microphone. Recording in the library using my laptop camera wasn't ideal, and the audio quality could have been much better."
      },
      {
        title: "Allow More Time to Learn",
        content:
          "I'd also set aside more time to learn the necessary editing techniques instead of figuring everything out under considerable time pressure."
      },
      {
        title: "Apply These Lessons to Other Subjects",
        content:
          "I think these lessons go beyond video production. Whether we're working on financial analysis, business case studies or presentations, we should establish a shared understanding of the final deliverable, divide responsibilities clearly and make sure individual contributions come together into a coherent final product."
      }
    ]
  }
];


/* ==================== 2. AUDIO & MUSIC ENGINE ==================== */
function playSound(id) {
  const audio = document.getElementById(id);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {
    // Ignores error if the audio file isn't in assets/ yet
  });
}

// Start backgroundmusic automatically on first interaction with the page
const bgMusic = document.getElementById("audio-bg");
let bgMusicStarted = false;

function startBackgroundMusic() {
  if (bgMusicStarted || !bgMusic) return;
  bgMusic.volume = 0.45; // Adjust between 0.1 and 1.0 for background volume
  bgMusic.play().then(() => {
    bgMusicStarted = true;
  }).catch(() => {});
}

// Try playing immediately on load, and guarantee playback on the first click
window.addEventListener("load", startBackgroundMusic);

// Play "clicking" sound effect on every mouse click across the page
window.addEventListener("click", () => {
  startBackgroundMusic();
  playSound("audio-click");
});


/* ==================== 3. GLITTER GOLD & PASTEL STAR ENGINE ==================== */
const canvas = document.getElementById("sparkle-canvas");
const ctx = canvas.getContext("2d");


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();


// Exquisite Bridgerton / Coquette Palette: Glitter Gold, Champagne, Pastel Pink, Warm Ivory
const STAR_COLORS = [
  "#FFF8DC", // Cornsilk / Bright Gold Glint
  "#EAD18F", // Champagne Gold
  "#D4AF37", // Metallic Gold
  "#F4D4DC", // Pastel Blush Pink
  "#FAF0E6"  // Pastel Beige / Pearl
];


const stars = [];
const mistClouds = [];


function createGlitterStar(x, y, isBurst = false) {
  const size = isBurst ? Math.random() * 14 + 5 : Math.random() * 6 + 3;
  const speed = isBurst ? Math.random() * 7 + 1.5 : Math.random() * 1.2 + 0.3;
  const angle = Math.random() * Math.PI * 2;


  stars.push({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: isBurst ? Math.sin(angle) * speed - 0.5 : Math.random() * 1.1 + 0.2,
    size,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    alpha: 1,
    decay: isBurst ? Math.random() * 0.012 + 0.007 : Math.random() * 0.022 + 0.015,
    rotation: Math.random() * Math.PI,
    rotationSpeed: (Math.random() - 0.5) * 0.04,
    shimmerPhase: Math.random() * Math.PI * 2,
    eightPoint: Math.random() > 0.55 // Mix 4-point and 8-point luxury stars
  });
}


function createSilkMist(x, y) {
  const pastelTones = [
    "rgba(250, 243, 235, 0.42)", // Pastel beige mist
    "rgba(244, 212, 220, 0.38)", // Pastel blush mist
    "rgba(243, 229, 216, 0.40)"  // Champagne mist
  ];
  mistClouds.push({
    x,
    y,
    vx: (Math.random() - 0.5) * 3.2,
    vy: (Math.random() - 0.5) * 2.2,
    radius: Math.random() * 180 + 120,
    color: pastelTones[Math.floor(Math.random() * pastelTones.length)],
    alpha: 0.01,
    maxAlpha: Math.random() * 0.45 + 0.25,
    fadingOut: false
  });
}


function drawLuxuryStar(s) {
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate(s.rotation);


  // Shimmer effect (glitter twinkle)
  const twinkle = 0.65 + 0.35 * Math.sin(s.shimmerPhase);
  ctx.globalAlpha = Math.max(0, s.alpha * twinkle);


  // Soft golden-pearl radial glow behind the star
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, s.size * 2.2);
  glow.addColorStop(0, s.color);
  glow.addColorStop(0.4, "rgba(212, 175, 55, 0.28)");
  glow.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, s.size * 2.2, 0, Math.PI * 2);
  ctx.fill();


  // Crisp 4-point diamond star
  ctx.fillStyle = s.color;
  ctx.beginPath();
  const outer = s.size;
  const inner = s.size * 0.22;
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
    ctx.lineTo(
      Math.cos(a + Math.PI / 4) * inner,
      Math.sin(a + Math.PI / 4) * inner
    );
  }
  ctx.closePath();
  ctx.fill();


  // Optional secondary cross-glint for 8-point luxury sparkle
  if (s.eightPoint) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    const subOuter = s.size * 0.62;
    const subInner = s.size * 0.14;
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      ctx.lineTo(Math.cos(a) * subOuter, Math.sin(a) * subOuter);
      ctx.lineTo(
        Math.cos(a + Math.PI / 4) * subInner,
        Math.sin(a + Math.PI / 4) * subInner
      );
    }
    ctx.closePath();
    ctx.fill();
  }


  ctx.restore();
}


function animateSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  // Render soft pastel beige & blush mist clouds
  for (let i = mistClouds.length - 1; i >= 0; i--) {
    const m = mistClouds[i];
    m.x += m.vx;
    m.y += m.vy;


    if (!m.fadingOut) {
      m.alpha += 0.025;
      if (m.alpha >= m.maxAlpha) m.fadingOut = true;
    } else {
      m.alpha -= 0.012;
    }


    if (m.alpha <= 0) {
      mistClouds.splice(i, 1);
      continue;
    }


    ctx.save();
    ctx.globalAlpha = m.alpha;
    const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.radius);
    grad.addColorStop(0, m.color);
    grad.addColorStop(1, "rgba(250, 243, 235, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }


  // Render glitter gold & pastel stars
  for (let i = stars.length - 1; i >= 0; i--) {
    const s = stars[i];
    s.x += s.vx;
    s.y += s.vy;
    s.rotation += s.rotationSpeed;
    s.shimmerPhase += 0.18;
    s.alpha -= s.decay;


    if (s.alpha <= 0) {
      stars.splice(i, 1);
      continue;
    }
    drawLuxuryStar(s);
  }


  requestAnimationFrame(animateSparkles);
}
animateSparkles();


// Mouse Trail Sparkles
window.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.35) {
    createGlitterStar(
      e.clientX + (Math.random() - 0.5) * 14,
      e.clientY + (Math.random() - 0.5) * 14,
      false
    );
  }
});


// Magical Door Transition Effect
function triggerDoorTransition(callback) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;


  // Soft pastel pink & beige silk mist
  for (let i = 0; i < 28; i++) {
    createSilkMist(
      cx + (Math.random() - 0.5) * window.innerWidth * 0.7,
      cy + (Math.random() - 0.5) * window.innerHeight * 0.7
    );
  }


  // Glitter gold & pearl star shower
  for (let i = 0; i < 140; i++) {
    setTimeout(() => {
      createGlitterStar(
        cx + (Math.random() - 0.5) * window.innerWidth * 0.5,
        cy + (Math.random() - 0.5) * window.innerHeight * 0.6,
        true
      );
    }, (i % 10) * 35);
  }


  setTimeout(() => {
    if (callback) callback();
  }, 550);
}


/* ==================== 4. NAVIGATION & DOOR CLICK ==================== */
const welcomeScreen = document.getElementById("welcome-screen");
const roomScreen = document.getElementById("room-screen");
const doorHotspot = document.getElementById("door-hotspot");
const menuButtons = document.querySelectorAll(".menu-icon-btn");


doorHotspot.addEventListener("click", () => {
  playSound("audio-door");
  welcomeScreen.classList.add("zooming-in");


  triggerDoorTransition(() => {
    welcomeScreen.classList.remove("active", "zooming-in");
    roomScreen.classList.add("active");
  });
});


// Top Sleek Menu Actions
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const sectionIdx = btn.dataset.section;


    menuButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");


    if (action === "home") {
      closeModal();
      roomScreen.classList.remove("active");
      welcomeScreen.classList.add("active");
      return;
    }


    if (sectionIdx !== undefined) {
      // Ensure we are inside the room first
      welcomeScreen.classList.remove("active");
      roomScreen.classList.add("active");
      openSectionMail(parseInt(sectionIdx, 10));
    }
  });
});


/* ==================== 5. MAILBOX & SLIDE DECK ENGINE ==================== */
const modalOverlay = document.getElementById("modal-overlay");
const mailboxStage = document.getElementById("mailbox-stage");
const mailNotification = document.getElementById("mail-notification");
const deckStage = document.getElementById("deck-stage");
const deckGroups = document.querySelectorAll(".deck-group");
const slideDots = document.getElementById("slide-dots");
const prevSlideBtn = document.getElementById("prev-slide-btn");
const nextSlideBtn = document.getElementById("next-slide-btn");
const closeDeckBtn = document.getElementById("close-deck-btn");
const deckViewport = document.getElementById("deck-viewport");

let currentSectionIndex = 0;
let currentSlideIndex = 0;

// 1. Clicking any of the 5 framed photos opens the Mailbox + Notification Banner
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const sectionIdx = parseInt(item.dataset.section, 10);
    openSectionMail(sectionIdx);
  });
});

function openSectionMail(sectionIdx) {
  currentSectionIndex = sectionIdx;
  currentSlideIndex = 0;

  deckGroups.forEach((group, idx) => {
    group.classList.toggle("active-deck", idx === sectionIdx);
  });

  buildDotsForActiveDeck();
  updateSlidePositions();

  modalOverlay.classList.add("open");
  deckStage.classList.remove("visible");
  mailboxStage.classList.remove("opening");
  mailboxStage.classList.add("visible");
  mailNotification?.classList.add("show");
}

// 2. Clicking the Mailbox hides the notification, triggers stars, and opens the Deck

mailboxStage.addEventListener("click", () => {
  mailboxStage.classList.add("opening");
  mailNotification?.classList.remove("show");
  playSound("audio-swipe");

  triggerDoorTransition(() => {
    mailboxStage.classList.remove("visible", "opening");
    deckStage.classList.add("visible");
  });
});
mailboxStage.addEventListener("click", () => {
  mailboxStage.classList.add("opening");
  mailNotification?.classList.remove("show");
  playSound("audio-glitter"); // Or use playSound("audio-door") to reuse dooropen

  triggerDoorTransition(() => {
    mailboxStage.classList.remove("visible", "opening");
    deckStage.classList.add("visible");
  });
});
function getActiveSlides() {
  const activeDeck = document.querySelector(".deck-group.active-deck");
  return activeDeck ? activeDeck.querySelectorAll(".slide-card") : [];
}

function buildDotsForActiveDeck() {
  const cards = getActiveSlides();
  slideDots.innerHTML = "";

  cards.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = "slide-dot";
    dot.addEventListener("click", () => goToSlide(idx));
    slideDots.appendChild(dot);
  });
}

function updateSlidePositions() {
  const cards = getActiveSlides();
  const dots = slideDots.querySelectorAll(".slide-dot");

  cards.forEach((card, idx) => {
    card.classList.remove("active", "prev", "next");
    if (idx === currentSlideIndex) {
      card.classList.add("active");
    } else if (idx < currentSlideIndex) {
      card.classList.add("prev");
    } else {
      card.classList.add("next");
    }
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlideIndex);
  });

  prevSlideBtn.style.opacity = currentSlideIndex === 0 ? "0.35" : "1";
  nextSlideBtn.style.opacity =
    currentSlideIndex === cards.length - 1 ? "0.35" : "1";
}

function goToSlide(targetIdx) {
  const cards = getActiveSlides();
  if (
    targetIdx < 0 ||
    targetIdx >= cards.length ||
    targetIdx === currentSlideIndex
  ) {
    return;
  }
  currentSlideIndex = targetIdx;
  playSound("audio-swipe");
  updateSlidePositions();
}

prevSlideBtn.addEventListener("click", () => goToSlide(currentSlideIndex - 1));
nextSlideBtn.addEventListener("click", () => goToSlide(currentSlideIndex + 1));

function closeModal() {
  modalOverlay.classList.remove("open");
  mailboxStage.classList.remove("visible", "opening");
  mailNotification?.classList.remove("show");
  deckStage.classList.remove("visible");
}

closeDeckBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (!deckStage.classList.contains("visible")) return;
  if (e.key === "ArrowRight") goToSlide(currentSlideIndex + 1);
  if (e.key === "ArrowLeft") goToSlide(currentSlideIndex - 1);
  if (e.key === "Escape") closeModal();
});

let dragStartX = 0;
let isDragging = false;

deckViewport.addEventListener("pointerdown", (e) => {
  dragStartX = e.clientX;
  isDragging = true;
});

window.addEventListener("pointerup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diffX = e.clientX - dragStartX;
  if (Math.abs(diffX) > 45) {
    if (diffX < 0) {
      goToSlide(currentSlideIndex + 1);
    } else {
      goToSlide(currentSlideIndex - 1);
    }
  }
});