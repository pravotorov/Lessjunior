import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
// import { doLogin, resetLoginErrors } from '../actions/actionCreators'
// import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Button, Card, Form, Icon, Image, Input, Message, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import Logo from '../images/logo-admin.png'
// import { history } from '../store'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
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
      <div className="login animated fadeIn">
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={11} sm={6} md={4}>
                <Card fluid={true} raised={true} centered={true}>
                  <Card.Content>
                    <div className='loginLanguageSelector' >
                    </div>
                    <div className="loginForm">                    
                      {/*<Image size='small' src={ Logo } className='m-b-50'/>*/}
                      <Form onSubmit={logIn}>
                        <Form.Field>
                          <Input icon='user' iconPosition='left' value={credits.email} onChange={handleEmailChange} name="email" placeholder={'email'}/>
                        </Form.Field>
                        <Form.Field>
                          <Input icon='lock' iconPosition='left' value={credits.password} onChange={handlePasswordChange} type="password" placeholder={'password'} />
                        </Form.Field>
                        <Button type="submit" className='lisia-blue' fluid>Login</Button>
                        <Divider />
                        <div className="footer">
                          <Link to="/registration">Sign Up
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </Card.Content>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )

}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// })

export default Login
// export default connect(mapStateToProps)(Login)
