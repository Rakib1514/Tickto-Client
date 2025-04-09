import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaStar } from "react-icons/fa";
import theater from "../../Assets/Banner/img3.jpg";
import { Link } from "react-router";

const SmallCard = ({ event, height, titletext, space }) => {
  const { title, image_url, description, rating, date, _id } = event;
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const titleEl = titleRef.current;
    const contentEl = contentRef.current;

    // Set initial states
    gsap.set(contentEl, { opacity: 0, y: 40 });
    gsap.set(titleEl, { y: 0 });

    // Hover Animation
    card.addEventListener("mouseenter", () => {
      gsap.to(titleEl, { y: -80, duration: 0.3, ease: "power2.out" }); // Move title up
      gsap.to(contentEl, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }); // Show description & date
    });

    // Mouse Leave Animation
    card.addEventListener("mouseleave", () => {
      gsap.to(titleEl, { y: 0, duration: 0.3, ease: "power2.inOut" }); // Move title back
      gsap.to(contentEl, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power2.inOut",
      }); // Hide description & date
    });

    // Cleanup event listeners
    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden group cursor-pointer"
    >
      {/* Image with hover dark effect */}
      <Link to={`/event/${_id}`}>
        <div className={`w-full relative ${height} text-start`}>
          <img
            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
            src={image_url || theater}
            alt={title}
          />

          <div className="absolute top-3 right-3">
            <FaStar className="text-lg mx-auto text-amber-200" />
            <span className="text-white font-medium">{rating}</span>
          </div>

          {/* Dark Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-black/90"></div>

          {/* Title (Always Visible) */}
          <div
            ref={titleRef}
            className={`absolute bottom-3 left-2 ${space} right-[2px] text-white ${titletext}`}
          >
            {title}
          </div>

          {/* Description & Date (Initially Hidden) */}
          <div
            ref={contentRef}
            className={`absolute bottom-3 left-2 ${space}  text-white`}
          >
            <p className="text-sm py-1">
              {description ||
                "description here description here description here description here description here"}
            </p>
            <p className="text-base ">
              Tickets available till{" "}
              <span className="text-green-400">{date || "30-2-2026"}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SmallCard;
