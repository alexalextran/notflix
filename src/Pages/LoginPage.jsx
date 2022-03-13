import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background from '../assets/signupbg.png'
import { useAuth } from '../Contexts/AuthContext';

const Loginpage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setloading(true)
         await login(emailRef.current.value, passwordRef.current.value)
         navigate("/home");

        } catch{
            window.alert("Failed To sign in!")
        }
        setloading(false)
        
    }
   
    return (
     <section className='signup' style={{backgroundImage: `url(${background})`}}>
     { currentUser.email}
        <div className='signupcard'>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input placeholder='Email' required ref={emailRef}></input>
        <input placeholder='Password Minimum 6 characters' required ref={passwordRef}></input>
        <button disabled={loading}>Log In</button>
        </form>

        <p>Don't have an account? <Link to="/"><a id='signin__redirect'>Create an account here</a></Link></p>

        </div>
        </section>
    );
}

export default Loginpage;
