import axios from 'axios';
const loginUser=(creds)=>{
    return((dispatch,getState)=>{
       return axios.post('https://capstone-project-rest-api.herokuapp.com/api/user/login', creds)
        .then(res=>{
            const token=res.data.token;
            console.log(token)
           dispatch({type:'LOGIN',token})
        })
        .catch(err=>{
            console.log("login failed");
        })
    })
}

export default loginUser;