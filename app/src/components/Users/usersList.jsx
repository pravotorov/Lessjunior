import React from "react";
import {withRouter} from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid'

import UsersItem from "./usersItem";
import withHocs from './UsersListHoc';

const UsersList = (props) => {
    const { data = {} } = props;
    const { users = [] } = data;

    return(
        <>
            <Col xs={12}>
                <Row center="xs">
                    <UsersItem users={ users }/>
                </Row>
            </Col>
        </>
    )
}

export default withHocs(withRouter(UsersList))
