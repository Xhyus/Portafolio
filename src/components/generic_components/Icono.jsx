import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, HStack, Text, Link } from "@chakra-ui/react"

const Icono = ({ Icon, data, href }) => {
    return (
        <HStack py={1}>
            <Box bgColor="black" p={2}>
                <Icon color="white" size="30" />
            </Box>
            {data === undefined ?
                <Link style={{ display: "flex", gap: 5, alignItems: "center" }} href={href} fontSize="xl" isExternal>{href}<ExternalLinkIcon mx="2px" /></Link>
                :
                data && href ?
                    <Link style={{ display: "flex", gap: 5, alignItems: "center" }} href={href} fontSize="xl" isExternal>{data}<ExternalLinkIcon mx="2px" /></Link>
                    :
                    <Text fontSize="xl" color="black">{data}</Text>
            }
        </HStack>
    )
}

export default Icono