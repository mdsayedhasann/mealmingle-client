import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blank from "../Blank";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import PrivateRoute from "./PrivateRouter";
import SingleFood from "../pages/SingleFood";
import UpdateFood from "../pages/UpdateFood";
import Request from "../pages/Request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, 
    // errorElement: <Blank></Blank>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://mealmingleserverr.vercel.app//foods')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }, 
      {
        path: 'availableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('https://mealmingleserverr.vercel.app//foods')
      },
      {
        path: 'singleFood/:id',
        element: <SingleFood></SingleFood>,
        loader: ({params}) => fetch(`https://mealmingleserverr.vercel.app//foods/${params.id}`)
      },
      {
        path: 'addFood',
        element: <PrivateRoute><AddFood></AddFood> </PrivateRoute>,
      },
      {
        path: 'manageMyFoods',
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>,
        loader: () => fetch('https://mealmingleserverr.vercel.app//foods')
      },
      {
        path: 'myFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute> ,
        loader: () => fetch('https://mealmingleserverr.vercel.app//foodRequest')
      },
      {
        path: 'updateFood/:id',
        element: <UpdateFood></UpdateFood>,
        loader: ({params}) => fetch(`https://mealmingleserverr.vercel.app//foods/${params.id}`)
      }, 
      {
        path: 'request/:id',
        element: <PrivateRoute><Request></Request></PrivateRoute> ,
        loader: ({params}) => fetch(`https://mealmingleserverr.vercel.app//foods/${params.id}`)
      }
    ]
  },
]);
export default router;

// https://mealmingleserverr.vercel.app/
// https://vercel.com/md-sayed-hasans-projects/mealmingleserverr/RadiEShr2yCJYMCebvByQWSMFri4