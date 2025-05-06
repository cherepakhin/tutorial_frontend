import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import { createRoot } from "react-dom/client";


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

const root = createRoot(document.getElementById('root'));
