import React from 'react'
import LoginForm from './LoginForm'
import ThirdPartyLogin from './ThirdPartyLogin'

const LoginApp = ()=>(
    <div className="login_app">
        <LoginForm />
        <ThirdPartyLogin />
    </div>
)

export default LoginApp