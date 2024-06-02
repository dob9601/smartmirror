// Adapted from https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c?permalink_comment_id=5030524

import {
    IconCloud,
    IconCloudRain,
    IconDropletHalfFilled,
    IconMoon,
    IconSun,
} from "@tabler/icons-react"
import { ReactNode } from "react"

interface WmoCode {
    day: {
        description: string
        icon?: ReactNode
    }
    night: {
        description: string
        icon?: ReactNode
    }
}

export const WMO_CODES: Record<number, WmoCode> = {
    0: {
        day: {
            description: "Sunny",
            icon: <IconSun size={48} />,
        },
        night: {
            description: "Clear",
            icon: <IconMoon size={48} />,
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            icon: (
                <div>
                    <IconSun size={48} />
                    <IconCloud />
                </div>
            ),
        },
        night: {
            description: "Mainly Clear",
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
        },
        night: {
            description: "Partly Cloudy",
        },
    },
    3: {
        day: {
            description: "Cloudy",
            icon: <IconCloud size={48} />,
        },
        night: {
            description: "Cloudy",
            icon: <IconCloud size={48} />,
        },
    },
    45: {
        day: {
            description: "Foggy",
        },
        night: {
            description: "Foggy",
        },
    },
    48: {
        day: {
            description: "Rime Fog",
        },
        night: {
            description: "Rime Fog",
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
        },
        night: {
            description: "Light Drizzle",
        },
    },
    53: {
        day: {
            description: "Drizzle",
        },
        night: {
            description: "Drizzle",
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
        },
        night: {
            description: "Heavy Drizzle",
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
        },
        night: {
            description: "Light Freezing Drizzle",
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
        },
        night: {
            description: "Freezing Drizzle",
        },
    },
    61: {
        day: {
            description: "Light Rain",
            icon: <IconDropletHalfFilled size={48} />,
        },
        night: {
            description: "Light Rain",
        },
    },
    63: {
        day: {
            description: "Rain",
        },
        night: {
            description: "Rain",
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
        },
        night: {
            description: "Heavy Rain",
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
        },
        night: {
            description: "Light Freezing Rain",
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
        },
        night: {
            description: "Freezing Rain",
        },
    },
    71: {
        day: {
            description: "Light Snow",
        },
        night: {
            description: "Light Snow",
        },
    },
    73: {
        day: {
            description: "Snow",
        },
        night: {
            description: "Snow",
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
        },
        night: {
            description: "Heavy Snow",
        },
    },
    77: {
        day: {
            description: "Snow Grains",
        },
        night: {
            description: "Snow Grains",
        },
    },
    80: {
        day: {
            description: "Light Showers",
            icon: <IconCloudRain size={48} />,
        },
        night: {
            description: "Light Showers",
            icon: <IconCloudRain size={48} />,
        },
    },
    81: {
        day: {
            description: "Showers",
        },
        night: {
            description: "Showers",
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
        },
        night: {
            description: "Heavy Showers",
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
        },
        night: {
            description: "Light Snow Showers",
        },
    },
    86: {
        day: {
            description: "Snow Showers",
        },
        night: {
            description: "Snow Showers",
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
        },
        night: {
            description: "Thunderstorm",
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
        },
        night: {
            description: "Light Thunderstorms With Hail",
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
        },
        night: {
            description: "Thunderstorm With Hail",
        },
    },
}
