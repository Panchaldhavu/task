import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../slice/productSlice'
import { addToCart } from '../slice/cartSlice'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const { items , status} = useSelector((state) => state.products)
    const cartItem = useSelector((state) => state.cart.items)

    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])
  return (
    <div>
    <nav >
        <Link style={{padding:'20px'}} to='/home'>Home</Link>
        <Link style={{padding:'20px'}} to='/cart'>Cart({cartItem.length})</Link>
        <Link style={{padding:'20px'}} to='/checkout' >Checkout</Link>
    </nav>
    <h2>Products</h2>
    {status == 'loading' && <p>Loading..</p>}
    {
        status == 'success' && (
            <div>
            {
                items?.map((product) => (
                    <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                    </div>
                ))
            }
            </div>
        )
    }

      
    </div>
  )
}

export default Home
