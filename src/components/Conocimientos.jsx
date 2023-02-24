import { Stack, GridItem, Grid } from '@chakra-ui/react'
import SubTitulo from './generic_components/SubTitulo'
import TablaConocimientos from './generic_components/TablaConocimientos'
import { frontend, backend, base_datos, herramientas, lenguajes } from '../static/tecnologias'

const Conocimientos = () => {
    return (
        <Stack w={"full"} py={5} id="Conocimientos">
            <SubTitulo type="h2" size="2xl" data="CONOCIMIENTOS" />
            <Grid gap={5}>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(7, 1fr)" }} gap={5} w={"full"} >
                    <GridItem colSpan={{ base: 2, md: 2 }} >
                        <TablaConocimientos header="Lenguajes de Programación" tecnologias={lenguajes} />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, md: 3 }} >
                        <TablaConocimientos header="Frontend" tecnologias={frontend} />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, md: 2 }} >
                        <TablaConocimientos header="Backend" tecnologias={backend} />
                    </GridItem>
                </Grid>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={5} w={"full"} >
                    <GridItem colSpan={{ base: 2, md: 1 }} >
                        <TablaConocimientos header="Base de Datos" tecnologias={base_datos} />
                    </GridItem>
                    <GridItem colSpan={{ base: 2, md: 2 }} >
                        <TablaConocimientos header="Herramientas" tecnologias={herramientas} />
                    </GridItem>
                </Grid>
            </Grid>
        </Stack >
    )
}

export default Conocimientos