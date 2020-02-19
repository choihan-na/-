import React, { useState } from "react";
import Header from '../components/header/Header';
import Content from "../Content";
import MosTable from '../components/MosTable';
import Footer from '../components/footer/Footer';
// Load pages folder in MonList.js file

const Area = ({ match }) => {
    const [areas, setAreas] = useState([
        "라노시아",
        "검은장막숲",
        "다날란",
        "모르도나",
        "커르다스 중앙고지"
    ]);

    return (
        <React.Fragment>
            <div>
                <Header />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <h2>{areas[parseInt(match.params.id) - 1]}</h2>
                <MosTable />
            </div>
            <div>
                <Footer />
            </div>
        </React.Fragment>
    )
};

export default Area;