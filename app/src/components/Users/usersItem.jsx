import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from 'react-flexbox-grid'
import { Card, Icon, Image } from "semantic-ui-react";
import ImgProfile from "../../images/profile.png";
import Loader from "../loader/loader";

const UsersItem = (props) => {
    const {  users = [] } = props

    return(
        <Row center="xs">
            { users ? users.map( user => {
                return <>
                        <Col xs={3} className="cardElem">
                            <Card >
                                <Image src={ImgProfile} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{user.Name} {user.surname}</Card.Header>
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
                </>
            })  :
            <Loader/>
            }
        </Row>

    )
}

export default withRouter(UsersItem)
