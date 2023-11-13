import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ManageFood = ({ food, deleteFood }) => {
    
  const { user } = useContext(AuthContext);
  const {
    _id,
    foodName,
    quantity,
    foodImage,
    PickupLocation,
    expireDate,
    DonatorName,
    DonatorPhoto,
    DonatorEmail,
  } = food;

  
  return (
    <>
      <tr className="bg-base-200">
        <td>{foodName}</td>
        <td>{quantity}</td>
        <td>{expireDate}</td>
        <td>{PickupLocation}</td>
        <td className="flex gap-4">
            <button  className="btn-info btn">Edit</button>
            <button onClick={() => deleteFood(_id)} className="btn-error btn">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ManageFood;
