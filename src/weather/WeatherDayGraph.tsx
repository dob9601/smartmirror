import {
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts"

export interface DataPoint {
    date: Date
    value: number
}

interface WeatherDayGraphProps {
    data: DataPoint[]
}

export default function WeatherDayGraph({ data }: WeatherDayGraphProps) {
    return (
        <ResponsiveContainer height={320} width="100%">
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Line
                    dataKey="value"
                    stroke="#fff"
                    dot={false}
                    strokeWidth={2}
                />
                <ReferenceLine x={100} />
            </LineChart>
        </ResponsiveContainer>
    )
}
