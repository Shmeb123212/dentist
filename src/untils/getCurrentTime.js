
export const getCurrentTime = (hour, minute) => {
    return `${hour.length<2?'0'+hour:hour}:${minute.length<2?'0'+minute:minute}`
}