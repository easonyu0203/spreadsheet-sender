module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {

        },

        extend: {
            colors: {
                bWhite: "#FFFFFF",
                bGray: "#F6F6F6",
                bBlack: "#242424",
                bPurple: "#3D0ADC",

            },
            transitionProperty: {
                'row': 'opacity, transform, height'
            }
        },
    },
    plugins: [],
}