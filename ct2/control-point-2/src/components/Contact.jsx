import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="site-section" id="contact">
        <div className="container d-flex">
          <div className="contact-content">
            <div className="wrapper">
              <h1 className="title">contact us</h1>
              <div className="secondary-text">
                Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
                mollitia quibusdam temporibus culpa dolore molestias blanditiis
                consequuntur sunt nisi.
              </div>
              <form>
                <div className="initials">
                  <input
                    type="text"
                    placeholder="First name"
                    className="initials input-style name"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="initials input-style surname"
                  />
                </div>
                <div className="message">
                  <input
                    type="text"
                    className="input-style"
                    placeholder="Subject"
                  />
                  <div className="div">
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    cols="40"
                    rows="10"
                    placeholder="Write your message here"
                    className="initials input-style"
                  ></textarea>
                  <div style={{marginTop: "25px"}}>
                    <span className="button">
                      send message
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-image"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
