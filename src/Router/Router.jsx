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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, 
    errorElement: <Blank></Blank>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        element: <AvailableFoods></AvailableFoods> ,
      },
      {
        path: 'addFood',
        element: <PrivateRoute><AddFood></AddFood> </PrivateRoute>,
      },
      {
        path: 'manageMyFoods',
        element: <ManageMyFoods></ManageMyFoods> ,
      },
      {
        path: 'myFoodRequest',
        element: <MyFoodRequest></MyFoodRequest> ,
      }
    ]
  },
]);
export default router;
