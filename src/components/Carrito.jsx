import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito,  eliminarProducto } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  const handleEliminarProducto = (productId) => {
    const confirmacion = window.confirm('¿Seguro que quieres quitar este producto del carrito?');

    if (confirmacion) {
      eliminarProducto(productId);
    }
  }

  return (
    <div className="container--carrito mt-4 items-center justify-center">
      <h1 className="text-[#e2e97f] text-7xl carrito--letra">Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
          <br />
          <div className="flex flex-col bg-white rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h3 className="text-black font-bold text-xl">{prod.titulo}</h3>
                  <p className="text-black">Precio unit: ${prod.precio}</p>
                  <p className="text-black">Precio total: ${prod.precio * prod.cantidad}</p>
                  <p className="text-black">Cant: {prod.cantidad}</p>
                  <button
                    className="mt-4 ml-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" onClick={() => handleEliminarProducto(prod.id)}
                  >
                    Quitar
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
      }

      {
        carrito.length > 0 ?
          <>
           <div className="flex flex-col bg-[#e2e97f] rounded-3xl mt-4 ">
              <div className=" py-8 sm:p-10 sm:pb-6 font-bold text-xl text-right">
            <h2 className="text-black font-mono text-4xl">Precio total: ${precioTotal()}</h2>
            </div>
            </div>
            <button className="mt-4 rounded-lg bg-[#ffffff] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 mb-96" onClick={handleVaciar}>Vaciar</button>
            <Link className="mt-4 ml-4 rounded-lg bg-[#ffffff] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" to="/productos">Ver + productos</Link>
            <Link className="mt-4 ml-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" to="/checkout">Finalizar compra</Link>
          </> :
          <h2 className="text-white mt-10 text-center text-5xl font-serif ">El carrito está vacío!🐹 </h2>
      }
    </div>
  )
}

export default Carrito