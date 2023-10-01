import React from "react";
import Muluken from "./muluken";
import Eliyas from "./eliyas";

const myfunction = "Eliyas";
export default function App() {
  
   return (
      <>
        <div className="container">
          <div className="row">
            {myfunction === 'Muluken'?<Muluken />:<Eliyas/>}
          </div>
          
        </div>
      </>
    );
  } 