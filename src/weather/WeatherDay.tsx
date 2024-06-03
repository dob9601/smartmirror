import { twMerge } from "tailwind-merge"
import { WMO_CODES, WeatherQuality } from "./wmo-codes"

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

    let activeClassName: string = "bg-primary text-black"
    let inactiveClassName: string = "border-primary text-primary"
    if (weather.quality === WeatherQuality.Good) {
        activeClassName = "bg-success text-black"
        inactiveClassName = "border-success text-success"
    } else if (weather.quality === WeatherQuality.Bad) {
        activeClassName = "bg-warning text-black"
        inactiveClassName = "border-warning text-warning"
    } else if (weather.quality === WeatherQuality.VeryBad) {
        activeClassName = "bg-error text-black"
        inactiveClassName = "border-error text-error"
    }

    return (
        <div
            className={twMerge(
                "p-2 p rounded-lg flex flex-col items-center w-30 text-center",
                active
                    ? `${activeClassName} text-black`
                    : `border ${inactiveClassName}`,
            )}
        >
            {weather.day.icon}
            <p className="uppercase font-semibold">{weather.day.description}</p>
            <p className="text-sm pb-2">
                {minTemp}°C &mdash; {maxTemp}°C
            </p>
            <p
                className={twMerge(
                    "font-semibold text-sm border-t-2 pt-2",
                    active ? "border-black" : inactiveClassName,
                )}
            >
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </p>
        </div>
    )
}
