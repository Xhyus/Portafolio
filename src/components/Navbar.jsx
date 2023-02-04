import { Box, HStack, Flex, Stack, Drawer, DrawerOverlay, DrawerContent, Text, DrawerCloseButton, useMediaQuery, useDisclosure, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa'
import LinkButton from "./generic_components/LinkButton"

const Navbar = () => {

    const [isMobile] = useMediaQuery("(max-width: 600px)")
    const Desk = () => {
        return (
            <Flex backgroundColor={"blackAlpha.900"} verticalAlign={"center"} p={5} justify="space-between">
                <Text fontSize="xl" color="white" fontWeight="bold">Ignacio González</Text>
                <HStack>
                    <LinkButton href="#SobreMi" tag="Sobre Mí" />
                    <LinkButton href="#Educacion" tag="Educación" />
                    <LinkButton href="#Experiencias" tag="Experiencias" />
                    <LinkButton href="#Tecnologias" tag="Tecnologías" />
                    <LinkButton href="#Proyectos" tag="Proyectos" />
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
                    <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
                        <DrawerOverlay />
                        <DrawerContent backgroundColor={"blackAlpha.800"}>
                            <DrawerCloseButton color={"white"} />
                            <DrawerHeader>
                                <Text color={"white"} fontWeight={"bold"}>Ignacio González</Text>
                            </DrawerHeader>
                            <DrawerBody>
                                <Stack>
                                    <LinkButton href="#SobreMi" tag="Sobre Mí" />
                                    <LinkButton href="#Educacion" tag="Educación" />
                                    <LinkButton href="#Experiencias" tag="Experiencias" />
                                    <LinkButton href="#Tecnologias" tag="Tecnologías" />
                                    <LinkButton href="#Proyectos" tag="Proyectos" />
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