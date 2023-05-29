"use client"
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Card_school from "@/components/Card_school";
import Boton_visita from "@/components/Boton_visita";
const page = () => {
    class Formacion {
        constructor(lic, nombre, descripcion, url, imagen) {
          this.lic = lic;
          this.nombre = nombre;
          this.descripcion = descripcion;
          this.url = url;
          this.imagen = imagen;
        }
      }
    
      class Experiencia {
        constructor(empresa, puesto, descripcion, fecha_inicio, fecha_fin, url) {
          this.empresa = empresa;
          this.puesto = puesto;
          this.descripcion = descripcion;
          this.fecha_inicio = fecha_inicio;
          this.fecha_fin = fecha_fin;
          this.url = url;
        }
      }
      //objetos de las formaciones
      const eneo = new Formacion(
        "Licenciatura en Enfermería y Obstetricia",
        "Facultad de Enfermeria y Obstetricia",
        "La FENO, Facultad de Enfermería y Obstetricia de la UNAM, es la mejor alternativa para la formación de profesionales en enfermería que aporten a la sociedad y México vanguardia en la conservación y atención de la salud.",
        "https://www.feno.unam.mx/",
        "/images/eneo.jpg"
      );
      const fca = new Formacion(
        "Licenciatura en Informática",
        "Facultad de contaduria y administracion",
        "Se encargan de Formar profesionales, profesores e investigadores de la contaduría, la administración, la informática y los negocios internacionales, que contribuyan al desarrollo económico del país mediante la solución de los problemas prácticos que enfrentan las empresas y las organizaciones, así como realizar investigación orientada a la generación del conocimiento de estas disciplinas; cultivando en su comunidad el espíritu analítico, crítico y reflexivo, y proporcionando las herramientas técnicas que les permitan ser altamente competitivos en los planos nacional e internacional.",
        "https://www.fca.unam.mx/index.php",
        "/images/fca.jpg"
      );
      const [formaciones, setFormaciones] = useState({});
      useEffect(() => {
        setFormaciones(fca);
      }, {});
    
      //objetos de las experiencias
      const neo = new Experiencia(
        "Neolpharma",
        "Enfermero Laboral",
        [
          "Elaboracion de examenens medicos periodicos y de nuevo ingreso",
          "Atencion medica de primer contacto",
          "Atencion de accidentes laborales",
          "Administracion de medicamentos e insumos",
          "Administracion del archivo clinico",
          "Investigacion de accidentes de trabajo",
          "Capacitacion a compañeros en temas de salud",
          "Realizacion de pruebas de COVID",
          "Llenado de formatos del seguro social (ST-7)",
        ],
        "Feb-21",
        "Jun-21",
        "https://www.neolpharma.com/"
      );
      const tfv = new Experiencia(
        "TFVictor",
        "Enfermero Laboral",
        [
          "Elaboracion de examenens medicos periodicos y de nuevo ingreso",
          "Atencion medica de primer contacto",
          "Atencion de accidentes laborales",
          "Administracion de medicamentos e insumos",
          "Administracion del archivo clinico",
          "Investigacion de accidentes de trabajo",
          "Capacitacion a compañeros en temas de salud",
          "Realizacion de pruebas de COVID",
          "Llenado de formatos del seguro social (ST-7)",
        ],
        "Jun-21",
        "May-22",
        "https://dacomsa.com/dacomsastorefront/dacomsa/es/tfVictorHome"
      );
      const cnu = new Experiencia(
        "CNU UNAM",
        "Auxiliar TI",
        [
          "Capacitacion den temas de T1",
          "Mantenimiento pagina Web Wordpress",
          "Diseño de interfaces Figma",
          "Edicion de imagenes",
          "Codificacion en HTML, CSS y Javascript",
        ],
        "Jun-22",
        "Actual",
        "https://cnunam.com/"
      );
      let experiencias = [neo, tfv, cnu];
      const t_logo = 50;
        
      return (
        <div>
          <div className=" bg-[url('/images/servidores.jpg')] flex items-center justify-center px-10 py-10 h-screen mb-12  bg-fixed bg-center bg-no-repeat">
            <div className="avatar pl-20">
              <div className="w-40 md:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src='/images/enfemero.jpg' width={500} height={500} alt="Enfermero" />
              </div>
            </div>
            <div className=" pr-20 text-justify pl-10 ">
              <h2 className=" text-5xl font-bold text-slate-50">
                The Nurse Programer
              </h2>
              <p className=" py-5 text-xl text-slate-50">
                Empece siendo enfermero pero descuebri mi verdadera pacion por la
                programacion, hoy en dia es a lo que mas tiempo le dedico, soy
                afortunado de formar parte de programas como ORACLE NEXT EDUCATION e
                INROADS Google que me permitiran crecer como desarrollador de
                software. Mis intereses estan en el analisis de datos, Machine
                Learning y Deep Learninig.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className=" text-5xl font-bold  text-slate-50 pb-10 pt-10">
              Educacion
            </h2>
            <div className="tabs w-full py-10">
              <a
                className="tab tab-bordered w-6/12 pb-20"
                onClick={() => setFormaciones(fca)}
              >
                <Image
                  src="/images/Logofca.png"
                  width={t_logo}
                  height={t_logo}
                  alt="Logo FCA"
                />
              </a>
              <a
                className="tab tab-bordered  w-6/12 pb-20"
                onClick={() => setFormaciones(eneo)}
              >
                <Image
                  src="/images/Logofeno.png"
                  width={t_logo}
                  height={t_logo}
                  alt="Logo FENO"
                />
              </a>
              <Card_school formaciones={formaciones}></Card_school>
            </div>
          </div>
          <div>
            <h2 className="text-center text-5xl font-bold  text-slate-50 pb-10 pt-10">
              Experiencia laboral
            </h2>
            <div className="carousel w-full">
              {experiencias.map((exp) => {
                return (
                  <div
                    id={exp.empresa}
                    className="carousel-item w-full grid justify-items-center items-center"
                  >
                    <div className="card w-96 glass">
                      <div className="card-body">
                        <h2 className="card-title text-2xl">{exp.empresa}</h2>
                        <h2 className="text-xl">{`${exp.puesto} (${exp.fecha_inicio} - ${exp.fecha_fin})`}</h2>
                        <ul>
                          {exp.descripcion.map((tarea) => {
                            return <li>{tarea}</li>;
                          })}
                        </ul>
                        <Boton_visita url={exp.url}></Boton_visita>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {experiencias.map((exp) => {
                return <a href={"#" + exp.empresa} className="btn btn-primary btn-xs"></a>;
              })}
            </div>
            <div>
              <h2 className="text-center text-5xl font-bold text-slate-50 pb-10 pt-10 mt-0">
                Contactame
              </h2>
              <div className="hero ">
                <div className="hero-content text-center ">
                  <div className="max-w-md flex flex-col items-center justify-center py-10 space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="input input-ghost w-full max-w-xs"
                    />
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-ghost w-full max-w-xs"
                    />
                    <input
                      type="number"
                      placeholder="Numero telefonico"
                      className="input input-ghost w-full max-w-xs"
                    />
                    <textarea
                      className="textarea textarea-ghost"
                      placeholder="Mensaje"
                      rows="4"
                      cols="30"
                    ></textarea>
                    <button className="btn btn-primary ">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
};

export default page;
