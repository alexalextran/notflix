import axios from 'axios';
import React, { useEffect } from 'react';
import Trending from '../UI/Trending';


const Homepage = () => {

    
     const gettrending = async (type) => {
         if(type=="tending"){
        var {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
       return {data}
         }
         
    }
  
 

    return (
        <div>
            HOMEPAGE!!!!!!!!!!!!!!
            <Trending title="Trending Now" fn={gettrending}/>
          
            
          
        </div>
    );
}

export default Homepage;
