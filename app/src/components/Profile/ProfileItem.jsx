import React  from 'react'
import {Grid, Image, Button, Checkbox, Form, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'react-flexbox-grid'
import ImgProfile from '../../images/profile.png'

const ProfileItem = (props) => {
    const {  admins = [] } = props
    console.log("admins", admins);

    return (
        <Row center="xs">
            <Col xs={11} className="profilePage" >
                <Grid >
                    <Grid.Column width={5}>
                        <Image src={ImgProfile}  />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' />
                            </Form.Field>

                        </Form>
                    </Grid.Column>
                </Grid>
            </Col>
        </Row>
    )
}
export default ProfileItem;