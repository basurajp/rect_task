import React from 'react'
import { useRouteError } from 'react-router-dom'
useRouteError

const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>{err.statusText}  </div>
  )
}

export default Error