"use client";
import React from "react";
import Link from "next/link";
import Card_scart from "./Card_scart";
import Boton_Buynow from "./Boton_Buynow";
import { useShop } from "@/app/context/ShoppingCart";
import { useState } from "react";

const Navbar = () => {
  const { shoppingCart } = useShop();
  const [total, setTotal] = useState(0);
  const sumar = () => {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      sum += parseFloat(shoppingCart[i].producto.price*shoppingCart[i].unidades);
    }
    setTotal(sum);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-xl">
            <Link href="/">The Nurse Programer</Link>
          </div>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Acerca de mi</Link>
            </li>
            <li>
              <Link href="/blog">Mi blog</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/store">Tienda</Link>
            </li>
            <li>
              <a>
                <div className="indicator" onClick={()=>sumar()}>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className=" rounded-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shopping-cart"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap ="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 17h-11v-14h-2"></path>
                        <path d="M6 5l14 1l-1 7h-13"></path>
                      </svg>
                    </label>{" "}
                    <span className="indicator-item badge badge-secondary">
                      {shoppingCart.length}
                    </span>
                    <div className="overflow-y-auto h-[40rem] w-96 dropdown-content p-2 shadow bg-base-100 rounded-box mt-4">
                      {shoppingCart.map((item) => {
                        return <Card_scart item={item}></Card_scart>;
                      })}
                      <div className="flex justify-between items-center border-t-2 borde-slate-50">
                        <h3 className="text-lg font-bold py-5">
                          {total === 0
                            ? `Aun no tiene productos`
                            : `$ ${total.toFixed(2)}`}
                        </h3>
                        {shoppingCart.length > 0 ? <Boton_Buynow></Boton_Buynow> : null} 
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
