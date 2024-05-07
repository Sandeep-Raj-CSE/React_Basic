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
  return (
    <div className="relative w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="w-80 bg-zinc-100 rounded-md overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="h-40 overflow-hidden">
          <img src='https://plus.unsplash.com/premium_photo-1669055554327-ae713c9c5800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' className="w-full h-full object-cover" />
        </div>
        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Amazon Basic</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ratione culpa animi.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
