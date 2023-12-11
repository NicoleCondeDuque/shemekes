import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-black">
   
        <Link to="/" className="w-full text-7xl mt-12 font-bold carrito--letra text-[#e2e97f]">
        Shemekes
      </Link>
        <ul className=" font-bold md:flex mt-12">        
            <li><Link className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f]  hover:-translate-y-1 hover:scale-110 hover:bg-[#e2e97f] hover:text-black duration-300" to="/">Inicio</Link></li>
            <li><Link className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f] hover:-translate-y-1 hover:scale-110 hover:bg-[#e2e97f] hover:text-black duration-300" to="/productos">Productos</Link></li>           
            <li><Link className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f] hover:-translate-y-1 hover:scale-110 hover:bg-[#e2e97f] hover:text-black duration-300" to="/productos/con-azucar">+Azucar</Link></li>
            <li><Link  className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f] hover:-translate-y-1 hover:scale-110 hover:bg-[#e2e97f] hover:text-black duration-300" to="/productos/sin-azucar">0Azucar</Link></li>
            <li><Link className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f] hover:-translate-y-1 hover:scale-110 hover:bg-[#e2e97f] hover:text-black duration-300" to="/contacto">Contacto</Link></li>
            <li className="p-4 transition ease-in-out delay-150 bg-[#e0dac] text-[#e2e97f] hover:-translate-y-1 hover:scale-10 hover:bg-[#e2e97f] hover:text-black duration-300"><CartWidget /></li>
        </ul>  
    </div>
  )
}

export default Navbar