import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </StateProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
