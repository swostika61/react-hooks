import React,{useState} from 'react'

const useStateObject = () => {
    const [person, setPerson] = useState({
        name:"swos",
        age:22,
        message:"nothing to say"
    })

    // const[name, setName]= useState('swos')
    // const[age, setAge]= useState(22)
    // const[message, setMessage]= useState('random message')

    const changeMessage=()=>{
        setPerson({...person,message:"hi"});
        // setMessage("hey swostika")
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>
                change
            </button>
        </>
    )
}

export default useStateObject
