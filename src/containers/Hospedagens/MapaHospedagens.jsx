import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledGrantt, StyledWrap, StyledLinha, StyledGrid, StyledTitulo, StyledHospede } from './style'
import StyledCellHeaderDay from './StyledCellHeaderDay'
import HospedagensService from '../../services/HospedagensService'
import { hoje, formatDate, diaSemana } from '../../util/commons/petraDate'

const MapaHospedagens = ({ date }) => {
    const [leitos, setLeitos] = useState([])
    const [dias, setDias] = useState([])
    // const [enviando, setEnviando] = useState(false)
    const [dataAtual, setDataAtual] = useState(hoje())

    useEffect(() => {
        // setEnviando(true)
        HospedagensService.getLinhas(dataAtual)
            .then((data) => {
                // tem mais: hospedes, quadro, cidades
                const { dias, leitos } = data
                setLeitos(leitos)
                setDias(dias)
                // setEnviando(false)
            })
    }, [dataAtual])

    useEffect(() => {
        setDataAtual(date)
    }, [date])

    const resolveCor = (status) => {
        let cor = '#FF8A80'
        if (status === 'ABERTA') {
            cor = '#4DB6AC'
        } else if (status === 'ENCERRADA') {
            cor = '#B0BEC5'
        }
        return cor
    }

    return (
        <div>
            <div>A Data atual é {date}</div>

            <StyledGrantt>
                <StyledWrap>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledWrap>

                <StyledLinha>
                    <StyledTitulo>
                        Quarto/Leito
                    </StyledTitulo>
                    <StyledGrid >
                        {
                            dias.map((dia, idx) => <StyledCellHeaderDay day={formatDate(dia, 'DD/MMM')} weekDay={diaSemana(dia)} key={idx}/>)
                        }
                    </StyledGrid>
                </StyledLinha>

                {leitos.map((leito) => (
                    <StyledLinha key={leito.leitoId}>
                        <StyledTitulo colIni={-1} colFim={-1} key={`t-${leito.quartoNumero}-${leito.leitoNumero}`}>
                            {`${leito.quartoNumero}-${leito.leitoNumero}`}
                        </StyledTitulo>
                        <StyledGrid key={`g-${leito.quartoNumero}-${leito.leitoNumero}`}>
                            {leito.linhas.map((h, idx) => (
                                <StyledHospede key={idx}
                                    colIni={ dias.indexOf(h.dataIni) }
                                    colFim={ dias.indexOf(h.dataFim) }
                                    classeIni={h.clsIni}
                                    classeFim={h.clsFim}
                                    fundo={resolveCor(h.status)}
                                    onClick={() => { console.table(h.hpdId, h.identificador, h.nome) }}
                                >
                                    {h.nome}
                                </StyledHospede>
                            ))}
                        </StyledGrid>
                    </StyledLinha>
                ))
                }
            </StyledGrantt>
        </div>
    )
}

MapaHospedagens.propTypes = {
    date: PropTypes.string.isRequired
}

export default MapaHospedagens
