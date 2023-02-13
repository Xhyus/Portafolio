import { Box, HStack, Text, Link } from "@chakra-ui/react"

const Icono = ({ Icon, data, href }) => {
    return (
        <HStack py={1}>
            <Box bgColor="black" p={2}>
                <Icon color="white" size="30" />
            </Box>
            {data === undefined ?
                <Link href={href} fontSize="xl" isExternal>{href}</Link>
                :
                data && href ?
                    <Link href={href} fontSize="xl" isExternal>{data}</Link>
                    :
                    <Text fontSize="xl" color="black">{data}</Text>
            }
        </HStack>
    )
}

export default Icono