import React, { Component } from 'react'
import { Menu, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'react-flexbox-grid'
import Logo from '../images/logo.png'


export default class MenuExampleStackable extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={8} className="header" >
                                <Menu >
                                        <Menu.Item>
                                            <Header as='h2'>
                                                <Image size='small' src={ Logo } className='m-b-50'  />
                                                <Header.Content>Exceed-team</Header.Content>
                                            </Header>
                                        </Menu.Item>
                                        <Menu.Item
                                            name='testimonials'
                                            onClick={this.handleItemClick}
                                        >
                                            <Link to="/profile">
                                                Profile
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item
                                            name='sign-in'
                                            onClick={this.handleItemClick}
                                        >
                                            <Link to="/login">
                                                LogOut
                                            </Link>
                                        </Menu.Item>


                                </Menu>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}