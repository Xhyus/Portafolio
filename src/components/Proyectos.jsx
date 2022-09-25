import React from 'react'
import { HStack, Heading, WrapItem, Wrap } from '@chakra-ui/react'
import CardProyectos from './Cards/CardProyectos'
import { proyectos } from '../static/proyectos'

const Proyectos = () => {

    const listadoProyectos = proyectos.map((proyecto, index) => {
        return (
            <WrapItem key={index}>
                <CardProyectos imagen={proyecto.imagen} nombre={proyecto.titulo} descripcion={proyecto.descripcion} link={proyecto.url} tecnologias={proyecto.tecnologias} />
            </WrapItem>
        )
    })


    return (
        <>
            <Heading as={"h2"} fontWeight={"bold"} color="white" textAlign={"center"} p={5} fontSize={"2xl"} id="Proyectos">Proyectos</Heading>
            <HStack w={'full'} h={"full"} mt={5} justify={"center"}>
                <Wrap spacing={10} justify={"center"}>
                    {listadoProyectos}
                </Wrap>
            </HStack>
        </>
    )
}

export default Proyectos