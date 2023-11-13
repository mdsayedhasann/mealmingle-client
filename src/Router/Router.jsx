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
    errorElement: <Blank></Blank>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/foods')
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
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: 'singleFood/:id',
        element: <SingleFood></SingleFood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: 'addFood',
        element: <PrivateRoute><AddFood></AddFood> </PrivateRoute>,
      },
      {
        path: 'manageMyFoods',
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: 'myFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute> ,
        loader: () => fetch('http://localhost:5000/foodRequest')
      },
      {
        path: 'updateFood/:id',
        element: <UpdateFood></UpdateFood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }, 
      {
        path: 'request/:id',
        element: <PrivateRoute><Request></Request></PrivateRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }
    ]
  },
]);
export default router;
