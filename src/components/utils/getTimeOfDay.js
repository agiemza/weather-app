export default function getTimeOfDay(currentTime, sunRise, sunSet) {
	currentTime = new Date(currentTime * 1000)
	sunRise = new Date(sunRise * 1000)
	return currentTime > sunRise && currentTime < sunSet ? "day" : "night"
}
