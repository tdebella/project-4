import React from "react";
import "./LeftComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrow } from "font-awesome/fa-arrow";
import logo from '../images/logo.svg';
import arrow from '../images/icon-arrow.svg';

function LeftComp() {
  return (
    <div className="left-wrapper">
      <div class="inner-container">
              <img src={ logo } class="logo" alt="logo" />
      </div>
      <div className="title">
        We're <br />
        <span className="coming-soon">Coming soon</span>
      </div>
      <p>
        Hello fellow shoppers! We're currently building our new <br /> fashion
        store. Add your email below to stay up-to-date with <br /> announcements
        and our launch deals.
      </p>

      <div>
        <form>
          <div className="input-wrapper">
            <input type="email" className="email" placeholder="Email Address" />
            <img
              src="../images/icon-error.svg"
              alt="Error Icon"
              className="icon-error"
            />
            <button className="btn" type="submit">
              <img src= {arrow} className='icon-arrow' alt="Arrow" />
            </button>
          </div>
        </form>
      </div>
      <div className="error-text">Please provide a valid email</div>
    </div>
  );
}

export default LeftComp;

{
  /* <div className="left">
  <div className="inner-container">
    <img className="logo" src="./images/logo.svg" alt="logo" />
    <img className="bg-mobile" src="./images/hero-mobile.jpg" alt="bg-mobile" />
    <form>
      <input className="email" type="email" placeholder="Email Address" />
      <img
        className="error-icon"
        src="../../images/icon-error.svg"
        alt="error"
      />
      <button>
        <img src="../../images/icon-arrow.svg" alt="arrow" />
      </button>
      <small>Please provide a valid email</small>
    </form>
  </div>
</div>; */
}
