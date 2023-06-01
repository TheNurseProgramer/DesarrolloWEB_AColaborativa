import React from "react";
import Image from "next/image";
import { useShop } from "@/app/context/ShoppingCart";

const Card_scart = ({ item }) => {
  const { removeFromCart } = useShop();
  return (
    <div className="flex flex-row items-center bg-base-100 px-5">
      <figure>
        <Image
          src={item.producto.image}
          height={50}
          width={50}
          alt="Producto"
          key={item.producto.id}
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-lg">{item.producto.title}</h2>
        <p>{`Cantidad: ${item.unidades}`}</p>
        <p>{`$ ${item.producto.price}`}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-xs btn-ghost" onClick={() => {removeFromCart(item)}}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card_scart;
