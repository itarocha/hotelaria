import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { StyledGrantt, StyledWrap, StyledLinha, StyledGrid, StyledTitulo, StyledHospede } from './style'
import StyledCellHeaderDay from './StyledCellHeaderDay'
import HospedagensService from '../../services/HospedagensService'
import { hoje, semanaAnterior, semanaSeguinte, formatDate, diaSemana } from '../../util/commons/petraDate'

const MapaHospedagens = () => {
    const [linhas, setLinhas] = useState([])
    const [dias, setDias] = useState([])
    const [enviando, setEnviando] = useState(false)
    const [dataAtual, setDataAtual] = useState(hoje())

    useEffect(() => {
        setEnviando(true)
        HospedagensService.getAll(dataAtual)
            .then((data) => {
                // tem mais: hospedes, quadro, cidades
                const { dias, linhas } = data
                setLinhas(linhas)
                setDias(dias)
                setEnviando(false)
            })
    }, [dataAtual])

    const handleGetDadosHoje = () => {
        setDataAtual(hoje())
    }

    const handleGetDadosSemanaAnterior = () => {
        setDataAtual(semanaAnterior(dataAtual))
    }

    const handleGetDadosSemanaSeguinte = () => {
        setDataAtual(semanaSeguinte(dataAtual))
    }

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
            <Row type="flex" gutter={[16, 16]}>
                <Col span={12} style={{ marginBottom: 10 }}>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosSemanaAnterior}>Semana Anterior</Button>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosHoje}>Hoje</Button>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosSemanaSeguinte}>Semana Seguinte</Button>
                </Col>
            </Row>

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

                {linhas.map((leito) => (
                    <StyledLinha key={leito.leitoId}>
                        <StyledTitulo colIni={-1} colFim={-1} key={`t-${leito.quartoNumero}-${leito.leitoNumero}`}>
                            {`${leito.quartoNumero}-${leito.leitoNumero}`}
                        </StyledTitulo>
                        <StyledGrid key={`g-${leito.quartoNumero}-${leito.leitoNumero}`}>
                            {leito.hospedagens.map((h, idx) => (
                                <StyledHospede key={idx}
                                    colIni={h.idxIni}
                                    colFim={h.idxFim}
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

export default MapaHospedagens
