const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "AUTH":
            return {
                auth:action.id,
                login_error:""
        }
        case "LOG_OUT":
            return {
                ...state,
                auth:"",
            }
        case "USER_NOT_FOUND":
            return {
                ...state,
                login_error:"User Not Found!"
                
            }
        default:
            return state
    }

}

export default authReducer