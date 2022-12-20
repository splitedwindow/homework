import React from "react";
import "./Services.scss";

// img's
import downloadPng from "../imgs/small/download.png";
import syncPng from "../imgs/small/sync.png";
import monitorPng from "../imgs/small/monitor.png";
import projectPng from "../imgs/small/project.png";

function Services() {
  return (
    <>
      <div className="site-section darker-white" id="services">
        <div className="container">
          <div className="wrapper">
            <h1 className="title">Services</h1>
            <div className="secondary-text width-450">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              possimus distinctio ex. Natus totam voluptatibus animi aspernatur
              ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore
              molestias blanditiis consequuntur sunt nisi.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="img-wrapper">
              <img src={projectPng} />
            </div>
            <div className="small-title">
              HTMLS5/CSS3
            </div>
            <div className="secondary-text">
              Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
              mollitia quibusdam temporibus culpa dolore molestias blanditiis
              consequuntur sunt nisi.
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={projectPng} />
            </div>
            <div className="small-title">
              HTMLS5/CSS3
            </div>
            <div className="secondary-text">
              Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
              mollitia quibusdam temporibus culpa dolore molestias blanditiis
              consequuntur sunt nisi.
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={projectPng} />
            </div>
            <div className="small-title">
              HTMLS5/CSS3
            </div>
            <div className="secondary-text">
              Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
              mollitia quibusdam temporibus culpa dolore molestias blanditiis
              consequuntur sunt nisi.
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={projectPng} />
            </div>
            <div className="small-title">
              HTMLS5/CSS3
            </div>
            <div className="secondary-text">
              Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
              mollitia quibusdam temporibus culpa dolore molestias blanditiis
              consequuntur sunt nisi.
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Services;
