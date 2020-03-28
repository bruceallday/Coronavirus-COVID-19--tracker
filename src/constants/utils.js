export const formatNumber = (num) => {
    let str = num.toString()
    if (str.length === 4) {
        str = [str.slice(0, 1), ",", str.slice(1)].join('')
    } else if (str.length === 5) {
        str = [str.slice(0, 2), ",", str.slice(2)].join('')
    } else if (str.length === 6) {
        str = [str.slice(0, 3), ",", str.slice(3)].join('')
    }
    return str
}