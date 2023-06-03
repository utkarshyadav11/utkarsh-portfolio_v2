import React from 'react'
import styles from "../styles/page.module.css";
import animationData from "../jso/coding.json";
import animationData1 from "../jso/54425-html-5.json";
import animationData2 from "../jso/63207-css3.json";
import animationData3 from "../jso/111794-javascript.json";
import animationData4 from "../jso/react-logo-spinning.json";
import animationData5 from "../jso/github-icon.json";
import Lottie from "lottie-react";
const Com = () => {
  return (
    <div>



    <div className="main">
    <div className={styles.row}>
      <div className="col-md-6" id={styles.img}>
        <Lottie animationData={animationData} />
      </div>
      <div className="col-md-6" style={{ marginTop: "9px" }}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            - Hi, I'm Utkarsh Yadav
            <span className={styles.name}> Frontend UI Developer</span>
          </h1>
          <p className={styles.desc}>
            I am a passionate frontend UI developer with one year of
            experience specializing in building engaging and user-friendly
            interfaces. I am currently focused on React and Next.js,
            leveraging their powerful capabilities to create dynamic and
            efficient web applications. With a strong foundation in HTML,
            CSS, and JavaScript, I excel at translating design concepts into
            pixel-perfect, responsive layouts.
          </p>
        </div>

        <a className="resume" href="/Utkarsh yadav.pdf" download="cv">
          Download CV
        </a>
      </div>
    </div>
    <div className={styles.asd}>
      <Lottie className={styles.a1} animationData={animationData1} />
      <Lottie className={styles.a2} animationData={animationData2} />
      <Lottie className={styles.a3} animationData={animationData3} />
      <Lottie className={styles.a4} animationData={animationData4} />
      <Lottie className={styles.a5} animationData={animationData5} />
    </div>

    <div className="custom-shape-divider-top-1684844949">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>


    <div className="custom-shape-divider-bottom-1684561807">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>

  </div>
      
    </div>
  )
}

export default Com
