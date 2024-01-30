//1. Create a new React app.
import { createRoot } from 'react-dom';
import App from './components/App';
import '../public/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
