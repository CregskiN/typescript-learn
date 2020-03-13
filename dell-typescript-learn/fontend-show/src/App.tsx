import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Pages/Home';
import Login from "./Pages/Login";

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
