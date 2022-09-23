export default async function getPositionByIP() {
	try {
		const apiKey = "40cc1f99306447ff9761691d05aa5484"
		const response = await fetch(
			`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
		)
		const ipData = await response.json()
		return {
			latitude: ipData.latitude,
			longitude: ipData.longitude,
		}
	} catch (err) {
		console.error(err)
		return {
			latitude: 48.081699,
			longitude: 7.3556,
		}
	}
}
