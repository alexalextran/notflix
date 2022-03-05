import React, { useRef } from 'react';

const Modal = (props) => {
    const modalRef = useRef();

 
    const toggle = (e) => {
        if(e.target === modalRef.current){
            props.toggleValue(false)
        }
    }

    return (

        <div className='modal__wrapper' ref={modalRef} onClick={toggle}>

        
        <div className='modal'>
        <div className='gradient'>
            <div></div>
             <img src={`https://image.tmdb.org/t/p/w500${props.img}`}></img>
        </div>
           
            <div>

                  <div className="modal__text">
                <h1>{props.name}</h1>
                <div className='modal__details'>
                    <p> <span>Year</span>{props.date}</p>
                    <p> <span>Views</span> {props.popularity}</p>
                    <p> <span>Original Language</span> {props.ogLanguage}</p>
                </div>
                <p>{props.overview}</p>
            </div>
            
            </div>
         
        </div>
        </div>
    );
}

export default Modal;
