import React from 'react';

const Card = (props) => {

  

  
    return (
        <div className='card'>
          <img src={`https://image.tmdb.org/t/p/w500${props.img}`}></img>  
        </div>
    );
}

export default Card;
