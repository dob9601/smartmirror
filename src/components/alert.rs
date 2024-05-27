use dioxus::prelude::*;

#[derive(Clone, Copy, PartialEq, Eq)]
pub enum AlertSeverity {
    Minor,
    Severe,
}

#[component]
pub fn Alert(severity: AlertSeverity) -> Element {
    let color = match severity {
        AlertSeverity::Minor => "text-orange-600",
        AlertSeverity::Severe => "text-red-600",
    };

    rsx! {
        span {
            class: "material-symbols-outlined !text-8xl animate-pulse-deep",
            class: "{color}",
            "warning"
        }
    }
}
