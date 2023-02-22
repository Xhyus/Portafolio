import { Stack, Text } from "@chakra-ui/react"
import Referencias from "./Referencias"

const PresentacionExperiencia = ({ periodo, empresa, detalle, experiencia, nombre, telefono, correo }) => {
    return (
        <>
            <Stack align="flex-start" py={5} flexDirection={{ base: "column", md: "row" }} >
                <Stack w={{ base: "100%", md: "15%" }} flexDirection={{ base: "row", md: "column" }} >
                    <Text fontSize="lg" color="black" textAlign="justify" fontWeight="bold">{periodo}</Text>
                    <Text fontSize="lg" color="black" textAlign="justify">{experiencia}</Text>
                </Stack>
                <Stack w={{ base: "100%", md: "85%" }}>
                    <Text fontSize="xl" color="black" fontWeight="bold" textAlign="justify">{empresa}</Text>
                    <Text fontSize="lg" color="black" textAlign="justify" >{detalle}</Text>
                    <Referencias nombre={nombre} telefono={telefono} correo={correo} />
                </Stack>
            </Stack>
        </>
    )
}

export default PresentacionExperiencia