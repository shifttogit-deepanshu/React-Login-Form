import React,{useState} from "react"
import LoginError from "../components/LoginError"
import HeaderItems from "./HeaderItems"
import Toggler from "./Toggler"

const Header = ()=>{
    const breakpoint = window.innerWidth>=769
    const [toggleStatus,changeStatus] = useState(breakpoint)
    const wrapperClassName = toggleStatus ? "wrapper-active" : "wrapper"
    return (
    <div className="static">
    <div className="header">
        {!breakpoint && <div onClick={()=>changeStatus(!toggleStatus)} className={wrapperClassName}><Toggler toggleStatus={toggleStatus} /></div>}
        {toggleStatus && <HeaderItems/>}
    </div>
        <LoginError />    
    </div>
    )
}
export default Header