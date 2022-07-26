import React from 'react'
import { Container, } from '@chakra-ui/react'
import Empresas from '../components/Empresas'
import Tecnologias from '../components/Tecnologias'
import Educacion from '../components/Educacion'
import SobreMi from '../components/SobreMi'
import Proyectos from '../components/Proyectos'
import Idiomas from '../components/Idiomas'

const Inicio = () => {
    return (
        <Container maxW={"container.lg"} py={20}>
            <SobreMi />
            <Educacion />
            <Empresas />
            <Idiomas />
            <Tecnologias />
            <Proyectos />
        </Container >
    )
}

export default Inicio;