import React from "react";
import styles from "../styles/page.module.css";


const about = () => {
  return (
    <div className={styles.first}>
      <button className={styles.about} >About Me</button>
      <div className={styles.more} >Know Me More</div>
      <div className="control">
      <div className="row">
        <div  className="col-md-8 eight">
          <div className={styles.hi} >Hi, I'm <span className={styles.span} > Utkarsh Yadav</span></div>
          <div className={styles.bio} >
            I am a passionate frontend UI developer with one year of experience
            specializing in building engaging and user-friendly interfaces. I am
            currently focused on React and Next.js, leveraging their powerful
            capabilities to create dynamic and efficient web applications.{" "}
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.one} >1 </div>
          <div className={styles.exp} >Years of Experience</div>
        </div>
      </div>
      </div>

      <div className={styles.gap}>
      <div className="row">
      
        <div className="col-md-3">
          <div className={styles.bio_title} >Name:</div>
          <div className={styles.bio_data} >Utkarsh yadav.</div>
        </div>
        <div className="col-md-3">
          <div className={styles.bio_title} >Email:</div>
          <div className={styles.bio_data} >Utkarshyadav6745@gmail.com</div>
        </div>
        <div className="col-md-3">
          <div className={styles.bio_title} >Date of birth:</div>
          <div className={styles.bio_data} >11 November, 1999</div>
        </div>
        <div className="col-md-3">
          <div className={styles.bio_title} >From:</div>
          <div className={styles.bio_data} >Mumbai, Maharashtra.</div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default about;
