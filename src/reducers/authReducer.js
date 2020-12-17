const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "AUTH":
            return {
                auth:action.id,
                general_error:""
        }
        case "LOG_OUT":
            return {
                ...state,
                auth:"",
            }
        case "GENERAL_ERROR":
            return {
                ...state,
                general_error:action.errorMssg
                
            }
        case "REGISTER":
            return {
                ...state,
                general_error:""
            }
        default:
            return state
    }

}

export default authReducer