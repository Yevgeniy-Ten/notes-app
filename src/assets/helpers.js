export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
export const handlerDataFromDB = (data) => {
    return Object.keys(data).map(id => {
        return {
            ...data[id],
            id
        }
    }).reverse()
}