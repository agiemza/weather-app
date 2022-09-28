import loadingAnimation from "../utils/loadingAnimation"


export default function main() {
	const main = document.createElement("main")
	main.prepend(loadingAnimation())
	return main
}

export function display() {
	const main = document.querySelector("main")
	main.innerHTML = ""
	main.appendChild(weatherSection())
	main.appendChild(forecastSection())
}

// weather

export function weatherSection() {
	const weatherSection = document.createElement("section")
	weatherSection.classList.add("weather-section")
	weatherSection.appendChild(createWeatherDataContainer())
	weatherSection.appendChild(createCurrentWeather())
	weatherSection.appendChild(createTemperatureContainer())
	weatherSection.appendChild(createMiscDataList())
	return weatherSection
}

function createWeatherDataContainer() {
	const weatherDataContainer = document.createElement("div")
	weatherDataContainer.classList.add("weather-data-container")
	weatherDataContainer.appendChild(createLocationInfo())
	return weatherDataContainer
}

function createLocationInfo() {
	const locationInfo = document.createElement("div")
	locationInfo.classList.add("location-info")
	locationInfo.innerHTML = `
		<h2 id="city"></h2>
		<h3 id="date"></h3>
	`
	return locationInfo
}

function createCurrentWeather() {
	const currentWeatherIcon = document.createElement("div")
	currentWeatherIcon.classList.add("current-weather")
	currentWeatherIcon.innerHTML = `
		<div id="weather-icon"></div>
		<div class="weather-description"></div>
	`
	return currentWeatherIcon
}

function createTemperatureContainer() {
	const temperatureContainer = document.createElement("div")
	temperatureContainer.classList.add("temperature-container")
	temperatureContainer.innerHTML = `
		<div class="temperature">
		</div>
		<div class="feels-like">
		</div>
	`
	return temperatureContainer
}

function createMiscDataList() {
	const list = document.createElement("ul")
	list.classList.add("misc-data-list")
	list.innerHTML = `
		<li>
			<div>Wind:</div>
			<div id="wind"></div>
		</li>
		<li>
			<div>Humidity:</div>
			<div id="humidity"></div>
		</li>
		<li>
			<div>Pressure:</div>
			<div id="pressure"></div>
		</li>
	`
	return list
}

// forecast

export function forecastSection() {
	const forecastSection = document.createElement("section")
	forecastSection.classList.add("forecast-section")

	forecastSection.appendChild(createDaySwitch())

	return forecastSection
}

function createDaySwitch() {
	const daySwitch = document.createElement("div")
	daySwitch.classList.add("forecast-container")
	return daySwitch
}