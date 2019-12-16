import React from 'react'
import PropTypes from 'prop-types'

const Alfa = ({ idade }) => (
    <h2>Alfa Container {idade}</h2>
)

Alfa.propTypes = {
    idade: PropTypes.number.isRequired
}

export default Alfa
