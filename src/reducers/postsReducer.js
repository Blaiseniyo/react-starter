const initState={
    posts:[],
    post:null
}
const getPostsReducer=(state=initState,action)=>{
    switch(action.type){
        case "GET_POSTS":
            return{
                ...state,
                posts:action.posts
            }
        case "GET_POST":
            return{
                ...state,
                post:action.post
            }
        case "ADD_POST":
            return{
                ...state,
                posts:[...state.posts,action.post]
            }
        case "DELETE_POST":
            const postList=state.posts.map(post=>{
                if(post._id !== action.id){
                    return post;
                }
            })
            return{
                ...state,
                // posts:postList,
                post:null
            }
        case "UPDATE_POST":
            const postsList=state.posts.map(post=>{
                if(post._id === action.id){
                    post.title = action.body.title;
                    post.body =action.body.body;
                }
                return post;
            })
            console.log(postsList);
            return{
                ...state,
                posts:postsList
            }
        case "CLEAN_POST":
            return{
                ...state,
                post:null
            }
        default:
            return state
    }
}

export default getPostsReducer