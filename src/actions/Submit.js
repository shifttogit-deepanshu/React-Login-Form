import {database} from "../firebase/firebase"
export default (email,password)=>{
    return (dispatch)=>{
        database.ref('Users/').once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                if(childSnapshot.val().email==email && childSnapshot.val().password==password){
                    dispatch({type:"AUTH",id:childSnapshot.key})
                }
                else{
                    console.log("no items")
                }
            })
        })
    }
}