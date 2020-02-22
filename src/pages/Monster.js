import React, { useState } from "react";
import Content from "Content";
import map from 'img/olegana.jpg';

import style from "css/monster/monster.module.scss";

const Monster = ({ match }) => {

    const [monsters, setMonsters] = useState([
        {
            id: 1, // 정수 값 (숫자) match.parmas.id => string "1"
            title: "오르가나 1",
            map: map,
            rank: "S급",
            name: "오르가나 - 1",
            call: "북서쪽에서 진행되는 '돌인간 영웅' 돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현",
            field: "아침 대초원 - 1",
            etc: "84 시간~132 시간(50 시간 40 분~79 시간 20 분)\n북서쪽에서 진행되는 '돌인간 영웅'\n돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현",
            pattern: "장판 잘 피하기",
        },
        {
            id: 2, // 정수 값 (숫자) match.parmas.id => string "1"
            title: "오르가나 2",
            map: map,
            rank: "S",
            name: "오르가나 - 1",
            call: "북서쪽에서 진행되는 '돌인간 영웅' 돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현",
            field: "아침 대초원 - 1",
            etc: "84 시간~132 시간(50 시간 40 분~79 시간 20 분)\n북서쪽에서 진행되는 '돌인간 영웅'\n돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현",
            pattern: "장판 잘 피하기",
        },
    ]);

    // 1 === "1" -> false
    // parseInt(string) => int -> "1" => 1
    // console.log(1 === match.params.id);

    const monster = monsters.find(monster => monster.id === parseInt(match.params.id));

    return <React.Fragment>
        <div>
            <Content />
        </div>
        <section className={style.conInner}>
            <h2>{monster.title}</h2>
            <div className={style.img_box}>
                <img src={monster.map} />
            </div>
            <table className={style.detail_txt}>
                <tr>
                    <td>등급</td>
                    <td>{monster.rank}</td>
                </tr>
                <tr>
                    <td>지역</td>
                    <td>{monster.field}</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>{monster.name}</td>
                </tr>
                <tr>
                    <td>소환조건</td>
                    <td>{monster.call}</td>
                </tr>
                <tr>
                    <td>출현주기</td>
                    <td>{monster.etc}</td>
                </tr>
                <tr>
                    <td>기믹</td>
                    <td>{monster.pattern}</td>
                </tr>
            </table>
        </section>
    </React.Fragment >
}

export default Monster;