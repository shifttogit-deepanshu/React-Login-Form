import {database} from "../firebase/firebase"
import { v4 as uuidv4 } from 'uuid';

export const loginSubmit = (email,password)=>{
    return (dispatch)=>{
        database.ref('Users/').once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                if(childSnapshot.val().email===email && childSnapshot.val().password===password){
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
            const uuid = uuidv4();
            database.ref('Users/'+ uuid).set({
                firstname:values.firstname,
                lastname:values.lastname,
                mobile:values.mobile,
                email:values.email,
                password:values.password,
            }).then(()=>{
                dispatch({type:"REGISTER"})
            }).catch((e)=>{
                dispatch({type:"GENERAL_ERROR",errorMssg:e})
            })
        }
        else{
            dispatch({type:"GENERAL_ERROR",errorMssg:"passwords didn't match"})
        }
    }
}