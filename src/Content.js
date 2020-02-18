import React, {useState} from "react";
import SwipeableViews from "react-swipeable-views";
import style from "./css/main.module.scss";

import ImageSlider from "./components/ImageSlider";

import img1 from "./img/lanosia.png";
import img2 from "./img/forest.jpg";
import img3 from "./img/danalran.jpg";
import img4 from "./img/moludona.jpg";
import img5 from "./img/jungang.png";
import {Link} from "react-router-dom";
import Search from './components/Search';

// 폴더 여실 떄는 전체로 열어주셔야 아래에 패키지.제이슨 파일도 볼 수 있어요!

// http://guide.ff14.co.kr/lodestone/search
// ?
// keyword=에덴 & search=quest
// http://guide.ff14.co.kr/lodestone/search -> path
// ?
// paramater => keyword=에덴 & search=quest

// https://www.ff14.co.kr/shop/home/detail/2377 -> path 
// www.ff14.co.kr -> shop -> home -> detail -> 2377 -> 

const Content = () => {
  const [areas, setAreas] = useState([{
      id: 1,
      image: img1,
      text: "라노시아"
    },
    {
      id: 2,
      image: img2,
      text: "검은장막숲"
    },
    {
      id: 3,
      image: img3,
      text: "다날란"
    },
    {
      id: 4,
      image: img4,
      text: "모르도나"
    },
    {
      id: 5,
      image: img5,
      text: "커르다스 중앙고지"
    }
  ]);

  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true
  };

  const events = {
    onDragged: function (event) {
      console.log(event);
    },
    onChanged: function (event) {
      console.log(event);
    }
  };

  return (
    <main>
      <section id = "visual" >
        <div class = "visInner" >
            <div>
              <Search />
            </div>
            <article class="area" >
              <h3 class="hide">지역슬라이드</h3>
                  <SwipeableViews className = {style.main_slider} enableMouseEvents> {
                      areas.map(area =>
                        <div className = {style.imgWrap}>
                          <Link to = {"/area/" + area.id}>
                            <ImageSlider image = {area.image}text = {area.text}/> 
                          </Link>  
                        </div>
                      )};
                  </SwipeableViews> 
            </article > 
        </div> 
      </section > 
    </main>
  );
};

export default Content;