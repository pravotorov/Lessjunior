import React from "react";
import {withRouter} from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid'
import "../../styles/card.css"

import Header from '../Header'
import TaskList from "./TaskList";

const Task = () => {
    return(
       <Row center="xs" >
           <Col xs={8}>
            <Header/>

            <TaskList/>
           </Col>
       </Row>
    )
}

export default withRouter(Task)
