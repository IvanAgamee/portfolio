import { MailIcon, DownloadIcon } from '@heroicons/react/outline';
import { useState } from 'react'
import IvanBanner from './assets/IvanBanner.svg';
import CollageIvan from './assets/collageIvan.svg';
import CircleTransparent from './assets/circleTransparent.svg';
import { FaReact, FaVuejs, FaLaravel, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJira, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaFigma, FaGithub } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp, SiSequelize, SiAdobexd, SiPostman  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import IconFront from './assets/iconoFront.svg';
import IconoBack from './assets/IconoBack.svg';
import IconoDesign from './assets/IconoDesign.svg';

import Carrusel_1 from './assets/carrusel_1.jpg';
import Carrusel_2 from './assets/carrusel_2.jpg';
import Carrusel_3 from './assets/carrusel_3.jpg';
import Carrusel_4 from './assets/carrusel_4.jpeg';
import Carrusel_5 from './assets/carrusel_5.jpg';
import Carrusel_6 from './assets/carrusel_6.jpg';
import Carrusel_7 from './assets/carrusel_7.jpeg';

import Dashboard1 from './assets/interfaceDashboard1.svg';
import Dashboard2 from './assets/interfaceDashboard2.svg';
import Dashboard3 from './assets/interfaceDashboard3.svg';


import itverLanding1 from './assets/itverLanding1.svg';
import itverLanding2 from './assets/itverLanding2.svg';
import itverLanding3 from './assets/itverLanding3.svg';

import cartoData1 from './assets/cartoData1.svg';
import cartoData2 from './assets/cartoData2.svg';
import cartoData3 from './assets/cartoData3.svg';

import carnesRojas1 from './assets/carnesRojas1.svg';
import carnesRojas2 from './assets/carnesRojas2.svg';
import carnesRojas3 from './assets/carnesRojas3.svg';


import comex1 from './assets/comex1.svg';
import comex2 from './assets/comex2.svg';


