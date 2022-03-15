import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/signupbg.png'
import frog from '../assets/frog.png'

const Fourofour = () => {
    return (
        <div className='fourofour' style={{backgroundImage: `url(${background})`}}>
            <p>Uh oh something went wrong!</p>

            <img src={frog}></img>

            <Link to="/"><a id='signin__redirect'>Head back home?</a></Link>
        </div>
    );
}

export default Fourofour;
