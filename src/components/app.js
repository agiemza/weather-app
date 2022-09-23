import main from "./UI/main"
import nav from "./UI/nav"
import getWeather from "./utils/getWeather"

export default function app() {
	renderElements()
	getWeather()
}

function renderElements() {
	const root = createRootElement()
	root.appendChild(nav())
	root.appendChild(main())
}

function createRootElement() {
	const root = document.createElement("div")
	document.body.classList.add("sky-gradient-13")
	root.id = "root"
	document.body.appendChild(root)
	return root
}
