import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ManageFood from "./ManageFood";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const foods = useLoaderData();
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    const filterFoods = foods.filter(
      (food) => food.DonatorEmail === user.email
    );
    setMyFoods(filterFoods);
  }, [foods, user]);

  const deleteFood = (_id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/foods/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
               }
               const remaining = myFoods.filter(foods => foods._id !== _id)
               setMyFoods(remaining)
            })
         
        }
      });
  }

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="overflow-x-auto my-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Stock</th>
              <th>Expire Date</th>
              <th>Pickup Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myFoods.map((food) => (
              <ManageFood key={food._id} food={food} deleteFood={deleteFood}></ManageFood>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
