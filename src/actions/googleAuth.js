import firebase,{provider} from "../firebase/firebase";
export default (dispatch)=>{
    return ()=>{
        firebase.auth().signInWithPopup(provider).then((result)=>{
        let user = result.user
        console.log("Sign In")
        return user
        
    }).then((user)=>{
        dispatch({type:"GOOGLE_AUTH",user})
    })
    
    
}
}