import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap, Text, Image, Link, Tag, Stack, Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const CardProyectos = ({ imagen, descripcion, titulo, tecnologias, repositorio, url }) => {
    return (
        <>
            <Stack w={{ base: "full", md: "md" }} h={"full"} borderRadius={20} p={10} bgColor={"white"} justify={"center"} align={"center"}>
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
                <HStack p={5}>
                    <Link mr={5} href={repositorio} isExternal><FaGithub size={40} /></Link>
                    {url === "unset" ? <Link href={url} isExternal><Button colorScheme={'blue'}>Ver demo</Button></Link> : <Button colorScheme={'blue'} disabled>Ver demo</Button>}
                </HStack>
            </Stack>
        </>
    )
}

export default CardProyectos