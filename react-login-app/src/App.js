import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post("http://localhost:3001/register", { username, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <div>
              <h2>Register</h2>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegister}>Register</button>
            </div>
          </Route>
          <Route path="/login">
            <div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
