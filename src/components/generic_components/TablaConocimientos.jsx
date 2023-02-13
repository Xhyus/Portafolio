import { WrapItem, Stack, Grid, Text } from '@chakra-ui/react'
import TagIcon from './TagIcon'

const Iconos = ({ icon, url, tecnologia, color }) => {
    return (
        <GridItem w={"fit-content"} >
            <Link href={url} isExternal>
                <TagIcon Icono={icon} tag={tecnologia} color={color} />
            </Link>
        </GridItem>
    )
}

const TablaConocimientos = ({ header, tecnologias }) => {
    return (
        <WrapItem>
            <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                <Text p={2} textAlign="center" fontWeight="semibold">Lenguajes de<br /> programación</Text>
                <Stack borderTop="2px gray solid" p={5}>
                    <Grid gap={1} templateColumns="repeat(2, 2fr)">
                        <Iconos icon={SiJavascript} tecnologia="JavaScript" url="https://devdocs.io/javascript/" color={"yellow.400"} />
                        <Iconos icon={FaPhp} tecnologia="PHP" url="https://www.php.net/docs.php" color={"purple.500"} />
                    </Grid>
                </Stack>
            </Stack>
        </WrapItem>
    )
}

export default TablaConocimientos