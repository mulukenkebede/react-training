import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default Props = ()=>{
return(
    <>
    <div className="col-lg-3">
            <div class="card">
              <img src= {props.image} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">{props.nmae}</h5>
                <p class="card-text">
                  {props.description}
                </p>
                <a href="#" class="btn btn-primary">
                  {props.nickname}
                </a>
              </div>
            </div>
          </div>
        
    </>
)
}