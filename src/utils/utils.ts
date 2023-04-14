export const getCoord = (string: string) => {
    return string.split('|').map((item) => parseInt(item))
}

export const encodeCoords = (array: Array<number>) => {
    return array.join('|')
}

export const generateGuid = () => {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
    )
}
