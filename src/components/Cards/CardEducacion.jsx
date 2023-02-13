import { Text, HStack, VStack, Image } from '@chakra-ui/react'
import TextoDoble from '../generic_components/TextoDoble'

const CardEducacion = ({ logo, institucion, descripcion, ingreso, egreso, size }) => {
    return (
        <HStack border={'1px'} w={{ base: "full", md: "md" }} h={"full"} justify={"space-around"} borderRadius={20} p={5} bgColor={"white"} flexDir={{ base: "column-reverse", md: "row" }}>
            <VStack pr={5}>
                <Text fontWeight={"bold"} fontSize="xl">{institucion}</Text>
                <Text >{descripcion}</Text>
                <TextoDoble tag="Año de Ingreso" data={ingreso} />
                <TextoDoble tag="Año de Egreso" data={egreso} />
            </VStack>
            <Image src={logo} w={size} alt="Logo" />
        </HStack >
    )
}

export default CardEducacion