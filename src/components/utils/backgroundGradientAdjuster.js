export default function backgroundGradientAdjuster() {
	const body = document.querySelector("body")
	const hour = new Date().getHours()
	const hoursArray = [
		"24",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
	]
	body.classList.add(`sky-gradient-${hoursArray[hour]}`)
}
