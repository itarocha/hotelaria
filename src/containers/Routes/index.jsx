import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Alfa from '../Alfa'
import SituacoesLeitos from '../SituacoesLeitos'
import Hospedagens from '../Hospedagens'
import About from '../About'
import Login from '../Login'
import Logout from '../Logout'
import Principal from '../Principal'

const Routes = () => (
    <Switch>
        <Route path="/about" exact component={About} />
        <PrivateRoute path="/alfa" exact component={() => <Alfa idade={47} />} />
        <PrivateRoute path="/situacoes_leitos" exact component={SituacoesLeitos} />
        <PrivateRoute path="/hospedagens" exact component={Hospedagens} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route component={Principal} />
    </Switch>
)

export default Routes
