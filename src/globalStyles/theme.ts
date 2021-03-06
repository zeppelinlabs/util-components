


const size = {
    tablet: "768px",
    desktop: "1024px",
    desktopM: "1200px",
    desktopL: "1440px",
    desktopXL: "1900px",
}

export const device = {
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopM: `(min-width: ${size.desktopM})`,
    desktopL: `(min-width: ${size.desktopL})`,
    desktopXL: `(min-width: ${size.desktopXL})`,
}


export const colors = {
    primary: "blue",
    common: {
        white: "white",
        black: "black",
        gray: "gray"
    },
    system: {
        info: "#276EF1",
        warning: "#B27800",
        success: "#008542",
        critical: "#E50007",
    }

}