import { Stack, Text } from "@chakra-ui/react"
import Referencias from "./Referencias"

const PresentacionExperiencia = ({ periodo, empresa, detalle, experiencia, nombre, telefono, correo, referencia }) => {
    return (
        <Stack w="full" align="flex-start" gap={{ base: 2, md: 6 }} flexDirection={{ base: "column", md: "row" }} py={3}>
            <Stack maxW="300px" w="full" align="flex-start"  >
                <Text fontSize="2xl">{empresa}</Text>
                <Text fontSize="lg" fontWeight="bold" >{periodo}</Text>
            </Stack>
            <Stack align="flex-start"  >
                <Text fontSize="2xl" >{detalle}</Text>
                <Text fontSize="2xl" fontWeight="light">{experiencia}</Text>
                {referencia && <Referencias nombre={nombre} telefono={telefono} correo={correo} />}
            </Stack>
        </Stack>
    )
}

export default PresentacionExperiencia