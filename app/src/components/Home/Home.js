import React from "react";
import {withRouter} from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid'
import "../../styles/card.css"

import Header from '../Header'
import UsersList from "../Users/usersList";

const Home = () => {
    return(
       <Row center="xs" >
           <Col xs={8}>
            <Header/>

            <UsersList/>
           </Col>
       </Row>
    )
}

export default withRouter(Home)
