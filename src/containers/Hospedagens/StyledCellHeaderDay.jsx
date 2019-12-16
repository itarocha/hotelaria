import React from 'react'
import PropTypes from 'prop-types'
import { StyledCellHeader, StyledText, StyledTextBold } from './style'

const StyledCellHeaderDay = ({ weekDay, day }) => (
    <StyledCellHeader>
        <StyledText>{weekDay}</StyledText>
        <StyledTextBold>{day}</StyledTextBold>
    </StyledCellHeader>
)

StyledCellHeaderDay.propTypes = {
    weekDay: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
}

export default StyledCellHeaderDay
