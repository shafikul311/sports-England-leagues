import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./component/Home/Home";
import TeamDetails from "./component/TeamDetails/TeamDetails";
import NoMatch from "./component/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Router>

        <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/teams/:idLeague">
              <TeamDetails />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
