import React from 'react'
import { useSelector } from 'react-redux'

function NavigatonBar() {
    const items = useSelector((state)=>state.cart.length)
  return (
    <div className='navbar navbar-default navbar-light'>
      <h1>Shopping Cart</h1>
      <h2>Home</h2>
      <h2>Cart ({items}) </h2>
    </div>
  )
}

export default NavigatonBar


