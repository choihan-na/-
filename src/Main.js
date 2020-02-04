import React, { useState } from 'react';
import style from './css/main.module.scss'; // css 파일
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {

    const [areas, setAreas] = useState(
        [
            "라노시아", "검은장막숲", "다날란", "모르도나", "커르다스 중앙고지"
        ]
    );

    return (
        <main>
             <section id="visual">
          <div class="visInner">
            <h2>마물 어디까지 잡아 봤니?</h2>
            <form id="sform" name="sform" action="#" method="get">
                <input type="text" id="search" clss="searching" name="sf" placeholder="마물과 특수돌발을 검색해보세요" />
            </form>
            <article class="area">
                <h3 class="hide">지역슬라이드</h3>
                <Carousel className={style.area_slide}>

                    {
                        areas.map(area => 
                            <Carousel.Item className={style.area_box}>
                                <a href="#">{area}</a>
                            </Carousel.Item>    
                        )
                    }

                    {/* <Carousel.Item className={style.area_box}>
                        <a href="#">라노시아</a>
                    </Carousel.Item>
                    <Carousel.Item className={style.area_box}>
                        <a href="#">검은장막숲</a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">다날린</a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">모르도나</a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="#">커르다스 중앙고지</a>
                    </Carousel.Item> */}
                </Carousel>
            </article>
          </div>  
        </section>
        </main>
    )
} 

export default Main;