import { Box, Heading } from "@chakra-ui/react"

const SubTitulo = ({ type, size, data }) => {
    return (
        <Box bgColor="black" px={3} py={2} w="fit-content">
            <Heading as={type} fontSize={size} fontWeight="bold" color="white">{data}</Heading>
        </Box>
    )
}

export default SubTitulo