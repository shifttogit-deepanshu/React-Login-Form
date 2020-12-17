import React from 'react'
import {NavLink} from "react-router-dom"

export const RegisterLink = ()=>(
    <div className="register-link">
        <div className="head-text head-text--register-link">Create Account</div>    
        <div className="register-link__text">Dont have an account? <span><NavLink to="/register"  className="register-link__link">click here</NavLink></span></div>    
        <NavLink to="/register" className="submit_button submit_button--align">Register Now</NavLink>
    </div>
)

export default RegisterLink