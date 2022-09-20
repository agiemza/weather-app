import getPosition from "./getPosition"

export default async function getWeather() {
	try {
		const position = await getPosition()
        
		const lat = position.coords.latitude
		const lon = position.coords.longitude

		const key = "c0c1d3d4c91601c0135c78b5fae1e66b"

		const currentWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
		)
		const weatherData = await currentWeather.json()

		const forecast = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
		)
		const forecastData = await forecast.json()

		console.log(weatherData)
		console.log(forecastData)
	} catch (err) {
		console.error(err)
	}
}
