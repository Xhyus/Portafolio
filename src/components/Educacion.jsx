import React from 'react'
import { Wrap, VStack, Heading, WrapItem } from '@chakra-ui/react'
import CardEducacion from './Cards/CardEducacion'

const Educacion = () => {
    return (
        <VStack id='Educacion'>
            <Heading as={"h2"} color={"white"} p={5} fontSize={"2xl"}>Educación</Heading>
            <Wrap spacing={10} justify={"center"}>
                <WrapItem>
                    <CardEducacion logo={'https://www.salesianoconcepcion.cl/images/2018/06/07/insignia-colegio-fondo-transparente.png'} institucion={'Colegio Salesiano Concepción'} descripcion={'Técnico en Electrónica'} ingreso="2015" egreso="2018" size={"20%"} />
                </WrapItem>
                <WrapItem>
                    <CardEducacion logo={'https://upload.wikimedia.org/wikipedia/commons/a/a2/Escudo_Universidad_del_B%C3%ADo-B%C3%ADo.png'} institucion={'Universidad del Bío-Bío'} descripcion={'Ingeniería en Ejecución Informática'} ingreso="2019" egreso="2022" size={"30%"} />
                </WrapItem>
            </Wrap>
        </VStack>
    )
}

export default Educacion