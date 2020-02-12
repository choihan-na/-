import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slide = styled('div')`
    width:100%;
    background:#FBE7E6;
    border-radius: 5px;
    padding:15px 20px;

    p {
        font-size:1.4rem;
        line-height: 2.2rem;
        margin:0;
    }
`;

const Slider = () => {
    return(
        <section id="content">
            <h2 class="hide">내용</h2>
            <AutoPlaySwipeableViews className="slideWrap">
                <Slide>
                    <p>
                        <b>마물</b> 어디있지? <b>마물</b> 언제 출현해? <br></br>
                        혼란하다 혼란해!<br></br>
                        그런 당신을 도와줄 마물 검색 사이트<br></br>
                        <b class="slideUp">마물달리기</b>
                    </p>
                </Slide>
                <Slide>
                    <p>
                    <b>마물2</b> 어디있지? <b>마물</b> 언제 출현해? <br></br>
                        혼란하다 혼란해!<br></br>
                        그런 당신을 도와줄 마물 검색 사이트<br></br>
                        <b class="slideUp">마물달리기</b>
                    </p>
                </Slide>
                <Slide>
                    <p>
                    <b>마물3</b> 어디있지? <b>마물</b> 언제 출현해? <br></br>
                        혼란하다 혼란해!<br></br>
                        그런 당신을 도와줄 마물 검색 사이트<br></br>
                        <b class="slideUp">마물달리기</b>
                    </p>
                </Slide>
            </AutoPlaySwipeableViews>
        </section>
    )
}

export default Slider;