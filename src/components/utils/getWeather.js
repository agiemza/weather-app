import { convertFullDate, convertDayOfWeek } from "./convertDate"
import getTimeOfDay from "./getTimeOfDay"
import getWeatherIcon from "./getWeatherIcon"
import { display as displayMain } from "../UI/main"
import getPositionByIP from "./getPositionByIP"
import sadIcon from "../../assets/sad"
import getTime from "./getTime"

export default async function getWeather(city) {
	try {
		const position = city || (await getPositionByIP())
		const weatherData = await fetchData(createApiUrl(position, "weather"))
		const forecastData = await fetchData(createApiUrl(position, "forecast"))

		displayMain()
		insertCurrentWeatherToDOM(processData(weatherData))
		insertForecastToDOM(forecastData)
	} catch (err) {
		console.log(err)
		displayErrorMessage("Oops... We ran into a connection problem.")
	}
}

function createApiUrl(city, type) {
	return `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=c0c1d3d4c91601c0135c78b5fae1e66b`
}

async function fetchData(url) {
	try {
		const currentWeather = await fetch(url)
		const weatherData = await currentWeather.json()
		return weatherData
	} catch (err) {
		console.log(err)
	}
}

function processData(data) {
	return {
		weatherCode: data.weather[0].id,
		weatherDescription: data.weather[0].main,
		temperature: Math.round(data.main.temp - 273.15),
		feelsLike: Math.round(data.main.feels_like - 273.15),
		pressure: data.main.pressure,
		humidity: data.main.humidity,
		wind: Math.round((data.wind.speed * 18) / 5),
		city: `${data.name}, ${data.sys.country}`,
		date: convertFullDate(data.dt),
		shortDate: convertDayOfWeek(data.dt),
		time: getTime(data.dt),
		timeOfDay: getTimeOfDay(data),
	}
}

function insertCurrentWeatherToDOM(data) {
	const cityField = document.querySelector("#city")
	cityField.textContent = data.city
	const dateField = document.querySelector("#date")
	dateField.textContent = data.date

	const weatherIconField = document.querySelector("#weather-icon")
	weatherIconField.innerHTML = getWeatherIcon(data.weatherCode, data.timeOfDay)

	const weatherDescriptionField = document.querySelector(".weather-description")
	weatherDescriptionField.textContent = data.weatherDescription

	const currentTemperatureField = document.querySelector(".temperature")
	currentTemperatureField.textContent = `${data.temperature}°C`
	const feelsLikeField = document.querySelector(".feels-like")
	feelsLikeField.textContent = `Feels like ${data.feelsLike}°C`

	const windField = document.querySelector("#wind")
	windField.textContent = `${data.wind} km/h`
	const humidityField = document.querySelector("#humidity")
	humidityField.textContent = `${data.humidity}%`
	const pressureField = document.querySelector("#pressure")
	pressureField.textContent = `${data.pressure} hPa`
}

async function insertForecastToDOM(forecastData) {
	const container = document.querySelector(".forecast-container")

	forecastData.list.forEach((item) => {
		const data = processData(item)
		const card = document.createElement("div")
		card.classList.add("card")
		card.innerHTML = `
			<div>
				<span class="dayOfWeek">${data.shortDate}</span>
				${data.time}
			</div>
			<div>
				${getWeatherIcon(data.weatherCode, data.timeOfDay)}
			</div>
			<div>${data.temperature}°C</div>
		`
		container.appendChild(card)
	})
}

export function displayErrorMessage(message) {
	document.body.querySelector("main").innerHTML = ""
	const errorMessage = document.createElement("div")
	errorMessage.classList.add("error-message")
	errorMessage.innerHTML = `
		<div class="error-icon">${sadIcon}</div>
		<p>${message}</p>
	`
	document.body.querySelector("main").appendChild(errorMessage)
}
