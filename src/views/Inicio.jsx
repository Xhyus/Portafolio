import React from 'react'
import { Box, Button, Grid, Text, Container, Heading, HStack, Image, Stack, Link } from '@chakra-ui/react'
import foto from '../static/image.jpeg'
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5 } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript } from 'react-icons/si'

const Inicio = () => {

    const tecnologias = [[FaReact, 'React'], [SiNextdotjs, 'Next.js'], [FaNodeJs, 'Node.js'], [SiExpress, 'Express'], [SiMongodb, 'MongoDB'], [SiMysql, 'MySQL'], [FaGitAlt, 'Git'], [FaPhp, 'PHP'], [FaCss3, 'CSS'], [FaHtml5, 'HTML'], [SiChakraui, 'Chakra UI'], [SiJavascript, 'JavaScript']]

    const sendTo = (url) => {
        window.open(url, '_blank')
    }

    return (
        <Container maxW={"container.lg"} >
            <Box py={10}>
                <Heading as={"h1"} fontSize={"4xl"} color={"white"} textAlign="center">Ignacio González</Heading>
                <HStack>
                    <Stack textAlign={"center"} mr={10}>
                        <Image src={foto} width={500} borderRadius={200} border={'2px'} borderColor={'gray.300'} alt="Segun Adebayo" />
                        <Text color={"white"} fontWeight={"bold"}>Desarrollador Web</Text>
                        <HStack justify={"center"}>
                            <Link onClick={() => sendTo('https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/')}><FaLinkedin size={30} color={'white'} /></Link>
                            <Link onClick={() => sendTo('https://github.com/Xhyus')}><FaGithub size={30} color={'white'} /></Link>
                        </HStack>
                    </Stack>
                    <Box >
                        <Heading as={"h2"} fontSize={"2xl"} color={"white"}>Sobre mí</Heading>
                        <Stack>
                            <Text fontWeight={"semibold"} color={"white"}>Estudiante de último semestre de Ingeniería en Ejecución Informática de la Universidad del Bío-Bío, con ganas de siempre aprender algo nuevo o mejorando las cosas que sé, entusiasta, autodidacta y analítico.</Text>
                            <Text fontWeight={"semibold"} color={"white"}>Actualmente me encuentro trabajando en el desarrollo de una aplicación web para la gestión de las tareas diarias de un CEE, utilizando NextJS, NodeJS, Express , Mongoose(MongoDB) y ChakraUI.</Text>
                        </Stack>
                        <Stack>
                        </Stack>
                    </Box>
                </HStack>
                <Heading>Tengo conocimientos en las siguientes tecnologias:</Heading>
                <HStack>
                    <Box>
                        <HStack>

                            {tecnologias.map((tecnologia, index) => {
                                return (
                                    <HStack key={index}>
                                        <Text color={"white"}>{tecnologia[1]}</Text>
                                    </HStack>
                                )
                            }
                            )}
                        </HStack>

                    </Box>
                </HStack>

            </Box>
        </Container >
    )
}

export default Inicio;