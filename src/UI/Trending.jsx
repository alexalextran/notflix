
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Categorywrapper from './CategoryWrapper';

const Trending = (props) => {
    const [jsondata, setjsondata] = useState([]);
    const [loading, setloading] = useState(true);

    async function awaitdata(){
        props.fn("tending").then(
          (resolved) =>  {setjsondata(resolved.data.results)
             setloading(false)
          }
        )
    }
 
    console.log(jsondata)
    useEffect(() => {
        awaitdata()
    }, []);

    const skeleton = () =>{
        if(loading == false){
            return jsondata.map(element => <Card key={element.id} img={element.backdrop_path} />)
        }
        else{
            return "loading"
        }

    }

    return (
       <Categorywrapper title="Trending" skeleton={skeleton}/>
    );
}

export default Trending;
