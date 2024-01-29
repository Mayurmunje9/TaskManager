import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { auth } from "./firebase/firebase";
import { Link ,useNavigate} from "react-router-dom";


export default function Login() {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const authInstance = getAuth();

    signInWithEmailAndPassword(authInstance, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged In", user);
        history("/");
        // Handle successful login, e.g., redirect to another page
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Error", errorMessage);
        // Handle login error, display a message to the user, etc.
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="containerRegister">
          <div className="card">
            <div className="card_title">
              <h1>Login</h1>
            </div>
            <div className="form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="my-4"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                className="my-2"
              />
              <Link className="d-flex justify-content-end my-2" to="/ResetPassword">Forgot password ?</Link>
              <button className="my-3" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
