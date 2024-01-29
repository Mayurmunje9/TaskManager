import Login from "./components/Login";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />

          <Route
            path="/Register"
            element={
              <div>
                <Navbar />
                <div className="container">
                  <Register />
                </div>
              </div>
            }
          />
          <Route
            path="/Login"
            element={
              <div>
                <Navbar />
                <div className="container">
                  <Login />
                </div>
              </div>
            }
          />
          <Route
            path="/ResetPassword"
            element={
              <div>
                <Navbar />
                <div className="container">
                  <ResetPassword />
                </div>
              </div>
            }
          />
          <Route
            path="/CreateTask"
            element={
              <div>
                <Navbar />
                <div className="container">
                  <CreateTask />
                </div>
              </div>
            }
          />

          <Route
            path="/UpdateTask/:id"
            element={
              <div>
                {" "}
                <Navbar /> <UpdateTask id={":taskId"}/>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
