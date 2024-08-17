function handleClick() {
    const cityName = document.getElementById('city-input').value;
    if (cityName) {
        sessionStorage.setItem('cityName', cityName);
        window.location.href = 'loading.html';
    } else {
        alert('Please enter a city name.');
    }
}
