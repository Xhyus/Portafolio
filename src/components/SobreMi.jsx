import React from 'react'
import { Button, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import foto from '../static/yo.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const SobreMi = () => {
    return (
        <Stack w={"full"}>
            <Heading as={"h1"} id="Sobre-mi" fontSize={{ base: "4xl", md: "5xl" }} color={"white"} textAlign="center" pb={10}>Ignacio González</Heading>
            <HStack flexWrap={{ base: "wrap", md: "nowrap" }}>
                <Stack textAlign={"center"} mr={{ base: "0", md: 10 }} w={{ base: "full", md: "40%" }} pb={{ base: "5", md: 0 }} >
                    <Image src={foto} width={{ base: "70%", md: "70%" }} alignSelf="center" borderRadius={'full'} border={'2px'} borderColor={'gray.300'} alt="Foto de Ignacio González" />
                    <Text color={"white"} fontWeight={"bold"}>Desarrollador Web</Text>
                    <HStack justify={"center"}>
                        <Link href='https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/' isExternal><FaLinkedin size={30} color={'white'} /></Link>
                        <Link href='https://github.com/Xhyus' isExternal _hover={{ color: "black" }} ><FaGithub size={30} color={'white'} /></Link>
                    </HStack>
                    <Link href={'/CV.pdf'} color={'white'} isExternal><Button color={'white'} w="full" colorScheme={'blue'}>Ver Curriculum</Button></Link>
                </Stack>
                <Stack w={{ base: "full", md: "60%" }}>
                    <Heading as={"h2"} fontSize={"2xl"} textAlign={{ base: "center", md: "start" }} color={"white"} pb="5">Sobre mí</Heading>
                    <Stack textAlign={'justify'}>
                        <Text fontWeight={"semibold"} color={"white"}>Estudiante de último semestre de Ingeniería en Ejecución Informática de la Universidad del Bío-Bío, con ganas de siempre aprender algo nuevo o mejorando las cosas que sé, entusiasta, autodidacta y analítico.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Me gusta mucho el desarrollo web, puedo programar en frontend, backend y quiero aprender cosas nuevas.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Actualmente me encuentro trabajando en el desarrollo de una plataforma web para realizar cotizaciones de forma sencilla para una empresa, utilizando NextJS, NodeJS, Express, Mongoose(MongoDB) y ChakraUI.</Text>
                    </Stack>
                </Stack>
            </HStack>
        </Stack>
    )
}

export default SobreMi