function App() {

  const [mainImage, setMainImage] = useState(Dashboard1);

  const [imgItverLanding, setimgItverLanding] = useState(itverLanding2);

  const [imgCartoData, setimgCartoData] = useState(cartoData3);

  const [imgComex, setimgComex] = useState(comex1);

  const [imgCarnesRojas, setimgCarnesRojas] = useState(carnesRojas2);

  const [activeTab, setActiveTab] = useState('experiencia');

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
    Carrusel_7
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

  const icons = [
    { name: 'React', icon: <FaReact />, category: 'frontend' },
    { name: 'Vue', icon: <FaVuejs />, category: 'frontend' }, 
    { name: 'JavaScript', icon: <RiJavascriptFill />, category: 'frontend' },

    { name: 'Php', icon: <SiPhp />, category: 'backend' },
    { name: 'Laravel', icon: <FaLaravel />, category: 'backend' },

    { name: 'Express', icon: <FaNodeJs />, category: 'backend' }, 
    { name: 'Sequelize', icon: <SiSequelize />, category: 'backend' },

    { name: 'CSS', icon: <FaCss3Alt />, category: 'frontend' },
    { name: 'HTML', icon: <FaHtml5 />, category: 'frontend' },
    { name: 'Mongo', icon: <DiMongodb />, category: 'backend' }, 
    { name: 'PostgreSQL', icon: <BiLogoPostgresql />, category: 'backend' },
    { name: 'Figma', icon: <FaFigma />, category: '' }, 
    { name: 'AdobeXD', icon: <SiAdobexd  />, category: '' }, 
    { name: 'Git', icon: <FaGitAlt />, category: '' },  
    { name: 'Jira', icon: <FaJira />, category: '' },
    { name: 'Postman', icon: <SiPostman  />, category: 'backend' },

    
  ]; 

  const [filter, setFilter] = useState('all');

  const filteredIcons = filter === 'all' ? icons : icons.filter(icon => icon.category === filter);


  

  return (
    <>
    <div className="relative" id="home">

    <header className="bg-white rounded-md shadow-md fixed top-0 left-0 right-0 mx-14  border-b-2 border-gray-300 py-4 px-6 z-50" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-blue-900">Portfolio</div>

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
            <a href="#experience" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Exp. Laboral</a>
            <a href="#proyects" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Proyectos</a>
            <a href="#tecno" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Tecnologías</a>
            <a href="#galery" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Galería</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Contacto</a>
          </div>
        </nav>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg mt-2 py-2 z-50">
          <a 
            href="#home" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#experience" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Exp. Laboral
          </a>
          <a 
            href="#proyects" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a 
            href="#tecno" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Tecnologías
          </a>
          <a 
            href="#galery" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Galería
          </a>
          <a 
            href="#contact" 
            className="block px-4 py-2 text-blue-900 hover:text-white hover:bg-cyan-700 transition-colors duration-300" 
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </header>

    <div className='pt-12'>

<section >


  <div className="block lg:hidden text-center mt-8">
    <p className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">¡Hola! Mi nombre es:</p>
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-zinc-800 mt-2 mb-4">Iván de Jesús <br /> Agame Malpica</h1>
  </div>


  <div className="relative flex flex-col items-center justify-center lg:flex-row lg:justify-between bg-white md:pl-24 ">

  <div className="absolute block xs:hidden top-0 left-0 w-full h-full z-0">
    <img src={CircleTransparent} className='w-[700px] h-[700px] object-cover hidden md:block' alt="Circle Transparent" loading="lazy" />
  </div>

  <div className="lg:order-2 lg:px-0 lg:pt-8 h-auto md:h-screen relative z-10">
    <img src={IvanBanner} alt="Iván Agame" className="w-auto h-full lg:w-auto lg:h-full relative z-10" loading="lazy" />
  </div>

  <div className="text-center lg:text-left px-8 lg:order-1 relative z-20">
    <p className="hidden lg:block text-cyan-600 text-3xl">¡Hola mundo! Mi nombre es:</p>
    <h1 className="hidden lg:block text-4xl lg:text-7xl font-bold text-zinc-800 mt-2 mb-12">Iván de Jesús <br /> Agame Malpica</h1>
    <p className="text-lg mt-3 lg:mt-5 lg:text-xl bg-blue-950 rounded-md shadow-md text-center text-white py-2 mb-8">Ingeniero en Sistemas Computacionales</p>
    <div className="mt-4 flex justify-between space-x-4 pb-12">
      <a
        href="https://example.com/contact"
        target="_blank"
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
        <MailIcon className="w-5 h-5 mr-2" /> LinkedIn
      </a>
      <a
        href="https://www.canva.com/design/DAGNPZSx1v8/rfvlXi2if9ZUPS7wSAM91Q/view?utm_content=DAGNPZSx1v8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600"
      >
        <DownloadIcon className="w-5 h-5 mr-2" /> 
        <span className="hidden lg:inline">Descarga mi CV</span>
        <span className="lg:hidden">CV</span>
      </a>
    </div>
  </div>
  
</div>
</section>

  <section className="py-12 px-4 md:px-12 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="text-3xl font-bold text-center text-gray-800 mb-12">
          <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
          <h2 className="text-2xl font-bold text-cyan-800 mx-3">Mis habilidades</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
        <div className='flex flex-col items-center'>
          <img src={IconFront} alt="Icon" className="mb-4 h-20 w-20"/> 
        </div>
        <h4 className="text-gray-500 text-sm mb-2">Desarrollador</h4>
        <h2 className="text-xl font-semibold mb-4">Front-end</h2>
        <p className="text-gray-600 mb-6 text-justify">pt-20
          Enfoque principal en <b>Java Script</b> con frameworks como <b>Vue y React</b>. Integrando en el desarrollo  librerias profesionales como Quasar y Material UI.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
        <div className='flex flex-col items-center'>
          <img src={IconoBack} alt="Icon" className="mb-4 h-20 w-20"/> 
        </div>
        <h4 className="text-gray-500 text-sm mb-2">Desarrollador</h4>
        <h2 className="text-xl font-semibold mb-4">Backend</h2>
        <p className="text-gray-600 mb-6 text-justify">
          Especializado en <b>PHP con Laravel, JavaScript con Sequelize,</b> y conocimiento en bases de datos como <b>PostgreSQL y MongoDB.</b>
        </p>
      </div>

      <div className="bg-white shadow-md p-6 flex flex-col items-left text-left border-2 border-gray-500 pt-12">
        <div className='flex flex-col items-center'>
          <img src={IconoDesign} alt="Icon" className="mb-4 h-20 w-20"/> 
        </div>
        <h4 className="text-gray-500 text-sm mb-2">Diseñador</h4>
        <h2 className="text-xl font-semibold mb-4">UI / UX</h2>
        <p className="text-gray-600 mb-6 text-justify">
          Conocimiento básico en diseño gráfico y uso de herramientas como <b>Figma, Adobe XD, Canva e Ilustrator.</b>
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
          <h2 className="text-2xl font-bold text-cyan-800 mx-3">Tecnologías</h2>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center">
          <button
            onClick={() => setFilter('all')}
            className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${filter === 'all' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${filter === 'frontend' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`mb-2 md:mb-0 md:mr-2 px-4 py-2 transition ${filter === 'backend' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
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
            <div className="mt-2 text-center text-slate-600 hover:text-teal-600">{icon.name}</div>
          </div>
        ))}
      </div>
    </section>




  <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      
      <div className="order-2 flex justify-center md:order-1">
        <img src={CollageIvan} alt="Iván Agame" className="w-auto h-full md:w-auto md:h-full relative z-10" />
      </div>

     
      <div className="order-1 md:order-2 px-8">
        <div className="flex items-center mb-4">
          <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
          <h2 className="text-2xl font-bold text-cyan-800 mx-3">Sobre mí</h2>
        </div>
        <p className="text-lg text-gray-600 text-justify mb-4">
        Soy un apasionado Ingeniero de software con un enfoque sólido en el desarrollo frontend y experiencia en el backend. Con un profundo conocimiento de tecnologías como Vue.js y PHP (Laravel), me destaco en la creación de interfaces de usuario intuitivas y experiencias web dinámicas. Además, mi versatilidad se extiende al backend, donde puedo emplear mis habilidades en PHP para construir sistemas robustos y escalables. Además de mis fortalezas principales, también poseo habilidades en React y Node js (Sequelize) lo que me permite adaptarme rápidamente a nuevas tecnologías y entornos de desarrollo
        <br/><br/>
        Tengo una sólida experiencia trabajando en entornos colaborativos de equipo, donde he aplicado metodologías ágiles como Scrum, el uso de Git y GitHub para el control de versiones, además de portar un firme compromiso con la escritura de código limpio y mantenible, siguiendo patrones de arquitectura para garantizar proyectos escalables y fáciles de mantener a largo plazo.
        </p>
      </div>

    </div>
  </div>
</section>





    <section id="experience" className="dark:bg-white dark:text-gray-800 pt-16 pb-11" >
      <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden justify-center flex-nowrap dark:bg-white dark:text-gray-800">
        <a
          href="#"
          onClick={() => handleTabClick('experiencia')}
          className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
            activeTab === 'experiencia' ? 'dark:border-cyan-600 dark:text-gray-900' : 'dark:border-gray-300 dark:text-gray-600'
          }`}
        >
          Experiencia
        </a>
        <a
          href="#"
          onClick={() => handleTabClick('estudios')}
          className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
            activeTab === 'estudios' ? 'dark:border-cyan-600 dark:text-gray-900' : 'dark:border-gray-300 dark:text-gray-600'
          }`}
        >
          Estudios
        </a>
        <a
          href="#"
          onClick={() => handleTabClick('voluntariado')}
          className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
            activeTab === 'voluntariado' ? 'dark:border-cyan-600 dark:text-gray-900' : 'dark:border-gray-300 dark:text-gray-600'
          }`}
        >
          Voluntariado
        </a>
      </div>
      
      <div className="container max-w-5xl py-12 px-3 mx-auto">
        {activeTab === 'experiencia' && (
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">Azit Developers (Fullstack)</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2">Noviembre 2022 - Agosto 2024</time>
                  <p className="mt-3 text-justify">
                    Colaboré en diversos proyectos como desarrollador fullstack, especializándome en tecnologías como PHP con Laravel y Vue.js con librerias de componentes como Quasar.
                  </p>
                  <p className="mt-2 text-justify">
                    Además de integrar la metodología SCRUM y usar arquitecturas y patrones de diseño escalables.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">Practicante Desarrollador web</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2">Enero 2021 - Agosto 2022</time>
                  <p className="mt-3 text-justify">
                    Participé en la creación de la pagina de la carrera de mi Universidad que se encuentra actualmente en uso con Php como lenguaje principal.
                  </p>
                  <p className="mt-2 text-justify">
                    Además desarrolle un sistema para gestionar los datos de esta pagina con Vue js con Quasar y Express con Sequalize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'estudios' && (
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">TECNM Campus Veracruz</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2">Agosto 2018 - Julio 2022</time>
                  <p className="mt-3 text-justify">
                    Egresado de la carrera de Ingeniería en Sistemas Computacionales, desarrollando habilidiades de programación y bases de datos
                  </p>
                  <p className="mt-2 text-justify">
                    Además de participar en diversos eventos de divulgación científica en temas como Inteligencia Artificial
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">CETIS No 15</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2"> Agosto 2016 - Julio 2018</time>
                  <p className="mt-3">
                    Egresado como técnico en programación usando tecnologías como Java para aprender las bases para programar
                  </p>
                  <p className="mt-2">
                    Además de desarrollar los fundamentos de bases de datos en MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'voluntariado' && (
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">Comunidad de Ingeniería en Sistemas </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2">Octubre 2019 - Julio 2022</time>
                  <p className="mt-3 text-justify">
                    Participe en diversos eventos de divulgación como organizador.
                  </p>
                  <p className="mt-2 text-justify">
                    Gestionaba el stream, diseñaba flyers, realizaba guiones y presentaba a los diversos ponentes que presentaban algún tema relacionado a la Ingeniería en Sistemas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-600 p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-semibold tracking-wide">Asesor/Tallerista (Voluntariado)</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 mt-2">Octubre 2019 - Julio 2022</time>
                  <p className="mt-3 text-justify">
                    Impartí algunos talleres y cursos de manera gratuita a alumnos de la Universidad.
                  </p>
                  <p className="mt-2 text-justify">
                    Los talleres eran de diseño grafico en herramientas como Canva y los cursos de programación con Figma, Css y JavaScript.
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
    <h2 className="text-2xl font-bold text-center text-cyan-800 mb-4">Proyectos en los que he colaborado: </h2>
    <div className="max-w-4xl mx-auto">
        <p className="text-md text-gray-600 text-center mb-12">
          Las imágenes mostradas a continuación son pertenecientes a sistemas de carácter privado, es por ello 
          que solo se muestran algunas pre-visualizaciones con motivo de validar mi experiencia y sin ánimo de lucro.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
    
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={mainImage} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard Itver</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${mainImage === Dashboard1 ? 'border-4 border-amber-300 shadow-xl' : ''}`} >
              <img src={Dashboard1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${mainImage === Dashboard2 ? 'border-4 border-amber-300 shadow-xl' : ''}`} >
              <img src={Dashboard2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${mainImage === Dashboard3 ? 'border-4 border-amber-300 shadow-xl' : ''}`} >
              <img src={Dashboard3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard3)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={imgItverLanding} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Itver Landing</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${imgItverLanding === itverLanding1 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={itverLanding1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgItverLanding === itverLanding2 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={itverLanding2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgItverLanding === itverLanding3 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={itverLanding3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding3)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={imgCartoData} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">CartoData</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${imgCartoData === cartoData1 ? 'border-4 border-purple-400 shadow-xl' : ''}`} >
              <img src={cartoData1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData2 ? 'border-4 border-purple-400 shadow-xl' : ''}`} >
              <img src={cartoData2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData3 ? 'border-4 border-purple-400 shadow-xl' : ''}`} >
              <img src={cartoData3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData3)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={imgComex} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard Itver</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${imgComex === comex1 ? 'border-4 border-blue-500 shadow-xl' : ''}`} >
              <img src={comex1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgComex(comex1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgComex === comex2 ? 'border-4 border-blue-500 shadow-xl' : ''}`} >
              <img src={comex2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgComex(comex2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgComex === comex2 ? 'border-4 border-blue-500 shadow-xl' : ''}`} >
              <img src={comex2} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgComex(comex2)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* const [imgComex, setimgComex] = useState(comex1); */}
      
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={imgCarnesRojas} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Itver Landing</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${imgCarnesRojas === carnesRojas1 ? 'border-4 border-rose-500 shadow-xl' : ''}`} >
              <img src={carnesRojas1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCarnesRojas === carnesRojas2 ? 'border-4 border-rose-500 shadow-xl' : ''}`} >
              <img src={carnesRojas2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCarnesRojas === carnesRojas3 ? 'border-4 border-rose-500 shadow-xl' : ''}`} >
              <img src={carnesRojas3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas3)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* const [imgCarnesRojas, setimgCarnesRojas] = useState(carnesRojas1); */}
      
      <div className="max-w-lg mx-6 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img src={imgCartoData} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">CartoData</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`cursor-pointer ${imgCartoData === cartoData1 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={cartoData1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData1)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData2 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={cartoData2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData2)} loading="lazy" />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData3 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={cartoData3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData3)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </div>

</section>




<section id="galery" className="relative w-5/6 mx-auto pb-12 pt-20">
      <div className="flex items-center mb-6">
        <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
        <h2 className="text-2xl font-bold text-cyan-800 mx-3">Galeria</h2>
      </div>

      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-1/3 flex-shrink-0 mx-2"
            />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>
    </section>






<section id="contact" className="py-6 dark:bg-white dark:text-gray-900 px-6 pt-14">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
      <div className="flex items-center mb-6">
        <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
        <h1 className="text-3xl font-bold text-cyan-800 pb-4 pt-1">Contacto</h1>
      </div>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Veracruz, Ver</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>(52) 22-99-06-31-84</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>dejamivan@gmail.com</span>
				</p>
        
        <p className="flex items-center">
        <div className="w-5 h-5 mr-2 sm:mr-6">
          <FaLinkedin />
        </div>
					<span>@ivanagamee</span>
				</p>  

        <p className="flex items-center">
        <div className="w-5 h-5 mr-2 sm:mr-6">
          <FaGithub />
        </div>
					<span>IvanAgamee</span>
				</p>

        
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
    
			<p className="pt-2 text-gray-600">Llena este formulario y empecemos una conversación: </p>
			<label className="block">
				<span className="mb-2">Nombre completo</span>
				<input type="text" placeholder=" Ivan Agame" className="block w-full py-2 rounded-md shadow-sm dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-2">Correo electrónico</span>
				<input type="email" placeholder=" example@example.com" className="block w-full py-2 rounded-md shadow-sm dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-2">Mensaje</span>
				<textarea rows="3" placeholder=" ¡Hola! ¿Cómo estás? " className="block w-full py-2 rounded-md focus:ring dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded dark:bg-cyan-600 dark:text-gray-50  hover:bg-teal-600">Enviar</button>
		</form>
	</div>
</section>



<footer className="dark:bg-gray-100 dark:text-gray-900 px-12">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
      <a href="#home" className='mx-1' >Inicio</a>
			<a href="#experience" className='mx-1'>Exp. Laboral</a>
			<a href="#proyects" className='mx-1'>Proyectos</a>
			<a href="#tecno" className='mx-1'>Tecnologías</a>
			<a href="#galery" className='mx-1'>Galeria</a>
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
          <FaWhatsapp />
				</a>
				<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
          <FaLinkedin />
				</a> 
				<a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
          <FaGithub />
				</a>

			</div>
		</div>
	</div>
</footer>



  </div>
  </div>
    </>
  )
}

export default App
