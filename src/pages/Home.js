import React from "react";
import Header from "../components/header/Header";
import Content from "../Content";
import Slider from "../Slider";
import Pacthnote from "../Pacthnote";
import Footer from "../Footer";

import "../Common.css";
import "../App.css";

const Home = () => {
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
            <div>
                <Pacthnote />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;