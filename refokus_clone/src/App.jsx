import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'

const App = () => {
  return (
    <div  className='w-full h-screen bg-zinc-900 text-white font-["satoshi"]'>
      <NavBar />
      <Work />
    
    </div>
  )
}

export default App