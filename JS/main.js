async function fetchWeatherData(cityName) {
    const apiKey = '35a49b65d826425600963051d1ce7242';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

const cityName = sessionStorage.getItem('cityName') || 'Unknown';

const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB');

document.querySelector('.place').textContent = cityName;
document.querySelector('.date').textContent = formattedDate;

fetchWeatherData(cityName).then(data => {
    if (data) {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.querySelector('.temperature').textContent = `${temperature}°C`;
        document.querySelector('.daytype').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
        document.querySelector('.sky-img').src = weatherIcon;
        let message;
        if (weatherDescription.includes('clear sky')) {
            message = 'Clear sky: The sun called, it’s working overtime today!';
        } else if (weatherDescription.includes('few clouds')) {
            message = 'Just a few clouds, because the sun likes some company too!';
        } else if (weatherDescription.includes('scattered clouds')) {
            message = 'Scattered clouds: Playing hide and seek with the sun!';
        } else if (weatherDescription.includes('broken clouds')) {
            message = 'Broken clouds—because even the sky needs a little drama sometimes.';
        } else if (weatherDescription.includes('shower rain')) {
            message = 'Shower rain—when the sky decides it’s time for a quick rinse!';
        } else if (weatherDescription.includes('rain')) {
            message = 'Rainy day—perfect excuse to stay cozy and binge-watch your favorite shows!';
        } else if (weatherDescription.includes('thunderstorm')) {
            message = 'Thunderstorm—when the sky decides to throw a loud party!';
        } else if (weatherDescription.includes('snow')) {
            message = 'Snowy weather—perfect for building snowmen or just enjoying a hot cocoa!';
        } else if (weatherDescription.includes('mist')) {
            message = 'Misty weather—like the sky is whispering secrets through a foggy veil.';
        } else if (weatherDescription.includes('haze')) {
            message = 'Hazy day—looks like the sky is still half asleep!';
        } else if (weatherDescription.includes('drizzle')) {
            message = 'Drizzle—just a little splash of rain to keep things interesting!';
        } else if (weatherDescription.includes('clouds')) {
            message = 'Cloudy skies—because sometimes the sun needs a little break from the spotlight.';
        } else {
            message = 'Weather information not available.';
        }

        document.querySelector('.message').textContent = message;
    } else {
        document.querySelector('.temperature').textContent = 'N/A';
        document.querySelector('.daytype').textContent = 'N/A';
        document.querySelector('.message').textContent = 'Weather information not available.';
    }
});
