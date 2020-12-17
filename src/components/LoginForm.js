import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {loginSubmit} from "../actions/Submit"
import {connect} from "react-redux"
import RegisterLink from "./RegisterLink"

export const LoginForm = (props)=>(
    <div className="login_form">
    <Formik 
    initialValues={{email:"",password:""}}
    validationSchema={Yup.object({
        email:Yup.string().email('Invalid Email address').required('This field is required'),
        password:Yup.string().required('This field is required')
    })}
    onSubmit={values=>props.formSubmit(values.email,values.password)}
    >
    <Form className="form" autoComplete="off">
    <div className="head-text head-text--log-in">LOG IN</div>
    <div className="form__elements">    
    <Field name="email" type="email" placeholder="Email *" className="input"/>
    <ErrorMessage name="email" className="error error--field" component="div"/>
    <Field name="password" type="password" placeholder="password *" className="input"/>
    <ErrorMessage name="password"  className="error error--field" component="div"/>
    <button type="submit" className="submit_button">Log In</button>
    </div>
    </Form>
    </Formik>
    <RegisterLink/>
    </div>
    

)

const mapDispatchToProps = (dispatch)=>{
    return {
        formSubmit : (email,password) =>{
            dispatch(loginSubmit(email,password))
        }
    }
}

export default connect(undefined,mapDispatchToProps)(LoginForm)