import { Text, HStack } from "@chakra-ui/react"

const TextoDoble = ({ tag, data }) => {
    return (
        <HStack>
            <Text fontWeight="bold">{tag}: </Text>
            <Text>{data}</Text>
        </HStack>
    )
}

export default TextoDoble