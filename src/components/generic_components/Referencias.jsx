import { Box, Text } from "@chakra-ui/react"


const Referencias = ({ nombre, correo, telefono }) => {
    return (
        <Box bgColor="black" p={2}>
            <Text color="white" fontWeight="light" textAlign="center">Para referencias contactarse con {nombre} - {correo} - {telefono}</Text>
        </Box>
    )
}

export default Referencias