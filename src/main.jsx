import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Register from './pagees/Register.jsx';
import Login from './pagees/Login.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Bookings from './pagees/Bookings.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ForBookings from './pagees/ForBookings.jsx';
import VolunteerForm from './pagees/VolunteerForm.jsx';
import Admin from './pagees/Admin.jsx';
import AddClients from './pagees/AddClients.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("https://volunteer-own-server.vercel.app/totalClients")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path: "/forBooking/:id",
        element: <PrivateRoute><ForBookings></ForBookings></PrivateRoute>,
        loader:({params})=>fetch(`https://volunteer-own-server.vercel.app/clients/${params.id}`)
      },
      {
        path:"/volunteer",
        element:<VolunteerForm></VolunteerForm>
      },
      {
        path:"addClients",
        element:<AddClients></AddClients>
      },
      {
        path:"/admin",
        element:<Admin></Admin>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
