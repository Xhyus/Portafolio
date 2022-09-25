import React from 'react'
import { Button, FormControl, FormLabel, Heading, HStack, Image, Input, Link, Stack, Text, Textarea } from '@chakra-ui/react'

const Contacto = () => {
    return (
        <Stack w={"full"} mt={10} justify="center">
            <Stack justify={"center"} bgColor={"white"} borderRadius={10} w={{ base: "full", md: "lg" }} p={5}>
                <Heading as={"h2"} fontSize={"2xl"} textAlign={'center'} color={"black"} pb="5">Contacto</Heading>
                <form onSubmit={(e) => e.preventDefault()}>
                    <FormControl>
                        <FormLabel >Nombre</FormLabel>
                        <Input type="text" id="name" name="name" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" id="email" name="email" />
                    </FormControl>
                    <FormControl>
                        <FormLabel >Mensaje</FormLabel>
                        <Textarea id="message" name="message" />
                    </FormControl>
                    <Button mt={5} type="submit">Enviar</Button>
                </form>

            </Stack>
        </Stack>
    )
}

export default Contacto