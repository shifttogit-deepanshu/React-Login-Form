import React,{useState} from "react"
import LoginError from "../components/LoginError"
import HeaderItems from "./HeaderItems"
import Toggler from "./Toggler"

const Header = ()=>{
    const breakpoint = window.innerWidth>=769
    const [toggleStatus,changeStatus] = useState(breakpoint)

    return (
    <div className="header">
        {!breakpoint && <div onClick={()=>changeStatus(!toggleStatus)}><Toggler toggleStatus={toggleStatus} />{toggleStatus}</div>}
        {toggleStatus && <HeaderItems/>}
    <div>
        <LoginError />
    </div>
    </div>
    )
}
export default Header