import axios from 'axios';
const createPost=(form,token)=>{
    return((dispatch,getState)=>{
        return axios.post('https://capstone-project-rest-api.herokuapp.com/api/articles/',
            form
          ,{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data' 
            }
          })
          .then(res=>{
                const post=res.data
                dispatch({type:'ADD_POST',post})
          })
          .catch(err=>{
            console.log(err);
        })
    })
}

export default createPost;