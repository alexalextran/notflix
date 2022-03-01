
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
 
    useEffect(() => {
        awaitdata()
    }, [loading]);




    return (
       <Categorywrapper title="Trending" skeleton={props.skeleton(jsondata)}/>
    );
}

export default Trending;
