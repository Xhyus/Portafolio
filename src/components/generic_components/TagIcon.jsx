import { Text, HStack, Box } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"

const TagIcon = ({ icono, tag, color }) => {
    return (
        <Box bgColor="black" w="fit-content" py={2} px={4}>
            <HStack w="full" align="center">
                <Icon as={icono} w={7} h={7} color={color} />
                <Text color="white">{tag}</Text>
            </HStack>
        </Box>
    )
}

export default TagIcon