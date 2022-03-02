import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ConeStriped } from 'react-bootstrap-icons';

const Card = (props) => {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [loaded, setloaded] = useState(false);

  const getDetails = async () => {
    
    try{

    
      var hehehaw = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e`)
  } catch (error){
    var hehehaw = await axios.get(`https://api.themoviedb.org/3/tv/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e`)
    
  }

 

  setdata(hehehaw.data)

setloaded(true)
  if(data.original_name == undefined || null){
    setname(data.title)
  } else{
 
    setname(data.name)
  }
}





  useEffect(() => {
    getDetails()
   
  }, [loaded]);

 
  
    return (
      <>
        <div className='card'>
          <img src={`https://image.tmdb.org/t/p/w500${props.img}`}></img> 
          
            <div className='card__detailed'>
        {loaded ? name : "loading"}
        </div>
        </div>

       
        </>
    );
}

export default Card;
