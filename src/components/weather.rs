use dioxus::prelude::*;
use itertools::izip;
use serde::Deserialize;
use super::Heading;

#[derive(Debug, Deserialize, Clone)]
struct WeatherData {
    daily: DailyWeatherData,
}

#[derive(Debug, Deserialize, Clone)]
struct DailyWeatherData {
    weather_code: Vec<u8>,
    temperature_2m_max: Vec<f32>,
    temperature_2m_min: Vec<f32>
}



fn decode_wmo_code(wmo_code: u8) -> (&'static str, &'static str) {
    match wmo_code {
        0 => ("Clear Sky", "sunny"),
        1 => ("Mainly Clear", "partly_cloudy_day"),
        2 => ("Partly Cloudy", "partly_cloudy_day"),
        3 => ("Overcast", "cloud"),
        45 => ("Fog", "foggy"),
        48 => ("Depositing Rime Fog", "foggy"),
        51 => ("Light Drizzle", "rainy_light"),
        53 => ("Moderate Drizzle", "rainy_heavy"),
        55 => ("Dense Drizzle", "rainy_heavy"),
        56 => ("Light Freezing Drizzle", "weather_hail"),
        57 => ("Dense Freezing Drizzle", "weather_hail"),
        61 => ("Slight Rain", "rainy_light"),
        63 => ("Moderate Rain", "rainy_heavy"),
        65 => ("Heavy Rain", "rainy_heavy"),
        66 => ("Light Freezing Rain", "rainy_snow"),
        67 => ("Heavy Freezing Rain", "rainy_heavy"),
        71 => ("Light Snow Fall", "snowing"),
        73 => ("Moderate Snow Fall", "snowing"),
        75 => ("Heavy Snow Fall", "snowing_heavy"),
        77 => ("Snow Grains", "snowing"),
        80 => ("Slight Rain Showers", "rainy_light"),
        81 => ("Moderate Rain Showers", "rainy_heavy"),
        82 => ("Violent Rain Showers", "rainy_heavy"),
        85 => ("Slight Snow Showers", "snowing"),
        86 => ("Heavy Snow Showers", "snowing"),
        95 => ("Thunderstorms", "thunderstorm"),
        96 => ("Thunderstorms With Slight Hail", "thunderstorm"),
        99 => ("Thunderstorms With Heavy Hail", "thunderstorm"),
        _ => panic!("Unknow WMO Code Encountered")
    }
}

const WEATHER_ENDPOINT: &str = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto";

async fn get_weather() -> Result<WeatherData, reqwest::Error> {
    reqwest::get(WEATHER_ENDPOINT).await?.json::<WeatherData>().await
}

#[component]
pub fn Weather() -> Element {
    let weather = use_resource(get_weather);

    let inner  = if let Some(Ok(data)) = &*weather.read_unchecked() {
        let owned_data = data.clone();

        let days_rendered = izip!(
            owned_data.daily.weather_code,
            owned_data.daily.temperature_2m_min,
            owned_data.daily.temperature_2m_max).enumerate().map(|(index, (code, min_temp, max_temp))| rsx! {
                WeatherDay {
                    weather_code: code,
                    min_temperature: min_temp,
                    max_temperature: max_temp,
                    today: index == 0,
                }
            });

        rsx! {
            div {
                class: "flex gap-2",
                {days_rendered}
            }
        }
    } else {
        rsx!{
            "Loading..."
        }
    };
    
    rsx! {
        div {
            class: "absolute bottom-2 left-2",
            Heading { "Weather" }
            p {
                {inner}
            }
        }
    }
}

#[component]
pub fn WeatherDay(weather_code: u8, min_temperature: f32, max_temperature: f32, today: Option<bool>) -> Element {
    let (weather_description, icon) = decode_wmo_code(weather_code);

    rsx! {
        div {
            class: "flex flex-col items-center w-28 text-center justify-between rounded",
            class: if today.unwrap_or(false) { "bg-sky-400 text-black" },
            span {
                class: "material-symbols-outlined !text-4xl",
                "{icon}"
            }
            "{weather_description}"
            span {
                class: "font-semibold",
                "{min_temperature} — {max_temperature}"
            }
        }
    }
}
