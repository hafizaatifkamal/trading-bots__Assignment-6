import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import BotsComponent from "./components/BotsComponent";
import BotsList from "./components/BotsList";
import BotsDetails from "./components/BotsDetails";


function App() {
  return (
    <div className = "App" >
      <Router>
        <Header />
        <Switch>
          {/*<Route path="/" exact component={BotsComponent} />*/}
          <Route path="/bots" exact component={BotsList} />
          <Route path="/bots-details/:id" exact component={BotsDetails} />
          {/*<Route>Something went wrong, 404 Not Found!</Route>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
