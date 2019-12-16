import React from 'react'
import PropTypes from 'prop-types'

const SituacaoLeitoEdit = ({ pk, onCancel }) => (
    <div>
        <h4>Editando {pk}</h4>

        <button onClick={() => onCancel()}>Cancelar</button>

        <div>Aqui virá um form para edição dos dados</div>
    </div>
)

SituacaoLeitoEdit.propTypes = {
    pk: PropTypes.number.isRequired,
    onCancel: PropTypes.func.isRequired
}

export default SituacaoLeitoEdit
