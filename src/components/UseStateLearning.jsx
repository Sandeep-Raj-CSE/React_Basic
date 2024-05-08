import { useState } from "react"

function UseStateLearning(){

   // const data=useState({name:"Harshit Rana"})

    // phele index jo hota hai wo value
    // dusra index function hota hai

    const [score,setScore] = useState(2)
    //console.log(data[0])
    //const [banned,setBanned] = useState(true)

    const [val,setVal]=useState({name:"harsh",isBanned:true})
    return (

        <div>
           <h1 className="p-4">{score}</h1>
           <button onClick={()=>setScore((prev)=> prev+2)}   className="px-2 py-1 rounded-md  bg-blue-500 ">Increase the score</button>
           {/* <h2 className="p-5">{banned}</h2>
           <button onClick={()=>setBanned(1000)}   className="px-2 py-1 rounded-md  bg-blue-500 ">Increase the score</button> */}

        </div>

    )
}

export default UseStateLearning