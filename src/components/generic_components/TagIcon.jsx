import { Text, HStack, Box } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"

const TagIcon = ({ Icono, tag, color }) => {
    return (
        <Box bgColor="black" w="fit-content" py={2} px={4}>
            <HStack w="full" align="center">
                <Icon as={Icono} size="25" color={color} />
                <Text color="white">{tag}</Text>
            </HStack>
        </Box>
    )
}

export default TagIcon