import { MailIcon, DownloadIcon } from "@heroicons/react/outline";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSendEmail } from './hooks/useSendEmail';
import IvanBanner from "./assets/IvanBanner.svg";
import CollageIvan from "./assets/collageIvan.png";
import CircleTransparent from "./assets/circleTransparent.svg";
import ImageGallery from "react-image-gallery";
import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaJira,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaExternalLinkAlt
} from "react-icons/fa";
import { FaFigma, FaGithub } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp, SiSequelize, SiAdobexd, SiPostman } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

import IconFront from "./assets/iconoFront.svg";
import IconoBack from "./assets/IconoBack.svg";
import IconoDesign from "./assets/IconoDesign.svg";

import Carrusel_1 from "./assets/carrusel_1.jpeg";
import Carrusel_2 from "./assets/carrusel_2.jpg";
import Carrusel_3 from "./assets/carrusel_3.jpg";
import Carrusel_4 from "./assets/carrusel_4.jpeg";
import Carrusel_5 from "./assets/carrusel_5.jpg";
import Carrusel_6 from "./assets/carrusel_6.jpg";
import Carrusel_7 from "./assets/carrusel_7.jpeg"
import Carrusel_13 from "./assets/carrusel_13.jpg";
import Carrusel_12 from "./assets/carrusel_12.jpeg";
// import Carrusel_15 from "./assets/carrusel_12.jpeg";

import Dashboard1 from "./assets/interfaceDashboard1.jpg";
import Dashboard2 from "./assets/interfaceDashboard2.jpg";
import Dashboard3 from "./assets/interfaceDashboard3.jpg";

import Compras1 from "./assets/compras1.jpg";
import Compras2 from "./assets/compras2.jpg";
import Compras3 from "./assets/compras3.jpg";

import itverLanding1 from "./assets/itverLanding1.jpg";
import itverLanding2 from "./assets/itverLanding2.jpg";
import itverLanding3 from "./assets/itverLanding3.jpg";

import cartoData1 from "./assets/cartoData1.jpg";
import cartoData2 from "./assets/cartoData2.jpg";
import cartoData3 from "./assets/cartoData3.jpg";

import carnesRojas1 from "./assets/carnesRojas1.jpg";
import carnesRojas2 from "./assets/carnesRojas2.jpg";
import carnesRojas3 from "./assets/carnesRojas3.jpg";

import comex1 from "./assets/comex1.jpg";
import comex2 from "./assets/comex2.jpg";
import comex3 from "./assets/comex3.jpg";

