import React, { useState } from 'react';
import '../css/monsterList.css';
import icon from 'img/icon.png';

const MonTable = () => {
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
                    <tr>
                        <td class="image1">
                            < img src={icon}
                            />
                        </td>
                        <td class="name">오르가나</td>
                        <td class="field">아침 대초원</td>
                        <td class="etc" > 84 시간~132 시간(50 시간 40 분~79 시간 20 분)
                        북서쪽에서 진행되는 '돌인간 영웅'
                        돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현
                        </td>
                    </tr>
                    <tr>
                        <td class="image1">
                            < img src={icon}
                            />
                        </td>
                        <td class="name">오르가나</td>
                        <td class="field">아침 대초원</td>
                        <td class="etc" > 84 시간~132 시간(50 시간 40 분~79 시간 20 분)
                        북서쪽에서 진행되는 '돌인간 영웅'
                        돌발 임무 완료 후 출현 지역 근처를 지나갈 때 출현
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default MonTable;
