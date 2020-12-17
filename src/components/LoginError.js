import React from "react"
import {connect} from "react-redux"

const LoginError = ({ifError})=>(
    !!ifError && <div className="error error--login">Error: {ifError}</div>
)

const mapStateToProps = (state)=>{
    return {
        ifError: state.general_error
    }
}

export default connect(mapStateToProps)(LoginError)