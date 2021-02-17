import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';
const logout=()=>{
    return((dispatch)=>{
        const cookies = new Cookies();
        cookies.remove('reactBlog',{ path:'/'});
        dispatch({type:"LOGOUT"});
        window.location.reload();
    })
}
export default logout;