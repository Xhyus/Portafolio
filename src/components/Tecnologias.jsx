import React from 'react'
import { VStack, Heading, Wrap, WrapItem, Icon, Link, Image } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript, SiPostgresql, SiInsomnia, SiVisualstudiocode } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Iconos = ({ icon, url, tecnologia }) => {
    if (tecnologia === 'Mongoose') {
        return (
            <WrapItem>
                <Link href={url} isExternal><Image href={"../static/mongooseIcon.png"} w={"full"} /></Link>
            </WrapItem>
        )
    }
    return (
        <WrapItem >
            <Link href={url} isExternal><Icon color={"white"} as={icon} w={14} h={14} mx={4} /></Link>
        </WrapItem>
    )
}

const Tecnologias = () => {
    return (
        <VStack id='Tecnologias'>
            <Heading as={"h2"} fontSize={"2xl"} fontWeight={"bold"} color="white" textAlign={"center"} p={5}>Tecnologías</Heading>
            <Wrap>
                <Iconos icon={FaNodeJs} tecnologia="NodeJS" url="https://nodejs.org/dist/latest-v16.x/docs/api/" />
                <Iconos icon={SiJavascript} tecnologia="JavaScript" url="https://devdocs.io/javascript/" />
                <Iconos icon={FaReact} tecnologia="React" url="https://es.reactjs.org/docs/getting-started.html" />
                <Iconos icon={SiNextdotjs} tecnologia="NextJS" url="https://nextjs.org/docs" />
                <Iconos icon={TbBrandReactNative} tecnologia="React Native" url="https://reactnative.dev/docs/next/components-and-apis" />
                <Iconos icon={SiChakraui} tecnologia="ChakraUI" url="https://chakra-ui.com/docs/getting-started" />
                <Iconos icon={SiExpress} tecnologia="Express" url="https://expressjs.com/es/api.html" />
                <Iconos tecnologia="Mongoose" url="https://mongoosejs.com/docs/api.html" />
                <Iconos icon={SiMongodb} tecnologia="MongoDB" url="https://docs.mongodb.com/" />
                <Iconos icon={SiMysql} tecnologia="MySQL" url="https://dev.mysql.com/doc/" />
                <Iconos icon={SiPostgresql} tecnologia="PostgreSQL" url="https://www.postgresql.org/docs/" />
                <Iconos icon={FaPhp} tecnologia="PHP" url="https://www.php.net/docs.php" />
                <Iconos icon={FaHtml5} tecnologia="HTML" url="https://developer.mozilla.org/es/docs/Web/HTML" />
                <Iconos icon={FaCss3} tecnologia="CSS" url="https://developer.mozilla.org/es/docs/Web/CSS" />
            </Wrap>
            <Heading as={"h2"} fontWeight={"bold"} color="white" textAlign={"center"} p={5} fontSize={"2xl"}>Herramientas</Heading>
            <Wrap>
                <Iconos icon={FaGitAlt} tecnologia="Git" url="https://git-scm.com/docs" />
                <Iconos icon={FaGithub} tecnologia="GitHub" url="https://docs.github.com/es" />
                <Iconos icon={SiInsomnia} tecnologia="Insomnia" url="https://support.insomnia.rest/" />
                <Iconos icon={SiVisualstudiocode} tecnologia="Visual Studio Code" url="https://code.visualstudio.com/docs" />
            </Wrap>
        </VStack >
    )
}

export default Tecnologias