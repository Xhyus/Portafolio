import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap, Tag, Link, Text, Stack, Image } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import foto from '../static/image.jpeg'

const Proyectos = () => {
    return (
        <>
            <Heading fontWeight={"bold"} color="white" textAlign={"center"} p={5}>Proyectos</Heading>
            <Stack bgColor={"white"} border={1} borderRadius={20} m={5} p={5} w={{ sm: "100%", md: '50%' }}>
                <HStack >
                    <VStack w={{ sm: "100%", md: '50%' }} flexWrap={'wrap'}>
                        <Image src={foto} w={20} />
                        <HStack>
                            <Link href="Linguaskill.pdf" isExternal><FaGithub /></Link>
                            <Link href="https://www.github.com/Xhyus" isExternal>Ir</Link>
                        </HStack>
                    </VStack>
                    <VStack w={{ sm: "100%", md: '50%' }} flexWrap={'wrap'}>
                        <Text fontWeight={"bold"}>Portafolio</Text>
                        <Text >Descripción del proyecto llamado portafolio y porque fue realizado asdasdasdasds dasdasdasda sdsdasdasda sdasdsdasdasdasdasdsd</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Wrap>
                        <WrapItem>
                            <Tag w={"fit-content"}>React</Tag>
                        </WrapItem>
                        <WrapItem>
                            <Tag w={"fit-content"}>ChakraUI</Tag>
                        </WrapItem>
                        <WrapItem>
                            <Tag w={"fit-content"}>JavaScript</Tag>
                        </WrapItem>
                    </Wrap>
                </HStack>
            </Stack>
        </>
    )
}

export default Proyectos