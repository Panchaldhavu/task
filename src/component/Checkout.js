import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
     <nav >
        <Link style={{padding:'20px'}} to='/home'>Home</Link>
        <Link style={{padding:'20px'}} to='/cart'>Cart({cartItem.length})</Link>
        <Link style={{padding:'20px'}} to='/checkout' >Checkout</Link>
    </nav>
      <h2>Checkout</h2>
      <ul>
        {cartItem?.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
      <h3>TotalPrice : {totalPrice}</h3>
    </div>
  );
};

export default Checkout;
