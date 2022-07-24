import React from 'react'
import '../styles.css'
import image from '../static/image.jpeg'
import BotonNavbar from './BotonNavbar'

const Navbar = () => {
    return (
        <div className='navbar texto'>
            <div className='fotoNombre'>
                <img src={image} className="foto" alt='Yo' />
                <h1 className='tituloInicio'>Ignacio González</h1>
                <h2 className='subTituloInicio'>Estudiante de Ingeniería Informática</h2>

            </div>
            <div className='navbarButtons'>
                <BotonNavbar />
                <BotonNavbar url="#Conocimientos" texto="Conocimientos" />
                <BotonNavbar url="#Experiencia" texto="Experiencia" />
                <BotonNavbar url="#Hobbys" texto="Hobbys" />
                <BotonNavbar url="#Proyectos" texto="Proyectos" />
                <BotonNavbar url="#Contacto" texto="Contacto" />
            </div>
            <div className='black'>
                <div className='about-me'>
                    <h3 className='tituloAbout-me border-bottom'>Sobre mí</h3>
                    <p className='textoAbout-me'>Soy estudiante de ultimo año de Ingeniería en Ejecución de Computacion e Informática de la Universidad del Bío-Bío.</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar