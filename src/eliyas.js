import React from 'react'
import Props from "./props";
import Data from "./data";

const Eliyas = ()=>{
    return(
        <>
         <Props
            name = {Data[1].name}
            description={Data[1].description}
            nickname={Data[1].nickname}
            imagesrc= {Data[1].imagesrc}
          />
        
        </>
    )
}


export default Eliyas;