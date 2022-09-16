import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap, Tag, Link, Text, Stack, Image } from '@chakra-ui/react'
import foto from '../static/image.jpeg'
import portafolio from '../static/portafolio.png'
import CardProyectos from './Cards/CardProyectos'

const Proyectos = () => {
    return (
        <>
            <Heading as={"h2"} fontWeight={"bold"} color="white" textAlign={"center"} p={5} fontSize={"2xl"} id="Proyectos">Proyectos</Heading>
            <CardProyectos
                imagen={portafolio}
                descripcion={"Descripción del proyecto llamado portafolio y porque fue realizado asdasdasdasds dasdasdasda sdsdasdasda sdasdsdasdasdasdasdsd"}
                titulo={"Portafolio"}
                tecnologias={["React", "ChakraUI", "JavaScript", "Git", "GitHub", "Visual Studio Code"]}
                repositorio={"https://github.com/Xhyus/portfolio"}
                url={"https://www.github.com/Xhyus"}
            />
        </>
    )
}

export default Proyectos