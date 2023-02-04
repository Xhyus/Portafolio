import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './views/Inicio';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<ChakraProvider>
			<Inicio />
		</ChakraProvider>
	</StrictMode >
);