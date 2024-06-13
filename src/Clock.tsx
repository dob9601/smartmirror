import dayjs, { Dayjs } from "dayjs"
import { useEffect, useState } from "react"

export default function Clock() {
    const [currentTime, setCurrentTime] = useState<Dayjs>(dayjs())

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(dayjs()), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <p className="text-[10em] font-display">
            {currentTime.format("HH:mm")}
        </p>
    )
}
