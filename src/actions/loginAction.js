import axios from 'axios';
import Cookies from 'universal-cookie';
const loginUser=(creds)=>{
    return((dispatch,getState)=>{
       return axios.post('https://capstone-project-rest-api.herokuapp.com/api/user/login', creds)
        .then(res=>{
            const token=res.data.token;
            const cookies = new Cookies();
            cookies.set('reactBlog', token, { path: '/' ,expiries:3600});
            console.log(cookies.get('reactBlog')); 
           dispatch({type:'LOGIN',token})
        })
        .catch(err=>{
            console.log("login failed");
        })
    })
}

export default loginUser;