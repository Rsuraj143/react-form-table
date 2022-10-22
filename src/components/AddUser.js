import React, { useState } from 'react'
import "./form.css"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addUser } from '../redux/action';



const AddUser = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  const [data, setData] = useState({
    name : "",
    email : "",
    password : "",
    city : "",
    state : "",
    date : "",
    age : "",
    address : "",
    profile : "",
    status : false
});
  
  const [error, setError] = useState("")
  const {name, email, password, city, state, date, age, address, profile, status} = data;

  return (

    <div className="container-fluid">
      <button onClick={()=>navigate("/")} className='btn btn-danger mt-2' style={{float:"right"}}> Go Back </button>

      <h2 className='text-center border p-2 mb-3 bg-light'>Add User</h2>

        {error && <h3 style={{color:"red"}} >{error}</h3>}


    
      <Formik initialValues={
                {
                  name : "",
                  email : "",
                  password : "",
                  city : "",
                  state : "",
                  date : "",
                  age : "",
                  address : "",
                  profile : "",
                  status : false
                }}
                validationSchema={
                  yup.object({
                    name : yup.string()
                              .required('User Name required')
                              .matches(/^[a-zA-Z][a-zA-Z ]*$/,"only alphabets and white space") 
                              .min(2,'Name is short')
                              .max(15,'Name too long'),
                    email : yup.string()
                                .required('Email is required')
                                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,"Invalid format")
                                .email('Invalid Email'),
                    password : yup.string()
                                  .required("Password is Required")
                                  .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Must 8 char,1digit,1char"),
                    city : yup.string(),
                    state : yup.string(),
                    date :  yup.string(),
                   
                    age : yup.number()
                              .required('Age is required'),
                    address : yup.string(),
                    profile : yup.string(),
                    status : yup.boolean()
                  })
              }
              onSubmit={values=>{
                setData(values)
                console.log(data)
                // alert(JSON.stringify(values))
                if(!name || !email || !password || !city || !state || !date || !age || !address || !profile){
                  setError("Please fill the all input field");
                }else{
                  dispatch(addUser(data));
                  console.log(data)
                  navigate("/");
                  setError("");
                }
              }
          }>
                {
                    props =>
                        <Form>
                    {
                        <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd><Field name="name" type='text'></Field></dd>
                                <dd className="text-danger"> <ErrorMessage name="name"></ErrorMessage></dd>

                                <dt>Email</dt>
                                <dd><Field name="email" type='text'></Field></dd>
                                <dd className="text-danger"> <ErrorMessage name="email"></ErrorMessage></dd>

                                <dt>Passward</dt>
                                <dd><Field name="password" type='password'></Field></dd>
                                <dd className="text-danger"> <ErrorMessage name="password"></ErrorMessage></dd>

                                <dt>Select City</dt>
                                <dd><Field name="city" as="select">
                                        <option>--Select--</option>
                                        <option>Berhampur</option>
                                        <option>Hydrabad</option>
                                        <option>Mumbai</option>
                                        <option>Surat</option>
                                        <option>Bangalore</option>
                                        
                                    </Field></dd>
                                    <dd className="text-danger"> <ErrorMessage name="city"></ErrorMessage></dd>
                                    
                                <dt> State</dt>
                                <dd><Field name="state" as="select">
                                        <option>--Select--</option>
                                        <option>Delhi</option>
                                        <option>Maharastra</option>
                                        <option>Odisha</option>
                                        <option>Gujarat</option>
                                        <option>Karnataka</option>
                                    </Field></dd>
                                <dd className="text-danger"> <ErrorMessage name="state"></ErrorMessage></dd>

                                <dt>Date</dt>
                                <dd><Field type="date" name="date" /></dd>
                                <dd className="text-danger"> <ErrorMessage name="date"></ErrorMessage></dd>

                                <dt>Age</dt>
                                <dd><Field  type="range" min="0" max="70" name="age" /></dd>
                                <dd className="text-danger"> <ErrorMessage name="age"></ErrorMessage></dd>

                                <dt>Address</dt>
                                <dd><Field name='address' maxLength="500" /></dd>
                                <dd className="text-danger"> <ErrorMessage name="address"></ErrorMessage></dd>

                                <dt>Profile Pitcture</dt>
                                <dd><Field id="file" type="file" accept='.jpg,.jpeg,.png' name="profile" /></dd>
                                <dd className="text-danger"> <ErrorMessage name="profile"></ErrorMessage></dd>

                                <dt>Status</dt>
                                <dd>
                                  <div class="form-check form-switch">
                                    <Field className="form-check-input" name="status"  type="checkbox" role="switch" id="status"/>
                                    <label className="form-check-label" for="status">Inactive</label>
                                  </div>
                                </dd>
                                <dd className='text-center'><button className='btn btn-primary mt-2' disabled ={(props.isValid)?false:true}> Submit</button></dd>
                            </dl>
                            
                        </div>
                    }
                    
                </Form>
                    
                }
      </Formik>
     
    </div>
  )
}

export default AddUser