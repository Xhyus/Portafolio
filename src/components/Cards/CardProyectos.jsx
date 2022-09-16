import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap, Text, Label, Image, Link, Tag, Stack, Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const CardProyectos = ({ imagen, descripcion, titulo, tecnologias, repositorio, url }) => {
    return (
        <>
            <Stack bgColor={"white"} border={1} borderRadius={20} m={5} w="50%" p={5}>
                <Stack justify={"center"} align={"center"} p={5}>
                    <Image src={imagen} borderRadius={10} w="80%" />
                    <VStack w={"100%"} flexWrap={'wrap'} >
                        <Heading as={"h3"} fontSize={"xl"} textAlign={"center"} fontWeight={"bold"}>{titulo}</Heading>
                        <Text textAlign={"center"} flexWrap={"wrap"} pb={5}>{descripcion}</Text>
                    </VStack>
                    <Wrap justify={"center"}>
                        {tecnologias.map((tecnologia, index) => {
                            return (
                                <WrapItem key={index}>
                                    <Tag colorScheme={'yellow'} w={"fit-content"}>{tecnologia}</Tag>
                                </WrapItem>
                            )
                        })}
                    </Wrap>
                    <HStack >
                        <Link href={repositorio} isExternal><FaGithub size={40} /></Link>
                        <Button><Link href={url} fontSize={"2xl"} isExternal>Ir</Link></Button>
                    </HStack>
                </Stack>
            </Stack>

        </>
    )
}

export default CardProyectos