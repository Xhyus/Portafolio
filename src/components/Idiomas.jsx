import React from 'react'
import { HStack, Text, Stack, Image, Heading, Link } from '@chakra-ui/react'

const Idiomas = () => {
    return (
        <Stack my={10}>
            <Heading as={"h2"} fontSize={"2xl"} textAlign={"center"} color={"white"}>Idiomas</Heading>
            <HStack mb={10}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png" w={"50px"} alt="Bandera de España" />
                <Text color={"white"}>Español (Nativo)</Text>
            </HStack>
            <HStack>
                <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" w={"50px"} alt="Bandera de Inglaterra" />
                <Text color={"white"} fontWeight={"semibold"}>Inglés - <Link color={"orange.200"} _hover={{ color: "orange.300" }} href={"Linguaskill.pdf"} isExternal>Certificación Linguaskill</Link> (C1 Listening) (B2 Reading)</Text>
            </HStack>
        </Stack>
    )
}

export default Idiomas