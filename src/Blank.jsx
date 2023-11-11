import React from 'react';
import { Link } from 'react-router-dom';

const Blank = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h2 className='text-[#40D99C] text-9xl'>
                404
            </h2>
            <h2 className='text-black text-xl'>
                Opps, Page Not Found
            </h2>
            <Link to='/'>
                <button className='btn bg-[#40D99C] my-4'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Blank;