import React from "react";
import "./Process.scss";

// imgs
import glassesPng from "../imgs/small/glasses.png";
import implementationPng from "../imgs/small/implementation.png";
import rocketPng from "../imgs/small/rocket.png";

function Process() {
  return (
    <>
      <div className="site-section darker-white" id="process">
        <div className="container">
          <h1 className="title">OUR APPROACH</h1>
          <div className="secondary-text text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            possimus distinctio ex. Natus totam voluptatibus animi aspernatur
            ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore
            molestias blanditiis consequuntur sunt nisi.
          </div>
          <div className="row">
            <div className="card d-flex">
              <img src={glassesPng} />
              <div className="small-title">DATA GATHERING</div>
              <div className="secondary-text center-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                possimus distinctio ex. Natus totam voluptatibus animi
                aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                culpa dolore molestias blanditiis consequuntur sunt nisi.
              </div>
            </div>
            <div className="card d-flex">
              <img src={implementationPng} />
              <div className="small-title">implementation</div>
              <div className="secondary-text center-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                possimus distinctio ex. Natus totam voluptatibus animi
                aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                culpa dolore molestias blanditiis consequuntur sunt nisi.
              </div>
            </div>
            <div className="card d-flex" style={{ marginRight: 0 }}>
              <img src={rocketPng} />
              <div className="small-title">Launch</div>
              <div className="secondary-text center-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                possimus distinctio ex. Natus totam voluptatibus animi
                aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                culpa dolore molestias blanditiis consequuntur sunt nisi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
