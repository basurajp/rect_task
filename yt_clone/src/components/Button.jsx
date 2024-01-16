import React from 'react'

const Button = ({btnData}) => {
  return (
    <div>
      <button className='px-3 py-1 bg-gray-400 text-white text-sm font-semibold rounded-lg'>{btnData}</button>
    
    </div>
  )
}

export default Button
