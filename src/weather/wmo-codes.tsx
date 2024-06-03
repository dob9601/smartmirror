// Adapted from https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c?permalink_comment_id=5030524

import {
    IconCloud,
    IconCloudRain,
    IconMoon,
    IconSun,
} from "@tabler/icons-react"
import { ReactNode } from "react"

export enum WeatherQuality {
    Good,
    Neutral,
    Bad,
    VeryBad,
}

interface WmoCode {
    day: {
        description: string
        icon?: ReactNode
    }
    night: {
        description: string
        icon?: ReactNode
    }
    quality: WeatherQuality
}

const iconProps = {
    strokeWidth: 1,
    size: 48,
}

export const WMO_CODES: Record<number, WmoCode> = {
    0: {
        day: {
            description: "Sunny",
            icon: <IconSun {...iconProps} />,
        },
        night: {
            description: "Clear",
            icon: <IconMoon {...iconProps} />,
        },
        quality: WeatherQuality.Good,
    },
    1: {
        day: {
            description: "Mainly Sunny",
            icon: (
                <div>
                    <IconSun {...iconProps} />
                    <IconCloud {...iconProps} />
                </div>
            ),
        },
        night: {
            description: "Mainly Clear",
        },
        quality: WeatherQuality.Good,
    },
    2: {
        day: {
            description: "Partly Cloudy",
        },
        night: {
            description: "Partly Cloudy",
        },
        quality: WeatherQuality.Neutral,
    },
    3: {
        day: {
            description: "Cloudy",
            icon: <IconCloud {...iconProps} strokeWidth={1} />,
        },
        night: {
            description: "Cloudy",
            icon: <IconCloud {...iconProps} />,
        },
        quality: WeatherQuality.Neutral,
    },
    45: {
        day: {
            description: "Foggy",
        },
        night: {
            description: "Foggy",
        },
        quality: WeatherQuality.Bad,
    },
    48: {
        day: {
            description: "Rime Fog",
        },
        night: {
            description: "Rime Fog",
        },
        quality: WeatherQuality.Bad,
    },
    51: {
        day: {
            description: "Light Drizzle",
        },
        night: {
            description: "Light Drizzle",
        },
        quality: WeatherQuality.Bad,
    },
    53: {
        day: {
            description: "Drizzle",
        },
        night: {
            description: "Drizzle",
        },
        quality: WeatherQuality.Bad,
    },
    55: {
        day: {
            description: "Heavy Drizzle",
        },
        night: {
            description: "Heavy Drizzle",
        },
        quality: WeatherQuality.VeryBad,
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
        },
        night: {
            description: "Light Freezing Drizzle",
        },
        quality: WeatherQuality.Bad,
    },
    57: {
        day: {
            description: "Freezing Drizzle",
        },
        night: {
            description: "Freezing Drizzle",
        },
        quality: WeatherQuality.VeryBad,
    },
    61: {
        day: {
            description: "Light Rain",
            icon: <IconCloudRain {...iconProps} />,
        },
        night: {
            description: "Light Rain",
            icon: <IconCloudRain {...iconProps} />,
        },
        quality: WeatherQuality.Bad,
    },
    63: {
        day: {
            description: "Rain",
        },
        night: {
            description: "Rain",
        },
        quality: WeatherQuality.VeryBad,
    },
    65: {
        day: {
            description: "Heavy Rain",
        },
        night: {
            description: "Heavy Rain",
        },
        quality: WeatherQuality.VeryBad,
    },
    66: {
        day: {
            description: "Light Freezing Rain",
        },
        night: {
            description: "Light Freezing Rain",
        },
        quality: WeatherQuality.VeryBad,
    },
    67: {
        day: {
            description: "Freezing Rain",
        },
        night: {
            description: "Freezing Rain",
        },
        quality: WeatherQuality.VeryBad,
    },
    71: {
        day: {
            description: "Light Snow",
        },
        night: {
            description: "Light Snow",
        },
        quality: WeatherQuality.Bad,
    },
    73: {
        day: {
            description: "Snow",
        },
        night: {
            description: "Snow",
        },
        quality: WeatherQuality.VeryBad,
    },
    75: {
        day: {
            description: "Heavy Snow",
        },
        night: {
            description: "Heavy Snow",
        },
        quality: WeatherQuality.VeryBad,
    },
    77: {
        day: {
            description: "Snow Grains",
        },
        night: {
            description: "Snow Grains",
        },
        quality: WeatherQuality.Neutral,
    },
    80: {
        day: {
            description: "Light Showers",
            icon: <IconCloudRain {...iconProps} />,
        },
        night: {
            description: "Light Showers",
            icon: <IconCloudRain {...iconProps} />,
        },
        quality: WeatherQuality.Bad,
    },
    81: {
        day: {
            description: "Showers",
        },
        night: {
            description: "Showers",
        },
        quality: WeatherQuality.Bad,
    },
    82: {
        day: {
            description: "Heavy Showers",
        },
        night: {
            description: "Heavy Showers",
        },
        quality: WeatherQuality.VeryBad,
    },
    85: {
        day: {
            description: "Light Snow Showers",
        },
        night: {
            description: "Light Snow Showers",
        },
        quality: WeatherQuality.Neutral,
    },
    86: {
        day: {
            description: "Snow Showers",
        },
        night: {
            description: "Snow Showers",
        },
        quality: WeatherQuality.Bad,
    },
    95: {
        day: {
            description: "Thunderstorm",
        },
        night: {
            description: "Thunderstorm",
        },
        quality: WeatherQuality.VeryBad,
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
        },
        night: {
            description: "Light Thunderstorms With Hail",
        },
        quality: WeatherQuality.VeryBad,
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
        },
        night: {
            description: "Thunderstorm With Hail",
        },
        quality: WeatherQuality.VeryBad,
    },
}
