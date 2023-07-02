// import React from 'react';
// import ReactDOM from 'react-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import App from './App';

// ReactDOM.render(
//     <GoogleOAuthProvider clientId="284678551280-83v0robh2749srrib2cf1vj7pejdpll1.apps.googleusercontent.com">
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </GoogleOAuthProvider>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();