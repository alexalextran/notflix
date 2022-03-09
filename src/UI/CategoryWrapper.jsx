import React, { useRef } from 'react';
import {
    ChevronRight
  } from "react-bootstrap-icons";

const Categorywrapper = (props) => {

const arrowRef = useRef();
var right = 0
const carousel = (e) => {
    
    if(e.target === arrowRef.current){
        console.log(arrowRef.current.parentElement.children[1])
        right += 80
        console.log(right)
        arrowRef.current.parentElement.children[1].style.transform = `translateX(-${right}vw)`
    }
}



 


    return (
        <section className='trending'>
        <h1>{props.title}</h1>

        
        <div className='card__wrapper'>
        <ChevronRight className='arrowRight' ref={arrowRef} onClick={carousel} />
        
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
