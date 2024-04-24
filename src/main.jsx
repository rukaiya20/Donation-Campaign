import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import DonateList from './components/DonateList/DonateList.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import DonationDetailes from './components/DonationDetailes/DonationDetailes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <DonateList></DonateList>,
      },
      {
        path: "/donations/:id",
        loader : () => fetch('categories.json'),
        element: <DonationDetailes></DonationDetailes>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
