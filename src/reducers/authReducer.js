const authReducer = (state={auth:""},action)=>{
    switch(action.type){
        case "AUTH":
            return {
                auth:action.id
            }
        default:
            return state
    }

}

export default authReducer