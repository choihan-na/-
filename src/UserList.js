import React from 'react';

function User({user}) {
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const user = [
        {
            id:1,
            username:'서월',
            email:'tara4027@naver.com'
        },
        {
            id:2,
            username:'유공',
            email:'choral301@naver.com'
        },
        {
            id:3,
            username:'샤민',
            email:'ashley427@gmail.com'
        },        
    ];

    return (
        <div>
            {
                user.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList