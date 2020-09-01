import React from "react";
import {withRouter} from "react-router-dom";
import Header from '../Header'
import { Card, Icon, Image, Dimmer, Loader, Segment  } from 'semantic-ui-react'
import ImgProfile from '../../images/profile.png'
import { Row, Col } from 'react-flexbox-grid'
import "../../styles/card.css"
import { profile } from '../../data/profile.json'


const Home = () => {
    const profileList = profile.length ? (
        profile.map(prof => {
            return (
                <Col xs={4}>
                    <Card >
                        <Image src={ImgProfile} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{prof.Name} {prof.Surname}</Card.Header>
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
            )
        })
    ) : (
        <Segment>
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>

            <Image src='/images/wireframe/short-paragraph.png' />
            <Image src='/images/wireframe/short-paragraph.png' />
            <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>
    )

    return(
        <>
            <Header/>
            <Row center="xs" className="pageContent">
                <Col xs={8}>
                    <Row center="xs">
                        {profileList}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default withRouter(Home)
