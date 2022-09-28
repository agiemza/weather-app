export default async function getPositionByIP() {
	try {
		const response = await fetch(
			`https://api.ipgeolocation.io/ipgeo?apiKey=40cc1f99306447ff9761691d05aa5484`
		)
		const ipData = await response.json()
		return ipData.city
	} catch (err) {
		console.error(err)
	}
}
