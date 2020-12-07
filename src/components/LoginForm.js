import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import formSubmit from "../actions/Submit"
import {connect} from "react-redux"
import Register from "./Register"

export const LoginForm = (props)=>(
    <div className="login_form">
    <Formik 
    initialValues={{email:"",password:""}}
    validationSchema={Yup.object({
        email:Yup.string().email('Invalid Email address').required('This field is required'),
        password:Yup.string().required('This field is required')
    })}
    onSubmit={values=>props.formSubmission(values.email,values.password)}
    >
    <Form className="form">
    <div className="form__head">LOG IN</div>
    <div className="form__elements">
    
    <Field name="email" type="email" placeholder="Email" className="input"/>
    <div>
    <ErrorMessage name="email"/>
    </div>
    <Field name="password" type="password" placeholder="password" className="input"/>
    <div>
    <ErrorMessage name="password"/>
    </div>
    <div>
    <button type="submit">Submit</button>
    </div>
    </div>
    </Form>
    </Formik>
    <div>
        <Register/>
    </div>
    </div>
    

)

const mapDispatchToProps = (dispatch)=>{
    return {
        formSubmission : (email,password) =>{
            dispatch(formSubmit(email,password))
        }
    }
}

export default connect(undefined,mapDispatchToProps)(LoginForm)