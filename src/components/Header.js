import React from "react"
import {NavLink} from 'react-router-dom'

const Header = ()=>(
    <div className="header">
        <div className="container">
            <div className="container container--link">
                <NavLink to="/" className="link_text">Home</NavLink>
            </div>
            <div className="container container--link">
                <NavLink to="/public" className="link_text">Public</NavLink>
            </div>
            <div className="container container--link">
                <NavLink to="/private" className="link_text">Private</NavLink>
            </div>
        </div>
    </div>
)

export default Header