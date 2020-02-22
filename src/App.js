import React from "react";
import Home from "./pages/Home";
import Area from "./pages/Area";
import Monster from "pages/Monster";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "components/header/Header";
import Footer from "components/footer/Footer";

function App() {
  // / -> localhost:3000/
  // /area -> localhost:3000/area
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/area/:id" component={Area} />
          <Route exact path="/monster/:id" component={Monster} />
          {/* <Route exact path="/patch_note" component={PatchNote} /> */}
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>

  );
}

export default App;
