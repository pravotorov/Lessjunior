import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'react-flexbox-grid'

export default class MenuExampleStackable extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={8}>
                            <Row end="xs">
                                <Col xs={2}>
                                    <Menu stackable className="headerMenu">
                                        <Menu.Item
                                        name='testimonials'
                                        onClick={this.handleItemClick}
                                        >
                                        Login
                                        </Menu.Item>
                                        <Menu.Item
                                            name='sign-in'
                                            onClick={this.handleItemClick}
                                        >
                                            Sign-in
                                        </Menu.Item>
                                    </Menu>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}