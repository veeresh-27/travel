import React from 'react'
import Ticket from './ticket'
import Usercards from './Usercards'

function Layout() {
  return (
    <div className="container flex flex-wrap m-5 justify-center w-full">
        <Usercards title="Get a Ticket" goto="component/ticket" icon={<svg xmlns="http://www.w3.org/2000/svg" class=" w-16 mx-5 text-orange-500"fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>}/>
        <Usercards title="Search For a Bus" goto="#"/>
        <Usercards title="Report an Issue" goto="#"/>
        <Usercards title="Get a Smart Card" goto="#"/>
    </div>
  )
}

export default Layout