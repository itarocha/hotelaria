import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import 'antd/dist/antd.css'

const FormItem = Form.Item

const Login = () => {
    const { getFieldProps } = this.props.form
    return (
        <div>
            <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col span={4}><div className="gutter-box">1</div></Col>
                <Col span={4}><div className="gutter-box">1</div></Col>
                <Col span={4}><div className="gutter-box">1</div></Col>
                <Col span={4}><div className="gutter-box">1</div></Col>
            </Row>

            <Row type="flex" justify="start" gutter={[16, 16]}>
                <Col span={4}><div className="gutter-box">3</div></Col>
                <Col span={4}><div className="gutter-box">3</div></Col>
                <Col span={4}><div className="gutter-box">3</div></Col>
                <Col span={4}><div className="gutter-box">3</div></Col>
            </Row>

            <Row type="flex" justify="end" gutter={[16, 16]}>
                <Col span={4}><div className="gutter-box">2</div></Col>
                <Col span={4}><div className="gutter-box">2</div></Col>
                <Col span={4}><div className="gutter-box">2</div></Col>
                <Col span={4}><div className="gutter-box">2</div></Col>
            </Row>

            <Row type="flex" justify="space-between" gutter={[16, 16]}>
                <Col span={4}><div className="gutter-box">4</div></Col>
                <Col span={4}><div className="gutter-box">4</div></Col>
                <Col span={4}><div className="gutter-box">4</div></Col>
                <Col span={4}><div className="gutter-box">4</div></Col>
            </Row>

            <Row type="flex" justify="space-around" gutter={[16, 16]}>
                <Col span={4}><div className="gutter-box">Coluna</div></Col>
                <Col span={4}><div className="gutter-box">Coluna</div></Col>
                <Col span={4}><div className="gutter-box">Coluna</div></Col>
                <Col span={4}><div className="gutter-box">Coluna</div></Col>
            </Row>

            <Form horizontal>

                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>

                        <FormItem>
                            <Input type="text"
                                {...getFieldProps('userName')}
                                placeholder="Usuário"
                                style={{ height: 38 }} />
                        </FormItem>

                    </Col>
                </Row>
                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem>
                            <Input type="password"
                                {...getFieldProps('password')}
                                autoComplete="off"
                                placeholder="Senha"
                                style={{ height: 38 }}
                            />
                        </FormItem>
                    </Col>
                </Row>

                <Row type="flex" justify="center" gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem>
                            <Button type="primary" style={{ width: '100%', height: 38, fontSize: 16 }}
                                onClick={this.submitLogin.bind(this)}
                            >
                                            Login
                            </Button>
                        </FormItem>
                    </Col>
                </Row>

            </Form>

        </div>
    )
}

export default Login
