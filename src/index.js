import React from 'react'; //react library from where we import elements
import ReactDOM from 'react-dom/client'; // avant était intégré dans React, maintenant il fait la liaison avec le dom et render l'App
import './index.css'; 
import App from './components/App'; // App component
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

//Register service worker ? 

// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// const Greeting = <h1>Hello world at {getCurrentDate()}</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(App, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
