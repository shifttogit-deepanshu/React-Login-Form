
import Auth from "../actions/Auth";
import store from "../redux/store";
import {githubAuthProvider} from "../firebase/firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../icons/fontAwesome/fontAwesome"

export const Github = ()=>{
return (
    <div><button onClick={store.dispatch(Auth(githubAuthProvider))} className="login-btn github"><span className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></span>Sign In with Github</button></div>
)
}

export default Github