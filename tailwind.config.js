/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./node_modeules/flowbite-react/**/*.js",
        "./public/**/*.html",
        "./src/**/*.{ts, tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("flowbite/plugin"),
    ],
    daisyui: {
        themes: ['wireframe'],
    }
};
