import { MailIcon, DownloadIcon } from '@heroicons/react/outline';
import { useState } from 'react'
import IvanBanner from './assets/IvanBanner.svg';
import CollageIvan from './assets/collageIvan.svg';
import CircleTransparent from './assets/circleTransparent.svg';
import { FaReact, FaVuejs, FaLaravel, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJira } from 'react-icons/fa';
import { FaFigma } from "react-icons/fa6";
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
    <div className="relative">

    <header className="bg-white mx-14">
  <div className="container mx-auto flex justify-between items-center shadow-sm border-b-2 border-gray-300 py-4 px-6">
    <div className="text-lg font-bold text-blue-900">Portfolio</div>
    
    {/* Botón de menú para pantallas pequeñas */}
    <div className="lg:hidden">
      <button className="text-blue-900 hover:text-blue-700 transition-colors font-bold duration-300">
        Menu
      </button>
    </div>

    {/* Navegación para pantallas grandes */}
    <nav className="hidden lg:flex space-x-8 items-center">
      <a href="#experience" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Exp. Laboral</a>
      <a href="#proyects" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Proyectos</a>
      <div className="flex space-x-4">
        <a href="#tecno" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Tecnologías</a>
        <a href="#galery" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Galeria</a>
        <a href="#contact" className="text-blue-900 hover:text-blue-700 transition-colors font-semibold duration-300">Contacto</a>
      </div>
    </nav>
  </div>

  {/* Menú desplegable para pantallas pequeñas (opcional) */}
  {/* <div className="lg:hidden bg-white shadow-lg mt-2 py-2">
    <a href="#contact" className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Contact</a>
    <a href="#resume" className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Resume</a>
    <a href="#globe" className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Globe</a>
    <a href="#mail" className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Mail</a>
    <a href="#phone" className="block px-4 py-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Phone</a>
  </div> */}
</header>


<section >


  <div className="block lg:hidden text-center mt-8">
    <p className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">¡Hola! Mi nombre es:</p>
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-zinc-800 mt-2 mb-4">Iván de Jesús <br /> Agame Malpica</h1>
  </div>


  <div className="relative flex flex-col items-center justify-center lg:flex-row lg:justify-between bg-white md:pl-24">

  <div className="absolute block xs:hidden top-0 left-0 w-full h-full z-0">
    <img src={CircleTransparent} className='w-[700px] h-[700px] object-cover hidden md:block' alt="Circle Transparent" />
  </div>

  <div className="lg:order-2 lg:px-0 lg:pt-8 h-auto md:h-screen relative z-10">
    <img src={IvanBanner} alt="Iván Agame" className="w-auto h-full lg:w-auto lg:h-full relative z-10" />
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
        <MailIcon className="w-5 h-5 mr-2" /> Contact Me
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
        <DownloadIcon className="w-5 h-5 mr-2" /> Download my CV
      </a>
    </div>
  </div>
  
</div>
</section>

  <section className="py-12 px-12 bg-gray-100">
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
        <p className="text-gray-600 mb-6 text-justify">
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

  <section className="p-4 my-6" id="tecno">
      {/* Filtros */}

      <div className="mb-4 flex justify-between mx-7">


      <div className="flex items-center">
          <span className="w-3 h-3 bg-cyan-800 rounded-full mr-2"></span>
          <h2 className="text-2xl font-bold text-cyan-800 mx-3">Tecnologías</h2>
      </div>

      <div className="mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 transition ${filter === 'all' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
      >
        Todos
      </button>
      <button
        onClick={() => setFilter('frontend')}
        className={`ml-2 px-4 py-2 transition ${filter === 'frontend' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
      >
        Frontend
      </button>
      <button
        onClick={() => setFilter('backend')}
        className={`ml-2 px-4 py-2 transition ${filter === 'backend' ? 'border-b-4 border-teal-600' : 'hover:bg-gray-300'}`}
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





    <section id="experience" className="dark:bg-white dark:text-gray-800 py-8">
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


<section id="proyects" className="py-12 bg-gray-100">
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
              <img src={Dashboard1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard1)} />
            </div>
            <div className={`cursor-pointer ${mainImage === Dashboard2 ? 'border-4 border-amber-300 shadow-xl' : ''}`} >
              <img src={Dashboard2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard2)} />
            </div>
            <div className={`cursor-pointer ${mainImage === Dashboard3 ? 'border-4 border-amber-300 shadow-xl' : ''}`} >
              <img src={Dashboard3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setMainImage(Dashboard3)} />
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
              <img src={itverLanding1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding1)} />
            </div>
            <div className={`cursor-pointer ${imgItverLanding === itverLanding2 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={itverLanding2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding2)} />
            </div>
            <div className={`cursor-pointer ${imgItverLanding === itverLanding3 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={itverLanding3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgItverLanding(itverLanding3)} />
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
              <img src={cartoData1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData1)} />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData2 ? 'border-4 border-purple-400 shadow-xl' : ''}`} >
              <img src={cartoData2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData2)} />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData3 ? 'border-4 border-purple-400 shadow-xl' : ''}`} >
              <img src={cartoData3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData3)} />
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
              <img src={comex1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgComex(comex1)} />
            </div>
            <div className={`cursor-pointer ${imgComex === comex2 ? 'border-4 border-blue-500 shadow-xl' : ''}`} >
              <img src={comex2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgComex(comex2)} />
            </div>
            <div className={`cursor-pointer ${imgComex === comex2 ? 'border-4 border-blue-500 shadow-xl' : ''}`} >
              <img src={comex2} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgComex(comex2)} />
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
              <img src={carnesRojas1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas1)} />
            </div>
            <div className={`cursor-pointer ${imgCarnesRojas === carnesRojas2 ? 'border-4 border-rose-500 shadow-xl' : ''}`} >
              <img src={carnesRojas2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas2)} />
            </div>
            <div className={`cursor-pointer ${imgCarnesRojas === carnesRojas3 ? 'border-4 border-rose-500 shadow-xl' : ''}`} >
              <img src={carnesRojas3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCarnesRojas(carnesRojas3)} />
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
              <img src={cartoData1} alt="Small 1" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData1)} />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData2 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={cartoData2} alt="Small 2" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData2)} />
            </div>
            <div className={`cursor-pointer ${imgCartoData === cartoData3 ? 'border-4 border-teal-500 shadow-xl' : ''}`} >
              <img src={cartoData3} alt="Small 3" className="w-full h-full object-cover" onClick={() => setimgCartoData(cartoData3)} />
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </div>

</section>




<section id="galery" className="relative w-5/6 mx-auto pb-12 pt-12">
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






<section id="contact" className="py-6 dark:bg-white dark:text-gray-900 px-6">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold mb-4 text-cyan-800">Contáctame</h1>
			<p className="pt-2 pb-4 text-gray-600">Llena este formulario y empecemos una conversación: </p>
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
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-2">Nombre completo</span>
				<input type="text" placeholder=" Ivan Agame" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-2">Correo electrónico</span>
				<input type="email" placeholder=" example@example.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-2">Mensaje</span>
				<textarea rows="3" placeholder=" ¡Hola! ¿Cómo estás? " className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded dark:bg-cyan-600 dark:text-gray-50  hover:bg-teal-600">Enviar</button>
		</form>
	</div>
</section>






<footer className="dark:bg-gray-100 dark:text-gray-900 px-12">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<li>Shop</li>
			<li>About</li>
			<li>Blog</li>
			<li>Pricing</li>
			<li>Contact</li>
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
						<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-cyan-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>



  </div>
    </>
  )
}

export default App
