import React from 'react'
import { Text, HStack, VStack, Image, Heading } from '@chakra-ui/react'

const Empresas = ({ logo, empresa, descripcion }) => {
    return (
        <HStack border={'1px'} w={"md"} h={"full"} borderRadius={20} p={5} bgColor={"white"}>
            <VStack pr={5}>
                <Heading fontWeight={"bold"}>{empresa}</Heading>
                <Text >{descripcion}</Text>
            </VStack>
            <Image src={logo} w={150} alt="Logo" />
        </HStack>
    )
}

export default Empresas