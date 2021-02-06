import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ChakraProvider theme={theme}>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </ChakraProvider>
  </StateProvider>,
  document.getElementById('root')
);
