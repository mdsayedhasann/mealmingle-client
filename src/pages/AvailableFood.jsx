import React from "react";
import { Link } from "react-router-dom";

const AvailableFood = ({ food }) => {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[240px]" src={foodImage} alt={foodName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-secondary">Available</div>
        </h2>

        <div className="flex justify-between py-2 items-center">
          <div className="card-actions">
            <div className="badge badge-outline">Expire: {expireDate}</div>
            {/* <div className="badge badge-outline outline-green-500 text-green-500">
              Available
            </div> */}
          </div>

          <div className="">
            <Link to={`/singleFood/${_id}`}>
            <button className="bg-gradient-to-r from-[#3CC0AD] to-[#40DC9A] py-1 px-3 rounded-md ">View Details</button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="">
            <img className="w-10 rounded-full" src={DonatorPhoto} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg">{DonatorName}</h3>
            <p className="my-2">Pickup From: {PickupLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
