export default function header() {
	const header = document.createElement("header")

	const logo = document.createElement("h1")
	logo.textContent = "Weather"
	header.appendChild(logo)

	const city = document.createElement("h2")
    city.classList.add("city")
	city.textContent = "Paris"
	header.appendChild(city)

    return header
}
