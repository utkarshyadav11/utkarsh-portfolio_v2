import React from "react";
import styles from "../styles/page.module.css";
import { useState } from "react";
const page = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const {fullname, email, message} = data;
    if (fullname && email && message){
    const res =  fetch("https://utkarshyadav-web-default-rtdb.firebaseio.com/userDataRecords.json",{
      method : "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),

    });
    if(res){
      alert("Data Stored");
    } else {
      alert("form not filled");
    }
  } else {
    alert("plz fill the form");
  }

  };


  return (
    <>
      <div className="custom-shape-divider-top-1684767302">
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

      <div className={styles.top}>
        <div className="row">
          <div className="col-md-6 p-1">
            <div className={styles.c_title}>Let's get in touch</div>
            <div className={styles.c_desc}>
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </div>
            <div className={styles.c_info}>Living In:</div>
            <div className={styles.c_ans}>Mumbai, Maharashtra</div>
            <div className={styles.c_info}>Call:</div>
            <div className={styles.c_ans}>9696960221</div>
          </div>

          <div className="col-md-6">
            <div className={styles.c_title}>Estimate your Project?</div>
            <form className="form" onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput" className="form-label">
                  What is Your Name
                </label>
                <input
                  type="Name"
                  name="fullname"
                  className="form-control"
                  id="exampleFormControlInput"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label">
                  What is Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label">
                  How can I Help you?:
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button className="button-27" role="button">
              Submit
            </button>
              
            </form>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
