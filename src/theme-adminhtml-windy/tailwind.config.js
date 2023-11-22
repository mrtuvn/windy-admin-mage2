/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/templates/*.phtml",
        "./**/layout/*.xml",
        "./view/**/*.html",
        "./**/template/*.html",
        "./**/templates/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto'],
                'display': ['Roboto'],
                'body': ['Roboto'],
            },

        },
    },
    plugins: [],
}
