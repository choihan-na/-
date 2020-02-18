import React from "react";
import Home from "./pages/Home";
import Area from "./pages/Area";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // / -> localhost:3000/
  // /area -> localhost:3000/area
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/area/:id" component={Area} />
        {/* <Route exact path="/patch_note" component={PatchNote} /> */}
      </Switch>
    </Router>
  );
}

export default App;
