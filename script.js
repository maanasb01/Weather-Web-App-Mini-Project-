const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af1d0e949fmsh3f8465cab9f1fbfp1fcdacjsn3f26d1463be0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cityName = document.querySelector("#cityName");
const getWeather = (city) =>{

	const name = city.toString();

	cityName.innerHTML = name[0].toUpperCase()+name.substring(1);

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}

const submit = document.querySelector("#submit");
const city = document.querySelector("#city");

submit.addEventListener("click",function(e){
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");

const date = new Date();

const dateStr = date.toString();

const dateArray = dateStr.split(" ");

const displayDate = document.querySelector("#date");

displayDate.innerHTML = dateArray[0] + " " + dateArray[1]+ " " + dateArray[2] + " " + dateArray[3];

const time = document.querySelector("#currentTime");

time.innerHTML = dateArray[4] + " " + dateArray[5];

delhi.addEventListener("click", function(e){
	e.preventDefault();
	getWeather("Delhi");
})
mumbai.addEventListener("click", function(e){
	e.preventDefault();
	getWeather("Mumbai");
})

bangalore.addEventListener("click", function(e){
	e.preventDefault();
	getWeather("Bangalore");
})
kolkata.addEventListener("click", function(e){
	e.preventDefault();
	getWeather("Kolkata");
})

delhiT.innerHTML = response.temp;
mumbaiT.innerHTML = response.temp;
bangaloreT.innerHTML = response.temp;
kolkataT.innerHTML = response.temp;

const home = document.querySelector("#home");

home.addEventListener("click",function(e){
	e.preventDefault();
	getWeather("Delhi");
})
