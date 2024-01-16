import React from 'react'
import Button from './Button'

const Product = () => {
  return (
    <div className='w-full py-20 text-white'>
    <div className="max-w-screen-xl mx-auto flex items-center  justify-between">
        <h1 className='text-6xl font-semibold capitalize '>Remind</h1>
        <div>
            <div className="dets w-1/3">
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi minima fugit? Velit repudiandae aliquam voluptates ut.</p>
                <Button />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
