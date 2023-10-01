import React from "react";
import Muluken from "./muluken";
import Eliyas from "./eliyas";

const myfunction = "Muluken";
export default function App() {
  if (myfunction === 'Muluken') {
    return (
      <>
        <div className="container">
          <div className="row">
            <Muluken />
            <Muluken />
            <Muluken/>
            <Muluken/>
          </div>
          
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <Eliyas />
            <Muluken />
            <Eliyas/>
            <Muluken/>
          </div>
        </div>
      </>
    );
  }
}
