import React from 'react';
import { motion } from 'framer-motion';
import { FaBus } from 'react-icons/fa';
import { FaPeopleRoof } from 'react-icons/fa6';
import { GiCommercialAirplane } from "react-icons/gi";
import { LuTrainTrack } from "react-icons/lu";
import { RiMovie2AiLine } from "react-icons/ri";
import { GiDrumKit } from "react-icons/gi";

const IntroCard = () => {
    const data = [
        {
            id: 1,
            image: <GiCommercialAirplane />,
            title: 'Air',
            description: 'Plan your next flight with ease. Domestic air travel made simple, secure, and fast.',
        },
        {
            id: 2,
            image: <LuTrainTrack />,
            title: 'Train',
            description: 'Access all Bangladesh Railway tickets in one place. Easy booking, anytime, anywhere.',
        },
        {
            id: 3,
            image: <FaBus />,
            title: 'Bus',
            description: 'Book from 100+ trusted operators. Say goodbye to long lines and get your seat in just a few clicks.',
        },
        {
            id: 4,
            image: <GiDrumKit />,
            title: 'Concert',
            description: 'Skip the wait, unlock the fun. Purchase tickets online instantly and save your energy for the concert.',
        },
        {
            id: 5,
            image: <FaPeopleRoof />,
            title: 'Social Gathering',
            description: 'Stay connected with trending gatherings, workshops, and community-driven programs.',
        },
        {
            id: 6,
            image: <RiMovie2AiLine />,
            title: 'Movie',
            description: 'Catch the thrill on the big screen! Book hot releases and seat yourself front and center.',
        },
    ]


    return (
        <div className='max-w-screen-2xl mx-auto my-44'>
            <div className='text-center'>
                <h3 className='text-2xl font-medium text-[#78a6c4]'>We got everything you need</h3>
                <h1 className='text-5xl font-bold my-2'>Introducing you to TickTo, <span className='text-[#78a6c4]'>make life easy</span></h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    data.map((item, index) => (
                        <motion.div
                        whileHover={{ y: -14, scale: 1.04}}
                        key={index} >
                            <div className=' p-6 rounded-lg shadow-xl m-4 bg-[#f7f8fa] hover:bg-[#edf5ff] transition duration-400'>
                                <div className='text-5xl text-[#274f7a] mb-4'>
                                    {item.image}
                                </div>
                                <h3 className='text-2xl my-4 font-semibold'>{item.title} Tickets</h3>
                                <p className='text-gray-600 text-lg'>{item.description}</p>
                            </div>

                        </motion.div>
                    ))
                }

            </div>
        </div>
    );
};

export default IntroCard;