import React from 'react'
import { VStack, Heading, Wrap, WrapItem, Icon, Link } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript, SiPostgresql, SiInsomnia, SiVisualstudiocode } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
// import { MongooseJS } from './icons/customIcons'

const Iconos = ({ icon, url, tecnologia, color }) => {
    if (tecnologia === 'Mongoose') {
        return (
            <WrapItem>
                <Link href={url} isExternal>
                    <Icon as={icon} w={"44"} h={"20"} color="white" />
                </Link>
            </WrapItem >
        )
    }
    return (
        <WrapItem >
            <Link href={url} isExternal>
                <Icon color={"white"} as={icon} w={14} h={14} mx={4} _hover={{ color: color }} />
            </Link>
        </WrapItem>
    )
}

const Tecnologias = () => {
    return (
        <VStack id='Tecnologias' w={"full"}>
            <Heading as={"h2"} fontSize={"2xl"} fontWeight={"bold"} color="white" textAlign={"center"} p={5}>Tecnologías</Heading>
            <Wrap justify={"space-evenly"} align={"center"}>
                <Iconos icon={FaNodeJs} tecnologia="NodeJS" url="https://nodejs.org/dist/latest-v16.x/docs/api/" color={"green.500"} />
                <Iconos icon={SiJavascript} tecnologia="JavaScript" url="https://devdocs.io/javascript/" color={"yellow.400"} />
                <Iconos icon={FaReact} tecnologia="React" url="https://es.reactjs.org/docs/getting-started.html" color={"blue.500"} />
                <Iconos icon={SiNextdotjs} tecnologia="NextJS" url="https://nextjs.org/docs" color={"black"} />
                <Iconos icon={TbBrandReactNative} tecnologia="React Native" url="https://reactnative.dev/docs/next/components-and-apis" color={"purple.500"} />
                <Iconos icon={SiChakraui} tecnologia="ChakraUI" url="https://chakra-ui.com/docs/getting-started" color={"teal.500"} />
                <Iconos icon={SiExpress} tecnologia="Express" url="https://expressjs.com/es/api.html" color={"red.500"} />
                {/* <Iconos icon={MongooseJS} size={60} tecnologia="Mongoose" url="https://mongoosejs.com/docs/api.html" /> */}
                <Iconos icon={SiMongodb} tecnologia="MongoDB" url="https://docs.mongodb.com/" color={"green.500"} />
                <Iconos icon={SiMysql} tecnologia="MySQL" url="https://dev.mysql.com/doc/" color={"blue.500"} />
                <Iconos icon={SiPostgresql} tecnologia="PostgreSQL" url="https://www.postgresql.org/docs/" color={"blue.500"} />
                <Iconos icon={FaPhp} tecnologia="PHP" url="https://www.php.net/docs.php" color={"purple.500"} />
                <Iconos icon={FaHtml5} tecnologia="HTML" url="https://developer.mozilla.org/es/docs/Web/HTML" color={"orange.500"} />
                <Iconos icon={FaCss3} tecnologia="CSS" url="https://developer.mozilla.org/es/docs/Web/CSS" color={"blue.500"} />
            </Wrap>
            <Heading as={"h2"} fontWeight={"bold"} color="white" textAlign={"center"} p={5} fontSize={"2xl"}>Herramientas</Heading>
            <Wrap justify={"space-evenly"} align={"center"}>
                <Iconos icon={FaGitAlt} tecnologia="Git" url="https://git-scm.com/docs" color={"red.500"} />
                <Iconos icon={FaGithub} tecnologia="GitHub" url="https://docs.github.com/es" color={"black"} />
                <Iconos icon={SiInsomnia} tecnologia="Insomnia" url="https://support.insomnia.rest/" color={"purple.500"} />
                <Iconos icon={SiVisualstudiocode} tecnologia="Visual Studio Code" url="https://code.visualstudio.com/docs" color={"blue.500"} />
            </Wrap>
        </VStack >
    )
}

export default Tecnologias