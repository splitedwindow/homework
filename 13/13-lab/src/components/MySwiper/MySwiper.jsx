import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./MySwiper.module.css";

function MySwiper() {
  const colors = ["#BD525C", "#4694A6", "#F68225"];
  return (
    <div className={styles["carousel-wrap"]}>
      <Carousel height={"500px"}>
        {colors.map((color) => (
          <div
            style={{
              backgroundColor: color,
            }}
            className={styles["carousel-elem"]}
          ></div>
        ))}
      </Carousel>
    </div>
  );
}
export default MySwiper;
