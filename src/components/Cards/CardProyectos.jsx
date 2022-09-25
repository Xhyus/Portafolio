import React from 'react'
import { HStack, VStack, Heading, WrapItem, Wrap, Text, Image, Link, Tag, Stack } from '@chakra-ui/react'
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
                    <Link href={url} bgColor={"blue.500"} _hover={{ bgColor: "blue.600", color: "white" }} color={"white"} p={2} borderRadius={10} fontWeight={'semibold'} fontSize={"2xl"} isExternal>Ir a la demo</Link>
                </HStack>
            </Stack>
        </>
    )
}

export default CardProyectos