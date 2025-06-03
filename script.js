const apiKey = "57a90be8cde9f71447e17cb16a34739a"; // Replace this with your actual API key
const cityName = "غريان"; // Set your city in Arabic
const lat = 32.171912762742345; // Latitude for Gharyan
const lon = 13.030128070524592; // Longitude for Gharyan

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ar`; // Arabic weather

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("city-name").innerText = `طقس ${data.name}`;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("feels-like").innerText = data.main.feels_like;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("description").innerText = data.weather[0].description;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Ramadan Countdown Script
function updateRamadanCountdown() {
  const ramadanStart = new Date("2026-02-17T00:00:00");
  const now = new Date();
  const remainingTime = ramadanStart - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = `${days}`;
    document.querySelector(".hours").textContent = `${hours}`;
    document.querySelector(".minutes").textContent = `${minutes}`;
    document.querySelector(".seconds").textContent = `${seconds}`;

    const totalDuration = ramadanStart - new Date("2024-03-01T00:00:00");
    const progressPercentage = ((totalDuration - remainingTime) / totalDuration) * 100;
    document.getElementById("progress").style.width = `${progressPercentage}%`;
  } else {
    document.getElementById("countdown").innerHTML =
      "رمضان قد بدأ - مبارك عليكم رمضان <br> قد جاءكم شهر رمضان شهر مبارك، كتب الله عليكم صيامه، فيه تفتح أبواب الجنة وتغلق فيه أبواب الجحيم، وتغل فيه الشياطين، فيه ليلة خير من ألف شهر، من حرم خيرها فقد حرم";
    document.getElementById("progress").style.width = "100%";
    document.getElementById("doa").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateRamadanCountdown();
  setInterval(updateRamadanCountdown, 1000);
});

// Islamic Quotes
const quotes = [
  { text: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ ...", source: "القرآن الكريم 13:11" },
  { text: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ ...", source: "صحيح البخاري" },
  { text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ ...", source: "القرآن الكريم 54:17" },
  { text: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ...", source: "صحيح الترمذي" },
  { text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", source: "القرآن الكريم 2:286" },
  { text: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ ...", source: "صحيح مسلم" },
  { text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا ...", source: "القرآن الكريم 65:2-3" },
  { text: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم ...", source: "القرآن الكريم 13:28" },
  { text: "وَمَنْ أَعْرَضَ عَن ذِكْرِي ...", source: "القرآن الكريم 20:124" },
  { text: "إِنَّمَا يُوَفَّى الصَّابِرُونَ ...", source: "القرآن الكريم 39:10" },
  { text: "وَلَنَبْلُوَنَّكُم بِشَيْءٍ ...", source: "القرآن الكريم 2:155" },
  { text: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا ...", source: "القرآن الكريم 2:250" },
  { text: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا ...", source: "القرآن الكريم 14:42" },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("quote-source").textContent = `— ${quote.source}`;
}

window.onload = () => {
  displayQuote();
  setInterval(displayQuote, 20000);
};

// Athkar
const athkarMorning = [
  { text: "اللهم بك أصبحنا وبك أمسينا", virtue: "حُسن الاستعانة بالله" },
  { text: "سبحان الله وبحمده سبحان الله العظيم", virtue: "يغفر الذنوب" },
  { text: "اللهم إني أسالك خير هذا اليوم", virtue: "طلب للبركة في اليوم" },
];

const athkarEvening = [
  { text: "اللهم بك أمسينا وبك أصبحنا", virtue: "طلب للبركة في الليل" },
  { text: "أعوذ بكلمات الله التامات من شر ما خلق", virtue: "حماية من الأذى" },
  { text: "اللهم إني أسالك خير هذه الليلة", virtue: "طلب للسلامة" },
];

function displayAthkar() {
  const now = new Date();
  const hour = now.getHours();
  let athkar, virtuesText;

  if (hour < 12) {
    athkar = athkarMorning;
    virtuesText = "أذكار الصباح تعمل على تقوية الإيمان وتجلب البركة وتحفظ المسلم طوال اليوم.";
  } else {
    athkar = athkarEvening;
    virtuesText = "أذكار المساء تحفظ المسلم من الشر وتفتح له أبواب الرحمة والمغفرة.";
  }

  const athkarContainer = document.getElementById("athkar");
  athkarContainer.innerHTML = "";

  athkar.forEach((item) => {
    const athkarItem = document.createElement("p");
    athkarItem.textContent = item.text;
    athkarContainer.appendChild(athkarItem);
  });

  document.getElementById("virtues-text").textContent = virtuesText;
}

displayAthkar();
setInterval(displayAthkar, 60000);

// Audio Recitation
document.addEventListener("DOMContentLoaded", function () {
  const recitations = [
    { title: "سورة الطارق", reciter: "الشيخ خالد الزرقاني", src: "audio/recitation1.mp3" },
    { title: "سورة المطففين", reciter: "الشيخ خالد الزرقاني", src: "audio/recitation2.mp3" },
    { title: "سورة الرحمن", reciter: "الشيخ خالد الزرقاني", src: "audio/recitation3.mp3" },
    { title: "سورة البروج", reciter: "الشيخ خالد الزرقاني", src: "audio/recitation4.mp3" },
    { title: "سورة الفجر", reciter: "الشيخ خالد الزرقاني", src: "audio/recitation5.mp3" },
  ];

  const recitationList = document.getElementById("recitation-list");
  const audioPlayer = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const currentTitle = document.getElementById("current-title");
  const themeToggle = document.getElementById("theme-toggle");

  let currentIndex = 0;

  function loadRecitation(index) {
    currentIndex = index;
    audioPlayer.src = recitations[index].src;
    currentTitle.textContent = `${recitations[index].title} - ${recitations[index].reciter}`;
    updateActiveRecitation();
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }

  function updateActiveRecitation() {
    document.querySelectorAll(".recitation").forEach((recitation, index) => {
      recitation.classList.toggle("active", index === currentIndex);
    });
  }

  recitations.forEach((recitation, index) => {
    const recitationDiv = document.createElement("div");
    recitationDiv.classList.add("recitation");
    recitationDiv.innerHTML = `
      <span>${recitation.title} - ${recitation.reciter}</span>
      <button class="share-btn" data-title="${recitation.title}" data-reciter="${recitation.reciter}">
        <i class="fab fa-whatsapp"></i> مشاركة
      </button>
    `;
    recitationDiv.addEventListener("click", () => loadRecitation(index));
    recitationList.appendChild(recitationDiv);
  });

  playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audioPlayer.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) loadRecitation(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < recitations.length - 1) loadRecitation(currentIndex + 1);
  });

  audioPlayer.addEventListener("ended", () => {
    if (currentIndex < recitations.length - 1) loadRecitation(currentIndex + 1);
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".share-btn")) {
      e.stopPropagation();
      const btn = e.target.closest(".share-btn");
      const title = btn.getAttribute("data-title");
      const reciter = btn.getAttribute("data-reciter");
      const url = window.location.href;
      const message = `استمع إلى "${title}" بصوت ${reciter}:\n${url}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
    }
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
