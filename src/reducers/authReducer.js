const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "AUTH":
            return {
                auth:action.user.uid
            }
        default:
            return state
    }

}

export default authReducer