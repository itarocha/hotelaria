const moment = require('moment')
require('moment/locale/pt-br')

const formatDate = (dia, formato) => {
    const fmt = formato || 'DD/MM/YYYY'
    return dia ? moment(dia).format(fmt) : ''
}

const formatDateDbToBr = (date) => {
    if (!date) return null

    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}

// Converte data no formato DDMMYYYY em YYYY-MM-DD
const formatDateBrNoMaskToDb = (st) => {
    if (!st) {
        return null
    }
    const pattern = /(\d{2})(\d{2})(\d{4})/
    const retorno = st.replace(pattern, '$3-$2-$1')
    return retorno
}

const diaSemana = (dia) => moment(dia).format('ddd')

const getIndiceData = (data) => moment(data).format('e')

const hoje = (formato) => {
    const fmt = formato || 'YYYY-MM-DD'
    return moment().format(fmt)
}

const semanaAnterior = (data) => moment(data).add(-7, 'days').format('YYYY-MM-DD')

const semanaSeguinte = (data) => moment(data).add(7, 'days').format('YYYY-MM-DD')

const primeiroDiaMesAtual = () => moment().startOf('month').format('YYYY-MM-DD')

const ultimoDiaMesAtual = () => moment().endOf('month').format('YYYY-MM-DD')

const primeiroDiaMesAnterior = () => {
    const dataMesPassado = moment().startOf('month').add(-1, 'days')
    return moment(dataMesPassado).startOf('month').format('YYYY-MM-DD')
}

const ultimoDiaMesAnterior = () => {
    const dataMesPassado = moment().startOf('month').add(-1, 'days')
    return moment(dataMesPassado).endOf('month').format('YYYY-MM-DD')
}

export {
    formatDate,
    formatDateDbToBr,
    formatDateBrNoMaskToDb,
    diaSemana,
    getIndiceData,
    hoje,
    semanaAnterior,
    semanaSeguinte,
    primeiroDiaMesAtual,
    ultimoDiaMesAtual,
    primeiroDiaMesAnterior,
    ultimoDiaMesAnterior
}
