import React from 'react'
import { Box, Link, HStack, ChakraProvider, VStack, Drawer, DrawerOverlay, DrawerContent, Text, DrawerCloseButton, useMediaQuery, Stack, useDisclosure, Container, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [isMobile] = useMediaQuery("(max-width: 600px)")
    // const currentPage = (boton) => {
    //     if ( === 'asambleas' && boton === 'asambleas') {
    //         return "orange"
    //     } else {
    //         if (path[1] === 'rendicion_cuentas' && boton === 'rendicion_cuentas') {
    //             return "orange"
    //         } else {
    //             return "white"
    //         }
    //     }
    // }

    console.log(window.location.href)

    // const currentPageMobile = (boton) => {
    //     if (path[1] === 'asambleas' && boton === 'asambleas') {
    //         return "orange"
    //     } else {
    //         if (path[1] === 'rendicion_cuentas' && boton === 'rendicion_cuentas') {
    //             return "orange"
    //         } else {
    //             return "black"
    //         }
    //     }
    // }

    const desk = () => {
        return (
            <Box backgroundColor={"blackAlpha.900"} verticalAlign={"center"}>
                <HStack justify={"space-evenly"} ml={5} mr={5}>
                    <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                    <HStack align={"center"} p={5} justify={"center"}>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                        <Link color={"white"} px={1} fontWeight={"bold"} href={"#Tecnologias"}  >Tecnologias</Link>
                    </HStack>
                </HStack>
            </Box>

        )
    }

    const DrawerMobile = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        return (
            <>
                <Box backgroundColor={"blackAlpha.900"} p={1}>
                    <Box m={5} borderColor={"whiteAlpha.700"} backgroundColor={"blackAlpha.900"}>
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
                                    <Link color={"white"} fontWeight={"bold"} href={"#Sobre-mi"} >Sobre mí</Link>
                                    <Link color={"white"} fontWeight={"bold"} href={"#Tecnologias"} >Tecnologias</Link>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer >
                </Box>
            </>
        )
    }

    return (
        isMobile ? <DrawerMobile /> : desk()
    )
}

export default Navbar