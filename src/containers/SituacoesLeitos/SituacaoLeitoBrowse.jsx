import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SituacoesLeitosService from '../../services/SituacoesLeitosService'
import { Table } from 'antd'

const SituacaoLeitoBrowse = ({ onEdit }) => {
    const [dataSource, setDataSource] = useState([])

    const columns = [
        { key: 'id', dataIndex: 'id', title: 'Código' },
        { key: 'descricao', dataIndex: 'descricao', title: 'Situação de Leito' },
        { key: 'disponivel', dataIndex: 'disponivel', title: 'Disponível?' },
        {
            key: 'operation',
            title: 'Ações',
            fixed: 'right',
            width: 100,
            // eslint-disable-next-line react/display-name
            render: (_text, record) => (dataSource.length >= 1 ?
                (
                    <button onClick = {() => onEdit(record.id) }>Edit {record.id}</button>
                ) : null)
        }
    ]

    useEffect(() => {
        console.log('buscando situações de leitos...')
        SituacoesLeitosService.getAll()
            .then((data) => {
                setDataSource(data)
            })
    }, [])

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

SituacaoLeitoBrowse.propTypes = {
    onEdit: PropTypes.func
}

export default SituacaoLeitoBrowse
