import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/container.css';

const Navbar=()=>{
        // const {countries}= props;
        // const countriesList=countries.map(country=>{
        //         return(
        //             <div key={country.id}>
        //                 <div>name:{country.name}</div>
        //                 <div>Age:{country.Age}</div>
        //                 <div>belt:{country.belt}</div>
        //             </div>
        //         )
            
        //    return country.Age > 23 ?(
        //         <div key={country.id}>
        //             <div>name:{country.name}</div>
        //             <div>Age:{country.Age}</div>
        //         <div>belt:{country.belt}</div>
        //         </div>
        //      ):null;
           
       // })
        // console.log(mycountryList);
       return(
           <nav className='nav-wrapper blue darken-3'>
                <div className="container">
                    <NavLink to="/" className="brand-log">React blog</NavLink>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/newpost">New Post</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
           </nav>
       )
}
export default Navbar;