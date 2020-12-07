import React from 'react'
import LoginForm from './LoginForm'
import ThirdPartyLogin from './ThirdPartyLogin'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

const LoginApp = ({id})=>(
    id?(<Redirect to="/private" />):(
    <div className="login_app">
        <div className="app_container">
            <ThirdPartyLogin />
            <LoginForm />
        </div>
    </div>
    )
)

const mapStateToprops = (state)=>{
    return {
        id:!!state.auth
    }
}

export default connect(mapStateToprops)(LoginApp)