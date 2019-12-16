import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AuthService from '../../services/AuthService'
import UserContext from '../../util/contexts/UserContext'

const Logout = ({ history }) => {
    const userContext = useContext(UserContext)
    AuthService.logout()
    userContext.setUser({ userName: 'NINGUEM', isLogged: false })
    history.push('/login')
    return (
        <h1>Página Sobre</h1>
    )
}

Logout.propTypes = {
    history: PropTypes.any
}

export default Logout
