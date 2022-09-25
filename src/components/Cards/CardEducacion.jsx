import React from 'react'
import { Text, HStack, VStack, Image } from '@chakra-ui/react'

const CardEducacion = ({ logo, institucion, descripcion, ingreso, egreso, size }) => {
    return (
        <HStack border={'1px'} w={{ base: "full", md: "md" }} h={"full"} justify={"space-around"} borderRadius={20} p={5} bgColor={"white"} flexDir={{ base: "column-reverse", md: "row" }}>
            <VStack pr={5}>
                <Text fontWeight={"bold"} fontSize="xl">{institucion}</Text>
                <Text >{descripcion}</Text>
                <Text>Año de Ingreso: {ingreso}</Text>
                <Text>Año de Egreso: {egreso}</Text>
            </VStack>
            <Image src={logo} w={size} alt="Logo" />
        </HStack >
    )
}

export default CardEducacion