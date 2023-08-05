import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        {/* <Routes>
          <Route path='/' Component={}></Route>
        </Routes> */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);