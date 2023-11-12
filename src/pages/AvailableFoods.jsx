import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFood from './AvailableFood';

const AvailableFoods = () => {
    const foods = useLoaderData()
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-3xl font-bold my-12'>
                Available Foods
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
               {
                   foods.map((food) => <AvailableFood key={food._id} food={food}></AvailableFood>)
               }
            </div>
        </div>
    );
};

export default AvailableFoods;