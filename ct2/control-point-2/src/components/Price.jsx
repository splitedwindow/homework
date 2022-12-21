import React from "react";
import "./Price.scss";

function Price() {
  return (
    <>
      <div className="site-section" id="pricing">
        <div className="container">
          <h1 className="title">choose your plan</h1>
          <div className="secondary-text center-text">
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
            mollitia quibusdam temporibus culpa dolore molestias blanditiis
            consequuntur sunt nisi.
          </div>
        </div>
      </div>
      <div className="site-section pricing-section-2 d-flex">
        <div className="container">
          <div className="pricing-cards">
            <div className="smaller-card card1">
              <div className="small-title">starters</div>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="price">
                <span>starting at</span>
                <h1 className="title">$7</h1>
                <span>per month</span>
              </div>
              <div className="secondary-text" style={{zIndex: "20"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                enim nobis aspernatur saepe dolores?
              </div>
              <div className="button-wrapper" >
                <span className="button">
                  get started
                </span>
              </div>
            </div>
            <div className="smaller-card card2" style={{zIndex: "25"}}>
            <div className="small-title">premium</div>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="price">
                <span>starting at</span>
                <h1 className="title">$75</h1>
                <span>per month</span>
              </div>
              <div className="secondary-text" style={{zIndex: "20"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                enim nobis aspernatur saepe dolores?
              </div>
              <div className="button-wrapper" >
                <span className="button">
                  get started
                </span>
              </div>
            </div>
            <div className="smaller-card card3" style={{zIndex: "20"}}>
            <div className="small-title">enterprise</div>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="price">
                <span>starting at</span>
                <h1 className="title">$390</h1>
                <span>per month</span>
              </div>
              <div className="secondary-text" style={{zIndex: "20"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                enim nobis aspernatur saepe dolores?
              </div>
              <div className="button-wrapper" >
                <span className="button">
                  get started
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