function App() {
  const [mainImage, setMainImage] = useState(Dashboard1);

  const [imgItverLanding, setimgItverLanding] = useState(itverLanding2);

  const [imgCartoData, setimgCartoData] = useState(cartoData3);

  const [imgCompras, setimgCompras] = useState(Compras3);

  const [imgComex, setimgComex] = useState(comex1);

  const [imgCarnesRojas, setimgCarnesRojas] = useState(carnesRojas2);

  const [activeTab, setActiveTab] = useState("experiencia");

  const handleTabClick = (tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const images = [
    Carrusel_1,
    Carrusel_2,
    Carrusel_3,
    Carrusel_4,
    Carrusel_5,
    Carrusel_6,
    Carrusel_7,
    Carrusel_13,
    Carrusel_12
  ];

  const imagesTest = [
    {
      original: Carrusel_12,
      thumbnail: Carrusel_12,
      description: 'Instructor en el curso de Java Script en el Tecnm Veracruz con mas de 50 alumnos'
    },
    {
      original: Carrusel_2,
      thumbnail: Carrusel_2,
      description: 'Presentación de la pagina oficial de la carrera a nivel Estatal'
    },
    {
      original: Carrusel_3,
      thumbnail: Carrusel_3,
      description: 'Presentación de la pagina oficial de la carrera a nivel Estatal'
    },
    {
      original: Carrusel_4,
      thumbnail: Carrusel_4,
      description: 'Instructor en el curso de Java Script en el Tecnm Veracruz con mas de 50 alumnos'
    },
    {
      original: Carrusel_5,
      thumbnail: Carrusel_5,
      description: 'Presentación de la pagina oficial de la carrera a nivel Local'
    },
    {
      original: Carrusel_6,
      thumbnail: Carrusel_6,
      description: 'Presentación de la pagina oficial de la carrera a nivel Local'
    },
    {
      original: Carrusel_7,
      thumbnail: Carrusel_7,
      description: 'Presentación de proyectos a director nacional del TECNM'
    },
    {
      original: Carrusel_13,
      thumbnail: Carrusel_13,
      description: 'Feria de carreras 2022'
    },
    {
      original: Carrusel_1,
      thumbnail: Carrusel_1,
      description: 'Instructor en el curso de Java Script en el Tecnm Veracruz con mas de 50 alumnos'
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= images.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { sendEmail, error, success } = useSendEmail();

  // re_81wDpqZu_Nee4g7covkCvn5FdTmYwe1bG

  // Estado para todos los campos del formulario
  const [formData, setFormData] = useState({
    user_name: "",
    message: "",
    user_email: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    await sendEmail(formData); // Envía los datos del formulario

    setFormData({
      user_name: "",
      message: "",
      user_email: "",
      reply_to: "",
    });
  };

  const icons = [
    { name: "React", icon: <FaReact />, category: "frontend" },
    { name: "Vue", icon: <FaVuejs />, category: "frontend" },
    { name: "JavaScript", icon: <RiJavascriptFill />, category: "frontend" },
    { name: "TypeScript", icon: <BiLogoTypescript />, category: "frontend" },

    { name: "Php", icon: <SiPhp />, category: "backend" },
    { name: "Laravel", icon: <FaLaravel />, category: "backend" },

    { name: "Express", icon: <FaNodeJs />, category: "backend" },
    { name: "Sequelize", icon: <SiSequelize />, category: "backend" },

    { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
    { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
    { name: "Mongo", icon: <DiMongodb />, category: "backend" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, category: "backend" },
    { name: "Figma", icon: <FaFigma />, category: "" },
    { name: "AdobeXD", icon: <SiAdobexd />, category: "" },
    { name: "Git", icon: <FaGitAlt />, category: "" },
    { name: "Jira", icon: <FaJira />, category: "" },
    { name: "Postman", icon: <SiPostman />, category: "backend" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredIcons =
    filter === "all" ? icons : icons.filter((icon) => icon.category === filter);

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={true}
/>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur-xl bg-white">
          {/* <div className="border-t-4 border-blue-900 border-solid rounded-full w-16 h-16 animate-spin"></div> */}
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
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
      )}

      <div className="relative" id="home">
        <header className="bg-white rounded-md shadow-md fixed top-0 left-0 right-0 mx-14 mt-1 border-b-2 border-gray-300 py-4 px-6 z-40">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold text-blue-900">Portafolio</div>

            {/* Botón de menú para pantallas pequeñas */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-blue-900 hover:text-blue-700 transition-colors font-bold duration-300"
              >
                Menu
              </button>
            </div>

            {/* Navegación para pantallas grandes */}
            <nav className="hidden lg:flex space-x-8 items-center">
              <div className="flex space-x-4">
                <a
                  href="#home"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Inicio
                </a>
                <a
                  href="#experience"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Exp. Laboral
                </a>
                <a
                  href="#proyects"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Proyectos
                </a>
                <a
                  href="#tecno"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Tecnologías
                </a>
                <a
                  href="#galery"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Galería
                </a>
                <a
                  href="#contact"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300"
                >
                  Contacto
                </a>
              </div>
            </nav>
          </div>

          {/* Menú desplegable para pantallas pequeñas */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg mt-2 py-2 z-50">
              <a
                href="#home"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Inicio
              </a>
              <a
                href="#experience"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Exp. Laboral
              </a>
              <a
                href="#proyects"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Proyectos
              </a>
              <a
                href="#tecno"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Tecnologías
              </a>
              <a
                href="#galery"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Galería
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-slate-800 hover:text-white hover:bg-cyan-700 transition-colors duration-300"
                onClick={closeMenu}
              >
                Contacto
              </a>
            </div>
          )}
        </header>

        <div className="pt-12">
          <section>
            <div className="block lg:hidden text-center mt-8">
              <p className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                ¡Hola! Mi nombre es:
              </p>
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-zinc-800 mt-2 mb-4">
                Iván de Jesús <br /> Agame Malpica
              </h1>
            </div>

            <div className="relative flex flex-col items-center justify-center lg:flex-row lg:justify-between bg-white md:pl-24 ">
              <div className="absolute block xs:hidden top-0 left-0 w-full h-full z-0">
                <img
                  src={CircleTransparent}
                  className="w-[700px] h-[700px] object-cover hidden md:block"
                  alt="Circle Transparent"
                  loading="lazy"
                />
              </div>

              <div className="lg:order-2 lg:px-0 lg:pt-8 h-auto md:h-screen relative z-10">
                <img
                  src={IvanBanner}
                  alt="Iván Agame"
                  className="w-auto h-full lg:w-auto lg:h-full relative z-10"
                  onLoad={handleImageLoad}
                />
              </div>

              <div className="text-center lg:text-left px-8 lg:order-1 relative z-20">
                <p className="hidden lg:block text-cyan-600 text-3xl">
                  ¡Hola mundo! Mi nombre es:
                </p>
                <h1 className="hidden lg:block text-4xl lg:text-7xl font-bold text-zinc-800 mt-2 mb-12">
                  Iván de Jesús <br /> Agame Malpica
                </h1>
                <p className="text-lg mt-3 lg:mt-5 lg:text-xl bg-blue-950 rounded-md shadow-md text-center text-white py-2 mb-8">
                  Ingeniero en Sistemas Computacionales
                </p>
                <div className="mt-4 flex justify-between space-x-4 pb-12">
                  <a
                    href="#contact"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600"
                  >
                    <MailIcon className="w-5 h-5 mr-2" />
                    <span className="hidden lg:inline">Contáctame</span>
                    <span className="lg:hidden">Contacto</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivanagamee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600"
                  >
                    <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1UIGicy36hQUDGa5CPbIxB-W5QFa7qdJZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2" /> 
                    <a 
                      href="https://drive.google.com/file/d/1UIGicy36hQUDGa5CPbIxB-W5QFa7qdJZ/view?usp=sharing"
                      target="_blank"
                      className="hidden lg:inline">Descarga mi CV  
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1UIGicy36hQUDGa5CPbIxB-W5QFa7qdJZ/view?usp=sharing"
                      target="_blank"
                      className="lg:hidden">CV  
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-4 md:px-12 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-3xl font-bold text-center text-gray-800 mb-12">
                <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
                <h2 className="text-2xl font-bold text-cyan-800 mx-3">
                  Mis habilidades
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
                  <div className="flex flex-col items-center">
                    <img
                      src={IconFront}
                      alt="Icon"
                      className="mb-4 h-20 w-20"
                    />
                  </div>
                  <h4 className="text-gray-500 text-sm mb-2">Desarrollador</h4>
                  <h2 className="text-xl font-semibold mb-4">Front-end</h2>
                  <p className="text-gray-600 mb-6 text-justify">
                    Enfoque principal en <b>Java Script</b> con frameworks como{" "}
                    <b>Vue y React</b>. Integrando en el desarrollo librerias
                    profesionales como Quasar y Material UI.
                  </p>
                </div>

                <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
                  <div className="flex flex-col items-center">
                    <img
                      src={IconoBack}
                      alt="Icon"
                      className="mb-4 h-20 w-20"
                    />
                  </div>
                  <h4 className="text-gray-500 text-sm mb-2">Desarrollador</h4>
                  <h2 className="text-xl font-semibold mb-4">Backend</h2>
                  <p className="text-gray-600 mb-6 text-justify">
                    Especializado en{" "}
                    <b>PHP con Laravel, JavaScript con Sequelize,</b> y
                    conocimiento en bases de datos como{" "}
                    <b>PostgreSQL y MongoDB.</b>
                  </p>
                </div>

                <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
                  <div className="flex flex-col items-center">
                    <img
                      src={IconoDesign}
                      alt="Icon"
                      className="mb-4 h-20 w-20"
                    />
                  </div>
                  <h4 className="text-gray-500 text-sm mb-2">Diseñador</h4>
                  <h2 className="text-xl font-semibold mb-4">UI / UX</h2>
                  <p className="text-gray-600 mb-6 text-justify">
                    Conocimiento básico en diseño gráfico y uso de herramientas
                    como <b>Figma, Adobe XD, Canva e Ilustrator.</b>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-4 my-6 pt-20" id="tecno">
            {/* Filtros */}

            <div className="mb-4 flex flex-col md:flex-row justify-between mx-7">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
                <h2 className="text-2xl font-bold text-cyan-800 mx-3">
                  Tecnologías
                </h2>
              </div>

              <div className="flex flex-wrap md:flex-nowrap items-center">
                <button
                  onClick={() => setFilter("all")}
                  className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${
                    filter === "all"
                      ? "border-b-4 border-teal-600"
                      : "hover:bg-gray-300"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setFilter("frontend")}
                  className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${
                    filter === "frontend"
                      ? "border-b-4 border-teal-600"
                      : "hover:bg-gray-300"
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setFilter("backend")}
                  className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${
                    filter === "backend"
                      ? "border-b-4 border-teal-600"
                      : "hover:bg-gray-300"
                  }`}
                >
                  Backend
                </button>
              </div>
            </div>

            {/* Iconos */}
            <div className="flex flex-wrap gap-6 justify-center">
              {filteredIcons.map((icon, index) => (
                <div
                  key={index}
                  className="p-6 transition-transform transform hover:scale-110 flex flex-col items-center"
                >
                  <div className="text-5xl text-slate-600 hover:text-teal-600">
                    {icon.icon}
                  </div>
                  <div className="mt-2 text-center text-slate-600 hover:text-teal-600">
                    {icon.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="order-2 flex justify-center md:order-1">
                  <img
                    src={CollageIvan}
                    alt="Iván Agame"
                    className="w-auto md:h-[500px] px-6 relative z-10" 
                  />
                </div>

                <div className="order-1 md:order-2 px-8">
                  <div className="flex items-center mb-4">
                    <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
                    <h2 className="text-2xl font-bold text-cyan-800 mx-3">
                      Sobre mí
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 text-justify mb-4">
                    Soy un dedicado Ingeniero de Software con experiencia en el desarrollo web fullstack. Mi desarrollo laboral se enfoca en tecnologías JavaScript con marcos de trabajo como Vue.js y React en el frontend, así como lenguajes como PHP (Laravel) o Sequelize (Express) en el backend. Cuento con un sólido conocimiento en bases de datos relacionales como PostgreSQL, MySQL o incluso MongoDB. Soy un desarrollador perfeccionista con la estructura del código y la calidad del producto final, siempre buscando la mejor solución y enfocado en la escalabilidad y mantenimiento futuro del software.

                    <br />
                    <br />
                    Soy una persona disciplinada, comprometida y capaz de trabajar en entornos colaborativos usando metodologías agiles y herramientas de control de código, aportando mis conocimientos y entendiendo los requerimientos, riegos y oportunidades para proporcionar soluciones al usuario final.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="dark:bg-white dark:text-gray-800 pt-20 pb-11"
          >
            <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden justify-center flex-nowrap dark:bg-white dark:text-gray-800">
              <a
                href="#"
                onClick={() => handleTabClick("experiencia")}
                className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
                  activeTab === "experiencia"
                    ? "dark:border-cyan-600 dark:text-gray-900"
                    : "dark:border-gray-300 dark:text-gray-600"
                }`}
              >
                Experiencia
              </a>
              <a
                href="#"
                onClick={() => handleTabClick("estudios")}
                className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
                  activeTab === "estudios"
                    ? "dark:border-cyan-600 dark:text-gray-900"
                    : "dark:border-gray-300 dark:text-gray-600"
                }`}
              >
                Estudios
              </a>
              <a
                href="#"
                onClick={() => handleTabClick("voluntariado")}
                className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
                  activeTab === "voluntariado"
                    ? "dark:border-cyan-600 dark:text-gray-900"
                    : "dark:border-gray-300 dark:text-gray-600"
                }`}
              >
                Voluntariado
              </a>
            </div>

            <div className="container max-w-16xl py-12 px-3 mx-auto">
              {activeTab === "experiencia" && (
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        
                        <h3 className="text-xl font-semibold tracking-wide">
                          INFOTEC asignado a la Secretaria de Relaciones Exteriores
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Septiembre 2024 - Actualidad
                        </time>
                        <a
                              href="https://www.infotec.mx/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Pagina Oficial
                        </a>
                        <p className="mt-3 text-justify">
                        Con experiencia en el mantenimiento y actualización de sistemas, he realizado migraciones garantizando la integridad de los datos y la continuidad operativa. También he diseñado e implementado módulos de alto impacto, optimizando procesos críticos y mejorando la eficiencia operativa.
                        </p>
                        <p className="mt-2 text-justify">
                        He desarrollado soluciones tecnológicas personalizadas alineadas con los objetivos del negocio y las necesidades de los usuarios. Mi enfoque incluye la gestión de riesgos y una colaboración estrecha con los usuarios para ofrecer soluciones efectivas y de alto valor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        <h3 className="text-xl font-semibold tracking-wide">
                          Practicante Desarrollador web
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Enero 2021 - Agosto 2022
                        </time>
                        <a
                              href="https://drive.google.com/file/d/16pqw6uxtNWT6-IZUAFddT4fS8Ztm5vvn/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Carta de Recomendación
                        </a>
                        <p className="mt-3 text-justify">
                        Diseñé y desarrollé una página web para la carrera de Ingeniería en Sistemas Computacionales del Instituto Tecnológico de Veracruz, presentando de forma visualmente atractiva la matrícula de la carrera, información de docentes y videos introductorios de las materias.
                        </p>
                        <p className="mt-2 text-justify">
                        Además, creé un sistema gestor de datos conectado directamente a dicha página, permitiendo administrar información de docentes, materias, videos y secciones tanto de la carrera mencionada como de todas las carreras de la universidad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        
                        <h3 className="text-xl font-semibold tracking-wide">
                          Azit Developers (Fullstack)
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Noviembre 2022 - Septiembre 2024
                        </time>
                        <a
                              href="https://drive.google.com/file/d/1O5tMW6lwa7sVgZqk4x3WqaudeioeimFE/view"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Carta de Recomendación
                        </a>
                        <p className="mt-3 text-justify">
                        Diseñé y desarrollé interfaces de usuario intuitivas y atractivas, enfocándome en la experiencia del usuario para optimizar la usabilidad y accesibilidad. Además, creé un sistema de gestión de ganado para una empresa de crianza y venta, incorporando módulos de registro, cuidado, alimentación y venta, con estadísticas y gráficas en tiempo real.
                        </p>
                        <p className="mt-2 text-justify">
                        Desarrollé un sistema gestor de tareas con funcionalidad de "drag and drop" para una empresa de cartografía, integrando soporte multilenguaje para su uso en México, EUA y El Salvador. También implementé módulos de un sistema de compras para la adquisición de activos fijos y la gestión de bienes inventariables en almacenes.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              )}
              {activeTab === "estudios" && (
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        <h3 className="text-xl font-semibold tracking-wide">
                          TECNM Campus Veracruz
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Agosto 2018 - Julio 2022
                        </time>
                        <a
                              href="https://drive.google.com/file/d/155CgL0-68xRaIEdvJQqKEt2uhiHt-QuY/view"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Titulo profesional
                        </a>
                        <p className="mt-3 text-justify">
                          Egresado de la carrera de Ingeniería en Sistemas, desarrollando habilidiades de
                          programación y bases de datos
                        </p>
                        <p className="mt-2 text-justify">
                          Además de participar en diversos eventos Nacionales de
                          divulgación científica en temas como Inteligencia
                          Artificial
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        <h3 className="text-xl font-semibold tracking-wide">
                          CETIS No 15
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          {" "}
                          Agosto 2016 - Julio 2018
                        </time>
                        <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 mb-5 hover:text-teal-600"
                            >
                        </a>
                        <p className="mt-3 text-justify">
                          Egresado como técnico en programación usando
                          tecnologías como Java para aprender las bases de 
                          la programación de escritorio y movil. Aprendí las bases
                          de sistemas operativos como Linux
                        </p>
                        <p className="mt-2 text-justify">
                          Además de aprender los fundamentos de las bases de
                          datos relacionales en MySQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "voluntariado" && (
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        <h3 className="text-xl font-semibold tracking-wide">
                          Comunidad de Ingeniería en Sistemas{" "}
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Octubre 2019 - Julio 2022
                        </time>
                        <a
                              href="https://drive.google.com/file/d/1_Za8biGqbL8EiZ41zSaLhF1kLhdFpe8X/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Reconocimientos de eventos
                        </a>
                        <p className="mt-3 text-justify">
                          Participe en diversos eventos de divulgación científica como
                          organizador.
                        </p>
                        <p className="mt-2 text-justify">
                          Gestionaba el stream, diseñaba flyers, realizaba
                          guiones y presentaba a los diversos ponentes que
                          presentaban algún tema relacionado a la Ingeniería en
                          Sistemas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                        <h3 className="text-xl font-semibold tracking-wide">
                          Asesor/Tallerista (Voluntariado)
                        </h3>
                        <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-1">
                          Octubre 2019 - Julio 2022
                        </time>
                        <a
                              href="https://drive.google.com/file/d/1uRCIzKqpFg_cG8IEOD-0NkmXC9urfFTT/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-cyan-800 rounded-md mt-3 hover:text-teal-600"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Reconocimientos y flyers
                        </a>
                        <p className="mt-3 text-justify">
                          Impartí algunos talleres y cursos de manera gratuita a
                          alumnos de la Universidad.
                        </p>
                        <p className="mt-2 text-justify">
                          Los talleres eran de diseño grafico en herramientas
                          como Canva y cursos de programación con Css, Html
                          y JavaScript.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="proyects" className="py-12 bg-gray-100 pt-20">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-center text-cyan-800 mb-4">
                Proyectos en los que he colaborado:{" "}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-md text-gray-600 text-center mb-12">
                  Las imágenes mostradas a continuación son pertenecientes a
                  sistemas de carácter privado, es por ello que solo se muestran
                  algunas pre-visualizaciones con motivo de validar mi
                  experiencia y sin ánimo de lucro.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={mainImage}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Dashboard de ISC</h2>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          mainImage === Dashboard1
                            ? "border-4 border-amber-300 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Dashboard1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setMainImage(Dashboard1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          mainImage === Dashboard2
                            ? "border-4 border-amber-300 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Dashboard2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setMainImage(Dashboard2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          mainImage === Dashboard3
                            ? "border-4 border-amber-300 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Dashboard3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setMainImage(Dashboard3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={imgItverLanding}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold mb-4">Pagina de ISC</h2>
                        <a
                        href="http://carreras3.veracruz.tecnm.mx:21213/sistemas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-cyan-600 text-white px-4 mb-4 rounded-md shadow-md hover:bg-teal-600"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Visitar
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          imgItverLanding === itverLanding1
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={itverLanding1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setimgItverLanding(itverLanding1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgItverLanding === itverLanding2
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={itverLanding2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setimgItverLanding(itverLanding2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgItverLanding === itverLanding3
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={itverLanding3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setimgItverLanding(itverLanding3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={imgCartoData}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Gestor de tareas</h2>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          imgCartoData === cartoData1
                            ? "border-4 border-purple-400 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={cartoData1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCartoData(cartoData1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCartoData === cartoData2
                            ? "border-4 border-purple-400 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={cartoData2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCartoData(cartoData2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCartoData === cartoData3
                            ? "border-4 border-purple-400 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={cartoData3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCartoData(cartoData3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={imgComex}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Sistema de enrolamiento</h2>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          imgComex === comex1
                            ? "border-4 border-blue-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={comex1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setimgComex(comex1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgComex === comex2
                            ? "border-4 border-blue-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={comex2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setimgComex(comex2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgComex === comex3
                            ? "border-4 border-blue-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={comex3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setimgComex(comex3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* const [imgComex, setimgComex] = useState(comex1); */}

                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={imgCarnesRojas}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Venta de ganado</h2>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          imgCarnesRojas === carnesRojas1
                            ? "border-4 border-rose-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={carnesRojas1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCarnesRojas(carnesRojas1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCarnesRojas === carnesRojas2
                            ? "border-4 border-rose-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={carnesRojas2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCarnesRojas(carnesRojas2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCarnesRojas === carnesRojas3
                            ? "border-4 border-rose-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={carnesRojas3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCarnesRojas(carnesRojas3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* const [imgCarnesRojas, setimgCarnesRojas] = useState(carnesRojas1); */}

                <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={imgCompras}
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Sistema de compras</h2>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`cursor-pointer ${
                          imgCompras === Compras1
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Compras1}
                          alt="Small 1"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCompras(Compras1)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCompras === Compras2
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Compras2}
                          alt="Small 2"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCompras(Compras2)}
                          loading="lazy"
                        />
                      </div>
                      <div
                        className={`cursor-pointer ${
                          imgCompras === Compras3
                            ? "border-4 border-teal-500 shadow-xl"
                            : ""
                        }`}
                      >
                        <img
                          src={Compras3}
                          alt="Small 3"
                          className="w-full h-full object-cover"
                          onClick={() => setimgCompras(Compras3)}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="galery" className="relative w-5/6 mx-auto pt-20">
            <div className="flex items-center mb-6">
              <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
              <h2 className="text-2xl font-bold text-cyan-800 mx-3">Galeria</h2>
            </div>

            <div className="hidden lg:block w-5/6 lg:w-5/6 xl:w-5/6 mx-auto ">
              <ImageGallery
                items={imagesTest}
                thumbnailPosition="left"
              />
            </div>

            <div className="lg:hidden w-5/6 lg:w-5/6 xl:w-5/6 mx-auto ">
              <ImageGallery
                items={imagesTest}
                thumbnailPosition="bottom"
              />
            </div>

          </section>

         

          <section
            id="contact"
            className="py-6 dark:bg-white dark:text-gray-900 px-6 pt-14"
          >
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <div className="flex items-center mb-6">
                  <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
                  <h1 className="text-3xl font-bold text-cyan-800 pb-4 pt-1">
                    Contacto
                  </h1>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Veracruz, Ver</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <a href="https://wa.me/522299063184" target="_blank"> (52) 22-99-06-31-84</a>
                  </p> 
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <a target="_blank" href="mailto:dejamivan@gmail.com">dejamivan@gmail.com</a>
                  </p>

                  <p className="flex items-center">
                    <div className="w-5 h-5 mr-2 sm:mr-6">
                      <FaLinkedin />
                    </div>
                    <a rel="noopener noreferrer" target="_blank"
                    href="https://www.linkedin.com/in/ivanagamee/">@ivanagamee</a>
                  </p>

                  <p className="flex items-center">
                    <div className="w-5 h-5 mr-2 sm:mr-6">
                      <FaGithub />
                    </div>
                    <a 
                    rel="noopener noreferrer" target="_blank"
                    href="https://github.com/IvanAgamee">IvanAgamee</a>
                  </p>
                </div>
              </div>
              <form
                noValidate=""
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
              >
                <p className="pt-2 text-gray-600">
                  Llena este formulario y empecemos una conversación:{" "}
                </p>
                <label className="block">
                  <span className="mb-2">Nombre completo</span>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder=" Iván Agame"
                    className="block w-full p-2 px-3 rounded-md shadow-sm dark:bg-gray-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-2">Correo electrónico</span>
                  <input
                    type="email"
                    placeholder=" example@example.com"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="block w-full p-2 px-3 rounded-md shadow-sm dark:bg-gray-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-2">Mensaje</span>
                  <textarea
                    rows="3"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" ¡Hola! ¿Cómo estás? "
                    className="block w-full p-2 px-3 rounded-md dark:bg-gray-100"
                  ></textarea>
                </label>
                <button
                  onClick={handleSendEmail} 
                  disabled={loading}
                  type="button"
                  className="self-center px-8 py-3 text-lg rounded dark:bg-cyan-600 dark:text-gray-50  hover:bg-teal-600"
                >
                  Enviar
                </button>
              </form>
            </div>
          </section>

          <footer className="dark:bg-gray-100 dark:text-gray-900 px-12">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
              <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                <a href="#home" className="mx-1">
                  Inicio
                </a>
                <a href="#experience" className="mx-1">
                  Exp. Laboral
                </a>
                <a href="#proyects" className="mx-1">
                  Proyectos
                </a>
                <a href="#tecno" className="mx-1">
                  Tecnologías
                </a>
                <a href="#galery" className="mx-1">
                  Galeria
                </a>
              </ul>
              <div className="flex flex-col justify-center pt-6 lg:pt-0">
                <div className="flex justify-center space-x-4">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/ivan_agame/"
                    target="_blank"
                    title="Twitter"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50 hover:bg-teal-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://wa.me/522299063184"
                    target="_blank"
                    title="Twitter"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50 hover:bg-teal-600"
                  >
                    <FaWhatsapp />
                  </a> 
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ivanagamee/"
                    target="_blank"
                    title="Facebook"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50 hover:bg-teal-600"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/IvanAgamee"
                    target="_blank"
                    title="Gmail"
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50 hover:bg-teal-600"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
