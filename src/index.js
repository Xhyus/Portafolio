import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './views/Inicio';
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Navbar />
			<Container maxW={"full"} backgroundColor={"#264E70"} maxH={"full"}>
				<Inicio />
			</Container >
		</ChakraProvider>
	</React.StrictMode >
);