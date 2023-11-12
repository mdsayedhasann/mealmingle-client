import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
    const {user} = useContext(AuthContext)

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expireDate = form.expireDate.value;

        const name = user?.displayName;
        const photoUrl = user?.photoURL;
        const email = user?.email;

        const addProduct = {
            foodName: foodName,
            foodImage: foodImage,
            quantity: quantity,
            PickupLocation: location,
            expireDate: expireDate,
            DonatorName: name,
            DonatorPhoto: photoUrl,
            DonatorEmail: email
        }
        console.log(addProduct);

        // fetch('http://localhost:5000/foods')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
        fetch('http://localhost:5000/foods', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(addProduct) 
        })
        .then(res => {
          res.json()
        })
        .then(data => {
          Swal.fire({
            icon: "success",
            title: "Food Added Successfully",
            timer: 1500
          });
          form.reset()
            console.log(data)
        })

    }
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold py-4">Add New Product</div>
      <div>
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-2 gap-4">
            {/* Food Name */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Name</label>
              <input
                type="text"
                name='foodName'
                placeholder="Food Name"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Image  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Image URL</label>
              <input
                type="text"
                name='foodImage'
                placeholder="Food Image"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Quantity */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Quantity</label>
              <input
                type="number"
                name='quantity'
                placeholder="Food Quantity"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Pickup Location */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Pickup Location</label>
              <input
                type="text"
                name='location'
                placeholder="Pickup Location"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Expire Date */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Expire Date</label>
              <input
              name='expireDate'
                type="date"
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>
            <div></div>

          </div>
          <div className='flex justify-center items-center my-4'>
              <input type="submit" className='btn ' value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
