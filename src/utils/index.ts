export const formatFloatValue = (num: number) => {
    const with4Decimals = num.toString().match(/^-?\d+(?:\.\d{0,4})?/)![0]
    return with4Decimals
}