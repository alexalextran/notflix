import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  PlayCircleFill,
  PlusCircle,
  HandThumbsUp,
  HandThumbsDown,
 CaretDownSquare,
  StarFill,
} from "react-bootstrap-icons";

const Card = (props) => {
  const [data, setdata] = useState();
  const [name, setname] = useState();
  const [img, setimg] = useState();
  const [runtime, setruntime] = useState();
  const [rating, setrating] = useState();
  const [loaded, setloaded] = useState(false);

  const getDetails = async () => {
    try {
      var hehehaw = await axios.get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e&append_to_response=images&include_image_language=en`
      );
    } catch (error) {
      var hehehaw = await axios.get(
        `https://api.themoviedb.org/3/tv/${props.id}?api_key=96b4f7f5b36d1f202a75b5f548cf311e&append_to_response=images&include_image_language=en`
      );
    }

    setdata(hehehaw.data);
    setloaded(true);
    console.log(data)
  
    if (data.images.backdrops.length !== 0) {
      setimg(data.images.backdrops[0].file_path);
    } else {
      setimg(props.img);
    }

    if (data.vote_average !== null || undefined) {
      setrating(data.vote_average);
    } else {
      setrating("N/A");
    }

    if (data.original_name == undefined || null) {
      setname(data.title);
    } else {
      setname(data.name);
    }

    if (data.runtime !== (null || undefined)) {
      setruntime(data.runtime + "min");
    } else if (data.episode_run_time[0] !== (null || undefined)){
      setruntime(data.episode_run_time  + "min") ;
    } else{
      setruntime(" ")
    }


  };

  useEffect(() => {
    getDetails();
  }, [loaded]);

  return (
    <>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500${props.img}`}></img>

        <div className="card__detailed">
          <div className="card__detailed--top">
            {loaded ? (
              <img
                className="card__detailed--image"
                src={`https://image.tmdb.org/t/p/w500${img}`}
              ></img>
            ) : (
              "loading"
            )}
          </div>

          <div className="card__detailed--bottom">
            <div className="card__detailed--icons">
            <div>
              <PlayCircleFill />
              <PlusCircle />
              <HandThumbsUp />
              <HandThumbsDown />
            </div>
            <div>
            <CaretDownSquare />
            </div>
              
            </div>
            <div className="card__detailed--ra-name">
              {loaded ? <p>{name}</p> : "loading"}
              {loaded ? <p> {rating} <div className="star-icon"><StarFill/></div>
              <div>{runtime}</div>
              
              </p> : "loading"}
            </div>
                { loaded ?
                <ul>
                   {( data.genres.slice(0,3).map(element =>
                  <li>{element.name}</li>
                  ))}
                </ul>
                
                  : 
                  "loading"
                }
           
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
