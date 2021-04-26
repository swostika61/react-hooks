import React, { useState, useEffect } from 'react'
//BY DEFAULT RUNS AFTER EVERY RE-RENDER
// CLEANUP FUNCTION
// SECOND PARAMETER

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call useEffect");
        // CONDITIONAL IS SET INSIDE USEEFFECT 
        if(value > 1){
            document.title =`New Message (${value})`;
        }
    }, [value])
    console.log("render component");
    return (
        <>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value + 1)}>change</button>
        </>
    )
}

export default UseEffectBasics;
