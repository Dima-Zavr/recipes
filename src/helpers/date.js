const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
]
export const date = (str_date) => {
    const date = new Date(Date.parse(str_date))

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}г, ${date.getHours()}:${date.getMinutes()}`
}
