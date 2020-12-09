import {database} from "../firebase/firebase"
export default (email,password)=>{
    return (dispatch)=>{
        database.ref('Users/').once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                if(childSnapshot.val().email==email && childSnapshot.val().password==password){
                    return dispatch({type:"AUTH",id:childSnapshot.key})
                    
                }
                else{
                    dispatch({type:"USER_NOT_FOUND"})
                }
            })
        })
    }
}