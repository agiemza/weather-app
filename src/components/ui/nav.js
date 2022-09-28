import LocationIcon from "../../assets/location"
import SearchIcon from "../../assets/search"
import getWeather from "../utils/getWeather"

export default function nav() {
	const nav = document.createElement("nav")
	nav.appendChild(createLogo())
	nav.appendChild(createSearchInput(searchConfirmHandler))
	nav.appendChild(
		createButton(LocationIcon, "locate-button", locateButtonClickHandler)
	)
	nav.appendChild(
		createButton(SearchIcon, "search-button", searchConfirmHandler)
	)
	return nav
}

function createLogo() {
	const logo = document.createElement("h1")
	logo.classList.add("logo")
	logo.textContent = "Weather app"
	return logo
}

function createSearchInput(eventHandler) {
	const searchInput = document.createElement("input")
	searchInput.classList.add("search-input")
	searchInput.id = "search"
	searchInput.type = "search"
	searchInput.addEventListener(
		"keydown",
		(e) => e.key === "Enter" && eventHandler(e)
	)
	return searchInput
}

function createButton(content, className, eventHandler) {
	const button = document.createElement("button")
	className && button.classList.add(className)
	eventHandler && button.addEventListener("click", eventHandler)
	button.innerHTML = content
	return button
}

function locateButtonClickHandler() {
	getWeather()
}

function searchConfirmHandler() {
	const input = document.querySelector(".search-input")
	const city = input.value
	if (city.length > 0) {
		input.value = ""
		getWeather(city)
	}
}
