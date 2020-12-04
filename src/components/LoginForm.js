import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import formSubmit from "../actions/Submit"
import {connect} from "react-redux"

export const LoginForm = (props)=>(
    <div>
    <Formik 
    initialValues={{email:"",password:""}}
    validationSchema={Yup.object({
        email:Yup.string().email('Invalid Email address').required('This field is required'),
        password:Yup.string().required('This field is required')
    })}
    onSubmit={values=>props.formSubmission(values.email,values.password)}
    >
    <Form>
    <div>
    <Field name="email" type="email" placeholder="Email" />
    </div>
    <div>
    <ErrorMessage name="email"/>
    </div>
    <div>
    <Field name="password" type="password" placeholder="password"/>
    </div>
    <div>
    <ErrorMessage name="password"/>
    </div>
    <div>
    <button type="submit">Submit</button>
    </div>
    </Form>
    </Formik>
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