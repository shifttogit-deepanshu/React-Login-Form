import firebase from "../firebase/firebase"
import {useHistory} from "react-router-dom"

export default (provider)=>{
return (dispatch)=>{
    return ()=>{
        firebase.auth().signInWithPopup(provider).then((result)=>{
        let id = result.user.uid
        console.log("Sign In")
        return id
        
    }).then((id)=>{
        dispatch({type:"AUTH",id})
    })
    
    
}
}
}