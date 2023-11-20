/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/templates/*.phtml",
        "./**/layout/*.xml",
        "./view/**/templates/*.html",
        "./view/**/templates/**/*.html",
        "./**/web/templates/*.html",
        "./**/web/template/*.html",
        "./**/web/template/**/*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
