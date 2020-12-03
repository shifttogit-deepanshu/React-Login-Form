
import Auth from "../actions/Auth";
import store from "../redux/store";
import {githubAuthProvider} from "../firebase/firebase"


export const Github = ()=>{
return (
    <div><button onClick={store.dispatch(Auth(githubAuthProvider))}>Sign In with Github</button></div>
)
}

export default Github