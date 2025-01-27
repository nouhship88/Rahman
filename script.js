const apiKey = '42f93cdba7057ff36a981db5700349c4'; // Replace this with your actual API key
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
 