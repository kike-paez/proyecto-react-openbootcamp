import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')
    
    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in Input ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{backgroundColor:'cyan', padding:'30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>
                Hello, {name}
            </p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Button 1
            </button>
            {/* Sin parametros puede iniciarse directamente */}
            <button onClick={pressButton}>
                Button 2
            </button>
            {/* Con parametros debe iniciarse desde una función anónima */}
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input
                placeholder='Insert a text'
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input Changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref = {messageRef} >
            </input>
            <button onClick={() => send(messageRef.current.value)}>
                Set Message
            </button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
