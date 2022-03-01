import axios from 'axios';
import React, { useEffect } from 'react';
import Card from '../UI/Card';
import Trending from '../UI/Trending';


const Homepage = () => {

    
     const gettrending = async (type) => {
         if(type=="tending"){
        var {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
       return {data}
         }  
    }

    const skeleton = (state) =>{
        if(state.length == 0){
            return "loading"
        }
        else{
            return state.map(element => <Card key={element.id} img={element.backdrop_path} />)
        }
    }
  
 

    return (
        <div>
            HOMEPAGE!!!!!!!!!!!!!!
            <Trending title="Trending Now" fn={gettrending} skeleton={skeleton}/>
          
            
          
        </div>
    );
}

export default Homepage;
