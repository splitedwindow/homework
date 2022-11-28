import React from "react";
import styles from "./Home.module.css";
import MySwiper from "../MySwiper/MySwiper";

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
            <span className={styles.number}> +xx xxx xxxxxxxxxx</span>
          </div>
        </div>
        <div className={styles.menu}>
          <span className={styles["menu-item"]} style={{ color: "orange" }}>
            homepage
          </span>
          <span className={styles["menu-item"]}>pages</span>
          <span className={styles["menu-item"]}>elements</span>
          <span className={styles["menu-item"]}>portfolio layouts</span>
          <span className={styles["menu-item"]}>gallery layouts</span>
          <span className={styles["menu-item"]}>link text</span>
          <span className={styles["menu-item"]}>a very long link text</span>
        </div>
        <MySwiper />
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
                <div className={styles["read-more"]}>Read more »</div>
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
                <div className={styles["read-more"]}>Read more »</div>
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
                <div className={styles["read-more"]}>Read more »</div>
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
                <div className={styles["read-more"]}>Read more »</div>
              </div>
            </div>
          </div>
        </section>
        <hr style={{ width: "95%" }} />

        <section className={styles["two-headlines"]}>
          <div className={styles["two-left"]}>
            <div className={styles["two-title"]}>Headline Text</div>
            <div className={styles["two-text"]}>
              Aliquatjusto quisque nam consequat doloreet vest orna partur
              scetur portortis nam. Metadipiscing eget facilis elit sagittis
              felisi eger id justo maurisus convallicitur.
            </div>
            <div className={styles["two-text"]}>
              Vestibulumaccumsan egestibulum eu justo convallis augue estas
              aenean elit intesque sed. Facilispede estibulum nulla orna nisl
              velit elit ac aliquat non tincidunt.
            </div>
            <div className={styles["two-text"]}>
              Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.
              Laoremut vitae doloreet condimentumst phasellentes dolor ut a
              ipsum id consectetus.
            </div>

            <div className={styles["two-rectangle"]}></div>
          </div>
          <div className={styles["two-right"]}>
            <div className={styles["two-rectangle"]}></div>
            <div className={styles["two-title"]}>Headline Text</div>
            <div className={styles["two-text"]}>
              Aliquatjusto quisque nam consequat doloreet vest orna partur
              scetur portortis nam. Metadipiscing eget facilis elit sagittis
              felisi eger id justo maurisus convallicitur.
            </div>
            <div className={styles["two-text"]}>
              Vestibulumaccumsan egestibulum eu justo convallis augue estas
              aenean elit intesque sed. Facilispede estibulum nulla orna nisl
              velit elit ac aliquat non tincidunt.
            </div>
            <div className={styles["two-text"]}>
              Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.
              Laoremut vitae doloreet condimentumst phasellentes dolor ut a
              ipsum id consectetus.
            </div>
          </div>
        </section>
        <footer>
          <div className={styles["footer-section"]}>
            <div className={styles["footer-navigation"]}>
              <div className={styles["nav-title"]}>Footer Navigation</div>
              <hr className={styles.underline} />

              <div className={styles["nav-list"]}>
                <span className={styles["nav-list-item"]}>Home Page</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Our Services</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Meet the Team</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Blog</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Contuct Us</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Gallery</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Portfolio</span>
                <hr className={styles["darker-underline"]} />
                <span className={styles["nav-list-item"]}>Online Shop</span>
                <hr className={styles["darker-underline"]} />
              </div>
            </div>
          </div>
          <div className={styles["footer-section"]}>
            <div className={styles["footer-gallery"]}>
              <div className={styles["nav-title"]}>Latest Gallery</div>
              <hr className={styles.underline} />
              <div className={styles["gallery-grid"]}>
                <div className={styles["grid-column1"]}>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                </div>
                <div className={styles["grid-column2"]}>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                </div>
                <div className={styles["grid-column1"]}>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                  <div className={styles["gallery-grid-item"]}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-section"]}>
            <div className={styles["footer-twitter"]}>
              <div className={styles["nav-title"]}>From Twitter</div>
              <hr
                className={styles.underline}
                style={{ marginBottom: "40px" }}
              />
              <div className={styles["twitter-text"]}>
                @<span style={{ color: "orange" }}>name</span>RT @
                <span style={{ color: "orange" }}>name</span>Donec suscipit
                vehicula turpis sed lutpat Quisque vitae quam neque.{" "}
                <span style={{ fontSize: "11px", color: "orange" }}>
                  about 9 hours ago
                </span>
                <hr
                  className={styles["darker-underline"]}
                  style={{ margin: "20px 0" }}
                />
              </div>
              <div className={styles["twitter-text"]}>
                @<span style={{ color: "orange" }}>name</span>RT @
                <span style={{ color: "orange" }}>name</span>Donec suscipit
                vehicula turpis sed lutpat Quisque vitae quam neque.{" "}
                <span style={{ fontSize: "11px", color: "orange" }}>
                  about 9 hours ago
                </span>
                <hr
                  className={styles["darker-underline"]}
                  style={{ margin: "20px 0" }}
                />
              </div>
              <div className={styles["twitter-text"]}>
                @<span style={{ color: "orange" }}>name</span>RT @
                <span style={{ color: "orange" }}>name</span>Donec suscipit
                vehicula turpis sed lutpat Quisque vitae quam neque.{" "}
                <span style={{ fontSize: "11px", color: "orange" }}>
                  about 9 hours ago
                </span>
                <hr
                  className={styles["darker-underline"]}
                  style={{ margin: "20px 0" }}
                />
              </div>
            </div>
          </div>
          <div className={styles["footer-section"]}>
            <div className={styles["footer-contact"]}>
              <div className={styles["nav-title"]}>Contact Us</div>
              <hr
                className={styles.underline}
                style={{ marginBottom: "40px" }}
              />

              <span className={styles["name"]}>Name *</span>
              <br />
              <input type="text" className={styles["text-input"]} />
              <span className={styles["name"]}>Email *</span>
              <br />
              <input type="text" className={styles["text-input"]} />
              <textarea className={styles["textarea"]}></textarea>
              <div className={styles.buttons}>
                <button className={styles.submit}>Submit</button>
                <button className={styles.reset}>Reset</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
