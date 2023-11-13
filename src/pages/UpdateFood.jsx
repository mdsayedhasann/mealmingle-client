import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateFood = () => {
    const food = useLoaderData()
    const { _id,
        foodName,
        quantity,
        foodImage,
        PickupLocation,
        expireDate,
        DonatorName,
        DonatorPhoto,
        DonatorEmail,} = food

    return (
        <div className="flex flex-col items-center">
      <div className="text-2xl font-bold py-4">Update Product</div>
      <div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Food Name */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Name</label>
              <input
                type="text"
                name='foodName'
                defaultValue={foodName}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Image  */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Image URL</label>
              <input
                type="text"
                name='foodImage'
                defaultValue={foodImage}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Food Quantity */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Food Quantity</label>
              <input
                type="number"
                name='quantity'
                defaultValue={quantity}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Pickup Location */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Pickup Location</label>
              <input
                type="text"
                name='location'
                defaultValue={PickupLocation}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>

            {/* Expire Date */}
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="">Expire Date</label>
              <input
              name='expireDate'
                type="date"
                defaultValue={expireDate}
                className="input input-bordered input-sm max-w-2xl"
              />
            </div>
            <div></div>

          </div>
          <div className='flex justify-center items-center my-4'>
              <input type="submit" className='btn ' value="Update" />
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateFood;