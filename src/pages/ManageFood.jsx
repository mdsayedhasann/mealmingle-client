import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
            <Link to={`/updateFood/${_id}`}>
            <button  className="btn-info btn">Edit</button>
            </Link>
            <button onClick={() => deleteFood(_id)} className="btn-error btn">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ManageFood;
