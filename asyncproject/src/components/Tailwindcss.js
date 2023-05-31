import React from 'react';
import { Link } from 'react-router-dom';

export default function Tailwindcss() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-[url('https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png')] bg-no-repeat bg-center bg-cover opacity-90"></div>
      <div className="relative p-8 text-3xl">
        <p className="mb-3 text-white-500 dark:text-white-400 uppercase tracking-widest font-bold text-gray-900 dark:text-gray-100">
          Rapidly build modern websites without ever leaving your HTML.
            </p>
        <p className="text-white dark:text-white">
          A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
        <Link to='https://tailwindcss.com/'>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-60 h-30">
            Lear more
            </button>
        </Link>
      </div>
    </div>
  );
}

