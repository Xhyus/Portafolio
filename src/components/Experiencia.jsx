import React from 'react'
import { Stack, VStack, Heading, WrapItem, Wrap } from '@chakra-ui/react'
import experiencias from '../static/experiencias'
import SubTitulo from './generic_components/SubTitulo'
import PresentacionExperiencia from './generic_components/PresentacionExperiencia'

const Experiencia = () => {
    console.log(experiencias)
    return (
        <Stack justify={"center"} my={10} w={'full'} id={"Experiencias"}>
            <SubTitulo type="h2" size="2xl" data="Experiencias" />
            {experiencias.experienciasDestacables.map((experiencia, index) => {
                return (
                    console.log(experiencia),
                    <Text>asd</Text>
                )
            })}
        </Stack>
    )
}

export default Experiencia