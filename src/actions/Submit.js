import {database} from "../firebase/firebase"

export const loginSubmit = (email,password)=>{
    return (dispatch)=>{
        database.ref('Users/').once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                if(childSnapshot.val().email==email && childSnapshot.val().password==password){
                    return dispatch({type:"AUTH",id:childSnapshot.key})
                    
                }
                else{
                    dispatch({type:"GENERAL_ERROR",errorMssg:"User Not Found"})
                }
            })
        })
    }
}

export const registerSubmit = (values)=>{
    return (dispatch)=>{
        if(values.password===values.confirmPassword){
            console.log("marched")
        }
        else{
            dispatch({type:"GENERAL_ERROR",errorMssg:"passwords didn't match"})
        }
    }
}