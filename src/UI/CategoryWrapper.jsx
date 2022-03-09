import React, { useRef, useState } from 'react';
import {
    ChevronRight
  } from "react-bootstrap-icons";

const Categorywrapper = (props) => {

const arrowRef = useRef();
const [right, setright] = useState(100);

const carousel = (e) => {
    
    if(e.target === arrowRef.current){
        // console.log(arrowRef.current.parentElement.children[1].children)
        setright(right + 100)

       
        var html = arrowRef.current.parentElement.children[1].children
        console.log(right)
    }   

    for (let i = 0; i < html.length; i++) {
            html[i].style.transform = `translateX(-${right}vw)`
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
