import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import '../app.css'
import Header from './Header'


const Home = (props) => {

    return (
        <div className='row'>
            <Header />
        </div>
    )
}

export default withRouter(Home)

