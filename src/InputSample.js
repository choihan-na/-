import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    //useRef DOM을 선택해줌
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
            //불변성을 지켜주는것
            //위에 ...inpust는 위에 inpust를 복사해옴
        });
    };
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input 
                name="name"
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
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

export default InputSample;