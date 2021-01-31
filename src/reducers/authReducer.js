const initState={
    token:null
}
const authReducer=(state=initState,action)=>{
    switch(action.type){
        case "LOGIN":
            console.log("logging in....")
            return{
                ...state,
                token:action.token
            }
        case "LOGOUT":
            return{
                ...state,
                token:null
            }
        default:
            return state
    }
}

export default authReducer