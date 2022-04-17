import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

const formStyle = {
    padding: '6px 6px'
}

export const Login: React.VFC = () => {
    return (
        <div>
            <Row>
                <Col><h2>Login</h2></Col>
            </Row>
            <Form>
                <FormGroup row style={formStyle}>
                    <Label
                        for="email"
                        sm={2}
                    >
                        Email
                    </Label>
                    <Col sm={3}>
                        <Input
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row style={formStyle}>
                    <Label
                        for="password"
                        sm={2}
                    >
                        Password
                    </Label>
                    <Col sm={3}>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                        />
                    </Col>
                </FormGroup>
                <FormGroup check row style={formStyle}>
                    <Col
                        sm={{
                            offset: 2,
                            size: 3
                        }}
                        className='text-end'
                    >
                        <Button>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}