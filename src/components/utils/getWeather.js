import convertDate from "./convertDate"
import getPosition from "./getPosition"
import getTimeOfDay from "./getTimeOfDay"
import getWeatherIcon from "./getWeatherIcon"
import { forecastSection, weatherSection } from "../UI/main"
import getPositionByIP from "./getPositionByIP"
import sadIcon from "../../assets/sad"

export default async function getWeather() {
	try {
		const position = await getPosition()
		fetchDataFromAPI(position.coords)
	} catch {
		const position = await getPositionByIP()
		fetchDataFromAPI(position)
	}
}

async function fetchDataFromAPI(coords) {
	try {
		const key = "c0c1d3d4c91601c0135c78b5fae1e66b"
		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`
		)
		const weatherData = await currentWeather.json()

		const main = document.querySelector("main")
		main.innerHTML = ""
		main.appendChild(weatherSection())
		main.appendChild(forecastSection())
		insertCurrentWeatherToDOM(processData(weatherData))
	} catch (err) {
		console.error(err)
		displayErrorMessage(
			"Connection to API cannot be established, please check your internet connection and try again later."
		)
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
		date: convertDate(data.dt),
		time: getTimeOfDay(data),
	}
}

function insertCurrentWeatherToDOM(data) {
	const cityField = document.querySelector("#city")
	cityField.textContent = data.city
	const dateField = document.querySelector("#date")
	dateField.textContent = data.date

	const weatherIconField = document.querySelector("#weather-icon")
	weatherIconField.innerHTML = getWeatherIcon(data.weatherCode, data.time)

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

function displayErrorMessage(message) {
	document.body.querySelector("main").innerHTML = ""
	const errorMessage = document.createElement("div")
	errorMessage.classList.add("error-message")
	errorMessage.innerHTML = `
		<div class="error-icon">${sadIcon}</div>
		<p>${message}</p>
	`
	document.body.querySelector("main").appendChild(errorMessage)
}
