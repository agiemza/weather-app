import storm from "../../assets/weather/storm"
import drizzle from "../../assets/weather/drizzle"
import rain from "../../assets/weather/rain"
import snow from "../../assets/weather/snow"
import wind from "../../assets/weather/wind"
import tornado from "../../assets/weather/tornado"
import cloud from "../../assets/weather/cloud"
import sun from "../../assets/weather/sun"
import moon from "../../assets/weather/moon"

export default function getWeatherIcon(code, daytime) {
	if (code >= 200 && code <= 232) return storm
	if (code >= 300 && code <= 321) return drizzle
	if (code >= 500 && code <= 531) return rain
	if (code >= 600 && code <= 622) return snow
	if (code >= 700 && code <= 771) return wind
	if (code === 781) return tornado
	if (code === 800 && daytime === "day") return sun
	if (code === 800 && daytime === "night") return moon
	if (code >= 801 && code <= 804) return cloud
}
