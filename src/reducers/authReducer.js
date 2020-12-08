const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "AUTH":
            return {
                auth:action.id
            }
        case "LOG_OUT":
            return {
                auth:""
            }
        case "USER_NOT_FOUND":
            return {
                login_error:"User Not Found!"
            }
        default:
            return state
    }

}

export default authReducer