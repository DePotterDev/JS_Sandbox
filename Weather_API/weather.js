class Weather{
    constructor(city){
        this.apiKey = '18afca4457dc6f0122a44e50fb557679';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();
        console.log(responseData);

        return responseData;
    }

    // Change weather location
    changeLocation(city){
        this.city = city;
    }
}