import { Stack } from '@chakra-ui/react'
import experiencias from '../static/experiencias'
import SubTitulo from './generic_components/SubTitulo'
import PresentacionExperiencia from './generic_components/PresentacionExperiencia'

const Experiencia = () => {
    return (
        <Stack justify={"center"} my={10} w={'full'} id={"Experiencias"}>
            <SubTitulo type="h2" size="2xl" data="EXPERIENCIAS" />
            {experiencias.map((experiencia, index) => {
                return (
                    <PresentacionExperiencia
                        key={index}
                        periodo={experiencia.periodo}
                        empresa={experiencia.empresa}
                        detalle={experiencia.descripcion}
                        experiencia={experiencia.experiencia}
                        nombre={experiencia.nombre}
                        telefono={experiencia.telefono}
                        correo={experiencia.correo}
                        referencia={experiencia.referencia}
                    />
                )
            })}
        </Stack>
    )
}

export default Experiencia