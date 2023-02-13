import { Box, Heading, HStack, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
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
            <Heading as={"h2"} fontSize="2xl" color={"black"} fontWeight="light" py={5}>Ing. Informático</Heading>
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


{/* <Stack textAlign={"center"} mr={{ base: "0", md: 10 }} w={{ base: "full", md: "40%" }} pb={{ base: "5", md: 0 }} >
                    <Image src={foto} width={{ base: "70%", md: "70%" }} alignSelf="center" borderRadius={'full'} border={'2px'} borderColor={'gray.300'} alt="Foto de Ignacio González" />
                    <Text color={"white"} fontWeight={"bold"}>Desarrollador Web</Text>
                    <HStack justify={"center"}>
                        <Link href='https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-468359218/' isExternal><FaLinkedin size={30} color={'white'} /></Link>
                        <Link href='https://github.com/Xhyus' isExternal _hover={{ color: "black" }} ><FaGithub size={30} color={'white'} /></Link>
                    </HStack>
                    <Link href={'/CV.pdf'} color={'white'} isExternal><Button color={'white'} w="full" colorScheme={'blue'}>Ver Curriculum</Button></Link>
                </Stack> */}