import firebase from "../firebase/firebase";

export default (provider)=>{
return (dispatch)=>{
    return ()=>{
        firebase.auth().signInWithPopup(provider).then((result)=>{
        let user = result.user
        console.log("Sign In")
        return user
        
    }).then((user)=>{
        dispatch({type:"AUTH",user})
    })
    
    
}
}
}