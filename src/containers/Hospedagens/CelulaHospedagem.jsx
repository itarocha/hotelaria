import React from 'react'
import PropTypes from 'prop-types'
import { StyledDiaHospedagem } from './style'

const resolveCor = (status) => {
    let cor = '#FF8A80'
    if (status === 'ABERTA') {
        cor = '#4DB6AC'
    } else if (status === 'ENCERRADA') {
        cor = '#B0BEC5'
    }
    return cor
}

const calculaClasses = (params) => {
    const { clsIni, clsFim, idxIni, idxFim, index } = params
    const classeIni = index === idxIni ? clsIni : ''
    const classeFim = index === idxFim ? clsFim : ''
    return { classeIni, classeFim }
}

const CelulaHospedagem = ({ hospedagem, index }) => {
    const { idxIni, status, nome, hpdId, identificador } = hospedagem

    const dia = hospedagem.dias[index]
    const classes = dia === 1 ? calculaClasses({ index, ...hospedagem }) : { classeIni: '', classeFim: '' }
    const cor = resolveCor(status)

    const chave = `${hpdId.toString()}-${index}-${identificador}`
    return (
        <div onClick={() => { console.table(hpdId, identificador, nome) }} key={chave}>
            <StyledDiaHospedagem fundo={cor} classeIni={classes.classeIni} classeFim={classes.classeFim} key={chave}>
                {index === idxIni ? nome : null}
            </StyledDiaHospedagem>
        </div>
    )
}

CelulaHospedagem.propTypes = {
    hospedagem: PropTypes.object,
    index: PropTypes.number
}

export default CelulaHospedagem
