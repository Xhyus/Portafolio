import React from 'react'
import { Box, Flex, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import foto from '../static/image.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const SobreMi = () => {
    return (
        <Stack w={"full"}>
            <Heading as={"h1"} id="Sobre-Mi" fontSize={"5xl"} color={"white"} textAlign="center" pb={10}>Ignacio González</Heading>
            <HStack flexWrap={{ base: "nowrap", sm: "wrap", md: "nowrap" }}>
                <Stack textAlign={"center"} mr={10} w={{ base: "40%", sm: "full", md: "40%" }}>
                    <Image src={foto} width={"70%"} alignSelf="center" borderRadius={'full'} border={'2px'} borderColor={'gray.300'} alt="Segun Adebayo" />
                    <Text color={"white"} fontWeight={"bold"}>Desarrollador Web</Text>
                    <HStack justify={"center"}>
                        <Link href='https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/' isExternal><FaLinkedin size={30} color={'white'} /></Link>
                        <Link href='https://github.com/Xhyus' isExternal _hover={{ color: "black" }} ><FaGithub size={30} color={'white'} /></Link>
                    </HStack>
                </Stack>
                <Stack w={{ base: "60%", sm: "full", md: "60%" }}>
                    <Heading as={"h2"} fontSize={"2xl"} color={"white"} pb="5">Sobre mí</Heading>
                    <Stack textAlign={'justify'}>
                        <Text fontWeight={"semibold"} color={"white"}>Estudiante de último semestre de Ingeniería en Ejecución Informática de la Universidad del Bío-Bío, con ganas de siempre aprender algo nuevo o mejorando las cosas que sé, entusiasta, autodidacta y analítico.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Me gusta mucho el desarrollo web , puedo programar en frontend, backend y quiero aprender cosas nuevas.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Actualmente me encuentro trabajando en el desarrollo de una aplicación web para la gestión de las tareas diarias de un CEE, utilizando NextJS, NodeJS, Express , Mongoose(MongoDB) y ChakraUI.</Text>
                    </Stack>
                </Stack>
            </HStack>
        </Stack>
    )
}

export default SobreMi