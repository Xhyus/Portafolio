import React from 'react'
import { Text, VStack, Image } from '@chakra-ui/react'

const CardEmpresas = ({ logo, empresa, descripcion, periodo, size }) => {
    return (
        <VStack justify="center" border={'1px'} w={{ base: "full", md: "md" }} h={"full"} borderRadius={20} p={5} bgColor={"white"}>
            <Image src={logo} w={size} alt={`Logo ${empresa}`} />
            <Text textAlign={"center"}>{descripcion}</Text>
            <Text fontWeight={"bold"}>{periodo}</Text>
        </VStack>
    )
}

export default CardEmpresas