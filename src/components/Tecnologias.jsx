import tecnologias from '../static/tecnologias.json'
import React from 'react'
import { Text, HStack, VStack, Heading, Wrap, WrapItem, Icon } from '@chakra-ui/react'

const Tecnologias = () => {
    return (
        <VStack>
            <Heading fontWeight={"bold"} color="white">Tecnologías</Heading>
            <Wrap>
                {tecnologias.map((tecnologia, index) => (
                    <WrapItem key={index}>
                        <HStack border={'1px'} w={"md"} h={"full"} borderRadius={20} p={5} bgColor={"white"}>
                            <Text>{tecnologia.tecnologia}</Text>
                            <Icon as={tecnologia.icono} w={8} h={8} />
                        </HStack>
                    </WrapItem>
                ))}
            </Wrap>
        </VStack >
    )
}

export default Tecnologias

