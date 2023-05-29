import React from "react";
import { useShop } from "@/app/context/ShoppingCart";

const Boton_Buynow = () => {
    const { clearCart } = useShop();
  return (
    <button
      className="btn btn-primary h-10 px-6 font-semibold rounded-md text-white"
      type="submit"
      onClick={() => {
        alert("Compra realizada satisfactoriamente")
        clearCart();
      }}
    >
      Buy now
    </button>
  );
};

export default Boton_Buynow;
