
import googleAuth from "../actions/googleAuth";
import store from "../redux/store"


export const Google = ()=>{
return (
    <div><button onClick={store.dispatch(googleAuth)}>Sign In with Google</button></div>
)
}

export default Google