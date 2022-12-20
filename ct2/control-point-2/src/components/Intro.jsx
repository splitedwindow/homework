import React from "react";
import "./Intro.scss";

// img's
import checkPng from "../imgs/small/check.png";
import downloadPng from "../imgs/small/download.png";
import syncPng from "../imgs/small/sync.png";
import monitorPng from "../imgs/small/monitor.png";
import projectPng from "../imgs/small/project.png";


function Intro() {
  return (
    <>
      <div className="intro-section container">
        <div className="double-slider">
          <div className="content-to-slide">
            <h1 className="title content-title">
              High Quality Website Templates
            </h1>
            <div className="intro-slider-text secondary-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </div>
            <span className="button">Get Started</span>
          </div>
          <div className="image-slider"></div>
        </div>
      </div>
      <div className="site-section section-1">
        <div className="container">
          <div className="block-wrapper">
            <div className="content-wrapper">
              <h1 className="title">LOVE OUR WORKS</h1>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                possimus distinctio ex. Natus totam voluptatibus animi
                aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                culpa dolore molestias blanditiis consequuntur sunt nisi.
              </div>
              <div className="secondary-text">
                Aperiam neque id, illum laudantium autem vero quae debitis
                tempora modi. Ipsa molestias enim in rem et incidunt beatae
                fugit, ab quam optio atque maiores facere est quidem, veritatis
                commodi.
              </div>
              <ul>
                <li>
                  <div className="secondary-text">
                    <img src={checkPng} />
                    Aperiam neque id illum laudantium
                  </div>
                </li>
                <li>
                  <div className="secondary-text">
                    <img src={checkPng} />
                    Maiores facere est quidem
                  </div>
                </li>
                <li>
                  <div className="secondary-text">
                    <img src={checkPng} />
                    Laudantium autem vero
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-img-cover"></div>
          </div>
        </div>
      </div>

      <div className="container section-counter">
        <div className="row">
          <div className="item-wrapper d-flex">
            <img src={syncPng} alt="" />
            <div className="wrapper">
              <h1>360</h1>
              <p>Creativity</p>
            </div>
          </div>
          <div className="item-wrapper d-flex">
            <img src={downloadPng} alt="" />
            <div className="wrapper">
              <h1>4,500</h1>
              <p>WordPress Themes</p>
            </div>
          </div>
          <div className="item-wrapper d-flex">
            <img src={monitorPng} alt="" />
            <div className="wrapper">
              <h1>120</h1>
              <p>HTML5 / CSS3</p>
            </div>
          </div>
          <div className="item-wrapper d-flex">
            <img src={projectPng} alt="" />
            <div className="wrapper">
              <h1>3,913</h1>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
