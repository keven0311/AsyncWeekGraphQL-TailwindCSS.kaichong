// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Homepage() {
//   return (
//     <div className='flex w-screen h-screen justify-center '>
//     <Link to='/tailwindcss' className=''>
//         <img className='max-w-full h-auto'
//         src='https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg' 
//         alt='tailwindcssHomepage'/>
//     </Link>
//     <Link to='/graphql'>
//         <img className='' 
//             src='https://cdn.codersociety.com/uploads/graphql-reasons.png' 
//             alt='graphqlHomepage'/>
//     </Link>
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center">
      <Link to="/tailwindcss" className="h-1/2">
        <img
          className="w-full h-full"
          src="https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
          alt="tailwindcssHomepage"
        />
      </Link>
      <Link to="/graphql" className="h-1/2">
        <img
          className="w-full h-full"
          src="https://cdn.codersociety.com/uploads/graphql-reasons.png"
          alt="graphqlHomepage"
        />
      </Link>
    </div>
  );
}
