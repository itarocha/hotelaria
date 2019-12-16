import React from 'react'
import PropTypes from 'prop-types'
import { StyledCellHeader, StyledTextBold } from './style'

const StyledCellHeaderText = ({ text }) => (
    <StyledCellHeader>
        <StyledTextBold>{text}</StyledTextBold>
    </StyledCellHeader>
)

StyledCellHeaderText.propTypes = {
    text: PropTypes.any.isRequired
}

export default StyledCellHeaderText
