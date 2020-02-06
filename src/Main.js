import React, { useState } from 'react';

import img1 from './img/lanosia.png'
import img2 from './img/forest.jpg'
import img3 from './img/danalran.jpg'
import img4 from './img/moludona.jpg'
import img5 from './img/jungang.png'
import SwipeableViews from 'react-swipeable-views';

//48라인에서 backgroundImage에서 오류가 계속나구요
//시잔 처럼 스크롤이 세개씩 보이게 하려면 어떻게 해야 하나요?
const Main = () => {

    const [areas, setAreas] = useState(
        [
            "라노시아", "검은장막숲", "다날란", "모르도나", "커르다스 중앙고지"
        ]
    );

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

    const styles = {
        root: {
          padding: '0 30px',
        },
        slideContainer: {
          padding: '0 10px',
        },
        slide: {
          padding: 15,
          minHeight: 100,
          color: '#fff',
          width:250,
        },
        slide1: {
            backgroundImage:'url(../img/lanosia.png)',
        },
        slide2: {
            backgroundImage:'url(../img/forest.jpg)',
        },
        slide3: {
          backgroundImage:'url(../img/danalran.jpg)',
        },
        slide4: {
            backgroundImage:'url(../img/moludona.jpg)',
          },
        slide5: {
            backgroundImage:'url(../img/jungang.png)',
        },
      };

    return (
        <main>
            <section id="visual">
            <div class="visInner">ß
                <h2>마물 어디까지 잡아 봤니?</h2>
                <form id="sform" name="sform" action="#" method="get">
                    <input type="text" id="search" clss="searching" name="sf" placeholder="마물과 특수돌발을 검색해보세요" />
                </form>
                <article class="area">
                    <h3 class="hide">지역슬라이드</h3>
                    <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
                        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
                        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
                        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                        <div style={Object.assign({}, styles.slide, styles.slide4)}>slide n°3</div>
                        <div style={Object.assign({}, styles.slide, styles.slide5)}>slide n°3</div>
                    </SwipeableViews>
                    {/* <OwlCarousel className = "owl-theme"
                    items="3"
                    loop
                    >
                        <div className="item">
                            <img src={img1} />
                        </div>
                        <div className="item">
                            <img src={img2} />
                        </div>
                        <div className="item">
                            <img src={img3} />
                        </div>
                        <div className="item">
                            <img src={img4} />
                        </div>
                        <div className="item">
                            <img src={img5} />
                        </div>
                    </OwlCarousel> */}
                </article>
            </div>  
            </section>
        </main>
    )
} 

export default Main;