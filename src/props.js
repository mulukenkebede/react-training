import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function properties(props) {
  return (
    <>
      <div className="col-lg-3">
        <div className="card">
          <h6>my card componenet</h6>
          <img
            src={props.imagesrc}
            className="card-img-top"
            alt="this is an image"
          />
          <div className="card-body">
            <h5 className="card-title">{props.nmae}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" classname="btn btn-primary">
              {props.nickname}
              <br />
              <button className="btn btn-primary ">my fmily</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default properties;
