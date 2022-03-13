import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/signupbg.png'
import { useAuth } from '../Contexts/AuthContext';


const SignUpPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup, currentUser } = useAuth()
    const [loading, setloading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setloading(true)
         await signup(emailRef.current.value, passwordRef.current.value) 
        } catch{
            window.alert("Failed To Create An Account!")
        }
        setloading(false)
        
    }
   
    return (
     <section className='signup' style={{backgroundImage: `url(${background})`}}>
    
        <div className='signupcard'>
        <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <input placeholder='Email' required ref={emailRef}></input>
        <input placeholder='Password Minimum 6 characters' required ref={passwordRef}></input>
        <button disabled={loading}>SignUp</button>
        </form>

        <p>Already Have An Account? <Link to="/login"><a id='signin__redirect'>Sign In here</a></Link></p>

        </div>
        </section>
    );
}

export default SignUpPage;
