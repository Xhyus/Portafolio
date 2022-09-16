import React from 'react'
import { VStack, Heading, Wrap, WrapItem, Icon } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript, SiPostgresql, SiInsomnia, SiVisualstudiocode } from 'react-icons/si'

const Iconos = ({ icon }) => {
    return (
        <WrapItem >
            <Icon color={"white"} as={icon} w={14} h={14} mx={4} />
        </WrapItem>
    )
}

const Tecnologias = () => {
    return (
        <VStack>
            <Heading fontWeight={"bold"} color="white" textAlign={"center"} p={5}>Tecnologías</Heading>
            <Wrap>
                <Iconos icon={FaNodeJs} tecnologia="NodeJS" />
                <Iconos icon={SiJavascript} tecnologia="JavaScript" />
                <Iconos icon={FaReact} tecnologia="React" />
                <Iconos icon={SiNextdotjs} tecnologia="NextJS" />
                <Iconos icon={SiChakraui} tecnologia="ChakraUI" />
                <Iconos icon={SiExpress} tecnologia="Express" />
                <Iconos icon={SiMongodb} tecnologia="MongoDB" />
                <Iconos icon={SiMysql} tecnologia="MySQL" />
                <Iconos icon={SiPostgresql} tecnologia="PostgreSQL" />
                <Iconos icon={FaPhp} tecnologia="PHP" />
                <Iconos icon={FaHtml5} tecnologia="HTML" />
                <Iconos icon={FaCss3} tecnologia="CSS" />

            </Wrap>
            <Heading fontWeight={"bold"} color="white" textAlign={"center"} p={5}>Herramientas</Heading>
            <Wrap>
                <Iconos icon={FaGitAlt} tecnologia="Git" />
                <Iconos icon={FaGithub} tecnologia="GitHub" />
                <Iconos icon={SiInsomnia} tecnologia="Insomnia" />
                <Iconos icon={SiVisualstudiocode} tecnologia="Visual Studio Code" />
            </Wrap>
        </VStack >
    )
}

export default Tecnologias

