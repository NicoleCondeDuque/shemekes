import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito)
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
    setAgregado(true);
  }

  return (
    <div className="container  mt-10">
      <div className="producto-detalle  mt-10">
        <img className="rounded-xl" src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="text-[#e2e97f] text-4xl font-bold">{item.titulo}</h3>
          <p className="text-white">{item.descripcion}</p>
          <p className="categoria  text-[#292928]">Categoría: {toCapital(item.categoria)}</p>
          <p className="precio text-white">${item.precio}</p>
          {agregado ? (
            <div className="flex items-center space-x-2" >
              <p className="text-[#e2e97f] font-thin">Agregado al carrito</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-[#e2e97f] animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>       
   <Link className="ver-mas" to="/productos">
    <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85">
    Volver a productos
    </button>
  </Link>
  <Link className="ver-mas" to="/carrito">
    <button className="mt-4 rounded-lg bg-[#e2e97f] py-2 px-2 text-xs font-bold uppercase text-black shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85">
    🛒
    </button>
  </Link>
  </div>
          ) : (
            <>
              <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={handleAgregar}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
