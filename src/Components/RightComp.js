import React from "react";
import "./RightComp.css";

function RightComp() {
  return (
    <div className="img-wrapper">
      <img
        src={process.env.PUBLIC_URL + '/images/hero-desktop.jpg'}
        alt="hero-desktop"
        className="hero-desktop"
      />
      {/* <img
          src="../images/hero-mobile.jpg"
          alt="hero-mobile"
          className="hero-mobile"
        /> */}
    </div>
  );
}

export default RightComp;

// const form = document.querySelector('.container form');
// const email = document.querySelector(".container form input[type=email");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let emailValue = email.value;
//     if (validateEmail(emailValue)) {
//         console.log('this is a valid email')
//     } else {
//         // console.log('email is invalid')
//         form.classList.add('error')
//     }
// });

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9].return re.test(String(email).toLowerCase());
// }
