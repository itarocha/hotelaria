import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../util/api/store'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const autenticado = isAuthenticated()
    return (
        <Route
            {...rest}
            render={(props) => (autenticado === true ?
                <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: location } }} />)}
        />
    )
}

export default PrivateRoute
