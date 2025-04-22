import { motion } from "framer-motion";
import "./banner.css";
import { useState } from "react";
import { Link } from "react-router";

const LgBanner = () => {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex);
  };

  return (
    <div className="relative h-[60vh] w-full overflow-x-hidden mt-26">
      <motion.div
        onClick={() => handlePanelClick(1)}
        className="banner__panel flex left-0 z-30 bg-[url('https://i.ibb.co.com/23p3fXB2/concert.jpg')]"
        animate={{ x: activePanel >= 2 ? "-40vw" : "0vw" }}
        transition={{ ease: "circInOut" }}
      >
        <div className="flex flex-col justify-end ml-10 mb-10">
          <div className=" mt-4">
            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r to-[#6482FE] from-[#FBBFEB] w-fit">
              Skip the Line
            </p>

            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r from-[#6482FE] to-[#FBBFEB] w-fit translate-x-20">
              Join the Vibe
            </p>
          </div>
          <Link to="/sd">
            <button className="group px-4 py-2 bg-white/80 mt-4 w-full font-bold cursor-pointer text-black rounded-xs">
              Concerts, festivals, shows & more —{" "}
              <span className="bg-primary py-2 px-1 text-white inline-block transition-transform duration-300 ease-in-out group-hover:scale-110">
                book now
              </span>
              , vibe later
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(2)}
        className="banner__panel flex left-[20vw] z-20 bg-[url('https://i.ibb.co.com/39MTMrk0/Amusment-park.jpg')]"
        animate={{
          x: activePanel >= 3 ? "-40vw" : activePanel === 2 ? "0vw" : "0vw",
        }}
        transition={{ ease: "circInOut" }}
      >
        <div className="flex flex-col justify-end ml-10 mb-10">
          <div className=" mt-4">
            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r to-[#6482FE] from-[#FBBFEB] w-fit">
              Your Ticket to
            </p>
            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r from-[#6482FE] to-[#FBBFEB] w-fit translate-x-20">
              Non-Stop Thrills
            </p>
          </div>
          <Link to="/sd">
            <button className="group px-4 py-2 bg-white/80 mt-4 w-full font-bold cursor-pointer text-black rounded-xs">
              From wild rides to sweet memories —{" "}
              <span className="bg-primary py-2 px-1 text-white inline-block transition-transform duration-300 ease-in-out group-hover:scale-110">
                grab your ticket
              </span>{" "}
              and let the fun begin!
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        onClick={() => handlePanelClick(3)}
        className="banner__panel flex left-[40vw] z-10 bg-[url('https://i.ibb.co.com/8LSSn9kc/4615-1.jpg')]"
      >
        <div className="flex flex-col justify-end ml-10 mb-10">
          <div className=" mt-4">
            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r to-[#6482FE] from-[#FBBFEB] w-fit">
              Your Front Row
            </p>

            <p className="text-4xl font-bold text-black p-2 bg-gradient-to-r from-[#6482FE] to-[#FBBFEB] w-fit translate-x-20">
              Ticket to Wonder
            </p>
          </div>
          <Link to="/sd">
            <button className="group px-4 py-2 bg-white/80 mt-4 w-full font-bold cursor-pointer text-black rounded-xs">
              <span className="bg-primary py-2 px-1 text-white inline-block transition-transform duration-300 ease-in-out group-hover:scale-110">
                Discover
              </span>{" "}
              the thrill of live theater — be more than just a spectator.
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LgBanner;
