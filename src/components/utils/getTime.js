export function getTime(data) {
	const currentTime = new Date(data * 1000)
	const hours = currentTime.getHours()
	return `
		${hours < 12 ? hours : hours}
		${hours < 12 ? "AM" : "PM"}
	`
}

export function getTimeOfDay(data) {
	const currentTime = new Date(data.dt * 1000)
	
	let sunRise
	let sunSet
	if (data.sys.sunrise) {
		sunRise = new Date(data.sys.sunrise * 1000)
		sunSet = new Date(data.sys.sunset * 1000)
	} else {
		sunRise = new Date(data.dt * 1000).setHours(6)
		sunSet = new Date(data.dt * 1000).setHours(20)
	}

	return currentTime > sunRise && currentTime < sunSet ? "day" : "night"
}