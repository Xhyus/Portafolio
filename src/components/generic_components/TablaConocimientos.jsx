import { Stack, Text, Link, GridItem, Wrap } from '@chakra-ui/react'
import TagIcon from './TagIcon'


const TablaConocimientos = ({ header, tecnologias }) => {
    return (
        <Stack border="1px solid black" w="fit-content" borderRadius={12}>
            <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >{header}</Text>
            <Wrap justify="center" spacing={5} py="2" px="3">
                {tecnologias.map((tecnologia) => {
                    return (
                        <GridItem w={"fit-content"} >
                            <Link href={tecnologia.documentacion} isExternal>
                                <TagIcon icono={tecnologia.icono} tag={tecnologia.tecnologia} color={tecnologia.color} />
                            </Link>
                        </GridItem>
                    )
                })}
            </Wrap>
        </Stack>
    )
}

export default TablaConocimientos