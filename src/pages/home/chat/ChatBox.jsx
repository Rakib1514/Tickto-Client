
import React, { useState } from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
import { motion } from 'framer-motion';
import { GrClose } from "react-icons/gr";
import { GrSend } from "react-icons/gr";
import "../../Auth/auth.css"
import chatboxbg from '../../../Assets/Modal/chat-bg.jpeg'

const ChatBox = () => {

    const [ishidden, setIsHidden] = useState(true)

    return (
        <div>
            <motion.button
                animate={{ y: -10, y: 0, y: -10 }}
                transition={{ duration: 1, repeat: Infinity }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                onClick={() => setIsHidden(!ishidden)} className={`bg-primary h-14 w-14 fixed bottom-6 right-6 rounded-full z-100 flex items-center justify-center ${ishidden ? '' : 'hidden'}`}>
                <LuMessageCircleMore className='text-white text-xl' />
            </motion.button>

            <div
            // style={{backgroundImage: `url("${chatboxbg}")`, backgroundSize: 'cover'}}
            className={`fixed bottom-0 right-2 md:right-5 z-[101] transition-transform duration-300 shadow-2xl rounded-lg ${ishidden ? 'translate-y-full' : '-translate-y-2'}`}>
                <div className=' border border-gray-300 blur-b bg-transparent backdrop-blur-[2px] w-72 md:w-96 h-[480px] rounded-lg shadow-lg z-100'>
                    <div className='text-[#78a6c4] h-14 rounded-t-lg flex items-center justify-between px-4'>
                        <h1 className='my-auto text-lg font-semibold'>Help Center</h1>
                        <button onClick={() => setIsHidden(!ishidden)} className='text-white border rounded-full p-1'><GrClose /></button>
                    </div>
                    <hr className='text-[#78a6c4]/60'/>
                    <div className='p-3'>
                        {/* Chat messages will go here */}
                        <div className=''>

                        </div>

                        <form className='flex absolute bottom-2 w-[94%] mx-auto gap-2'>
                            <input type="text" className=' input  rounded-full' />
                            <button><GrSend className='text-2xl text-[#78a6c4]'/></button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChatBox;