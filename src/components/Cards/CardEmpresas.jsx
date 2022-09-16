import React from 'react'
import { Text, HStack, VStack, Image, Heading } from '@chakra-ui/react'

const CardEmpresas = ({ logo, empresa, descripcion }) => {
    return (
        <VStack justify="center" border={'1px'} w={"md"} h={"full"} borderRadius={20} p={5} bgColor={"white"}>
            <Image src={logo} w={"50%"} alt={`Logo ${empresa}`} />
            <Text textAlign={"center"}>{descripcion}</Text>
        </VStack>
    )
}

export default CardEmpresas