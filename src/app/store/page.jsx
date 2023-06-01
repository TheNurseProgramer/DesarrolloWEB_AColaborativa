"use client";
import React from "react";
import Card_clothes from "@/components/Card_clothes";
import { useEffect, useState } from "react";
import Card_others from "@/components/Card_others";
const Page = () => {
  var [product, setProduct] = useState([]);
  //funcion para consumir la API de fakestore
  async function getProducto() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error en la solicitud a la API");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      alert("Error:", error.message);
    }
  }
  useEffect(() => {
    getProducto();
  }, []);
  //Funcion para flitrar los productos
  const list_categorys = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
    "all",
  ];

  const [filter, setFilter] = useState("all");
  const fillterProducts = (product) => {
    return product.filter((item) => {
      return filter === "all" ? item : item.category === filter;
    });
  };
  const aux = fillterProducts(product);
  return (
    <>
      <div className=" container mx-auto px-4 pt-20 ">
        <h2 className=" text-5xl font-bold text-slate-50 text-center">
          {" "}
          Filtros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 pt-20">
          {list_categorys.map((values,i) => {
            return (
              <div className="form-control "key={i}>
                <label className="label cursor-pointer">
                  <span className="label-text">{values}</span>
                  <input
                    type="button"
                    onClick={() => {
                      setFilter(values);
                    }}
                  />
                </label>
              </div>
            );
          })}
        </div>
        <div>
          {aux.map((producto,i) => {
            const { category } = producto;
            if (
              category === "men's clothing" ||
              category === "women's clothing"
            ) {
              return (
                <Card_clothes
                  item={producto}
                  key={i}
                ></Card_clothes>
              );
            } else {
              return (
                <Card_others
                  item={producto}
                  key={i}
                ></Card_others>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
