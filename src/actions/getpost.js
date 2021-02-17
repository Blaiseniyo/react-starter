import axios from 'axios';
const getpost=(id)=>{
    return((dispatch,getState)=>{
       return axios.get(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`)
        .then(res=>{
            const post=res.data;
           dispatch({type:'GET_POST',post})
        })
        .catch(err=>{
            console.log("failed to get posts");
        })
    })
}

export default getpost;