import React from "react";
import { Link } from "react-router-dom";
import { CardsData } from "./CardsData";
import "./Cards.css";

function Cards({ navigation }) {
  const clickedTag = (tagName) => {
    console.log(tagName);
    return tagName;
  };

  return (
    <>
      <div className="content">
        <div className="cards">
          {CardsData.map((item, index) => {
            return (
              <div key={index} className="card">
                <Link to={`/${index + 1}`}>
                  <div className={item.cName}></div>
                </Link>
                <div className="card-content">
                  <div className="title">{item.title}</div>
                  <div className="text">{item.text}</div>
                  <div className="date-tag">
                    <span className="card-date">{item.date}</span>
                    <span>|</span>
                    <Link to={`categories/${item.tag}`}>
                      <span className="tag">{item.tag}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
