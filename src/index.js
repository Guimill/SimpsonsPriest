import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Formulaire from './Formulaire';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true,
        element: <App />
      },
      {
        path: "Formulaire",
        element: <Formulaire />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);