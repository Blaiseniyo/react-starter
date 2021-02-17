import axios from 'axios';
const deletePosts=(id,token)=>{
    return((dispatch,getState)=>{
        return axios.delete(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`,
         {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res=>{
                dispatch({type:'DELETE_POST',id})
          })
          .catch(err=>{
            console.log(err);
        })
    })
}

export default deletePosts;