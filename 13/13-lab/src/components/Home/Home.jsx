import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles.header}>
          <div className={styles["left-side"]}>
            <div className={styles["rs-1200"]}>RS-1200 Prototype 35</div>
            <span>Free Responsive Template</span>
          </div>
          <div className={styles["right-side"]}>
            <span className={styles["header-info"]}>info@domain.com</span>
            <span>|</span>
          </div>
        </div>
        <div className={styles.menu}>
          <span className={styles['menu-item']}>homepage</span>
          <span className={styles['menu-item']}>pages</span>
          <span className={styles['menu-item']}>elements</span>
          <span className={styles['menu-item']}>portfolio layouts</span>
          <span className={styles['menu-item']}>gallery layouts</span>
          <span className={styles['menu-item']}>link text</span>
          <span className={styles['menu-item']}>a very long link text</span>
        </div>
        <div className={styles['swiper']}>
        </div>
        <section className={styles['four-headlines']}>
          <div className={styles.left}>
            
          </div>
          <div className={styles.right}>

          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
