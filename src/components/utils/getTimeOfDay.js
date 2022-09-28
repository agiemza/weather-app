export default function getTimeOfDay(data) {
	const currentTime = new Date(data.dt * 1000)
	const sunRise = new Date(data.sys.sunrise * 1000)
	const sunSet = new Date(data.sys.sunset * 1000)
	return currentTime > sunRise && currentTime < sunSet ? "day" : "night"
}
