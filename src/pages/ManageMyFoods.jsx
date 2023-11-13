import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ManageFood from "./ManageFood";

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
              <ManageFood key={food._id} food={food}></ManageFood>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
