import { useQuery } from "@tanstack/react-query"
import WeatherDay from "./WeatherDay"
import WeatherDayGraph, { DataPoint } from "./WeatherDayGraph"

const LOCATION: [number, number] = [52.1951, 0.1313]
const API_BASE_URL = "https://api.open-meteo.com/v1/forecast"

interface WeatherData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    hourly: {
        time: string[]
        temperature_2m: number[]
    }
    daily: {
        time: string[]
        weather_code: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
    }
}

function getWeatherApiUrl(): string {
    const queryParams = new URLSearchParams({
        latitude: LOCATION[0].toString(),
        longitude: LOCATION[1].toString(),
        hourly: ["temperature_2m"].join(","),
        daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
        ].join(","),
    })

    return `${API_BASE_URL}?${queryParams.toString()}`
}

export default function Weather() {
    const { data } = useQuery<WeatherData>({
        queryKey: ["weather"],
        queryFn: () =>
            fetch(getWeatherApiUrl()).then((response) => response.json()),
    })

    if (!data) {
        return <p>Loading...</p>
    }
    console.log(data)

    const today = new Date()
    const dayData: DataPoint[] = data.hourly.time.reduce(
        (accumulator: DataPoint[], time: string, index) => {
            const date = new Date(time)

            if (
                date.getMonth() === today.getMonth() &&
                date.getDay() === today.getDay() &&
                date.getFullYear() === date.getFullYear()
            ) {
                accumulator.push({
                    date,
                    value: data.hourly.temperature_2m[index],
                })
            }

            return accumulator
        },
        [],
    )

    return (
        <div>
            <p className="uppercase text-4xl text-right">Weather</p>
            <div className="flex gap-2 mt-2">
                {data.daily.time.map((date, index) => {
                    const minTemp = data.daily.temperature_2m_min[index]
                    const maxTemp = data.daily.temperature_2m_max[index]
                    const weatherCode = data.daily.weather_code[index]

                    return (
                        <WeatherDay
                            maxTemp={maxTemp}
                            minTemp={minTemp}
                            weatherCode={weatherCode}
                            date={new Date(date)}
                            key={index}
                            active={index === 0}
                        />
                    )
                })}
            </div>
            <WeatherDayGraph data={dayData} />
        </div>
    )
}
