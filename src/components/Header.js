import React from "react"
import LoginError from "../components/LoginError"
import HeaderItems from "./HeaderItems"

const Header = ()=>(
    <div className="header">
        <HeaderItems/>
    <div>
        <LoginError />
    </div>
    </div>
)

export default Header