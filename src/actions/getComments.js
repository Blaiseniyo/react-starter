import axios from 'axios';
const getComments=(id)=>{
    return((dispatch,getState)=>{
       return axios.get(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`)
        .then(res=>{
            const comments=res.data.comments;
           dispatch({type:'GET_COMMENTS',comments})
        })
        .catch(err=>{
            console.log("failed to get comments");
        })
    })
}

export default getComments;