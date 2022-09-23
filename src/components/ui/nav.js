import LocationIcon from "../../assets/location"
import SearchIcon from "../../assets/search"

export default function nav() {
	const nav = document.createElement("nav")
	nav.appendChild(createLogo())
	nav.appendChild(createSearchInput())
	nav.appendChild(createButton(LocationIcon, "locate-button"))
	nav.appendChild(createButton(SearchIcon, "search-button"))
	return nav
}

function createLogo() {
	const logo = document.createElement("h1")
	logo.classList.add("logo")
	logo.textContent = "Weather app"
	return logo
}

function createSearchInput() {
	const searchInput = document.createElement("input")
	searchInput.classList.add("search-input")
	searchInput.type = "search"
	return searchInput
}

function createButton(content, className) {
	const searchButton = document.createElement("button")
	className && searchButton.classList.add(className)
	searchButton.innerHTML = content
	return searchButton
}
