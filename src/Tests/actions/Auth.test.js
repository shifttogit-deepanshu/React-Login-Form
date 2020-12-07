// import {shallow}from "enzyme"
// import {authAction} from "../../actions/Auth"
// import configureStore from "redux-mock-store"
// import thunk from "redux-thunk"

// const middlewares = [thunk]
// const mockStore = configureStore(middlewares)

// test('should dispatch auth action correctly',()=>{
//     const store = mockStore({auth:""})
//     store.dispatch({type:"AUTH","123abc"}).then(()=>{
//         const actions = store.getActions()
//         expect(actions[0]).toEqual({
//             type:"AUTH",
//             id:"123abc"
//         })
//     })
// })