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
          <span className={styles["menu-item"]}>homepage</span>
          <span className={styles["menu-item"]}>pages</span>
          <span className={styles["menu-item"]}>elements</span>
          <span className={styles["menu-item"]}>portfolio layouts</span>
          <span className={styles["menu-item"]}>gallery layouts</span>
          <span className={styles["menu-item"]}>link text</span>
          <span className={styles["menu-item"]}>a very long link text</span>
        </div>
        <div className={styles["swiper"]}></div>
        <section className={styles["four-headlines"]}>
          <div className={styles.left}>
            <div className={styles["four-template"]}>
              <div className={styles["cube-div"]}>
                <div className={styles.cube}></div>
              </div>
              <div className={styles["four-content"]}>
                <div className={styles["four-title"]}>Headline Text</div>
                <div className={styles["four-text"]}>
                  Integer imperdiet vestibulum leo ut tincidunt. In sagittis
                  diam ut leo convallis vel rutrum mauris ullamcorper.
                  Vestibulum adipiscing erat sit amet justo luctus molestie.
                </div>
                <div className={styles["four-text"]}>
                  Aliquatjusto quisque nam consequat doloreet vest orna partur
                  scetur portortis nam. Metadipiscing eget facilis elit sagittis
                  felisi eger id justo maurisus convallicitur.
                </div>
                <div className={styles['read-more']}>Read more »</div>
              </div>
            </div>
            <div className={styles["four-template"]}>
              <div className={styles["cube-div"]}>
                <div className={styles.cube}></div>
              </div>
              <div className={styles["four-content"]}>
                <div className={styles["four-title"]}>Headline Text</div>
                <div className={styles["four-text"]}>
                  Integer imperdiet vestibulum leo ut tincidunt. In sagittis
                  diam ut leo convallis vel rutrum mauris ullamcorper.
                  Vestibulum adipiscing erat sit amet justo luctus molestie.
                </div>
                <div className={styles["four-text"]}>
                  Aliquatjusto quisque nam consequat doloreet vest orna partur
                  scetur portortis nam. Metadipiscing eget facilis elit sagittis
                  felisi eger id justo maurisus convallicitur.
                </div>
                <div className={styles['read-more']}>Read more »</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
          <div className={styles["four-template"]}>
              <div className={styles["cube-div"]}>
                <div className={styles.cube}></div>
              </div>
              <div className={styles["four-content"]}>
                <div className={styles["four-title"]}>Headline Text</div>
                <div className={styles["four-text"]}>
                  Integer imperdiet vestibulum leo ut tincidunt. In sagittis
                  diam ut leo convallis vel rutrum mauris ullamcorper.
                  Vestibulum adipiscing erat sit amet justo luctus molestie.
                </div>
                <div className={styles["four-text"]}>
                  Aliquatjusto quisque nam consequat doloreet vest orna partur
                  scetur portortis nam. Metadipiscing eget facilis elit sagittis
                  felisi eger id justo maurisus convallicitur.
                </div>
                <div className={styles['read-more']}>Read more »</div>
              </div>
            </div>
            <div className={styles["four-template"]}>
              <div className={styles["cube-div"]}>
                <div className={styles.cube}></div>
              </div>
              <div className={styles["four-content"]}>
                <div className={styles["four-title"]}>Headline Text</div>
                <div className={styles["four-text"]}>
                  Integer imperdiet vestibulum leo ut tincidunt. In sagittis
                  diam ut leo convallis vel rutrum mauris ullamcorper.
                  Vestibulum adipiscing erat sit amet justo luctus molestie.
                </div>
                <div className={styles["four-text"]}>
                  Aliquatjusto quisque nam consequat doloreet vest orna partur
                  scetur portortis nam. Metadipiscing eget facilis elit sagittis
                  felisi eger id justo maurisus convallicitur.
                </div>
                <div className={styles['read-more']}>Read more »</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
