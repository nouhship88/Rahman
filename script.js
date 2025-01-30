const apiKey = '57a90be8cde9f71447e17cb16a34739a'; // Replace this with your actual API key
const cityName = 'غريان'; // Set your city in Arabic
const lat = 32.171912762742345; // Latitude for Gharyan
const lon = 13.030128070524592; // Longitude for Gharyan
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ar`; // Set lang=ar for Arabic descriptions

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Set the title dynamically with city name
    document.getElementById('city-name').innerText = `طقس  ${data.name}`; // This will show "الطقس في غريان"
    
    // Populate weather data
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('feels-like').innerText = data.main.feels_like;
    // document.getElementById('wind').innerText = data.wind.speed;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('description').innerText = data.weather[0].description; // This will show the description in Arabic
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



// Ramadan Countdown Script
function updateRamadanCountdown() {
  const ramadanStart = new Date("2025-03-01T00:00:00"); // Adjust for your region's Ramadan start date
  const now = new Date();
  const remainingTime = ramadanStart - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update Countdown Timer
    document.querySelector('.days').textContent = `${days}`;
    document.querySelector('.hours').textContent = `${hours}`;
    document.querySelector('.minutes').textContent = `${minutes}`;
    document.querySelector('.seconds').textContent = `${seconds}`;

    // Calculate progress percentage
    const totalDuration = ramadanStart - new Date("2024-03-01T00:00:00"); // Time from last Ramadan start to current Ramadan start
    const progressPercentage = ((totalDuration - remainingTime) / totalDuration) * 100;

    // Update Progress Bar
    document.getElementById("progress").style.width = `${progressPercentage}%`;

  } else {
    document.getElementById("countdown").textContent = "رمضان قد بدأ!";
    document.getElementById("progress").style.width = "100%"; // Full when Ramadan starts
  }
}

// Initial fetch and countdown setup
document.addEventListener("DOMContentLoaded", function () {
  updateRamadanCountdown(); // Call on page load
  setInterval(updateRamadanCountdown, 1000); // Update every second
});
 
// Array of Islamic quotes in Arabic (Hadiths and Quran verses)
const quotes = [
  {
    text: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    source: "القرآن الكريم 13:11"
  },
  {
    text: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    source: "صحيح البخاري"
  },
  {
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ",
    source: "القرآن الكريم 54:17"
  },
  {
    text: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    source: "صحيح الترمذي"
  },
  {
    text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    source: "القرآن الكريم 2:286"
  },
  {
    text: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ، وَفِي كُلٍّ خَيْرٌ",
    source: "صحيح مسلم"
  },
  {
    text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    source: "القرآن الكريم 65:2-3"
  },
  {
    text: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    source: "القرآن الكريم - سورة الرعد (13:28)"
  },
  {
    text: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا وَنَحْشُرُهُ يَوْمَ الْقِيَامَةِ أَعْمَىٰ",
    source: "القرآن الكريم - سورة طه (20:124)"
  },
  {
    text: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
    source: "القرآن الكريم - سورة الزمر (39:10)"
  },
  {
    text: "وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
    source: "القرآن الكريم - سورة البقرة (2:155)"
  },
  {
    text: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    source: "القرآن الكريم - سورة البقرة (2:250)"
  },
  {
    text: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ ۚ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الْأَبْصَارُ",
    source: "القرآن الكريم - سورة إبراهيم (14:42)"
  }
  
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display the quote
function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote-text').textContent = quote.text;
  document.getElementById('quote-source').textContent = `— ${quote.source}`;
}

// Run on page load
window.onload = () => {
  displayQuote(); // Display the first quote immediately
  setInterval(displayQuote, 20000); // Change quote every 1 minute (60,000 milliseconds)
};

// List of Athkar for morning and evening
const athkarMorning = [
  { text: "اللهم بك أصبحنا وبك أمسينا", virtue: "حُسن الاستعانة بالله" },
  { text: "سبحان الله وبحمده سبحان الله العظيم", virtue: "يغفر الذنوب" },
  { text: "اللهم إني أسالك خير هذا اليوم", virtue: "طلب للبركة في اليوم" },
  // Add more duas as needed
];

const athkarEvening = [
  { text: "اللهم بك أمسينا وبك أصبحنا", virtue: "طلب للبركة في الليل" },
  { text: "أعوذ بكلمات الله التامات من شر ما خلق", virtue: "حماية من الأذى" },
  { text: "اللهم إني أسالك خير هذه الليلة", virtue: "طلب للسلامة" },
  // Add more duas as needed
];

// Function to display the correct Athkar
function displayAthkar() {
  const now = new Date();
  const hour = now.getHours();
  
  let athkar, virtuesText;

  // Morning (before 12 PM)
  if (hour < 12) {
    athkar = athkarMorning;
    virtuesText = "أذكار الصباح تعمل على تقوية الإيمان وتجلب البركة وتحفظ المسلم طوال اليوم.";
  }
  // Evening (after 12 PM)
  else {
    athkar = athkarEvening;
    virtuesText = "أذكار المساء تحفظ المسلم من الشر وتفتح له أبواب الرحمة والمغفرة.";
  }

  // Update the HTML with the correct athkar and virtues
  const athkarContainer = document.getElementById('athkar');
  athkarContainer.innerHTML = '';
  athkar.forEach(item => {
    const athkarItem = document.createElement('p');
    athkarItem.textContent = item.text;
    athkarContainer.appendChild(athkarItem);
  });

  const virtuesContainer = document.getElementById('virtues-text');
  virtuesContainer.textContent = virtuesText;
}

// Run the function to display the athkar
displayAthkar();

// Update the athkar every minute to ensure it reflects the correct time
setInterval(displayAthkar, 60000);

