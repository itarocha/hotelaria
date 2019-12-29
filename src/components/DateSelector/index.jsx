import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'antd'
import { hoje, semanaAnterior, semanaSeguinte } from '../../util/commons/petraDate'

// TODO: criar propriedade para os botões tipo disabled={enviando}
const DateSelector = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(hoje())

    useEffect(() => {
        if (onDateChange !== null) {
            onDateChange(selectedDate)
        }
    }, [onDateChange, selectedDate])

    const dateChange = (newDate) => {
        setSelectedDate(newDate)
    }

    const handleGetDadosHoje = () => {
        dateChange(hoje())
    }

    const handleGetDadosSemanaAnterior = () => {
        dateChange(semanaAnterior(selectedDate))
    }

    const handleGetDadosSemanaSeguinte = () => {
        dateChange(semanaSeguinte(selectedDate))
    }

    return (
        <Row type="flex" gutter={[16, 16]}>
            <Col span={24} style={{ marginBottom: 10 }}>
                <Button type="primary" size="default" style={{ marginRight: 10 }} onClick={handleGetDadosSemanaAnterior}>Semana Anterior</Button>
                <Button type="primary" size="default" style={{ marginRight: 10 }} onClick={handleGetDadosHoje}>Hoje</Button>
                <Button type="primary" size="default" style={{ marginRight: 10 }} onClick={handleGetDadosSemanaSeguinte}>Semana Seguinte</Button>
            </Col>
        </Row>
    )
}

DateSelector.propTypes = {
    onDateChange: PropTypes.func
}

export default DateSelector
