const heavyCloud = [804, 900, 751, 741, 700, 623, 711]
const thunderStorm = [200, 201, 202, 230, 231, 232, 233]
const lightRain = [500, 501, 511, 520, 300, 301, 302]
const heavyRain = [502]
const shower = [521, 522, 520]
const snow = [601, 602, 610, 621, 622]
const sleet = [611, 612]
const clear = [800]
const lightClouds = [801, 802, 803, 711, 721, 731]
const heavySnow = [602]

const toFah = (c) => {
    return Math.round((c * 9/5) + 32).toFixed(1);
}

export {
    heavyCloud,
    thunderStorm,
    lightRain,
    heavyRain,
    heavySnow,
    shower,
    snow,
    sleet,
    clear,
    lightClouds,
    toFah
}