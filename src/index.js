// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/App/App";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);



import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

// Import StrictMode from React
import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);

// Wrap App component with StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
