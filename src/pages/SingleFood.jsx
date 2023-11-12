import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const food = useLoaderData();
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
    <div className="">
        <div className="flex justify-center items-center py-24 bg-green-200">
            <h2 className="text-3xl font-bold">
                {
                    foodName
                }
            </h2>
        </div>

        <div className="max-w-7xl mx-auto">
            {/* Donor Information */}
            <h2 className="text-3xl font-bold py-4">
                Donor Information
            </h2>
            <div>
                <h3>
                    Donor Name: {DonatorName}
                </h3>
                <h3 className="py-1">
                    PickUp Location: {PickupLocation}
                </h3>
            </div>

            {/* Food Section */}
            <h2 className="text-3xl font-bold py-4 mt-7">
                Food Information
            </h2>
            <div className="flex gap-10">
                <div className="w-1/2 ">
                    <img className="" src={foodImage} alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold py-2">
                        Name: {foodName}
                    </h2>
                    <h2 className="text-lg font-bold py-2">
                        Available Quantity: {quantity}
                    </h2>
                    <h2 className="text-lg font-bold py-2">
                        Expired Date: {expireDate}
                    </h2>
                    <button className="btn my-5">
                        Request for this Food
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SingleFood;
