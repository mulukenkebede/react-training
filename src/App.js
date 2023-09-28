import React from "react";
import Props from "./props";

export default function App(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <Props
            name="muluken"
            description="this is my real web site"
            nickname="dinbicho"
          />
          <Props
            name="fozia"
            description="this is fozi ALI YIMER FARIS"
            nickname="jembere"
          />
          <Props
            name="ELIYAS"
            description="hi eliyas how is everythig goig on in this case "
            nickname="babiya"
          />
          <Props
            name="ednA"
            description="EDU HOW ARE u doing my lovely girl"
            nickname="atutu"
          />
        </div>
      </div>
    </>
  );
}
