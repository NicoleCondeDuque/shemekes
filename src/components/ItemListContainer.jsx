import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    const fetchData = async () => {
      try {
        const resp = await getDocs(q);
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
       
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <div>
      {loading ? (
  <div className="flex justify-center items-center h-screen">
  <div className="flex flex-col items-center">
  <p className="text-[#e2e97f] mt-10 text-center text-4xl " >Shemeke esta cargando los productos</p>
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
      ) : (
        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};

export default ItemListContainer;
