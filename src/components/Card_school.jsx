import React from 'react'
import Boton_visita from './Boton_visita'
import  Image from 'next/image'

const Card_school = ({formaciones}) => {
  return (
    <div className="md:flex flex-row w-full">
          <Image
          src = {formaciones.imagen}
          width={800}
          height={500}
          alt='Foto FCA'></Image>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">{formaciones.nombre}</h1>
                <h2 className="text-xl font-bold py-6">{formaciones.lic}</h2>
                <p className="py-6 text-justify">{formaciones.descripcion}</p>
                <Boton_visita url = {formaciones.url}></Boton_visita>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card_school