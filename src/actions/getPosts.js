import axios from 'axios';
const getPosts=()=>{
    return((dispatch,getState)=>{
       return axios.get('https://capstone-project-rest-api.herokuapp.com/api/articles/')
        .then(res=>{
            const posts=res.data;
           dispatch({type:'GET_POSTS',posts})
        })
        .catch(err=>{
            console.log("failed to get posts");
        })
    })
}

export default getPosts;