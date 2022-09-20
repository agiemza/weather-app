import cloud from "../../assets/weather/cloud"

export default function main() {
	const main = document.createElement("main")
	main.appendChild(weatherSection())
	main.appendChild(daySwitchSection())

	return main
}

function weatherSection() {
	const weatherSection = document.createElement("section")
	weatherSection.classList.add("weather-section")

	weatherSection.appendChild(createCurrentWeatherIcon())
	weatherSection.appendChild(createHourSwitch())
	weatherSection.appendChild(createCurrentWeather())

	return weatherSection
}

function createCurrentWeatherIcon() {
	const currentWeatherIcon = document.createElement("div")
	currentWeatherIcon.classList.add("current-weather-icon")
	currentWeatherIcon.innerHTML = cloud
	return currentWeatherIcon
}

function createHourSwitch() {
	const hourSwitchContainer = document.createElement("div")
	hourSwitchContainer.classList.add("hour-switch-container")
	hourSwitchContainer.innerHTML = `
    	<div class="hour-switch">
    	  <div class="hour-option hour-option-s">09:00</div>
    	  <div class="hour-option hour-option-m">10:00</div>
    	  <div class="hour-option">11:00</div>
    	  <div class="hour-option hour-option-m">12:00</div>
    	  <div class="hour-option hour-option-s">13:00</div>
    	</div>	
	`
	return hourSwitchContainer
}

function createCurrentWeather() {
	const currentWeatherContainer = document.createElement("div")
	currentWeatherContainer.classList.add("current-weather-container")
	currentWeatherContainer.innerHTML = `
		<div class="temperature">20</div>
    	<div class="temp-unit">°C</div>
    	<div class="weather-description">cloudy</div>
	`
	return currentWeatherContainer
}

// day switch

function daySwitchSection() {
	const daySwitchSection = document.createElement("section")
	daySwitchSection.classList.add("day-switch-section")

	daySwitchSection.appendChild(createMaxMinTemperature())
	daySwitchSection.appendChild(createDaySwitch())

	return daySwitchSection
}

function createMaxMinTemperature() {
	const maxMinTemperature = document.createElement("div")
	maxMinTemperature.classList.add("max-min-temperature-container")
	maxMinTemperature.innerHTML = `
		<div class="temp-max">H: 22</div>
		<div class="temp-min">L: 13</div>
		<div class="temp-unit">°C</div>
	`
	return maxMinTemperature
}

function createDaySwitch() {
	const daySwitch = document.createElement("div")
	daySwitch.classList.add("day-switch-container")
	daySwitch.innerHTML = `
		<div class="day-option day-option-s">Mon</div>
    	<div class="day-option day-option-m">Tue</div>
    	<div class="day-option">Wed</div>
    	<div class="day-option day-option-m">Thu</div>
    	<div class="day-option day-option-s">Fri</div>
	`
	return daySwitch
}
