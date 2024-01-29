// Import specific functions from the Firebase SDKs
import { sendPasswordResetEmail } from "firebase/auth";
import React from 'react';
import { auth } from "./firebase/firebase";


export default function ResetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check Your Email");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        window.alert(errorMessage);
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="containerRegister">
          <div className="card">
            <div className="card_title">
              <h1>Enter Your Email</h1>
            </div>
            <div className="form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="my-4"
              />
              <button className="my-3" type="submit">
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
