import {
    Label,
    ReferenceLine,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    XAxis,
    YAxis,
} from "recharts"

export interface DataPoint {
    unixTimestamp: number
    value: number
}

interface WeatherDayGraphProps {
    data: DataPoint[]
}

export default function WeatherDayGraph({ data }: WeatherDayGraphProps) {
    const startOfDay = new Date()
    startOfDay.setUTCHours(0, 0, 0, 0)

    console.log(data)
    return (
        <ResponsiveContainer height={320} width="100%">
            <ScatterChart>
                <XAxis
                    dataKey="unixTimestamp"
                    type="number"
                    domain={["dataMin", "dataMax"]}
                    tickFormatter={(value) => {
                        const date = new Date(value * 1000)
                            .toTimeString()
                            .split(" ")[0]
                        return date
                    }}
                />
                <YAxis type="number" dataKey="value" />
                <Scatter
                    data={data}
                    fill="#fff"
                    line
                    lineJointType="natural"
                    strokeWidth={2}
                    shape={<></>}
                />
                <ReferenceLine
                    x={Math.floor(new Date().getTime() / 1000)}
                    stroke="#577277"
                    // label={
                    //     <Label
                    //         value="Current Time"
                    //         fill="#577277"
                    //         position="insideRight"
                    //     />
                    // }
                />
            </ScatterChart>
        </ResponsiveContainer>
    )
}
