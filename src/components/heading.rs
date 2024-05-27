use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeadingProps {
    class: Option<String>,
    children: Element,
}

#[component]
pub fn Heading(props: HeadingProps) -> Element {
    rsx! {
        h1 { class: "font-semibold text-2xl uppercase", class: props.class.unwrap_or("".to_string()), {props.children} }
    }
}
