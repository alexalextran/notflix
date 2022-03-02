import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Action from '../UI/Action';
import Animation from '../UI/Animation';
import Card from '../UI/Card';
import Comdey from '../UI/Comdey';
import Horror from '../UI/Horror';
import Korean from '../UI/Korean';
import Romance from '../UI/Romance';
import Trending from '../UI/Trending';


const Homepage = () => {
  

   

    
     const gettrending = async (type) => {
         if(type=="tending"){
        var {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
       return {data}
         } 
         else if(type == "Korean"){
           
             var {data} = (await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=96b4f7f5b36d1f202a75b5f548cf311e&language=ko&sort_by=popularity.desc&page=1&with_original_language=ko`))

              
            
            return {data}
        
         }
         else if (type !== "trending"){
            var {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${type}`);
           
            return {data}
          
             }  
           
    }

    const skeleton = (state) =>{
     
        if(state.length == 0){
            return "loading"
        }
        else{
           
            return state.map(element => {
               
                if(element.media_type == "movie"){
                    var type = "movie"
                }
                else{
                    type = "tv"
                }

            return(
            <Card key={element.id} id={element.id} img={element.backdrop_path} type={type} />
            )
           
            })
        }
    }
  
 

    return (
        <div>
            HOMEPAGE!!!!!!!!!!!!!!
            <Trending title="Trending Now" fn={gettrending} skeleton={skeleton} search={"trending"}/>
            <Comdey title="Comedy" fn={gettrending} skeleton={skeleton} search={"35"}/>
            <Action title="Action" fn={gettrending} skeleton={skeleton} search={"28"}/>
            <Romance title="Romance" fn={gettrending} skeleton={skeleton} search={"10749"}/>
            <Korean title="Korean" fn={gettrending} skeleton={skeleton} search={"Korean"}/>
            <Horror title="Horror" fn={gettrending} skeleton={skeleton} search={"27"}/>
            <Animation title="Animation" fn={gettrending} skeleton={skeleton} search={"16"}/>
          
            
          
        </div>
    );
}

export default Homepage;
