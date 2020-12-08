import React from "react"
import {NavLink} from 'react-router-dom'

const Header = ()=>(
    <div className="header">
        <div className="container">
            <div className="container">
                <NavLink to="/" className="link_text container--link container">Home</NavLink>
            </div>
            <div className="container">
                <NavLink to="/public" className="link_text container--link container">Public</NavLink>
            </div>
            <div className="container">
                <NavLink to="/private" className="link_text container--link container">Private</NavLink>
            </div>
        </div>
    </div>
)

export default Header