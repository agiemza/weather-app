import header from "./UI/header"
import main from "./UI/main"
import nav from "./UI/nav"
import getWeather from "./utils/getWeather"

export default function app() {
	renderElements()
	getWeather()
}

function renderElements() {
	const root = createRootElement()
	root.appendChild(header())
	root.appendChild(main())
	root.appendChild(nav())
}

function createRootElement() {
	const root = document.createElement("div")
	root.classList.add("#root")
	document.body.appendChild(root)
	return root
}
