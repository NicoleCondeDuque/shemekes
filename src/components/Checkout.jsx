import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const [loading, setLoading] = useState(false); 
  
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
  
    const comprar = async (data) => {
        setLoading(true);
    
        const pedido = {
          cliente: data,
          productos: carrito,
          total: precioTotal(),
        };
    
        const pedidosRef = collection(db, "pedidos");
    
        try {
          const doc = await addDoc(pedidosRef, pedido);
          setPedidoId(doc.id);
          vaciarCarrito();
        } catch (error) {
          console.error("Error al realizar el pedido:", error);
        } finally {
   
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }
      };
    if (loading) {
     
      return (
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
        <p className="text-[#e2e97f] mt-10 text-center text-4xl" >Shemeke esta procesando tu compra</p>
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster mt-10">
	<div className="wheel"></div>
	<div className="hamster">
		<div className="hamster__body">
			<div className="hamster__head">
				<div className="hamster__ear"></div>
				<div className="hamster__eye"></div>
				<div className="hamster__nose"></div>
			</div>
			<div className="hamster__limb hamster__limb--fr"></div>
			<div className="hamster__limb hamster__limb--fl"></div>
			<div className="hamster__limb hamster__limb--br"></div>
			<div className="hamster__limb hamster__limb--bl"></div>
			<div className="hamster__tail"></div>
		</div>
	</div>
	<div className="spoke"></div>
</div>
        </div>
        </div>
      );
    }
    if (pedidoId) {
        return (
            <div className="mt-32">
                <h2 className="main-title text-4xl text-center text-white">Muchas gracias por tu compra!🤍</h2>
                <p className="text-[#e2e97f] mt-10 text-center  " >Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (

<div className="flex justify-center items-center mt-20">
      <div className="w-96 mr-10">
<h2 className='text-[#e2e97f]'>¡Gracias por elegir <span className='carrito--letra text-white'>Shemekes!</span></h2>
     <span className='text-[#e2e97f] mt-10'>
¡Estamos emocionados de endulzar tu día con nuestros deliciosos caramelos artesanales. Antes de finalizar, asegúrate de revisar tu pedido y detalles de envío. ¡háznoslo saber en la sección de contacto!</span>
<p className="text-white mt-24 carrito--letra text-2xl">Total de su compra:</p>
<p className="text-black mt-2  bg-[#e2e97f] font-mono text-4xl rounded-xl text-end mr-4 pr-6 py-2"> ${precioTotal()}</p>
      </div>
    <div className="flex justify-center items-start mt-10">
    <div className="relative flex w-96 flex-col rounded-xl bg-[#e2e97f] bg-clip-border text-gray-700 shadow-md ">
      <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-black text-white shadow-lg shadow-yellow-300/20">
        <h3 className="block  text-3xl font-semibold carrito--letra leading-snug tracking-normal text-white antialiased">
        Finalizar compra:
        </h3>
      </div>   
      <form className="formulario"onSubmit={handleSubmit(comprar)}>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              placeholder=""
              {...register("nombre")}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Nombre
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="email"
              placeholder=""
              {...register("email")}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="phone"
              placeholder=""
              {...register("telefono")}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Telefono
            </label>
          </div>
          <button
            type="submit"
            className="block text-white w-full select-none rounded-lg  bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-yellow-300/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
           Comprar
          </button>
          <Link className="ver-mas" to="/carrito">
          <button
            type="submit"
            className="block text-black w-full select-none rounded-lg bg-[#e2e97f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-yellow-300/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
           Volver al carrito
          </button>
          </Link>
        </div>
      </form>
    </div>
    </div>
    </div>




    
  )
}

export default Checkout
