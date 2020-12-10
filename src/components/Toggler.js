import React from "react"
import "../icons/fontAwesome/fontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toggler = (props)=>{
    const className = props.toggleStatus ? "toggler toggler-active" : "toggler"
    return (<div className={className} ><FontAwesomeIcon icon={['fas','plus']}/></div>)
}
export default Toggler