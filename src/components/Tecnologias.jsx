import React from 'react'
import { Text, HStack, VStack, Heading, Wrap, WrapItem, Icon, Center } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript } from 'react-icons/si'

const Iconos = ({ icon, tecnologia }) => {
    return (
        <WrapItem >
            <Icon color={"white"} as={icon} w={14} h={14} mx={4} />
        </WrapItem>
    )
}

const Tecnologias = () => {
    return (
        <VStack>
            <Wrap>
                <Iconos icon={FaNodeJs} tecnologia="NodeJS" />
                <Iconos icon={SiJavascript} tecnologia="JavaScript" />
                <Iconos icon={FaReact} tecnologia="React" />
                <Iconos icon={SiNextdotjs} tecnologia="NextJS" />
                <Iconos icon={SiChakraui} tecnologia="ChakraUI" />
                <Iconos icon={SiExpress} tecnologia="Express" />
                <Iconos icon={FaGitAlt} tecnologia="Git" />
                <Iconos icon={FaGithub} tecnologia="GitHub" />
                <Iconos icon={FaPhp} tecnologia="PHP" />
                <Iconos icon={FaHtml5} tecnologia="HTML" />
                <Iconos icon={FaCss3} tecnologia="CSS" />
                <Iconos icon={SiMongodb} tecnologia="MongoDB" />
                <Iconos icon={SiMysql} tecnologia="MySQL" />
            </Wrap>
        </VStack >
    )
}

export default Tecnologias

