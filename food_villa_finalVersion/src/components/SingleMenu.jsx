import React from 'react'
import { imageId } from '../utlis/constant'
import {useDispatch} from 'react-redux'
import { additem } from '../utlis/cartSlice'

const SingleMenu = ({singlemenuName}) => {
 

const dispatch =  useDispatch()

const handleAddClick =()=>{
// distpatct an action 
dispatch(additem('pizza'))
}  
  



  return (
    <div className="flex justify-between  h-[130px] pt-4 relative">
    <div className="">
      <h1 className="font-semibold ">
        {singlemenuName.card.info.name}
      </h1>
        <span className="font-semibold">₹ - {singlemenuName.card.info.price /100}</span>
      <p className="text-sm leading-tight mt-3 w-[80%]">
       {singlemenuName.card.info.description}
      </p>
    </div>
    <img className="w-[118px] h-[97px]"
    src={`${imageId}${singlemenuName.card.info.imageId}`}

      alt="this is image "
    />
    <button onClick={handleAddClick} className="px-3 py-1 bg-black text-white font-semibold absolute right-4 bottom-4">Add +</button>
  </div>
  )
}

export default SingleMenu
