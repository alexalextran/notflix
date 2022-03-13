import React from 'react';
import background from '../assets/signupbg.png'

const SignUpPage = () => {
    return (
     <section className='signup' style={{backgroundImage: `url(${background})`}}>
        <div className='signupcard'>
        <form>
        <h1>SignUp</h1>
        <input placeholder='Email'></input>
        <input placeholder='Password Minimum 6 characters'></input>
        <button>SignUp</button>
        </form>

        <p>Already Have An Account? <a id='signin__redirect'>Sign In here</a></p>

        </div>
        </section>
    );
}

export default SignUpPage;
