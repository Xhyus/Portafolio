import { Box, Link, Text } from "@chakra-ui/react"

const Referencias = ({ nombre, correo, telefono }) => {
    return (
        <Box bgColor="black" p={2} w="full">
            <Text color="white" fontWeight="light" textAlign="center">Para referencias contactarse con {nombre} - <Link href={"mailto:" + correo}>{correo}</Link> - {telefono}</Text>
        </Box>
    )
}

export default Referencias