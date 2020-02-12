import React, {useState} from 'react';

//여러개의 input 상태 관리하기
//input에 name이라는 값을 설정하고 이벤트가 발동했을때 이 값을 참조하는 것
// useState에서는 기존에 문자열 값을 관리하게 했는데 문자열이 아니라 
//여러개의 문자열을 가지고있는 객체형태로 관리해 줘야한다.

function Input() {
    //1.객체 상태를 업데이트
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    //name값고 nickname값을 쉽게 사용할 수 있도록 비구조화 할당을 통해서 추출
    const { name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} =e.target;
        //2. react에서 객체를 업데이트 할 때, 일단 기존의 객체를 복사해야한다
        // ... 스프레드 문법을 사용해서 기존의 객체를 복사
        //3. 그걸 덮어씌우고 새로운 상태로 설정을 해주어야한다.
        //4. 이런것이 불변성을 지킨다라고 표현 한다.
        // 불변성을 지켜주어야만 리엑트 컴포넌트에서 상태가 업데이트 됬음을 인지할 수 있고 이에 따라 필요한 랜더링이 발생하게 된다.
        setInputs({
            ...inputs,
            [name]:value,
        })
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange}
                value={name} 
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default Input