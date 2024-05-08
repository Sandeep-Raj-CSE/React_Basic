// phela component banana 

// component hota kya hai - A single piece jisko app use 
// karte ho alag alag data ke saath usko hm 


// code smajhna hai chal kaise rha hai


// React react karta hai when change occur hota hai

import React from "react"


// ye glti nhi karne hai function ka naam file ke naam
// ke anusar rheke ll
// function App(){
//   return (
//     <h1>Hey</h1>
//   )
// }

// export default App;

// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import SecondPage from "./components/SecondPage"

import Card from "./components/Card"
//import { data } from "autoprefixer"


function App(){
  // mtlb ki return ke bhar kuch bhi hm rhk sakte hai good good
 // const data=12;

 //const data=["sandeep","raj","Aryan"]
  return (

    

    <div>
       {/* <Navbar/>
       <Hero/>
       <SecondPage/> */}
       <Card/>

       {/* {data.map((value, index)=> <h1 key={index}> Hey</h1>)} */}
{/* 
       {data.map((val,index) => (
        <div className="px-3 py-4 bg-zinc-300  rounded-md w-fit" key={index}> 
         {val}

        </div>
       ))} */}

       




    </div>
   
  )
}

export default App
