
import Auth from "../actions/Auth";
import store from "../redux/store";
import {googleAuthProvider} from "../firebase/firebase"


export const Google = ()=>{
return (
    <div><button onClick={store.dispatch(Auth(googleAuthProvider))}>Sign In with Google</button></div>
)
}

export default Google