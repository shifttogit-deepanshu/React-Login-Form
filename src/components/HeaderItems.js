import React from "react"
import {NavLink} from 'react-router-dom'

const HeaderItems = ()=>(
        <div className="container container--header">
                <NavLink to="/" className="link_text container--link">Home</NavLink>
                <NavLink to="/public" className="link_text container--link">Public</NavLink>
                <NavLink to="/private" className="link_text container--link">Private</NavLink>
        </div>
)

export default HeaderItems