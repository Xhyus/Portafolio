import { Stack, Text, Wrap, WrapItem, Link, GridItem } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3, FaHtml5, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiChakraui, SiJavascript, SiPostgresql, SiInsomnia, SiVisualstudiocode } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import SubTitulo from './generic_components/SubTitulo'
import TagIcon from './generic_components/TagIcon'

const Iconos = ({ icon, url, tecnologia, color }) => {
    return (
        <GridItem w={"fit-content"} >
            <Link href={url} isExternal>
                <TagIcon Icono={icon} tag={tecnologia} color={color} />
            </Link>
        </GridItem>
    )
}

const Conocimientos = () => {
    return (
        <Stack w={"full"} py={5} id="Conocimientos">
            <SubTitulo type="h2" size="2xl" data="CONOCIMIENTOS" />
            <Wrap h="full" align="flex-start" w="full" justify="space-between">
                <WrapItem>
                    <Stack border="1px solid black" w="full">
                        <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >Lenguajes de<br /> Programación</Text>
                        <Wrap justify="center" spacing={5} py="2" px="3">
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiJavascript} url="https://developer.mozilla.org/es/docs/Web/JavaScript" tecnologia="JavaScript" color="yellow.400" />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaPhp} url="https://www.php.net/" tecnologia="PHP" color="blue.400" />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="1px solid black" w="full">
                        <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >Frontend</Text>
                        <Wrap justify="center" spacing={5} py="2" px="3" maxW="xl">
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaReact} tecnologia="React" url="https://es.reactjs.org/docs/getting-started.html" color={"blue.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiNextdotjs} tecnologia="NextJS" url="https://nextjs.org/docs" color={"white"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={TbBrandReactNative} tecnologia="React Native" url="https://reactnative.dev/docs/next/components-and-apis" color={"purple.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiChakraui} tecnologia="ChakraUI" url="https://chakra-ui.com/docs/getting-started" color={"teal.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaHtml5} tecnologia="HTML" url="https://developer.mozilla.org/es/docs/Web/HTML" color={"orange.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaCss3} tecnologia="CSS" url="https://developer.mozilla.org/es/docs/Web/CSS" color={"blue.500"} />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="1px solid black" w="full">
                        <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >Backend</Text>
                        <Wrap justify="center" spacing={5} py="2" px="3">
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaNodeJs} tecnologia="NodeJS" url="https://nodejs.org/dist/latest-v16.x/docs/api/" color={"green.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiExpress} tecnologia="Express" url="https://expressjs.com/es/api.html" color={"red.500"} />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="1px solid black" w="full">
                        <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >Bases de datos</Text>
                        <Wrap justify="center" spacing={5} py="2" px="3">
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiMongodb} tecnologia="MongoDB" url="https://docs.mongodb.com/" color={"green.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiMysql} tecnologia="MySQL" url="https://dev.mysql.com/doc/" color={"blue.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiPostgresql} tecnologia="PostgreSQL" url="https://www.postgresql.org/docs/" color={"blue.500"} />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="1px solid black" w="full">
                        <Text fontSize="xl" borderBottom="1px solid black" p={2} textAlign="center" fontWeight="semibold" >Herramientas</Text>
                        <Wrap justify="center" spacing={5} py="2" px="3">
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaGitAlt} tecnologia="Git" url="https://git-scm.com/docs" color={"red.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={FaGithub} tecnologia="GitHub" url="https://docs.github.com/es" color={"white"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiInsomnia} tecnologia="Insomnia" url="https://support.insomnia.rest/" color={"purple.500"} />
                            </WrapItem>
                            <WrapItem w={"fit-content"} >
                                <Iconos icon={SiVisualstudiocode} tecnologia="Visual Studio Code" url="https://code.visualstudio.com/docs" color={"blue.500"} />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </WrapItem>
            </Wrap>
        </Stack >
    )
}

export default Conocimientos