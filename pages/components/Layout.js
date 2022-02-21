import React from 'react'

function Layout() {
  return (
    <div className="container flex flex-wrap m-5 justify-center w-full">
    <button class="bg-stone-200  hover:bg-neutral-400 text-black font-bold py-2 px-4 rounded m-5 w-2/5 h-40 text-4xl ">
        <Link></Link>
  </button>
  <button class="bg-stone-200 hover:bg-neutral-400 text-black font-bold py-2 px-4 rounded m-5 w-2/5 h-40 text-4xl">
    Search for bus
  </button>
  <button class="bg-stone-200  hover:bg-neutral-400 text-black font-bold py-2 px-4 rounded m-5 w-2/5 h-40 text-4xl">
    Report an issue
  </button>
  <button class="bg-stone-200  hover:bg-neutral-400 text-black font-bold py-2 px-4 rounded m-5 w-2/5 h-40 text-4xl">
    Get a Smart Card
  </button>
    </div>
  )
}

export default Layout