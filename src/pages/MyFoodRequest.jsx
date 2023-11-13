import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodRequest from './FoodRequest';
import { AuthContext } from '../Provider/AuthProvider';

const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const foodRequests = useLoaderData()
    const [myRequest, setMyRequest] = useState([])

    useEffect(() => {
        const filterMyFoodRequest = foodRequests.filter((myRequest) => myRequest.email === user?.email)
        setMyRequest(filterMyFoodRequest)
    },[])
    
    return (
        <div className="max-w-7xl mx-auto ">
        <div className="overflow-x-auto my-3">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Donator Name</th>
                <th>Donator Email</th>
              </tr>
            </thead>
            <tbody>
                {
                    myRequest.map((foodRequest) => <FoodRequest key={foodRequest._id} foodRequest={foodRequest}></FoodRequest> )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyFoodRequest;