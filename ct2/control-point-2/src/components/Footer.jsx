import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="darker-white">
        <div className="container">
          <div className="row">
            <div className="footer-about footer-section">
              <div className="footer-title family-oswald">about us</div>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consectetur ut hic ipsum et veritatis corrupti. Itaque eius
                soluta optio dolorum temporibus in, atque, quos fugit sunt sit
                quaerat dicta.
              </div>
            </div>
            <div className="footer-links footer-section">
              <div className="footer-title family-oswald">about us</div>
              <a href="" className="footer-link">
                Home
              </a>
              <a href="" className="footer-link">
                Projects
              </a>
              <a href="" className="footer-link">
                Process
              </a>
              <a href="" className="footer-link">
                Testimonials
              </a>
              <a href="" className="footer-link">
                Services
              </a>
            </div>
            <div className="footer-subscribe footer-section">
              <div className="footer-title family-oswald">subscribe</div>
              <div className="secondary-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt incidunt iure iusto architecto? Numquam, natus?
              </div>
              <div className="subscribe-wrapper">
                <input type="text" placeholder="Email" />
                <button className="family-oswald">subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
