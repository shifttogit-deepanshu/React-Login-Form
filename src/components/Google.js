
import Auth from "../actions/Auth";
import store from "../redux/store";
import {googleAuthProvider} from "../firebase/firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../icons/fontAwesome/fontAwesome"


export const Google = ()=>{
return (
    <div><button onClick={store.dispatch(Auth(googleAuthProvider))} className="login-btn google"><span className="icon"><FontAwesomeIcon icon={['fab', 'google']} /></span>Sign In with Google</button></div>
)
}

export default Google