import React from 'react'
import { Container, } from '@chakra-ui/react'
import Empresas from '../components/Empresas'
import Tecnologias from '../components/Tecnologias'
import Educacion from '../components/Educacion'
import SobreMi from '../components/SobreMi'
import Proyectos from '../components/Proyectos'
import Idiomas from '../components/Idiomas'
import Contacto from '../components/Contacto'

const Inicio = () => {
    return (
        <Container maxW={"container.lg"} py={20}>
            <SobreMi />
            <Educacion />
            <Empresas />
            <Idiomas />
            <Tecnologias />
            <Proyectos />
            {/* <Contacto /> */}
        </Container >
    )
}

export default Inicio;