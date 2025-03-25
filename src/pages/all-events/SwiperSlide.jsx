import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import SmallCard from "../../components/Shared/SmallCard"

const EventSwiperSlide = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    // <Link to={`/event/${item._id}`}>
    //   <motion.div
    //     className="relative  cursor-pointer"
    //     onHoverStart={() => setHovered(true)}
    //     onHoverEnd={() => setHovered(false)}
    //   >
    //     <img
    //       src={item?.thumbnail}
    //       alt=""
    //       className="rounded-lg w-full h-52 object-cover"
    //     />

    //     <div className="absolute bottom-0 left-0 bg-white w-full opacity-40 backdrop-blur-md text-black font-semibold p-2">
    //       <AnimatePresence mode="wait">
    //         {hovered ? (
    //           <motion.p
    //             key="full"
    //             initial={{ opacity: 0, y: 10 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             exit={{ opacity: 0, y: -10 }}
    //             transition={{ duration: 0.3 }}
    //           >
    //             {item.title}
    //           </motion.p>
    //         ) : (
    //           <motion.p
    //             key="split"
    //             initial={{ opacity: 0, y: 10 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             exit={{ opacity: 0, y: -10 }}
    //             transition={{ duration: 0.3 }}
    //           >
    //             {item?.title.split(":")[0]}
    //           </motion.p>
    //         )}
    //       </AnimatePresence>
    //     </div>
    //   </motion.div>
    // </Link>
    <SmallCard event={item} height={'h-48'} titletext={'text-xl font-semibold'} />
  );
};

export default EventSwiperSlide;
