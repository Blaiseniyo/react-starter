import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import LoggedinLinks from './loggedinLinks';
import LoggedoutLinks from './loggedoutLinks';
import Cookies from 'universal-cookie';
import '../styles/container.css';

const Navbar=(props)=>{
    const cookies = new Cookies();
    const token=cookies.get('reactBlog'); 
        const Links=props.token || token?(
            <LoggedinLinks/>
        ):(<LoggedoutLinks/>)
       return(
           <nav className='nav-wrapper blue darken-3'>
                <div className="container">
                    <NavLink to="/" className="brand-log">React blog</NavLink>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        {Links}
                    </ul>
                </div>
           </nav>
       )
}

const mapStateToPropos=(state)=>{
    return{
        token:state.auth.token
    }
}
export {Navbar}
export default connect(mapStateToPropos)(Navbar);