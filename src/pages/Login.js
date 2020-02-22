import React from "react";

// www.monster.com -> 유저가 보는 페이지

// 1안 admin.monster.com -> 관리자가 보는 페이지 (유저가 보는 페이지랑 관리자가 보는 페이지가 프로젝트 단위로 나누어져 있을 때) -> 우리가 선택한 것
// monster-web -> 유저가 보는 프로젝트
// monster-admin -> 관리자가 보는 프로젝트 

// 2안 www.monster.com/admin -> 관리자가 보는 페이지
// monster -> 유저와 관리자 둘 다 같이 보는 프로젝트
// admin 페이지를 같은 프로젝트 안에서 생성 했을 때 URL /admin/login 

const Login = () => {
    return (
        <section className="LogInner">
            <h2>마물 달리기</h2>
            <form action="#" method="post">
                <div className="id_area">
                    <label for="uid">Id</label>
                    <input type="text" placeholder="Your Id" name="uid" required></input>
                </div>
                <div className="psw_area">
                    <label for="psw">psw</label>
                    <input type="password" placeholder="Your psw" name="psw" required></input>
                </div>
                <link to="#">회원가입</link>
                <button type="submit">Login</button>
            </form>
        </section >

    )
}

export default Login;