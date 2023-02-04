import { Box, HStack, Text, Link } from "@chakra-ui/react"

const Icono = ({ Icon, data, href }) => {
    return (
        <HStack py={1}>
            <Box bgColor="black" p={2}>
                <Icon color="white" size="20" />
            </Box>
            {data === undefined ?
                <Link href={href} isExternal>{href}</Link>
                :
                data && href ?
                    <Link href={href} isExternal>{data}</Link>
                    :
                    <Text color="black">{data}</Text>
            }
        </HStack>
    )
}

export default Icono