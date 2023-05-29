"use client";

import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (item) => {
    if (shoppingCart.find((product) => product.id === item.id)) {
      var aux_cart = shoppingCart;
      aux_cart.find((product) => product.id === item.id).unidades += 1;
      console.log(aux_cart);
      setShoppingCart(aux_cart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  };

  const removeFromCart = (item) => {
    var aux_cart = shoppingCart;
    if (aux_cart.find((product) => product.id === item.id)) {
      if (aux_cart.find((product) => product.id === item.id).unidades > 1) {
        aux_cart.find((product) => product.id === item.id).unidades -= 1;
        setShoppingCart(aux_cart);
      } else {
        setShoppingCart(aux_cart.filter((product) => product.id !== item.id));
      }
    } else {
      setShoppingCart(aux_cart.filter((product) => product.id !== item.id));
    }
  };

  const  clearCart = () => {
    setShoppingCart([]);
  }

  return (
    <ShopContext.Provider value={{ shoppingCart, addToCart, removeFromCart ,clearCart}}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
