import React from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import { CardsData } from "./CardsData";
import { Link } from "react-router-dom";

function Categories() {
  const { tagName } = useParams();

  return (
    <>
      <div className="content">
        <div className="cards">
          {CardsData.map((item, index) => {
            let redirect = "/" + String(index + 1);
            if (item.tag === tagName) {
              return (
                <div key={index} className="card">
                  <Link to={redirect}>
                    <div className={item.cName}></div>
                  </Link>
                  <div className="card-content">
                    <div className="title">{item.title}</div>
                    <div className="text">{item.text}</div>
                    <div className="date-tag">
                      <span className="card-date">{item.date}</span>
                      <span>|</span>
                      <Link>
                        <span className="tag">{item.tag}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
