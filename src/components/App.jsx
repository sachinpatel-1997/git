import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ReadPage} from "./Read";
import {CreatePage} from "./Create";
import {UpdatePage} from "./Update";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ReadPage} />
        <Route path="/create" exact component={CreatePage} />
        <Route path="/update/:id" exact component={UpdatePage} />
      </Switch>
    </Router>
  );
}

export default App;