import React from "react";
import "./Testimonials.scss";

function Testimonials() {
  return (
    <>
      <div className="site-section" id="testimonials">
        <div className="container d-flex">
          <h1 className="title">testimonials</h1>
          <div className="secondary-text center-text">
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
            mollitia quibusdam temporibus culpa dolore molestias blanditiis
            consequuntur sunt nisi.
          </div>
        </div>
        <div className="shit-wrapper">
          <div className="double-swiper d-flex container">
            <div className="content-wrapper">
              <div className="quote">
                <span>"</span>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Dignissimos corrupti, obcaecati repudiandae,
                animi ad quos. Eius expedita ipsa qui autem.<span>"</span>
              </div>
              <p className="name family-oswald">— Jean Doe</p>
            </div>
            <div className="swiper-image"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
