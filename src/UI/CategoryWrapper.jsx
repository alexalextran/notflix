import React from 'react';

const Categorywrapper = (props) => {
    return (
        <section className='trending'>
        <h1>{props.title}</h1>
        <div className='card__wrapper'>

        
        <div className='tending__cards'>
            { 
                props.skeleton
            }
        </div>
            </div>
        </section>
    );
}

export default Categorywrapper;
