import React from 'react'
import Routing from './Routing'

const SideMenu = () => {
  return (
    <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-36px)]'>
        <Routing/>
    </div>
  )
}

export default SideMenu