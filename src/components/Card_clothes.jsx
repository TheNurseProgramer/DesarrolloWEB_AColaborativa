import React from "react";
import Image from "next/image";
import Boton_comprar from "./Boton_comprar";
import Boton_Buynow from "./Boton_Buynow";

const Card_clothes = ({ item }) => {
  const tamanho = 100;
 
  const talla = ["XS", "S", "M", "L", "XL"];
  
  return (
    <div className="py-20 px-20">
      <div className="flex font-sans py-10">
        <div className="flex-none w-48 relative">
          <Image
            width={tamanho}
            height={tamanho}
            src={item.image}
          key={item.id}
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold  text-slate-50">
              {item.title}
            </h1>
            <div className=" flex-row text-lg font-semibold  text-slate-50">
              {"$ " + item.price}
            </div>
            <div className="w-full flex-none text-sm font-medium  text-slate-50 mt-2">
              {item.description}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {talla.map((talla) => {
                return (
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      defaultValue={talla}
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center  text-slate-50 peer-checked:font-semibold peer-checked:bg-primary peer-checked:text-white">
                      {talla}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Boton_Buynow item={item} />
              <Boton_comprar item={item} />
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md  text-slate-50 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width={20}
                height={20}
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-50">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Card_clothes;
