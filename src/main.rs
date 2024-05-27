#![allow(non_snake_case)]

use dioxus::{
    desktop::{tao::window::Fullscreen, WindowBuilder},
    prelude::*,
};
use tracing::Level;

mod components;
pub use components::*;

fn main() {
    // Init logger
    dioxus_logger::init(Level::INFO).expect("failed to init logger");

    let cfg = dioxus::desktop::Config::new().with_custom_head(
        r#"
            <link rel="stylesheet" href="tailwind.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />"#
        .to_string(),
    ).with_window(WindowBuilder::new().with_fullscreen(Some(Fullscreen::Borderless(None))));
    LaunchBuilder::desktop().with_cfg(cfg).launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        div { class: "bg-black w-screen h-screen text-sky-200 relative font-sans font-light",
            Weather {}
            News { class: "absolute top-2 right-2" }
            Alert { severity: AlertSeverity::Severe }
            Alert { severity: AlertSeverity::Minor }
        }
    }
}
