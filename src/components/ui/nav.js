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

	nav.appendChild(createButton(SearchIcon, "search-button"))
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
	const city = document.querySelector(".search-input").value
	getWeather(city)
}
