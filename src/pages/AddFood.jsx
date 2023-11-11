import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddFood = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold py-4">Add New Product</div>
      <div>
        <form action="">
          <div className="grid grid-cols-2 gap-4">
            {/* Food Name */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Name</label>
              <input
                type="text"
                placeholder="Food Name"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Image  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Image URL</label>
              <input
                type="text"
                placeholder="Food Image"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Quantity */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Quantity</label>
              <input
                type="number"
                placeholder="Food Quantity"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Pickup Location */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Pickup Location</label>
              <input
                type="text"
                placeholder="Pickup Location"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Expire Date */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Expire Date</label>
              <input
                type="date"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
