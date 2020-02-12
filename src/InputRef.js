import React, {useState, useRef } from 'react';

//리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
//리액트에서 ref 라는 것을 사용합니다.
//함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다
//우리가 만든 InputSample 에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있게 됩니다.
//한번, 초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용하여 기능을 구현해보겠습니다.

function Input() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    const nameInput = useRef(); //1. useRef() 를 사용하여 Ref 객체를 만들고

    const { name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {name, value} =e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]:value, // name 키를 가진 값을 value 로 설정
        })
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus(); //3. 그러면, Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다.
    };
    
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange}
                value={name} 
                ref={nameInput}
                //2. 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다. 
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