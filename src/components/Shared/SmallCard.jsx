import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import theater from "../../Assets/covers/event-bg2.jpg";
import { Link } from "react-router";

const SmallCard = ({ event, height, titletext, space }) => {
  const { title, image_url, description, rating, date, _id } = event;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative cursor-pointer overflow-hidden rounded-lg"
    >
      <Link to={`/event/${_id}`}>
        <div className={`relative w-full ${height} text-start`}>
          {/* Background Image */}
          <motion.img
            src={image_url || theater}
            alt={title}
            className="h-full w-full object-cover"
            variants={{
              rest: { filter: "brightness(1)" },
              hover: { filter: "brightness(0.5)" },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Rating Top Right */}
          <div className="absolute top-3 right-3 text-white text-center">
            <FaStar className="mx-auto text-lg text-amber-200" />
            <span className="font-medium">{rating}</span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-b from-black/0 to-black/90"></div>

          {/* Title (Always Visible) */}
          <motion.div
            className={`absolute bottom-3 left-2 ${space} right-[2px] text-white ${titletext}`}
            variants={{
              rest: { y: 0 },
              hover: { y: -80 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {title}
          </motion.div>

          {/* Description & Date (Revealed on Hover) */}
          <motion.div
            className={`absolute bottom-3 left-2 ${space} text-white`}
            variants={{
              rest: { opacity: 0, y: 40 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="py-1 text-sm">
              {description || "description here description here description here"}
            </p>
            <p className="text-base">
              Tickets available till{" "}
              <span className="text-green-400">{date || "30-2-2026"}</span>
            </p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SmallCard;
