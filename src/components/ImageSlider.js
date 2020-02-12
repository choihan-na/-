import React from 'react';
import style from "../css/image-slider.module.scss";

const ImageSlider = ({image, text}) => {
    return (
        <React.Fragment>
            <img src={image} className={style.image} />
            <div>{text}</div>
        </React.Fragment>
    );
};

export default ImageSlider;