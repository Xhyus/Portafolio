import { Container, } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Conocimientos from '../components/Conocimientos'
import Experiencia from '../components/Experiencia'
// import Educacion from '../components/Educacion'
import SobreMi from '../components/SobreMi'
// import Proyectos from '../components/Proyectos'
// import Idiomas from '../components/Idiomas'

const Inicio = () => {
    return (
        <>
            <Navbar />
            <Container maxW={"container.xl"} py={20}>
                <SobreMi />
                <Conocimientos />
                <Experiencia />
                {/*<Educacion />
            <Idiomas />
        <Proyectos /> */}
            </Container >
        </>
    )
}

export default Inicio;