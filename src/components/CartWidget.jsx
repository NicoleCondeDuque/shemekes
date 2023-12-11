import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="cart-widget">
     <p>🛒</p>
      <span className="bg-[#e2e97f] text-white p-2 rounded-full absolute top-1
       right-3">
        <Link className="menu-link" to="/carrito">    
           {cantidadEnCarrito()}
        </Link>
        </span>
    </div>
  )
}

export default CartWidget