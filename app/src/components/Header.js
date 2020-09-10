import React, { Component } from 'react'
import { Menu, Header, Image } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'react-flexbox-grid'
import Logo from '../images/logo.png'


const Head = () =>  {

        return (
            <Row>
                <Col xs={12}>
                    <Menu >
                        <Menu.Item>
                            <Header as='h2'>
                                <Image size='small' src={ Logo } className='m-b-50'/>
                                <Header.Content>Exceed-team</Header.Content>
                            </Header>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='testimonials'
                            >
                                <Link to="/">
                                    Users
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name='testimonials'
                            >
                                <Link to="/tasklist">
                                    TasksList
                                </Link>
                            </Menu.Item>

                            <Menu.Item
                                name='testimonials'
                            >
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </Menu.Item>

                            <Menu.Item
                                name='sign-in'
                            >
                                <Link to="/login">
                                    LogOut
                                </Link>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Col>
            </Row>
        )
}

export default  withRouter(Head)