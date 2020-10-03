import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Signup from "./components/Auth/SignUp";
import Signin from "./components/Auth/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
