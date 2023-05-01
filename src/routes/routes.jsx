import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import PrivateRoute from "../Private/PrivateRoute";
import BookedPlace from "../pages/Home/BookedPlace/BookedPlace";
import LoginLayouts from "../Layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import BookedLayouts from "../Layouts/BookedLayouts";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/"),
      },
      {
        path: "booking/:id",
        element: <Booking />,
        loader:({params})=> fetch(`http://localhost:4000/booking/${params.id}`)
      },

    ],
  },
  {
    path:'user',
    element:<LoginLayouts />,
    children:[
      {
        path:'login',
        element:<Login />
      },
      {
        path:'register',
        element:<Register />
      }
    ]

  },
  {
    path:'booking',
    element:<BookedLayouts />,
    children:[
      {
        path:"booked/:id",
        element:<PrivateRoute><BookedPlace /></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:4000/booked/${params.id}`)
      }
    ]
  }
]);

export default router;
