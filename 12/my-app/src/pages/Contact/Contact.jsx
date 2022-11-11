import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="content">
        <div className="card">
          <div className="card-content">
            <div className="title">Get in touch</div>
            <div className="text2">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
              risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
              elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra
              augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </div>
            <div className="text2">
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Etiam porta sem malesuada magna mollis euismod. Etiam porta sem
              malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum.
            </div>
            <div className="data">
              <div className="title-input">Name</div>
              <input
                type="text"
                className="text-input"
                placeholder="Enter your name"
              />
              <div className="title-input">Email Address</div>
              <input
                type="text"
                className="text-input"
                placeholder="Enter your email address"
              />
              <div className="title-input">Message</div>
              <textarea
                type="text"
                className="text-input message-field"
                placeholder="Enter your messsage"
              />
              <div className="button" id="button-id">
                <Link className="contact-link">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
