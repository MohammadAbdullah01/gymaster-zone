import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../../images/socialLogo/google.png'
import github from '../../../images/socialLogo/github.png'
import facebook from '../../../images/socialLogo/facebook.png'
const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "", confirmPassword: "" })
    const handleEmailInput = event => {
        console.log(event.target.value)
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            console.log("success")
        }
    }
    const handlePasswordInput = event => {

    }
    const handleConfirmPasswordInput = event => {

    }
    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
            <div className='login-container'>
                <div className='form-container'>
                    <h1 className='login-title'>Please Login</h1>
                    <form onBlur={handleSubmit}>
                        <input onChange={handleEmailInput} placeholder='email' type="email" name="email" id="" required />
                        <input onChange={handlePasswordInput} placeholder='password' type="password" name="password" id="" required />
                        <input onChange={handleConfirmPasswordInput} className='submit-btn' type="submit" value='login' required />
                    </form>
                    <p style={{ color: "#523B3B" }} className='mt-1'>New at Gymaster ? <Link style={{ textDecoration: "none" }} to='/register'>Please Register</Link></p>
                    <div className='form-or-container'>
                        <div className='form-or'></div>
                        <span className='mx-2'>OR</span>
                        <div className='form-or'></div>
                    </div>
                    <div>
                        <button className='social-btn'><img src={google} alt="" /><span>Continue with google</span></button>
                        <button className='social-btn'><img src={github} alt="" /><span>Continue with github</span></button>
                        <button className='social-btn'><img src={facebook} alt="" /><span>Continue with facebook</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;