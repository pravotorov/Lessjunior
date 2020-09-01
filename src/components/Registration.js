import React, { useState, useEffect, useContext } from 'react'
// import { doLogin, resetLoginErrors } from '../actions/actionCreators'
// import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import {Button, Card, Form, Icon, Image, Input, Message, Divider, Header, Step} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
// import { history } from '../store'
import { useHistory } from 'react-router-dom'

const Registration = (props) => {
  const [credits, setCredits] = useState({
    email: '',
    password: ''
  })
  
  // const history = useHistory()

  const logIn = (event) => {    
    event.preventDefault();
    const email = credits.email;
    const password = credits.password;
    // props.dispatch(doLogin({ email, password }));
  }

  const handlePasswordChange = (event) => {
    setCredits({...credits, password: event.target.value});
  }

  const handleEmailChange = (event) => {
    setCredits({...credits, email: event.target.value});
  }

  // //if logged in redirect to main page
  // if (props.auth.isLogged)
  //   history.push('/')

  
  return (
    <div className="app-container" >
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col className="login " xs={12} sm={8} md={8}>
                <Card fluid={true} raised={true} centered={true}>
                  <Card.Content>
                    <div>
                      <Image size='small' src={ Logo } className='m-b-50'/>
                      <Header as='h2'>
                        <Header.Content>Exceed-team</Header.Content>
                      </Header>
                    </div>
                    <Form size="large" key="large">
                      <Form.Group widths='equal'>
                        <Form.Field
                            label='First name'
                            control='input'
                            placeholder='First name'
                        />
                        <Form.Field
                            label='Last name'
                            control='input'
                            placeholder='Last name'
                        />
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Field
                            label='Email'
                            control='input'
                            placeholder='Email'
                        />
                        <Form.Field
                            label='Password'
                            control='input'
                            placeholder='Password'
                        />
                      </Form.Group>
                      <Divider />
                      <Button type="submit" className='lisia-blue' fluid>Create</Button>
                    </Form>
                  </Card.Content>
                  <Step.Group ordered>
                    <Step completed>
                      <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Choose your shipping options</Step.Description>
                      </Step.Content>
                    </Step>

                    <Step active>
                      <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                      </Step.Content>
                    </Step>

                    <Step active>
                      <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  )

}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// })

export default Registration
// export default connect(mapStateToProps)(Login)
