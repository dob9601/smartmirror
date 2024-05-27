use super::Heading;
use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NewsProps {
    class: Option<String>,
}

#[component]
pub fn News(props: NewsProps) -> Element {
    rsx! {
        Heading { class: props.class.unwrap_or("".to_string()), "News" }
    }
}
