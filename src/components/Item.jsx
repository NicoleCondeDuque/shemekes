import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
   
<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-2 my-2 mb-4">
<div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-yellow-300 to-yellow-300">
  <img src={producto.imagen} alt={producto.titulo}  className="w-full h-full object-cover" />
</div>
<div className="p-6 bg-white rounded-xl shadow-md">
  <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
    {producto.titulo}
  </h5>
  <p className="text-base font-light leading-relaxed text-inherit">
  Precio: ${producto.precio}
  </p>
  <p className="text-base font-light leading-relaxed text-inherit">
  Categoría: {toCapital(producto.categoria)}
  </p>
  <Link className="ver-mas" to={`/item/${producto.id}`}>
    <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85">
    Ver más
    </button>
  </Link>
</div>
</div>





  )
}

export default Item

