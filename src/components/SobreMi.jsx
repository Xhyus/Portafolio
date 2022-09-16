import React from 'react'
import { Box, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import foto from '../static/image.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const SobreMi = () => {
    return (
        <>
            <Heading as={"h1"} fontSize={"4xl"} color={"white"} textAlign="center">Ignacio González</Heading>
            <HStack>
                <Stack textAlign={"center"} mr={10}>
                    <Image src={foto} width={500} borderRadius={'full'} border={'2px'} borderColor={'gray.300'} alt="Segun Adebayo" />
                    <Text color={"white"} fontWeight={"bold"}>Desarrollador Web</Text>
                    <HStack justify={"center"}>
                        <Link href='https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/' isExternal><FaLinkedin size={30} color={'white'} /></Link>
                        <Link href='https://github.com/Xhyus' isExternal><FaGithub size={30} color={'white'} /></Link>
                    </HStack>
                </Stack>
                <Box>
                    <Heading as={"h2"} fontSize={"2xl"} color={"white"}>Sobre mí</Heading>
                    <Stack textAlign={'justify'}>
                        <Text fontWeight={"semibold"} color={"white"}>Estudiante de último semestre de Ingeniería en Ejecución Informática de la Universidad del Bío-Bío, con ganas de siempre aprender algo nuevo o mejorando las cosas que sé, entusiasta, autodidacta y analítico.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Mi enseñanza media la hice en el Colegio Salesiano Concepción, donde obtuve mi primer título técnico sobre Electrónica.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Me gusta mucho el desarrollo web , puedo programar en frontend, backend y quiero aprender cosas nuevas.</Text>
                        <Text fontWeight={"semibold"} color={"white"}>Actualmente me encuentro trabajando en el desarrollo de una aplicación web para la gestión de las tareas diarias de un CEE, utilizando NextJS, NodeJS, Express , Mongoose(MongoDB) y ChakraUI.</Text>
                    </Stack>
                    <Stack>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}

export default SobreMi