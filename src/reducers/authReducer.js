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
        default:
            return state
    }

}

export default authReducer