import React, { useEffect, useState } from "react";
import bgImage from '../../Assets/Modal/2.png';

const EidFeature = () => {
    const [showModal, setShowModal] = useState(true);
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    // Target Date - 14 April
    const targetDate = new Date("2025-04-14T00:00:00");
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate - now;
  
        if (difference <= 0) {
          clearInterval(interval);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        setCountdown({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="">
      {/* Modal Open Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed -mt-40 inset-0  flex justify-center items-center z-10">
          <div
            className="p-6 rounded-xl shadow-lg w-96 relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '350px',
              overflow: 'hidden'
            }}
          >
            <p className="mb-4 font-bold text-2xl text-center text-lime-500">Happy Bangla New Year</p>
            <div className="text-center font-mono text-3xl font-extrabold  space-y-1">
              <div><span className="text-gray-400">🗓 </span>
              <span className="text-white px-2 py-1 rounded bg-red-600">{countdown.days} days</span></div>
              <div className="flex mt-5 gap-3 items-center justify-center">⏰
                <span className="bg-red-600 text-white rounded px-2 py-1">{countdown.hours}h</span> 
                <span className="bg-red-600 text-white rounded px-2 py-1">{countdown.minutes}m</span> 
                <span className="bg-red-600 text-white rounded px-2 py-1">{countdown.seconds}s</span></div>
            </div>
      
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400 text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EidFeature;
