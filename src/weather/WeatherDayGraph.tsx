import dayjs, { Dayjs } from "dayjs"
import { useEffect, useMemo, useState } from "react"
import {
    Area,
    AreaChart,
    CartesianGrid,
    Label,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts"
import tailwindConfig from "../../tailwind.config.js"
import resolveConfig from "tailwindcss/resolveConfig"

const { theme } = resolveConfig(tailwindConfig)

export interface DataPoint {
    unixTimestamp: number
    value: number
}

interface WeatherDayGraphProps {
    data: DataPoint[]
}

export default function WeatherDayGraph({ data }: WeatherDayGraphProps) {
    const [currentTime, setCurrentTime] = useState<Dayjs>(dayjs())

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(dayjs()), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const startOfDay = dayjs().startOf("day")

    const endOfDay = dayjs().endOf("day")

    const ticks: number[] = useMemo(
        () => [
            dayjs().startOf("day").set("hour", 6).unix(),
            dayjs().startOf("day").set("hour", 12).unix(),
            dayjs().startOf("day").set("hour", 18).unix(),
            dayjs().startOf("day").set("hour", 24).unix(),
        ],
        [],
    )

    console.log(data)
    return (
        <ResponsiveContainer height={320} width="100%">
            <AreaChart>
                <XAxis
                    dataKey="unixTimestamp"
                    axisLine={false}
                    stroke={theme.colors.warning}
                    type="number"
                    domain={[startOfDay.unix(), endOfDay.unix()]}
                    tickFormatter={(value) => {
                        const date = new Date(value * 1000)
                            .toLocaleTimeString()
                            .split(" ")[0]
                        return date
                    }}
                    ticks={ticks}
                    tickLine={false}
                />
                <YAxis
                    type="number"
                    dataKey="value"
                    axisLine={false}
                    stroke={theme.colors.warning}
                    tickLine={false}
                />
                <Area
                    dataKey="value"
                    data={data}
                    stroke={theme.colors.primary}
                    strokeWidth={2}
                    fill={theme.colors.primary}
                    opacity={0.8}
                    // line
                    // lineJointType="natural"
                    // shape={<></>}
                />
                <CartesianGrid
                    stroke={theme.colors.error}
                    vertical={false}
                    opacity={1}
                />
                <ReferenceLine
                    x={currentTime.unix()}
                    stroke={theme.colors.warning}
                    label={
                        <Label
                            value={currentTime.format("HH:mm:ss")}
                            fill={theme.colors.warning}
                            className="text-sm font-semibold"
                            position="insideBottomRight"
                        />
                    }
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}
