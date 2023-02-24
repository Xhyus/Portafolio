import { Box, Heading, HStack, Link, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa"
import { sobre_mi } from '../static/textos-estaticos'
import SubTitulo from './generic_components/SubTitulo'
import Icono from './generic_components/Icono'

const SobreMi = () => {
    return (
        <Stack w="full" >
            <Wrap justify="space-between" align="flex-start">
                <WrapItem>
                    <Box bgColor="black" p={3} w="fit-content">
                        <Heading as="h1" fontSize="6xl" fontWeight="bold" color="white">IGNACIO <br />GONZÁLEZ</Heading>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box w="full">
                        <Icono Icon={FaMapMarkerAlt} data="Concepción, Bío-Bío" />
                        <Icono Icon={FaPhoneAlt} data="+56 9 6338 0984" />
                        <Icono Icon={FaEnvelope} data="ignaciogonzalez1609@gmail.com" href="mailto:ignaciogonzalez1609@gmail.com" />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box w="full">
                        <Icono Icon={FaGlobe} href="https://ignaciogonzalez.dev" />
                        <Icono Icon={FaGithub} href="https://github.com/Xhyus" />
                        <Icono Icon={FaLinkedin} data="LinkedIn Ignacio González" href="https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/" />
                    </Box>
                </WrapItem>
            </Wrap>
            <HStack gap={5}>
                <Heading as={"h2"} fontSize="2xl" color={"black"} fontWeight="light" py={5}>Ing. Informático</Heading>
                <Link href={'/CV.pdf'} border="2px black solid" color="black" px={6} fontWeight="light" py={2} _hover={{ transform: "scale(1.1)", color: "black" }} isExternal>Ver Curriculum</Link>
            </HStack>
            <SubTitulo type="h2" size="2xl" data="¿QUIÉN SOY?" />
            <Stack textAlign={'justify'}>
                {sobre_mi.map((data, key) => {
                    return <Text color="black" fontSize="xl" key={key}>{data}</Text>
                })}
            </Stack>
        </Stack >
    )
}

export default SobreMi