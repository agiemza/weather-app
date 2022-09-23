import cloud from "../../assets/weather/cloud"

export default function main() {
	const main = document.createElement("main")

	main.appendChild(weatherSection())
	main.appendChild(forecastSection())
	return main
}

// weather

function weatherSection() {
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
		<h2>San Francisco, USA</h2>
		<h3>September 22, 2022</h3>
	`
	return locationInfo
}

function createCurrentWeather() {
	const currentWeatherIcon = document.createElement("div")
	currentWeatherIcon.classList.add("current-weather")
	currentWeatherIcon.innerHTML = `
		${cloud}
		<div class="weather-description">cloudy</div>
	`
	return currentWeatherIcon
}

function createTemperatureContainer() {
	const temperatureContainer = document.createElement("div")
	temperatureContainer.classList.add("temperature-container")
	temperatureContainer.innerHTML = `
		<div class="temperature">20°C</div>
		<div class="max-min-temperature">
			22°C / <span class="temp-min">13°C<span/>
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
			<div>13km/h</div>
		</li>
		<li>
			<div>Precipitation:</div>
			<div>15%</div>
		</li>
		<li>
			<div>Humidity:</div>
			<div>70%</div>
		</li>
		<li>
			<div>Pressure:</div>
			<div>1022 hPa</div>
		</li>
	`
	return list
}

// forecast

function forecastSection() {
	const forecastSection = document.createElement("section")
	forecastSection.classList.add("forecast-section")

	forecastSection.appendChild(createDaySwitch())

	return forecastSection
}

function createDaySwitch() {
	const daySwitch = document.createElement("div")
	daySwitch.classList.add("forecast-container")
	daySwitch.innerHTML = `
		<div class="tile">
			<div>11:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>
		<div class="tile">
			<div>14:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>
		<div class="tile">
			<div>17:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>
		<div class="tile">
			<div>20:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>
		<div class="tile">
			<div>23:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>
		<div class="tile">
			<div>02:00</div>
			<div>${cloud}</div>
			<div>14°C</div>
		</div>

	`
	return daySwitch
}
