// import React from 'react'

// function Card() {
//   return (
//     <div className="w-full h-screen bg-zinc-200">

//         <div className='w-52 px-3 py-4 bg-zinc-100 absolute left-1/2 top-1/2 -translate-[50%]
//          rounded-md '>
//             <div className='w-full h-32 bg-zinc-300'>

//             </div>
//             <div className='w-full px-3 py-4'>
//                 <h2>Amazon Basic</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur
//                      adipisicing elit. Quam ratione culpa animi.</p>

//             </div>
//          </div>
      
//     </div>
//   )
// }

// export default Card



import React from 'react';
//import cardImage from './card-image.jpg'; // Import your image

function Card() {


  // here maine data liya and usko card me show kiya that is good

  // data naam ka array banaya 
  // usme jo jo chiz show karna hai wo show kara

  //map use karke elemenet ko jitne data hai utne elemet show karte hai that is 

  const data=[
    {
      image:'https://images.unsplash.com/photo-1714671739362-e6fcee8d8704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D', name:"Amazon Basic", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione culpa animi."
    },{
      image:'https://images.unsplash.com/photo-1703868673081-975b89431e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',name:"Daily usuage",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione culpa mimi."
    }
  ]
  return (
    <div className=" w-full h-screen bg-zinc-200 flex justify-center  gap-10 items-center">
     {data.map((elem,index)=> (
       <div className="w-80 bg-zinc-100 rounded-md overflow-hidden shadow-lg">
       {/* Image Section */}
       <div className="h-40 overflow-hidden">
         <img src={elem.image} className="w-full h-full object-cover" />
       </div>
       {/* Content Section */}
       <div className="p-4">
         <h2 className="text-xl font-semibold mb-2">{elem.name}</h2>
         <p className="text-gray-700">{elem.description}</p>
       </div>
     </div>
     ) )}
    </div>
  );
}

export default Card;
