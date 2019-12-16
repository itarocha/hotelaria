import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { StyledMapaHeader, StyledMapaBody, StyledCellVazia, StyledLinhaLeito, StyledLinhaHospedagem } from './style'
import StyledCellHeaderText from './StyledCellHeaderText'
import StyledCellHeaderDay from './StyledCellHeaderDay'
import CelulaHospedagem from './CelulaHospedagem'
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

    return (
        <div>
            <Row type="flex" gutter={[16, 16]}>
                <Col span={12} style={{ marginBottom: 10 }}>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosSemanaAnterior}>Semana Anterior</Button>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosHoje}>Hoje</Button>
                    <Button type="primary" size="default" style={{ marginRight: 10 }} disabled={enviando} onClick={handleGetDadosSemanaSeguinte}>Semana Seguinte</Button>
                </Col>
            </Row>

            <StyledMapaHeader>
                <StyledCellHeaderText text="Quarto/ Leito" />
                {
                    dias.map((dia, idx) => <StyledCellHeaderDay day={formatDate(dia, 'DD/MMM')} weekDay={diaSemana(dia)} key={idx}/>)
                }
            </StyledMapaHeader>

            <StyledMapaBody>
                {linhas.map((leito, i) => (
                    <StyledLinhaLeito key={i}>
                        <StyledCellHeaderText text={`${leito.quartoNumero}-${leito.leitoNumero}`} />

                        <StyledLinhaHospedagem key={i}>
                            {
                                leito.hospedagens.length === 0 ?
                                    [1, 2, 3, 4, 5, 6, 7].map((n) => <StyledCellVazia key={n.toString()}/>) :
                                    leito.hospedagens.map((h) => h.dias.map((dia, index) => (dia === 0 ?
                                        <StyledCellVazia key={`${index}-${i}`}/> :
                                        <CelulaHospedagem hospedagem={h} index={index} />)))
                            }
                        </StyledLinhaHospedagem>
                    </StyledLinhaLeito>
                ))
                }
            </StyledMapaBody>
        </div>
    )
}

export default MapaHospedagens
