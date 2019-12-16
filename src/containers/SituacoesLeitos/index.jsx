import React, { useState } from 'react'
import SituacaoLeitoBrowse from './SituacaoLeitoBrowse'
import SituacaoLeitoEdit from './SituacaoLeitoEdit'

const SituacoesLeitos = () => {
    const [dataState, setDataState] = useState('view')
    const [keyToEdit, setKeyToEdit] = useState(null)

    const handleEdit = (key) => {
        setKeyToEdit(key)
        setDataState('edit')
    }

    const handleCancel = () => {
        setDataState('view')
    }

    return (
        <div>
            <h2>Situações de Leitos</h2>

            { (dataState === 'view') ?
                <SituacaoLeitoBrowse onEdit={handleEdit} /> :
                <SituacaoLeitoEdit pk={keyToEdit} onCancel={handleCancel} />
            }
        </div>
    )
}

export default SituacoesLeitos
