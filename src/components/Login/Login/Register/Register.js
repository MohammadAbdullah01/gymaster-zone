import React, { useEffect, useState } from 'react';
import google from '../../../../images/socialLogo/google.png'
import github from '../../../../images/socialLogo/github.png'
import facebook from '../../../../images/socialLogo/facebook.png'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "", confirmPassword: "" })
    const [error, setError] = useState({ emailError: "", passwordError: "", confirmPasswordError: "" })
    const handleEmailInput = event => {
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setError({ ...error, emailError: "" })
        }
        else {
            setUserInfo({ ...userInfo, email: "" })
            setError({ ...error, emailError: "invalid email" })
        }

    }
    const handlePasswordInput = event => {
        if (/^.{6,}$/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setError({ ...error, passwordError: "" })
        }
        else {
            setUserInfo({ ...userInfo, password: "" })
            setError({ ...error, passwordError: "password too short" })
        }
    }
    const handleConfirmPasswordInput = event => {
        if (event.target.value !== userInfo.password) {
            setError({ ...error, confirmPasswordError: "password don't match" })
            setUserInfo({ ...userInfo, confirmPassword: "" })

        } else {
            setError({ ...error, confirmPasswordError: "" })
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
        }
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = event => {
        event.preventDefault()
        if (userInfo.password !== userInfo.confirmPassword) {
            return;
        }
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    useEffect(() => {
        if (user) {
            toast.success("user created")
        }
    }, [user])
    useEffect(() => {
        if (hookError) {
            toast.error("something went wrong", { id: "1" })
        }
    }, [hookError])
    return (
        <>
            <div className='login-container'>
                <div className='form-container'>
                    <h1 className='login-title'>Please Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleEmailInput} placeholder='email' type="email" name="email" id="email" required />
                        {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                        <input onChange={handlePasswordInput} placeholder='password' type="password" name="password" id="password" required />
                        {error.passwordError && <p className='text-danger'>{error.passwordError}</p>}
                        <input onChange={handleConfirmPasswordInput} placeholder='confirm password' type="password" name="confirmPassword" id="confirmPassword" required />
                        {error.confirmPasswordError && <p className='text-danger'>{error.confirmPasswordError}</p>}
                        <input className='submit-btn' type="submit" value='login' />
                    </form>
                    <p style={{ color: "#523B3B" }} className='mt-1'>Already have an account? <Link style={{ textDecoration: "none" }} to='/login'>Please Login</Link></p>
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
            <ToastContainer />
        </>
    );
};

export default Register;