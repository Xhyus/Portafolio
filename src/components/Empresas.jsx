import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap } from '@chakra-ui/react'
import experiencias from '../static/experiencias.json'
import CardEmpresas from './Cards/CardEmpresas'

const Empresas = () => {
    const experienciasDestacables = experiencias[0].experienciasDestacables.map((experiencia, index) => {
        return (
            <WrapItem>
                <CardEmpresas key={index} logo={experiencia.logo} empresa={experiencia.empresa} descripcion={experiencia.descripcion} />
            </WrapItem>
        )
    })

    const trabajosFormales = experiencias[1].trabajosFormales.map((experiencia, index) => {
        return (
            <WrapItem>
                <CardEmpresas key={index} logo={experiencia.logo} empresa={experiencia.empresa} descripcion={experiencia.descripcion} />
            </WrapItem>
        )
    })

    return (
        <VStack justify={"center"}>
            <Heading textAlign={"center"} color="white" p={5}>Experiencia Destacables</Heading>
            <HStack w={'full'} h={"full"} mt={5}>
                <Wrap spacing={10} justify={"center"}>
                    {experienciasDestacables}
                </Wrap>
            </HStack>
            <Heading color={"white"} textAlign={"center"} p={5}>Trabajos Formales</Heading>
            <HStack w={'full'} mt={5} h={"full"}>
                <Wrap>
                    {trabajosFormales}
                </Wrap>
            </HStack>
        </VStack>
    )
}

export default Empresas