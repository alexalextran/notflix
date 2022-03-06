import React from 'react';
import {
    ChevronRight
  } from "react-bootstrap-icons";

const Categorywrapper = (props) => {
    return (
        <section className='trending'>
        <h1>{props.title}</h1>

        <ChevronRight className='arrowRight'/>
        <div className='card__wrapper'>

        
        <div className='tending__cards'>
            { 
                props.loadingstate
            }
        </div>
            </div>
        </section>
    );
}

export default Categorywrapper;
