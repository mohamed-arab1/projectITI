import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import '../Login/Login.css'
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Login() {
  const [userData , setUserData] = useState({
    email : "",
    password : "" ,
    

  })

  const [errorData , setErrorData] = useState({
    emailError:"",
    passwordError:""
  })

  const handleChange = (event) => {
    if (event.target.name === "userEmail") {
      setUserData({ ...userData, email: event.target.value });
      setErrorData({...errorData , emailError:event.target.value.length === 0
        ? "Email is required"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)
        ? ""
        : "Enter a valid email"})
    } else if (event.target.name === "userPassword") {
      setUserData({ ...userData, password: event.target.value });
      setErrorData({...errorData ,passwordError : event.target.value.length === 0 ? "password is required" : event.target.value.length > 8 ? "" : "Password at least 8 characters long" })
    }
  };

  const navigate = useNavigate();

  function HandleClick() {
    navigate("/home");
  }


  return (
    <div>
      <h1 style={{color:"red"}}>Login </h1>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label' style={{color:"blue"}}>Email address</Form.Label>
              <Form.Control name='userEmail' value={userData.email} onChange={(e)=>{handleChange(e)}} className='input' type="email" placeholder="name@example.com" />
              <div className='text-danger'>{errorData.emailError}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label  className='label' style={{color:"blueviolet"}} >Password</Form.Label>
              <Form.Control name='userPassword' value={userData.password} onChange={(e)=>{handleChange(e)}} className='input' type="password" placeholder="password" />
              <div className='text-danger' >{errorData.passwordError}</div>
            </Form.Group>
            <Link to={ userData.email && userData.password && !errorData.emailError && !errorData.passwordError  ? "/home" :"" } disabled= {Login.loading === true}   className='btn btn-primary ' style={{width:"150px" , textAlign:"center" , alignContent: "center" ,justifyContent:"center" , alignItems:"center"}} onClick={HandleClick}>Submit</Link>
        </Form>
    </div>
  )
}

export default Login
