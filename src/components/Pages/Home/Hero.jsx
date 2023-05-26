import React from 'react';
import bg from '../../../assets/bg.jpeg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='h-screen w-full' style={{backgroundImage: `url(${bg})`}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className='bg-black bg-opacity-50 h-screen w-full text-white text-center flex justify-center items-center'>
               <div>
                <p className='text-2xl mt-2 font-extrabold'>Welcome to</p>
               <h2 className=' text-5xl md:text-7xl font-extrabold text-primary mt-3'>Americana</h2>
               <p className=' md:font-semibold md:text-xl w-3/4 md:w-2/4 text-center mx-auto mt-5'>Here you will find a collection of all of our American recipes that we have created. From an all day beef stew to our  sausage jambalaya recipe, and even a classic carrot cake recipe, there is somethings for everyone to love.</p>
               <div className='mt-16 space-y-6 md:flex justify-center md:space-y-0 md:space-x-8 '>
               <div><button className='hBtn'>Chef's Menu</button></div>
               <div><button className='hBtn'>Reservation</button></div>
               </div>
               </div>

            </div>
        </div>
    );
};

export default Hero;