import React from 'react';

const FoodRequest = ({foodRequest}) => {
    const {foodName, foodImage, donatorName, donatorEmail} = foodRequest
    return (
        <>
        <tr className="bg-base-200">
            <td><img src={foodImage} className='w-16' alt="" /></td>
            <td>{foodName}</td>
            <td>{donatorName}</td>
            <td>{donatorEmail}</td>
        </tr>
        </>
    );
};

export default FoodRequest;