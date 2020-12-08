import React from "react"
import {connect} from "react-redux"

const LoginError = ({ifError})=>(
    !!ifError && <div  className="login_error">Login Error: {ifError}</div>
)

const mapStateToProps = (state)=>{
    return {
        ifError: state.login_error
    }
}

export default connect(mapStateToProps)(LoginError)