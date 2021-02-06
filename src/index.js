import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <ChakraProvider theme={theme} >
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
