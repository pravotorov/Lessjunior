import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from 'react-flexbox-grid'
import { Card, Icon, Image } from "semantic-ui-react";
import ImgProfile from "../../images/profile.png";
import Loader from "../loader/loader";

const UsersItem = (props) => {
    const {  tasks = [] } = props

    return(
        <Row center="xs">
            { tasks ? tasks.map( task => {
                return <>
                        <Col xs={3} className="cardElem">
                            <Card >
                                <Image src={ImgProfile} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{task.title}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{task.date}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        {task.text}
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
                </>
            })  :
            <Loader/>
            }
        </Row>

    )
}

export default withRouter(UsersItem)
