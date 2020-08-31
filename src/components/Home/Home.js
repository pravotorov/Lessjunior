import React from "react";
import {withRouter} from "react-router-dom";
import Header from '../Header'
import { Card, Icon, Image } from 'semantic-ui-react'
import ImgProfile from '../../images/profile.png'
import { Row, Col } from 'react-flexbox-grid'
import "../../styles/card.css"




const Home = () => {
    return(
        <>
            <Header/>
            <Row className="pageContent">
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={8} className="card">
                            <Row>
                            <Col xs={3}>
                            <Card  >
                                <Image src={ImgProfile} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Matthew</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                                    </a>
                                </Card.Content>
                            </Card>
                        </Col>
                            <Col xs={3}>
                            <Card >
                                <Image src={ImgProfile} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Matthew</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                                    </a>
                                </Card.Content>
                            </Card>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default withRouter(Home)
