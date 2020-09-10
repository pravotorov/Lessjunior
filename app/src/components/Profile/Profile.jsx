import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Row, Col } from 'react-flexbox-grid'

import Header from "../Header";
import ProfileItem from "./ProfileItem"
import withHocs from './ProfileHoc';


const Profile = (props) => {
    const { data = {} } = props;
    const { admins = [] } = data;

    console.log("PROPS", props);

    return (
        <Row>
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={8}>
                        <Header/>
                        <ProfileItem admins={admins}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default withHocs(Profile);