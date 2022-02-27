import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Trending = (props) => {
    const [jsondata, setjsondata] = useState([]);

    async function gettrending  (){
        var {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        setjsondata(data.results)
        console.log("bruh")
    }
    useEffect(() => {
        gettrending()
       
    }, []);

   
    console.log(jsondata)


    return (
        <section className='trending'>
        <h1>{props.title}</h1>
        <div className='card__wrapper'>

        
        <div className='tending__cards'>
            {
                jsondata.map(element => <Card key={element.id}img={element.backdrop_path} />)
            }
        </div>
            </div>
        </section>
    );
}

export default Trending;
