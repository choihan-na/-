import React from "react";

const Join = () => {
    return (
        <section className="Joinner">
            <h2>관리자 회원가입</h2>
            <form action="#" method="post">
                <div className="id_join">
                    <label for="id">Id</label>
                    <input type="text" placeholder="사용할 id" name="id" required />
                </div>
                <div className="psw_join">
                    <label for="psw">Id</label>
                    <input type="password" placeholder="Your psw" name="psw" required></input>
                </div>
                <button type="submit">join</button>
            </form>
        </section>
    )
}