import React from 'react'
import { MdDelete } from 'react-icons/md'

const deleteTask = () => {
  return (
    <div> <button ><MdDelete className='text-lg hover:cursor-pointer hover:text-purple-400'/></button></div>
  )
}

export default deleteTask