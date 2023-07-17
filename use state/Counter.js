import { useState } from "react"

function Counter(){
    const [number,setNumber]=useState(0)
    console.log('component rendered',number)
    function handleClick(){
            //updater style function 
            setNumber(number=>number+1)
            // setNumber(number+1)

        console.log('aftersetNumber',number)
    }
    return(
        <>
        <h1>{number}</h1>
        <button style={{height:'3rem',width:'6rem'}} className="btn btn-primary" onClick={handleClick}>add</button>
        </>
    )
}
export default Counter