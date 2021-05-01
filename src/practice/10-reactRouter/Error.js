import React from 'react'
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <>
        <h1 style={{color:"red"}}>404</h1>
        <p style={{color:"red"}}>Error</p>
        <Link to='/' className="btn">
            Back Home
        </Link>
        </>
    )
}

export default Error
