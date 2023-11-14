import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Request = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const {_id, foodName, quantity, foodImage, PickupLocation, expireDate, DonatorName, DonatorPhoto, DonatorEmail,
  } = food;


  const handleFoodRequest = e => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value

      const request = {
        foodName: foodName,
        foodImage: foodImage,
        donatorName: DonatorName,
        donatorEmail: DonatorEmail,
        name: name,
        email: email
    }
    console.log(request);

    fetch('https://mealmingleserverr.vercel.app/foodRequest', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            icon: "success",
            title: "Food Request Sent",
            timer: 1500
          });
    })


  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-2xl font-bold py-4">Food Request</div>
      <div>
        <form onSubmit={handleFoodRequest}>
          <div className="grid grid-cols-2 gap-4">
            {/* Food Name */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Name</label>
              <input
                type="text"
                disabled
                defaultValue={foodName}
                name="foodName"
                placeholder="Food Name"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Image  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Image URL</label>
              <input
                type="text"
                disabled
                defaultValue={foodImage}
                name="foodImage"
                placeholder="Food Image"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            <div className="my-4">
              <h2 className="text-xl font-bold">Donator Information</h2>
            </div>
            <div></div>
            {/* Name  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Donator Name</label>
              <input
                type="text"
                disabled
                defaultValue={DonatorName}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>
            {/* Email  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Donator Email</label>
              <input
                type="text"
                disabled
                defaultValue={DonatorEmail}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>



           
          <div className="my-4">
            <h2 className="text-xl font-bold">Customer Information</h2>
          </div>
            <div></div>
            {/* Customer Name  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Customer Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                // placeholder={user.displayName}
                name="name"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>
            {/* Customer Email  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Customer Email</label>
              <input
                type="text"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            <div></div>
          </div>


          <div></div>
          <div className="flex justify-center items-center my-4">
            <input type="submit" className="btn " value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Request;
