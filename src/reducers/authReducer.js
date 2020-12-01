const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "GOOGLE_AUTH":
            return {
                auth:action.user
            }
        default:
            return {
                state
            }
    }

}

export default authReducer