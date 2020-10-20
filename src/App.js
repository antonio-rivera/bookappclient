import React, { useState } from "react";
import "./styles/App.scss";
import AddComment from "./components/AddComment";
import Home from "./components/Home";
import Login from "./components/Login";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState({ username: "", user_id: -1 }); //Current logged in user

  function getUser(userObj) {
    //Function to get the user that is currently logged in and set it as a state
    setUser(userObj);
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/home"
          render={() =>
            user.user_id === -1 ? (
              <Login getUser={getUser} />
            ) : (
              <Home user={user} />
            )
          }
        />

        <Route path="/AddComment" render={() => <AddComment {...user} />} />
        <Route
          path="/"
          render={() =>
            user.user_id === -1 ? (
              <Login getUser={getUser} />
            ) : (
              <Redirect to="/home" />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
