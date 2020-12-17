import React from "react";
// import {useHistory} from "react-router-dom";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {connect} from "react-redux"
import {registerSubmit} from "../actions/Submit"
import * as Yup from 'yup'

const Register = (props)=>{
    return (
    <div className="register">
    <Formik 
    initialValues={{firstname:"",lastname:"",mobile:"",email:"",password:""}}
    validationSchema={Yup.object({
        firstname:Yup.string().required('First name is required'),
        lastname:Yup.string().required('Last name is required'),
        mobile:Yup.number("Invalid Mobile Number").required("Mobile number is required").positive("invalid Mobile Number").integer("Invalid Mobile Number"),
        email:Yup.string().email('Invalid Email address').required('This field is required'),
        password:Yup.string().trim("password must not start or end with space").min(9,"password should be greater than 8 characters long").matches(/[A-Z]/,"should contain at least one uppercase character").matches(/\d/,"should contain a number").matches(/\$|!|@|#|%|\^|&|\*|_|-/gm,"special symbol").required('This field is required'),
        confirmPassword:Yup.string().required("Password confirmation is required")
    })}
    onSubmit={values=>props.registerSubmit(values)}
    >
    <Form className="form" autoComplete="off">
    <div className="head-text head-text--log-in">REGISTER</div>
    <div className="form__elements form__elements--flexed"> 
    <div className="register__field register__field--border">  
    <Field name="firstname" type="text" placeholder="firsname *" className="input"/>
    <ErrorMessage name="firstname" className="error error--field" component="div"/>
    <Field name="lastname" type="text" placeholder="lastname *" className="input"/>
    <ErrorMessage name="lastname"  className="error error--field" component="div"/>
    <Field name="mobile" type="number" placeholder="Mobile No *" className="input"/>
    <ErrorMessage name="mobile" className="error error--field" component="div"/>
    </div> 
    <div className="register__field">
    <Field name="email" type="email" placeholder="Email *" className="input"/>
    <ErrorMessage name="email" className="error error--field" component="div"/>
    <Field name="password" type="password" placeholder="password *" className="input"/>
    <ErrorMessage name="password"  className="error error--field" component="div"/>
    <Field name="confirmPassword" type="password" placeholder="Confirm password *" className="input"/>
    <ErrorMessage name="confirmPassword"  className="error error--field" component="div"/>
    
    </div>
    </div>
    <div><button type="submit" className="submit_button sumit_button--register">Register</button></div>
    </Form>
    </Formik>    
    </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        registerSubmit: (values)=>{
            dispatch(registerSubmit(values))
        }
    }
}

export default connect(undefined,mapDispatchToProps)(Register)