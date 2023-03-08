import React, { useEffect, useState } from "react";

const Counter = () =>{
    const [number,setNumber] = useState(0);
    const [text,setText] = useState('hello');

    //useEffect(callBack,dependency List)

    useEffect( () => {
        console.log('Call from global console')
        setText('Bit')},[])
    return(
        <div>
            <div>{number}</div>
            <div>{text}</div>
            <button onClick={() => setNumber(Math.random())}>Update Number</button>
            <button onClick={() => setText(Math.random())}>Update Text</button>
        </div>
    )
}

export default Counter;