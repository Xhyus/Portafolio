import React from 'react'
import { HStack, Heading, WrapItem, Wrap } from '@chakra-ui/react'
import portafolio from '../static/portafolio.png'
import CardProyectos from './Cards/CardProyectos'

const Proyectos = () => {
    return (
        <>
            <Heading as={"h2"} fontWeight={"bold"} color="white" textAlign={"center"} p={5} fontSize={"2xl"} id="Proyectos">Proyectos</Heading>
            <HStack w={'full'} h={"full"} mt={5} justify={"center"}>
                <Wrap spacing={10} justify={"center"}>
                    <WrapItem>
                        <CardProyectos
                            imagen={portafolio}
                            descripcion={"Descripción del proyecto llamado portafolio y porque fue realizado asdasdasdasds dasdasdasda sdsdasdasda sdasdsdasdasdasdasdsd"}
                            titulo={"Portafolio"}
                            tecnologias={["React", "ChakraUI", "JavaScript", "Git", "GitHub", "Visual Studio Code"]}
                            repositorio={"https://github.com/Xhyus/portfolio"}
                            url={"https://www.ignaciogonzalez.dev"}
                        />
                    </WrapItem>
                    <WrapItem>
                        <CardProyectos
                            imagen={portafolio}
                            descripcion={"Descripción del proyecto llamado portafolio y porque fue realizado asdasdasdasds dasdasdasda sdsdasdasda sdasdsdasdasdasdasdsd"}
                            titulo={"Portafolio"}
                            tecnologias={["React", "ChakraUI", "JavaScript", "Git", "GitHub", "Visual Studio Code"]}
                            repositorio={"https://github.com/Xhyus/portfolio"}
                            url={"https://www.ignaciogonzalez.dev"}
                        />
                    </WrapItem>
                    <WrapItem>
                        <CardProyectos
                            imagen={portafolio}
                            descripcion={"Descripción del proyecto llamado portafolio y porque fue realizado asdasdasdasds dasdasdasda sdsdasdasda sdasdsdasdasdasdasdsd"}
                            titulo={"Portafolio"}
                            tecnologias={["React", "ChakraUI", "JavaScript", "Git", "GitHub", "Visual Studio Code"]}
                            repositorio={"https://github.com/Xhyus/portfolio"}
                            url={"https://www.ignaciogonzalez.dev"}
                        />
                    </WrapItem>
                </Wrap>
            </HStack>
        </>
    )
}

export default Proyectos