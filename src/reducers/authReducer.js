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
        case "GENERAL_ERROR":
            return {
                ...state,
                login_error:action.errorMssg
                
            }
        default:
            return state
    }

}

export default authReducer