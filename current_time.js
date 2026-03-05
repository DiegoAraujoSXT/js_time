export default class HoraAtual {

    static obterHoraAtual() {

        const agora = new Date()

        const horas = agora.getHours().toString().padStart(2, '0')
        const minutos = agora.getMinutes().toString().padStart(2, '0')
        const segundos = agora.getSeconds().toString().padStart(2, '0')

        return `${horas}:${minutos}:${segundos}`
    }

}