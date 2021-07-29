
export const isInvalidEmailFormat = (data) => {
    const rgx = /\S+@\S+\.\S+/
    return !(rgx.test(data))
}

export const isEmpty = (data) => {
    return data.length == 0
}

export const isEqual = (a, b) => {
    return a == b
}

export const isLongEnough = (data, length) => {
    return data.length >= length
}