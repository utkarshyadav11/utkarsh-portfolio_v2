import React from "react";
import styles from "../styles/know_me.module.css";
import animationData6 from "../jso/hosting.json";
import animationData7 from "../jso/blog.json";
import animationData8 from "../jso/app.json";
import animationData9 from "../jso/seo.json";
import animationData11 from "../jso/frontend.json";
import animationData12 from "../jso/web d.json";
import Lottie from "lottie-react";
import Resume from "../Components/Resume";

const page = () => {
  return (
    <>
      <div className={styles.about_me}>
        <button className={styles.about}>What I Do?</button>
        <div className={styles.more_detail}>
          How I can help your next project
        </div>

        <div className={styles.cards_outer}>
          <div className="row">
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData8}
                  />
                </div>
                <div className="card-body">
                  <h5 className={styles.card_title}>Web Design</h5>
                  <p className={styles.card_text}>
                    Professional web design that captivates users and boosts
                    online success. Transforming ideas into stunning websites
                    that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData9}
                  />
                </div>
                <div className="card-body">
                  <h5 className={styles.card_title2}>SEO</h5>
                  <p className={styles.card_text}>
                    Boost your online visibility and drive organic traffic with
                    our expert SEO services. Tailored strategies that elevate
                    your website's rankings and maximize your digital presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData12}
                  />
                </div>

                <div className="card-body">
                  <h5 className={styles.card_title3}>Web development</h5>
                  <p className={styles.card_text}>
                    Transforming concepts into robust, interactive websites
                    through innovative web development solutions. Customized
                    coding and seamless functionality for an exceptional online
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData11}
                  />
                </div>

                <div className="card-body">
                  <h5 className={styles.card_title4}>Frontend development</h5>
                  <p className={styles.card_text}>
                    Crafting visually stunning and user-friendly interfaces with
                    our frontend development expertise. Enhancing user
                    engagement and delivering seamless browsing experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData7}
                  />
                </div>

                <div className="card-body">
                  <h5 className={styles.card_title5}>Blogs</h5>
                  <p className={styles.card_text}>
                    Discover informative and engaging blog content that keeps
                    readers captivated. Expertly crafted articles that educate,
                    entertain, and inspire.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: "34px" }}>
              <div className="card" style={{ width: "16rem" }}>
                <div className="icon-outer">
                  <Lottie
                    className="icon-height"
                    animationData={animationData6}
                  />
                </div>

                <div className="card-body">
                  <h5 className={styles.card_title6}>Web hosting</h5>
                  <p className={styles.card_text}>
                    Collaborating with leading hosting providers to deliver
                    reliable and scalable hosting solutions. Ensuring your
                    website stays online and performs at its best
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Resume />
    </>
  );
};

export default page;
