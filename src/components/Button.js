import React, { useState } from 'react';


function ButtonComp (){
    const [text, setText] = useState('');
    const [css, setCss] = useState('');
    
    return (
        <button type="button" className={`${css}`}>{text}</button>
    )
}


export default ButtonComp;