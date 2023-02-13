import { Container, } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Conocimientos from '../components/Conocimientos'
// import Empresas from '../components/Empresas'
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
                {/*<Educacion />
            <Idiomas />
            <Empresas />
        <Proyectos /> */}
            </Container >
        </>
    )
}

export default Inicio;