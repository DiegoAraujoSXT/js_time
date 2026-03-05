export default class DateTimeUtils {

    static now() {
        return new Date()
    }

    static getTimestamp() {
        return Date.now()
    }

    static getUnixTimestamp() {
        return Math.floor(Date.now() / 1000)
    }

    static getISO() {
        return new Date().toISOString()
    }

    static getUTC() {
        return new Date().toUTCString()
    }

    static getTime() {
        const n = new Date()
        return `${this.pad(n.getHours())}:${this.pad(n.getMinutes())}:${this.pad(n.getSeconds())}`
    }

    static getTimeWithoutSeconds() {
        const n = new Date()
        return `${this.pad(n.getHours())}:${this.pad(n.getMinutes())}`
    }

    static getTimeWithMilliseconds() {
        const n = new Date()
        return `${this.pad(n.getHours())}:${this.pad(n.getMinutes())}:${this.pad(n.getSeconds())}.${n.getMilliseconds()}`
    }

    static getDateBR() {
        const n = new Date()
        return `${this.pad(n.getDate())}/${this.pad(n.getMonth()+1)}/${n.getFullYear()}`
    }

    static getDateUS() {
        const n = new Date()
        return `${n.getFullYear()}-${this.pad(n.getMonth()+1)}-${this.pad(n.getDate())}`
    }

    static getDateTimeBR() {
        const n = new Date()
        return `${this.pad(n.getDate())}/${this.pad(n.getMonth()+1)}/${n.getFullYear()} ${this.getTime()}`
    }

    static getDateTimeUS() {
        const n = new Date()
        return `${n.getFullYear()}-${this.pad(n.getMonth()+1)}-${this.pad(n.getDate())} ${this.getTime()}`
    }

    static getLogFormat() {
        const n = new Date()
        return `[${n.getFullYear()}-${this.pad(n.getMonth()+1)}-${this.pad(n.getDate())} ${this.getTime()}]`
    }

    static getFileNameFormat() {
        const n = new Date()
        return `${n.getFullYear()}${this.pad(n.getMonth()+1)}${this.pad(n.getDate())}_${this.pad(n.getHours())}${this.pad(n.getMinutes())}${this.pad(n.getSeconds())}`
    }

    static getDayName(locale='en-US') {
        return new Date().toLocaleDateString(locale,{weekday:'long'})
    }

    static getMonthName(locale='en-US') {
        return new Date().toLocaleDateString(locale,{month:'long'})
    }

    static getDayOfYear() {
        const n = new Date()
        const start = new Date(n.getFullYear(),0,0)
        const diff = n - start
        const oneDay = 1000*60*60*24
        return Math.floor(diff/oneDay)
    }

    static getWeekOfYear() {
        const n = new Date()
        const start = new Date(n.getFullYear(),0,1)
        const days = Math.floor((n - start)/(24*60*60*1000))
        return Math.ceil((days+start.getDay()+1)/7)
    }

    static getTimezone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    static getLocaleString(locale='en-US') {
        return new Date().toLocaleString(locale)
    }

    static getLocaleDate(locale='en-US') {
        return new Date().toLocaleDateString(locale)
    }

    static getLocaleTime(locale='en-US') {
        return new Date().toLocaleTimeString(locale)
    }

    static pad(n) {
        return n.toString().padStart(2,'0')
    }

}
