import React from 'react'
import { Text, HStack, VStack, Image, Heading } from '@chakra-ui/react'

const CardEducacion = ({ logo, institucion, descripcion, ingreso, egreso }) => {
    return (
        <HStack border={'1px'} w={"md"} h={"full"} justify={"space-around"} borderRadius={20} p={5} bgColor={"white"}>
            <VStack pr={5}>
                <Heading fontWeight={"bold"}>{institucion}</Heading>
                <Text >{descripcion}</Text>
                <Text>Año de Ingreso: {ingreso}</Text>
                <Text>Año de Egreso: {egreso}</Text>
            </VStack>
            <Image src={logo} w={100} alt="Logo" />
        </HStack>
    )
}

export default CardEducacion