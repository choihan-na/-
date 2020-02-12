import React,{useState} from "react";

const Area = ({match}) => {
    const [areas, setAreas] = useState([
        "라노시아",
        "검은장막숲",
        "다날란",
        "모르도나",
        "커르다스 중앙고지"
      ]);

    return (
        <React.Fragment>
            <h1>{areas[parseInt(match.params.id) - 1]}</h1>
        </React.Fragment>
    )
};

export default Area;