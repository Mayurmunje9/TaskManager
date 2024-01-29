import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../Styles/Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "./firebase/firebase";
export default function Register() {
  let history = useNavigate()
  const handelsubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const { email, password, username } = e.target.elements;

 
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getDatabase();
        console.log(user);
        history('/')
        window.alert("hello User");

        set(ref(db, "users/" + user.uid), {
          username: username.value,
          email: email.value,
          id: user.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        window.alert(errorMessage);
      });
    console.log(email.value);
  };

  return (
    <div>
      <form action="" onSubmit={handelsubmit}>
        <div className="containerRegister">
          <div className="card">
            <div className="card_title">
              <h1>Create Account</h1>
              <span>
                Already have an account? <Link to="/Login">Sign In</Link>
              </span>
            </div>
            <div className="form">
              {/* Remove the inner form */}
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
              />
              <input type="email" name="email" placeholder="Email" id="email" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
