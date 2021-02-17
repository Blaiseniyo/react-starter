import axios from 'axios';
const updatePost=(id,body,token)=>{
    return((dispatch,getState)=>{
        return axios.put(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`,
        body,
         {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res=>{
                dispatch({type:'UPDATE_POST',id,body})
          })
          .catch(err=>{
            console.log(err);
        })
    })
}

export default updatePost;