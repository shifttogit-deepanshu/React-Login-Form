import React from "react"
import {NavLink} from 'react-router-dom'

const Header = ()=>(
    <div className="header">
    <NavLink to="/" className="link_text">Home</NavLink>
    <NavLink to="/public" className="link_text">Public</NavLink>
    <NavLink to="/private" className="link_text">Private</NavLink>
    </div>
)

export default Header