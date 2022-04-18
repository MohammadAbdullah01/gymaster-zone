import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../../images/socialLogo/google.png'
import github from '../../../images/socialLogo/github.png'
import facebook from '../../../images/socialLogo/facebook.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Spinner } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const [error, setError] = useState({ emailError: "", passwordError: "" })
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
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const [signInWithGoogle, user1, loading1, hookError1] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const [signInWithGithub, user2, loading2, hookError2] = useSignInWithGithub(auth);
    const handleGithubSignIn = () => {
        signInWithGithub()
    }
    const [signInWithFacebook, user3, loading3, hookError3] = useSignInWithFacebook(auth);
    const handleFacebookLogIn = () => {
        signInWithFacebook()
    }
    useEffect(() => {
        if (user || user1 || user2 || user3) {
            toast.success("Sign in successful")
        }
    }, [user, user1, user2, user3])
    useEffect(() => {
        if (hookError || hookError1 || hookError2 || hookError3) {
            toast.error("something went wrong", { id: "1" })
        }
    }, [hookError, hookError1, hookError2, hookError3])
    return (
        <>
            <div className='login-container'>
                <div className='form-container'>
                    <h1 className='login-title'>Please Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleEmailInput} placeholder='email' type="email" name="email" id="" required />
                        {error.emailError && <p className='text-danger'>{error.emailError}</p>}
                        <input onChange={handlePasswordInput} placeholder='password' type="password" name="password" id="" required />
                        {error.passwordError && <p className='text-danger'>{error.passwordError}</p>}
                        {(loading || loading1 || loading2 || loading3) && <p className='text-center'><Spinner animation="border" variant="success" /></p>}
                        <input className='submit-btn' type="submit" value='Login' />
                    </form>
                    <p style={{ color: "#523B3B" }} className='mt-1'>New at Gymaster ? <Link style={{ textDecoration: "none" }} to='/register'>Please Register</Link></p>
                    <div className='form-or-container'>
                        <div className='form-or'></div>
                        <span className='mx-2'>OR</span>
                        <div className='form-or'></div>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn} className='social-btn'><img src={google} alt="" /><span>Continue with google</span></button>
                        <button onClick={handleGithubSignIn} className='social-btn'><img src={github} alt="" /><span>Continue with github</span></button>
                        <button onClick={handleFacebookLogIn} className='social-btn'><img src={facebook} alt="" /><span>Continue with facebook</span></button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;