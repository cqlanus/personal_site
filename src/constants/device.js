import screen from "./screen"
const device = {
    mobile: `(min-width: ${screen.mobile})`,
    tablet: `(min-width: ${screen.tablet})`,
    laptop: `(min-width: ${screen.laptop})`,
    laptopL: `(min-width: ${screen.laptopL})`,
    desktop: `(min-width: ${screen.desktop})`,
    desktopL: `(min-width: ${screen.desktop})`,
}

export default device
