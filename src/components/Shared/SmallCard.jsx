import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaStar } from "react-icons/fa";
import theater from "../../Assets/Banner/img4.jpeg"

const SmallCard = ({ event }) => {
    const { title, image_url, description, category, rating, date } = event;
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
            gsap.to(contentEl, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }); // Show description & date
        });

        // Mouse Leave Animation
        card.addEventListener("mouseleave", () => {
            gsap.to(titleEl, { y: 0, duration: 0.3, ease: "power2.inOut" }); // Move title back
            gsap.to(contentEl, { opacity: 0, y: 40, duration: 0.5, ease: "power2.inOut" }); // Hide description & date
        });

        // Cleanup event listeners
        return () => {
            card.removeEventListener("mouseenter", () => { });
            card.removeEventListener("mouseleave", () => { });
        };
    }, []);

    return (
        <div ref={cardRef} className="relative rounded-2xl overflow-hidden group cursor-pointer">
            {/* Image with hover dark effect */}
            <div className="w-full h-72 relative">
                <img
                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-50"
                    src={image_url || theater}
                    alt={title}
                />

                <div className="absolute top-3 right-3">
                    <FaStar className='text-lg mx-auto text-amber-200' />
                    <span className="text-white font-medium">{rating}</span>
                </div>

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-black/0 to-black/90"></div>

                {/* Title (Always Visible) */}
                <div ref={titleRef} className="absolute bottom-5 left-3 text-white text-2xl font-bold">
                    {title} <span className="text-sm font-medium">({category})</span>
                </div>

                {/* Description & Date (Initially Hidden) */}
                <div ref={contentRef} className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm py-1">{description}</p>
                    <p>Tickets available till <span className="text-green-400">{date}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
