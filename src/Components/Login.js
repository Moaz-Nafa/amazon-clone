import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import loginIcone from "../images/login-logo.png";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import "./Login.css"

const Login = () => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();

  // const signIn = (e) => {
  //   e.preventDefault()
  //   signInWithEmailAndPassword(auth, email, password);
  // }
  const register = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if(auth){
        navigate("/")
      }     
    }).catch((error) => {
      alert(error.message)
    });
  }         
  return (
    <div className='login'>
         <Link to="/">
            <img className='login-logo' src={loginIcone} alt='Nafa'/>
       </Link>
        <div className='login-container'>                
            <h1>Sign In</h1>
            <form>
                <h4>Email</h4>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <h4>Password</h4>
                <input type='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className='login-signInBtn' type='submit' onClick={register}>Sign In</button>
                <p>You can acheve whate ever you want you just have to work hard every day long, and remmber if athers can do it you can to</p>
                {/* <button className='login-registerBtn' type='submit'onClick={register}>Create Your Amazon Account</button> */}
            </form>
        </div>
    </div>
  )
}

export default Login
