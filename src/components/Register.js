import React from "react"
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = ()=>(
    <div className="register">
    <Formik 
    initialValues={{firstname:"",lastname:"",mobile:"",email:"",password:""}}
    validationSchema={Yup.object({
        firstname:Yup.string().required('First name is required'),
        lastname:Yup.string().required('Last name is required'),
        mobile:Yup.number("Invalid Mobile Number").required("Mobile number is required").positive("invalid Mobile Number").integer("Invalid Mobile Number"),
        email:Yup.string().email('Invalid Email address').required('This field is required'),
        password:Yup.string().required('This field is required')
    })}
    onSubmit={console.log("form submitted")}
    >
    <Form className="form" autoComplete="off">
    <div className="head-text head-text--log-in">REGISTER</div>
    <div className="form__elements">    
    <Field name="firsname" type="text" placeholder="firsname *" className="input"/>
    <ErrorMessage name="firstname" className="error error--field" component="div"/>
    <Field name="lastname" type="text" placeholder="lastname *" className="input"/>
    <ErrorMessage name="lastname"  className="error error--field" component="div"/>
    <Field name="mobile" type="number" placeholder="Mobile No *" className="input"/>
    <ErrorMessage name="mobile" className="error error--field" component="div"/>
    <Field name="email" type="email" placeholder="Email *" className="input"/>
    <ErrorMessage name="email" className="error error--field" component="div"/>
    <Field name="password" type="password" placeholder="password *" className="input"/>
    <ErrorMessage name="password"  className="error error--field" component="div"/>
    <Field name="confirmPassword" type="password" placeholder="Confirm password *" className="input"/>
    <ErrorMessage name="confirmPassword"  className="error error--field" component="div"/>
    <button type="submit" className="submit_button">Log In</button>
    </div>
    </Form>
    </Formik>    
    </div>
)

export {Register as default}