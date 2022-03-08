import React, { useRef } from 'react';
import {
    ChevronRight
  } from "react-bootstrap-icons";

const Categorywrapper = (props) => {

const arrowRef = useRef();
var right = 0
const carousel = (e) => {
    
    if(e.target === arrowRef.current){
        console.log(arrowRef.current.parentElement)
        right += 80
        console.log(right)
        arrowRef.current.parentElement.style.transform = `translateX(-${right}vw)`
    }
}



 


    return (
        <section className='trending'>
        <h1>{props.title}</h1>

        
        <div className='card__wrapper'>

        
        <div className='tending__cards'>
        <ChevronRight className='arrowRight' ref={arrowRef} onClick={carousel} />
            { 
                props.loadingstate
            }
        </div>
            </div>
        </section>
    );
}

export default Categorywrapper;
