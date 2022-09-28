export default function getTime(data) {
	const currentTime = new Date(data * 1000)
	const hours = currentTime.getHours()
	return `
		${hours <= 12 ? hours : hours - 12}
		${hours < 12 ? "AM" : "PM"}
	`
}
