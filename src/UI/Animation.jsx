import React, { useEffect, useState } from 'react';
import Categorywrapper from './CategoryWrapper';

const Animation = (props) => {
    const [jsondata, setjsondata] = useState([]);
    const [loading, setloading] = useState(true);

    async function awaitdata(){
        props.fn(props.search).then(
          (resolved) =>  {setjsondata(resolved.data.results)
             setloading(false)
          }
        )
    }

   
    useEffect(() => {
        awaitdata()
    }, [loading]);




    return (
       <Categorywrapper title={props.title} loadingstate={props.skeleton(jsondata)}/>
    );
}

export default Animation;
