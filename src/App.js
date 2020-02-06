import React from "react";
import Header from "./Header";
import Content from "./Content";
import Slider from "./Slider";
import "./Common.css";
import "./App.css";

import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
