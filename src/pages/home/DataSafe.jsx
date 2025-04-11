import { FaCheck } from 'react-icons/fa';
import shield from '../../Assets/icons/shield.png';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const DataSafe = () => {
  const scrollref = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(scrollref.current.children);

    items.forEach((item) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="my-32 grid md:grid-cols-2">
      <div className="bg-gradient-to-r from-[#a2b9a7]/50 to-[#317371]/50 py-20 md:p-32 md:py-44 lg:py-48">
        <motion.img
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mx-auto w-56"
          src={shield}
          alt=""
        />
      </div>

      <div className="bg-[#e6e9ed] p-12 py-18 text-lg lg:p-32 lg:py-44">
        <h1 className="text-5xl font-bold">Keeping your data safe</h1>
        <p className="my-5 text-lg">
          We prioritize your data privacy above all else. Our platform is designed with robust
          security measures to ensure that your personal information remains safe and protected at
          all times..
        </p>
        <ul className="space-y-2 pl-12" ref={scrollref}>
          <li className="item flex items-center gap-2">
            <FaCheck className="text-[#317371]" />
            Data security
          </li>
          <li className="item flex items-center gap-2">
            <FaCheck className="text-[#317371]" />
            Safe and protected
          </li>
          <li className="item flex items-center gap-2">
            <FaCheck className="text-[#317371]" />
            Transparent handling of your data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataSafe;
