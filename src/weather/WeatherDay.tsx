import { twMerge } from "tailwind-merge"
import { WMO_CODES } from "./wmo-codes"

interface WeatherDayProps {
    minTemp: number
    maxTemp: number
    date: Date
    weatherCode: number
    active: boolean
}

export default function WeatherDay({
    maxTemp,
    minTemp,
    date,
    active,
    weatherCode,
}: WeatherDayProps) {
    const weather = WMO_CODES[weatherCode]

    return (
        <div
            className={twMerge(
                "p-2 p rounded-lg flex flex-col items-center",
                active ? "bg-white text-black" : "border-2 border-white",
            )}
        >
            {weather.day.icon}
            <p className="font-semibold">{weather.day.description}</p>
            <p className="text-sm font-semibold pb-2">
                {minTemp}°C &mdash; {maxTemp}°C
            </p>
            <p
                className={twMerge(
                    "font-semibold text-sm border-t-2 pt-2",
                    active ? "border-black" : "border-white",
                )}
            >
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </p>
        </div>
    )
}
