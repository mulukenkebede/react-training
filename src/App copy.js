import React from "react";
import Props from "./props";
import Data from './data'

//this ia app commponemt where we do not use map method 
export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Props
            name = {Data[0].name}
            description={Data[0].description}
            nickname={Data[0].nickname}
            imagesrc= {Data[0].imagesrc}
          />
          <Props
            name = {Data[1].name}
            description={Data[1].description}
            nickname={Data[1].nickname}
            imagesrc= {Data[1].imagesrc}
          />
          <Props
             name = {Data[2].name}
             description={Data[2].description}
             nickname={Data[2].nickname}
             imagesrc= {Data[2].imagesrc}
          />
          <Props
             name = {Data[3].name}
             description={Data[3].description}
             nickname={Data[3].nickname}
             imagesrc= {Data[3].imagesrc}
          />
        </div>
      </div>
    </>
  );
}
