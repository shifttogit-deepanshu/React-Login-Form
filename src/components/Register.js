import React from 'react'
import {NavLink} from "react-router-dom"

export const Register = ()=>(
    <div className="register">
        <div className="register__head">Create Account</div>    
        <div className="register__text">Dont have an account? <span><NavLink to="/public"  className="register__link"> click here</NavLink></span></div>    
        <button className="submit_button submit_button--align">Register Now</button>
    </div>
)

export default Register