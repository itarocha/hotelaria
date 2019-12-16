import React, { useState, useContext } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { Formik, Field as FormikField, Form as FormikForm, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AuthService from '../../services/AuthService'
import UserContext from '../../util/contexts/UserContext'

const FormItem = Form.Item

const Login = (props) => {
    const userControl = useContext(UserContext)

    const { user, setUser } = userControl

    const doLogin = (values) => {
        const data = {
            usernameOrEmail: values.username,
            password: values.password
        }
        return AuthService.login(data)
    }

    const [enviando, setEnviando] = useState(false)

    return (
        <Formik
            initialValues={{ username: '', password: '' }}

            validationSchema={Yup.object({
                username: Yup.string()
                    .min(3, 'Deve ter no mínimo 3 caracteres')
                    .required('Usuário é obrigatório'),
                password: Yup.string()
                    .min(6, 'Deve ter no mínimo 6 caracteres')
                    .required('Senha é obrigatório')
            })}

            onSubmit={(values, { setSubmitting }) => {
                setEnviando(true)
                doLogin(values).then(() => {
                    setSubmitting(false)
                    setEnviando(false)
                    setUser({ ...user, isLogged: true, userName: values.username })
                    props.history.push('/alfa')
                }).catch(() => {
                    setSubmitting(false)
                    setEnviando(false)
                })
            }}
        >
            <FormikForm>
                <div style={{ textAlign: 'center' }}>
                    {/* <Title level={3}>Login {user.userName}</Title>*/}
                </div>

                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem>
                            <FormikField name="username">
                                {({ field }) => (<Input {...field} placeholder="Email" />)}
                            </FormikField>
                            <ErrorMessage name="username" />
                        </FormItem>
                    </Col>
                </Row>
                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem>
                            <FormikField name="password">
                                {({ field }) => (<Input {...field} type="password" placeholder="Senha" />)}
                            </FormikField>
                            <ErrorMessage name="password" />
                        </FormItem>
                    </Col>
                </Row>

                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem>
                            <Button type="primary"
                                htmlType="submit"
                                style={{ height: 38, fontSize: 16 }}
                                disabled={enviando}
                            >
                                Login
                            </Button>
                        </FormItem>
                    </Col>
                </Row>
            </FormikForm>
        </Formik>
    )
}

export default Login
