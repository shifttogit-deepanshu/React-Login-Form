import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginApp from '../components/LoginApp'
import PublicRoute from '../components/PublicRoutes/PublicRoute'
import PrivateRoute from '../components/PrivateRoutes/PrivateRoute'
import PrivateRouter from "./PrivateRouter"
import Header from "../components/Header"


const AppRouter = ()=>(
    <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/" component={LoginApp} exact={true}/>
        <Route path="/public" component={PublicRoute} />
        <PrivateRouter path="/private" component={PrivateRoute} />
        </Switch>    
    </BrowserRouter>
)

export default AppRouter