import { createStore,applyMiddleware,compose} from 'redux'
import authReducer from "../reducers/authReducer"
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(authReducer,composeEnhancer(applyMiddleware(thunk)))

export default store