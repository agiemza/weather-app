import main from "./UI/main"
import nav from "./UI/nav"
import backgroundGradientAdjuster from "./utils/backgroundGradientAdjuster"
import getWeather from "./utils/getWeather"

export default function app() {
	backgroundGradientAdjuster()
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
	root.id = "root"
	document.body.appendChild(root)
	return root
}
