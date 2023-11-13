import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-7 '>
            <div className='flex justify-between items-center gap-5'>
            <div className='flex-1 flex'>
                <img className='rounded-md rounded-tl-[250px] rounded-br-[250px]' src="https://i.ibb.co/J29ndJg/image.png" alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-right font-bold text-3xl py-3'>About Meal Mingle</h2>
                <p className='text-right'>
                Since 1993, MealMingle has been a culinary beacon, uniting people through delectable dishes. Our commitment to crafting memorable dining experiences is at the core of our journey. From classic comforts to innovative creations, we cater to diverse palates. MealMingle isn't just a dining spot; it's a celebration of flavors, cultures, and shared moments. Our team of passionate chefs and food enthusiasts works tirelessly to deliver excellence. As we continue to grow, our dedication to quality, sustainability, and community remains steadfast. Join us on this flavorful adventure, creating lasting connections, one delightful meal at a time. Welcome to MealMingle.
                </p>
            </div>
        </div>
        </div>
    );
};

export default About;