import React from 'react';
import ReactDOM from 'react-dom/client'; // DOM manipulation için ReactDOM yerine ReactDOMClient kullanıyoruz
import App from './App';
import './styles.css';

// React 18 için yeni createRoot API'sini kullanıyoruz
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
