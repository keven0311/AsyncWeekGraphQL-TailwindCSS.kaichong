import React from 'react'
import { Link } from 'react-router-dom'

export default function Graphql() {
  return (
    <div className="relative w-screen h-screen">
        <div className="absolute inset-0 bg-[url('https://amplience.com/_next/image/?url=https%3A%2F%2Fi8.amplience.net%2Fi%2Famplience%2Fgraphql-asset-management-api-launch-blog-2&w=3840&q=75')] 
        bg-no-repeat bg-center bg-cover opacity-90"></div>
        <div className="relative p-8 text-2xl  w-2/4 mb-5">
            <p className="mb-4 text-3xl text-gray-500 md:text-3xl dark:text-gray-400">A query language for your API</p>
            <p className="text-gray-500 dark:text-gray-400">GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>
        </div>
        <div className='flex justify-evenly brightness-100 mx-5'>
            <div className='brightness-100'>
                <img src='https://graphql.org/img/logo.svg' alt='graphql logo' 
                className="h-36 brightness-100"/>
                <h1 className='graphqlLogoText text-4xl'>GraphQL</h1>
            </div>
            <div>
                <h3 className='text-3xl text-white'>Describe your data</h3>
                <br/>
                <code className='text-xl font-bold'>
                    <span className='text-rose-900'>type</span>
                    <span className='text-white'> Project </span>
                    <span className='text-neutral-400'>{'{'}</span>
                </code>
                <div className='ml-10 text-xl'>
                    <span className='text-blue-600'>name</span>
                    <span className='text-neutral-400'>{' :'}</span>
                    {' '}
                    <span className='text-yellow-400'>String</span>
                </div>
                <div className='ml-10 text-xl'>
                    <span className='text-blue-600'>tagline</span>
                    <span className='text-neutral-400'>{' :'}</span>
                    {' '}
                    <span className='text-yellow-400'>String</span>
                </div>
                <div className='ml-10 text-xl'>
                    <span className='text-blue-600'>contributors</span>
                    <span className='text-neutral-400'>{' :'}</span>
                    {' '}
                    <span className='text-yellow-400'>[User]</span>
                </div>
                <div className='text-neutral-400 text-xl font-bold'>{'}'}</div>
            </div>
            <div>
                <h3 className='text-3xl text-white'>Ask for what you want</h3>
                <br/>
                <div className='text-neutral-400 text-xl font-bold'>{'{'}</div>
                <code className='text-xl font-bold'>
                    <span className='text-white'>project</span>
                    <span className='text-neutral-400'>{'('}</span>
                    <span className='text-blue-600'>name</span>
                    <span className='text-neutral-400'>{':'}</span>
                    <span className='graphqlLogoText'>{'"GraphQL"'}</span>
                    <span className='text-neutral-400'>{'{'}</span>
                </code>
                <div className='text-white text-xl ml-10'>tagline</div>
                <div className='text-neutral-400 text-xl font-bold ml-5'>{'}'}</div>
                <div className='text-neutral-400 text-xl font-bold'>{'}'}</div>
            </div>
            <div className=''>  
                <h3 className='text-3xl text-white'>Get predictable results</h3>
                <br/>
                <code className='text-xl font-bold'>
                    <div className='text-neutral-400 text-xl font-bold'>{'{'}</div>
                    <span className='text-blue-600'>"project" </span>
                    <span className='text-neutral-400'>{':'}</span>
                    <span className='text-neutral-400 text-xl font-bold'>{'{'}</span>
                </code>
                <div>
                    <span className='text-blue-600 text-xl ml-10'>"tagline"</span>
                    <span className='text-neutral-400'>{':'}</span>
                    <span className='graphqlLogoText'>{'"A query language for APIs"'}</span>
                </div>
                <div className='text-neutral-400 text-xl font-bold ml-5'>{'}'}</div>
                <div className='text-neutral-400 text-xl font-bold'>{'}'}</div>
            </div>
        </div>
        <div className='flex relative justify-center mt-10'>
                <Link to='https://graphql.org/' className=' just'>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 ">
                    Learn more
                    </button>
                </Link>
            </div>
    </div>
  )
}
