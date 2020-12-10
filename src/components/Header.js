import React from "react"
import LoginError from "../components/LoginError"
import HeaderItems from "./HeaderItems"
import "../icons/fontAwesome/fontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ()=>(
    <div className="header">
        <div className="header__toggler"><FontAwesomeIcon icon={['fas','plus']}/></div>
        <HeaderItems/>
    <div>
        <LoginError />
    </div>
    </div>
)

export default Header