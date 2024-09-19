const dateFormatter = new Intl.DateTimeFormat('it-IT', {})

export function formatDate(date: Date) {
    return dateFormatter.format(date)
}
