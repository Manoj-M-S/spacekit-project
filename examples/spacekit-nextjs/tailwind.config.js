/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xxl: "1440px",
            },

            margin: {
                30: "7.5rem",
            },
        },
    },
    plugins: [],
}
