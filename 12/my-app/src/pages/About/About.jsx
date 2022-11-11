import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="content-wrapper">
          <div className="author-card">
            <div className="author-pic"></div>
            <div className="card-content">
              <div className="title">About me</div>
              <div className="text2">
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </div>
              <div className="smaller-title">
                Static and dynamic content editing
              </div>
              <div className="text2">
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </div>
              <div className="button">
                <Link to="/contact" className="contact-link">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
