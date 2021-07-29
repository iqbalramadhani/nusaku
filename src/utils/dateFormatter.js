export const dateFormatter = (stringDate) => {
    const monthNames = [
        "Januari", "Februari", "Maret",
        "April", "Mei", "Juni", "Juli",
        "Agustus", "September", "Oktober",
        "November", "Desember"
    ]

    const date = new Date(stringDate)

    return date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
}

export const dateTimeFormatter = (stringDate) => {
    const monthNames = [
        "Januari", "Februari", "Maret",
        "April", "Mei", "Juni", "Juli",
        "Agustus", "September", "Oktober",
        "November", "Desember"
    ]

    const dayNames = [
        "Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"
    ]

    const date = new Date(stringDate)

    return dayNames[date.getDay()]+", " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + " - " + date.getHours() +"."+ date.getMinutes()
}