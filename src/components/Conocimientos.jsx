import { Stack, Text, Wrap, WrapItem, Link, Grid, GridItem } from '@chakra-ui/react'
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
        <Stack id='Tecnologias' w={"full"} py={5}>
            <SubTitulo type="h2" size="2xl" data="CONOCIMIENTOS" />
            <Wrap h="full" align="flex-start">
                <WrapItem>
                    <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                        <Text p={2} textAlign="center" fontWeight="semibold">Lenguajes de<br /> programación</Text>
                        <Stack borderTop="2px gray solid" p={5}>
                            <Grid gap={1} templateColumns="repeat(2, 2fr)">
                                <Iconos icon={SiJavascript} tecnologia="JavaScript" url="https://devdocs.io/javascript/" color={"yellow.400"} />
                                <Iconos icon={FaPhp} tecnologia="PHP" url="https://www.php.net/docs.php" color={"purple.500"} />
                            </Grid>
                        </Stack>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                        <Text p={2} textAlign="center" fontWeight="semibold">Frontend</Text>
                        <Stack borderTop="2px gray solid" p={5}>
                            <Grid gap={1} templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 2fr)" }}>
                                <Iconos icon={FaReact} tecnologia="React" url="https://es.reactjs.org/docs/getting-started.html" color={"blue.500"} />
                                <Iconos icon={SiNextdotjs} tecnologia="NextJS" url="https://nextjs.org/docs" color={"white"} />
                                <Iconos icon={TbBrandReactNative} tecnologia="React Native" url="https://reactnative.dev/docs/next/components-and-apis" color={"purple.500"} />
                                <Iconos icon={SiChakraui} tecnologia="ChakraUI" url="https://chakra-ui.com/docs/getting-started" color={"teal.500"} />
                                <Iconos icon={FaHtml5} tecnologia="HTML" url="https://developer.mozilla.org/es/docs/Web/HTML" color={"orange.500"} />
                                <Iconos icon={FaCss3} tecnologia="CSS" url="https://developer.mozilla.org/es/docs/Web/CSS" color={"blue.500"} />
                            </Grid>
                        </Stack>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                        <Text p={2} textAlign="center" fontWeight="semibold">Backend</Text>
                        <Stack borderTop="2px gray solid" p={5}>
                            <Grid gap={1} templateColumns={"repeat(2, 2fr)"}>
                                <Iconos icon={FaNodeJs} tecnologia="NodeJS" url="https://nodejs.org/dist/latest-v16.x/docs/api/" color={"green.500"} />
                                <Iconos icon={SiExpress} tecnologia="Express" url="https://expressjs.com/es/api.html" color={"red.500"} />
                            </Grid>
                        </Stack>
                    </Stack>
                </WrapItem><WrapItem>
                    <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                        <Text p={2} textAlign="center" fontWeight="semibold">Bases de datos</Text>
                        <Stack borderTop="2px gray solid" p={5}>
                            <Grid gap={1} templateColumns={"repeat(3, 2fr)"}>
                                <Iconos icon={SiMongodb} tecnologia="MongoDB" url="https://docs.mongodb.com/" color={"green.500"} />
                                <Iconos icon={SiMysql} tecnologia="MySQL" url="https://dev.mysql.com/doc/" color={"blue.500"} />
                                <Iconos icon={SiPostgresql} tecnologia="PostgreSQL" url="https://www.postgresql.org/docs/" color={"blue.500"} />
                            </Grid>
                        </Stack>
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <Stack border="2px gray solid" borderRadius="3px" w="content-fit">
                        <Text p={2} textAlign="center" fontWeight="semibold">Herramientas de desarrollo</Text>
                        <Stack borderTop="2px gray solid" p={5}>
                            <Grid templateColumns={"repeat(4, 2fr)"} rowGap="1" gap="1">
                                <Iconos icon={FaGitAlt} tecnologia="Git" url="https://git-scm.com/docs" color={"red.500"} />
                                <Iconos icon={FaGithub} tecnologia="GitHub" url="https://docs.github.com/es" color={"white"} />
                                <Iconos icon={SiInsomnia} tecnologia="Insomnia" url="https://support.insomnia.rest/" color={"purple.500"} />
                                <Iconos icon={SiVisualstudiocode} tecnologia="Visual Studio Code" url="https://code.visualstudio.com/docs" color={"blue.500"} />
                            </Grid>
                        </Stack>
                    </Stack>
                </WrapItem>
            </Wrap>
        </Stack >
    )
}

export default Conocimientos