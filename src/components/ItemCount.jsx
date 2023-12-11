import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="item-count">
            <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" onClick={handleRestar}>-</button>
            <p className='text-[#e2e97f]' >{cantidad}</p>
            <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" onClick={handleSumar}>+</button>
        </div>
        <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount