import React from 'react'
import Link from 'next/link'

function Usercards({title,goto,icon}) {
  return (
    <button className="bg-stone-200  hover:bg-neutral-400 text-black font-bold py-2 px-4 rounded m-5 w-2/5 h-40 text-4xl flex items-center  justify-center">
    <Link href={goto}>
    <a>{icon}
        {title}</a>
  </Link>
</button>
  )
}

export default Usercards
