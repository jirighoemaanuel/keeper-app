//1. Create a new React app.
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
