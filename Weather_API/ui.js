class UI {
    constructor(){
        this.location = document.getElementById('ow-location');
        this.desc = document.getElementById('ow-desc');
        this.string = document.getElementById('ow-string');
        this.details = document.getElementById('ow-details');
        this.humidity = document.getElementById('ow-humidity');
        this.feelsLike = document.getElementById('ow-feels-like');
        this.pressure = document.getElementById('ow-pressure');
        this.wind = document.getElementById('ow-wind');
    }

    paint(x){
        this.location.textContent = x.name;
        this.desc.textContent = x.weather[0].description;
        this.string.textContent = x.main.temp;
        this.humidity.textContent = `Relative Humidity: ${x.main.humidity}`;
        this.pressure.textContent = `Pressure: ${x.main.pressure}`;
        this.feelsLike.textContent = `Feels Like: ${x.main.feels_like}`;
        this.wind.textContent = `Wind: ${x.wind.speed}`;
        

    }
}