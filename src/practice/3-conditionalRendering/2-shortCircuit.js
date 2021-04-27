import React, { useState, useEffect } from 'react'

//SHORT-CIRCUIT EVALUATION
// TERNARY OPERATOR

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    //IN OR CASE: IF TEXT VALUE TRUE RETURN TEXT
    // const firstValue = text || 'hello world';
    //IN AND CASE: IF TEXT VALUE TRUE RETURN 'HELLO WORLD'
    // const secondValue = text && 'hello world';

    return (
        <>
            {/* <h1> {firstValue} </h1>
            <h1> value : {secondValue} </h1> */}
            <h1> {text || 'swostika'} </h1>
            <button className="btn" onClick={() => setIsError(!isError)} >toggle error</button>
            {isError && <h1>Error...</h1>}
            {isError ? (<p>there is an error...</p>)
                : (<div>
                    <h2>there is no error</h2>
                </div>)}
           {/* {!text && <h1>hi baby</h1>}  */}
        </>
    )
}

export default ShortCircuit
