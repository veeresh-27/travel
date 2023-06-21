import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-500 p-2 lg:w-full">
        <div className="flex items-center  text-white ml-10">
            <span className="font-semibold tracking-tight text-3xl">User</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-lg w-10 text-white  mr-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
    </nav>
  )
}

export default Navbar
