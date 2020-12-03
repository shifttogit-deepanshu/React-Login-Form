import React from "react"
import {Link} from 'react-router-dom'

const Header = ()=>(
    <div>
    <Link to="/">Home</Link>
    <Link to="/public">Public</Link>
    <Link to="/private">Private</Link>
    </div>
)


export default Header