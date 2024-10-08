import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItem = useSelector((state) => state.cart.items)
  return (
    <div>
     <nav >
        <Link style={{padding:'20px'}} to='/home'>Home</Link>
        <Link style={{padding:'20px'}} to='/cart'>Cart({cartItem.length})</Link>
        <Link style={{padding:'20px'}} to='/checkout' >Checkout</Link>
    </nav>
      <h2>Cart</h2>
      {
        cartItem.length === 0 ? (
            <p>Cart is empty</p>
        ) : (
            cartItem?.map((item , index) => (
                <div key={index}>
                <img src={item?.images[0]} height={100} style={{marginTop:"10px"}}/>
                <h3>{item.title}</h3>
                <p>Price : {item.price}</p>
                </div>
            ))
        )
      }
    </div>
  )
}

export default Cart
