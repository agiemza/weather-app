export default function getTimeOfDay(data) {
	const currentTime = new Date(data.dt * 1000)

	console.log(data.sys.sunrise)
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
