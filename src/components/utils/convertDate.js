export function convertFullDate(date) {
	const dateObject = new Date(date * 1000)
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	return `${
		monthNames[dateObject.getMonth()]
	} ${dateObject.getDate()}, ${dateObject.getFullYear()}`
}

export function convertDayOfWeek(date) {
	const dateObject = new Date(date * 1000)

	const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	return `${dayNames[dateObject.getDay()]}`
}
