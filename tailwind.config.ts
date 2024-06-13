/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{tsx,ts,html}"],
    theme: {
        fontFamily: {
            sans: ["Barlow", "sans-serif"],
            display: ["Chakra Petch", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#00c7d7",
                warning: "#ffffd3",
                error: "#fe704c",
                success: "#549d8a",
            },
        },
    },
    plugins: [],
}
