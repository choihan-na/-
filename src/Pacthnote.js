import React from 'react';
import "./App.css";

function Pacthnote() {
    return(
        <section id="NoteInner">
            <h2 className="blind">패치노트</h2>
            <div class="tableWrap">
                <table className="News">
                    <caption>글러벌 패치노트</caption>
                    <tr>
                        <td>02.07</td>
                        <td>5.2 패치ㄴ노트</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Pacthnote;