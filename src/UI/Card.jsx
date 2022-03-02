import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PlayCircleFill, PlusCircle, HandThumbsUp, HandThumbsDown } from 'react-bootstrap-icons';

const Card = (props) => {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [img, setimg] = useState();
  const [loaded, setloaded] = useState(false);

  const getDetails = async () => {
    
    try{

    
      var hehehaw = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e&append_to_response=images&include_image_language=en`)
  } catch (error){
    var hehehaw = await axios.get(`https://api.themoviedb.org/3/tv/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e&append_to_response=images&include_image_language=en`)


  }

 

  setdata(hehehaw.data)
    setloaded(true)


if(data.images.backdrops.length !== 0){
  setimg(data.images.backdrops[0].file_path)
 
}
else{
  setimg(props.img)
}



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
    <div className='card__detailed--top'>
       {loaded ? <img className='card__detailed--image' src={`https://image.tmdb.org/t/p/w500${img}`}></img> : "loading"}
    </div>
    <div>
    <div className=''> 
      <PlayCircleFill />
      <PlusCircle />
      <HandThumbsUp />
      <HandThumbsDown />
    </div>
      {loaded ? <p>{name}</p> : "loading"}
    </div>
    
       
        </div>
        </div>

       
        </>
    );
}

export default Card;
