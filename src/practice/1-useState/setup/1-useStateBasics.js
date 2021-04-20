import React, { useState } from 'react';
//cannot call conditionally
//component name must be uppercase
const UseStateBasics = () => {
    //must be in function or component body
    const [title, setTitle] = useState("random title") //start with use;
    const handleClick = () => {
        if ( title === "random title"){
            setTitle("changed");
        }
        else{
            setTitle("random title");
        }
     }
    return (
        <>
            <h1>{title}</h1>
            <button className="btn" onClick={handleClick}>change</button>
        </>
    )
}

export default UseStateBasics;
