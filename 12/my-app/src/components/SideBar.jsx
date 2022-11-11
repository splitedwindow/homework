import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import "./SideBar.css";

function SideBar() {
  
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <Link to='/'>
            <h1 style={{color: "black"}}>Milton</h1>
          </Link>
          <div className="grey-line"></div>
          <div className="text">
            Denali is a simple responsive blog template. Easily add new posts
            using the Editor or change layout and design using the Designer.
          </div>
          <div className="grey-line"></div>

          <Link to="#" className="menu-bars">
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </Link>
          <div className="grey-line"></div>
          <div className="icons">
            <AiIcons.AiFillFacebook className="small-icon"/>
            <AiIcons.AiOutlineInstagram className="small-icon"/>
            <AiIcons.AiOutlineTwitter className="small-icon"/>
            <FaIcons.FaLinkedinIn className="small-icon"/>
            <AiIcons.AiOutlineMail className="small-icon"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
