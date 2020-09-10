import React from "react";
import {withRouter} from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid'

import TaskItem from "./TaskItem";
import withHocs from './TaskListHoc';

const UsersList = (props) => {
    const { data = {} } = props;
    const { tasks = [] } = data;

    return(
        <>
            <Col xs={12}>
                <TaskItem tasks={ tasks }/>
            </Col>
        </>
    )
}

export default withHocs(withRouter(UsersList))
