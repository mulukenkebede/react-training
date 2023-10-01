import React from 'react'
import Props from "./props";
import Data from "./data";

const Muluken = ()=>{
    return(
        <>
         <Props
            name = {Data[0].name}
            description={Data[0].description}
            nickname={Data[0].nickname}
            imagesrc= {Data[0].imagesrc}
          />
        
        </>
    )
}


export default Muluken;