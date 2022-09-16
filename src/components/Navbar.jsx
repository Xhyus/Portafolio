import React from 'react'
import { Box, Link, HStack, Flex, VStack, Drawer, DrawerOverlay, DrawerContent, Text, DrawerCloseButton, useMediaQuery, useDisclosure, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [isMobile] = useMediaQuery("(max-width: 600px)")

    const Desk = () => {
        return (
            <Flex backgroundColor={"blackAlpha.900"} verticalAlign={"center"} justify="space-evenly">
                <HStack ml={5} mr={5}>
                    <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                    <HStack align={"center"} p={5}>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Educacion"} >Educación</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Experiencias"} >Experiencias</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Tecnologias"}  >Tecnologias</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Proyectos"}  >Proyectos</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Contacto"}  >Contacto</Link>

                    </HStack>
                </HStack>
            </Flex>

        )
    }

    const DrawerMobile = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        return (
            <>
                <Box backgroundColor={"blackAlpha.900"} p={1}>
                    <Box m={5} backgroundColor={"blackAlpha.900"}>
                        <FaBars color='white' size={30} ref={btnRef} onClick={onOpen} />
                    </Box>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent backgroundColor={"blackAlpha.800"}>
                            <DrawerCloseButton color={"white"} />
                            <DrawerHeader>
                                <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                            </DrawerHeader>
                            <DrawerBody justifyContent={"center"}>
                                <VStack>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Educacion"} >Educación</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Experiencias"} >Experiencias</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Tecnologias"}  >Tecnologias</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Proyectos"}  >Proyectos</Link>
                                    <Link color={"white"} px={1} fontWeight={"bold"} href={"#Contacto"}  >Contacto</Link>
                                </VStack>
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