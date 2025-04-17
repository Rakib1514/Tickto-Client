import React, { useEffect, useState } from "react";
import bgImage from '../../Assets/Modal/eidCard.jpg';
import { IoMdTime } from "react-icons/io";

const EidFeature = () => {
  const [showModal, setShowModal] = useState(true);
  const [countdown, setCountdown] = useState({
    days: 60,
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
        className="bg-blue-500 hidden text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className=" fixed -mt-14 inset-0 w-[96%] mx-auto flex justify-center items-center z-100">
          <div
            className="hidden md:block rounded-xl shadow-lg w-96 relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '450px',
              width: '700px',
              overflow: 'hidden'
            }}
          >
            <div className="w-1/2 my-14 md:my-26 px-4 text-gray-600 text-center">

              <h4 className="mb-4 font-bold md:text-2xl text-center">✨Eid Mubarak✨</h4>
              <p className="max-sm:text-sm md:font-medium">Eid-ul-Adha is just around the corner! 🎉 Grab your tickets now and enjoy a relaxing Eid getaway. <br /> Enjoy special discounts on all pre-bookings!</p>
              <div className="text-center my-6 font-mono text-2xl font-extrabold  space-y-1 text-teal-700">
                <div>
                  <span className=" px-2 py-1 rounded">{countdown.days} days</span>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <IoMdTime />
                  <span className="">{countdown.hours}h</span>
                  <span className="">{countdown.minutes}m</span>
                  <span className="">{countdown.seconds}s</span>
                </div>
              </div>
              <button
                className="absolute top-3 right-5 text-white hover:text-teal-700 text-2xl font-bold"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default EidFeature;
