import axios from 'axios';
const deletePost= async(id,token)=>{
    try{
        const res =await axios.delete(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`,
        {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

export default deletePost;