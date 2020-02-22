import React, { useState } from 'react';
import '../css/monsterList.css';
import icon from 'img/icon.png';
import { useHistory } from 'react-router-dom';

const MonTable = () => {

    const [monsters, setMonsters] = useState([
        {
            id: 1,
            icon: icon,
            name: "오르가나 - 1",
            field: "아침 대초원 - 1",
            etc: "84 시간~132 시간(50 시간 40 분~79 시간 20 분)\n북서쪽에서 진행되는 '돌인간 영웅'\n돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현"
        },
        {
            id: 2,
            icon: icon,
            name: "오르가나 - 2",
            field: "아침 대초원 - 2",
            etc: "84 시간~132 시간(50 시간 40 분~79 시간 20 분)\n북서쪽에서 진행되는 '돌인간 영웅'\n돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현"
        }
    ]);

    const onClickMonster = (id) => {
        history.push("/monster/" + id);
    };

    const history = useHistory();

    return (
        <div class="monList">
            <table>
                <thead>
                    <tr>
                        <th>아이콘</th>
                        <th>이름</th>
                        <th>지역</th>
                        <th>출현주기/조건</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        monsters.map(monster => (
                            <tr onClick={() => onClickMonster(monster.id)}>
                                <td class="image1">
                                    < img src={monster.icon}
                                    />
                                </td>
                                <td class="name">{monster.name}</td>
                                <td class="field">{monster.field}</td>
                                <td class="etc" >{monster.etc}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default MonTable;
