import React from 'react'
import { Box, Link, HStack, Flex, Stack, Drawer, DrawerOverlay, DrawerContent, Text, DrawerCloseButton, useMediaQuery, useDisclosure, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [isMobile] = useMediaQuery("(max-width: 600px)")

    const Desk = () => {
        return (
            <Flex backgroundColor={"blackAlpha.900"} verticalAlign={"center"} justify="space-evenly">
                <HStack ml={5} mr={5}>
                    <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                    <HStack align={"center"} p={5} justify="center">
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Educacion"} >Educación</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Experiencias"} >Experiencias</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Tecnologias"}  >Tecnologías</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Proyectos"}  >Proyectos</Link>
                    </HStack>
                </HStack>
            </Flex>

        )
    }

    const DrawerMobile = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
                <Box backgroundColor={"blackAlpha.900"} p={1}>
                    <Box m={5}>
                        <FaBars color='white' size={30} onClick={onOpen} />
                    </Box>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
                        <DrawerOverlay />
                        <DrawerContent backgroundColor={"blackAlpha.800"}>
                            <DrawerCloseButton color={"white"} />
                            <DrawerHeader>
                                <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                            </DrawerHeader>
                            <DrawerBody>
                                <Stack>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Educacion"} >Educación</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Experiencias"} >Experiencias</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Tecnologias"}  >Tecnologias</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Proyectos"}  >Proyectos</Link>
                                    {/* <Link color={"white"} px={1} fontWeight={"bold"} href={"#Contacto"}  >Contacto</Link> */}
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer >
                </Box>
            </>
        )
    }

    return (
        isMobile ? <DrawerMobile /> : <Desk />
    )
}

export default Navbar