import React from 'react';
import {NavLink} from 'react-router-dom';
import logout from '../actions/logout';
import { connect } from "react-redux";
const LoggedinLinks=(props)=>{
    return(
        <ul className="right">
            <li><NavLink to="/newpost">New Post</NavLink></li>
            <li><a onClick={props.logout}>Logout</a></li>
        </ul>
    )
}

const mapDispatchTOPropos=(dispatch)=>{
    return{
        logout:()=> dispatch(logout())
    }
}
export {LoggedinLinks}
export default connect(null,mapDispatchTOPropos)(LoggedinLinks);