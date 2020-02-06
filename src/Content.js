import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import style from "./css/main.module.scss";

import img1 from "./img/lanosia.png";
import img2 from "./img/forest.jpg";
import img3 from "./img/danalran.jpg";
import img4 from "./img/moludona.jpg";
import img5 from "./img/jungang.png";

//48라인에서 backgroundImage에서 오류가 계속나구요
//시잔 처럼 스크롤이 세개씩 보이게 하려면 어떻게 해야 하나요?
const Content = () => {
  const [areas, setAreas] = useState([
    "라노시아",
    "검은장막숲",
    "다날란",
    "모르도나",
    "커르다스 중앙고지"
  ]);

  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true
  };

  const events = {
    onDragged: function(event) {
      console.log(event);
    },
    onChanged: function(event) {
      console.log(event);
    }
  };

  return (
    <main>
      <section id="visual">
        <div class="visInner">
          ß<h2>마물 어디까지 잡아 봤니?</h2>
          <form id="sform" name="sform" action="#" method="get">
            <input
              type="text"
              id="search"
              clss="searching"
              name="sf"
              placeholder="마물과 특수돌발을 검색해보세요"
            />
          </form>
          <article class="area">
            <h3 class="hide">지역슬라이드</h3>
            <SwipeableViews className={style.main_slider}>
              <img src={img1} className={style.main_slider_image} />
              <img src={img2} className={style.main_slider_image} />
              <img src={img3} className={style.main_slider_image} />
              <img src={img4} className={style.main_slider_image} />
              <img src={img5} className={style.main_slider_image} />
            </SwipeableViews>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Content;
