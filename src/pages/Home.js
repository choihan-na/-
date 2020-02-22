import React from "react";
import Content from "../Content";
import Slider from "../Slider";
import Pacthnote from "../Pacthnote";

import "../Common.css";
import "../App.css";

const Home = () => {
    return (
        <React.Fragment>
            <Content />
            <Slider />
            <Pacthnote />
        </React.Fragment>
    );
}

export default Home;