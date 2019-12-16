import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './containers/Routes'
import { parseJwt } from './util/api/store'
import { TOKEN } from './util/commons/consts'
import { Layout, Menu, Icon, Typography } from 'antd'
import UserContext from './util/contexts/UserContext'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography
const { Item } = Menu

const App = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)

    const handleStorage = () => {
        const token = localStorage.getItem(TOKEN)
        if (token === null) {
            console.log('token vazio')
            setUser({ isLogged: false })
        } else {
            const u = parseJwt()
            setUser({ userName: u.username, name: u.name, isLogged: true })
        }
    }

    useEffect(() => {
        setIsAuth(user && user.isLogged)
    }, [user])

    useEffect(() => {
        handleStorage()

        window.addEventListener('storage', handleStorage)
        return () => {
            window.removeEventListener('storage', handleStorage)
        }
    }, [])

    const value = { user, setUser }

    return (
        <UserContext.Provider value={value}>
            <UserContext.Consumer>
                {
                    ({ user, setUser }) => (
                        <div>
                            <BrowserRouter>
                                <Layout style={{ minHeight: '100vh' }}>
                                    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} >
                                        <div className="logo" />
                                        { isAuth ?
                                            (
                                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                                    <Item key="1">
                                                        <Link to="alfa">
                                                            <Icon type="pie-chart" />
                                                            <span>Alfa</span>
                                                        </Link>
                                                    </Item>
                                                    <Item key="2">
                                                        <Link to="situacoes_leitos">
                                                            <Icon type="check" />
                                                            <span>Situações de Leitos</span>
                                                        </Link>
                                                    </Item>
                                                    <Item key="3">
                                                        <Link to="hospedagens">
                                                            <Icon type="check" />
                                                            <span>Hospedagens</span>
                                                        </Link>
                                                    </Item>
                                                    <Item key="7">
                                                        <Link to="logout">
                                                            <Icon type="unlock" />
                                                            <span>Logout</span>
                                                        </Link>
                                                    </Item>
                                                </Menu>
                                            ) : (
                                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                                    <Item key="9">
                                                        <Link to="login">
                                                            <Icon type="lock" />
                                                            <span>Login</span>
                                                        </Link>
                                                    </Item>
                                                </Menu>
                                            )
                                        }
                                    </Sider>
                                    <Layout>
                                        <Header style={{ background: '#fff', padding: 0 }} >
                                            <Title style={{ marginLeft: 10, padding: 8 }}>Casa Betesda {user && user.isLogged && `${` - ${user.userName}`}`}</Title>
                                        </Header>
                                        <Content style={{ margin: '8px 8px' }}>
                                            <div style={{ padding: 16, background: '#fff', minHeight: '100%' }}>
                                                <Routes user={user} setUser={setUser} />
                                            </div>
                                        </Content>
                                        <Footer style={{ textAlign: 'center', height: '20' }}>Desenvolvido por Itamar Rocha - itarocha@gmail.com</Footer>
                                    </Layout>
                                </Layout>
                            </BrowserRouter>
                        </div>
                    )
                }
            </UserContext.Consumer>
        </UserContext.Provider>
    )
}

export default App
