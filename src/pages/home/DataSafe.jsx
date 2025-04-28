import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import shield from "../../Assets/icons/antivirus.png";

const DataSafe = () => {
  return (
    <div className="my-32 grid md:grid-cols-2">
      <div className="bg-gradient-to-r from-primary/20 to-[#78a6c4]/60 py-20 md:p-32 md:py-44 lg:py-48">
        <motion.img
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-auto w-56"
          src={shield}
          alt=""
        />
      </div>

      <div className="bg-secondary p-12 py-18 text-lg lg:p-32 lg:py-44">
        <h1 className="text-5xl font-bold">Keeping your data safe</h1>
        <p className="my-5 text-lg">
          We prioritize your data privacy above all else. Our platform is
          designed with robust security measures to ensure that your personal
          information remains safe and protected at all times..
        </p>
        <ul className="space-y-2 pl-12">
          <li className="item flex items-center gap-2">
            <FaCheck className="text-primary" />
            Data security
          </li>
          <li className="item flex items-center gap-2">
            <FaCheck className="text-primary" />
            Safe and protected
          </li>
          <li className="item flex items-center gap-2">
            <FaCheck className="text-primary" />
            Transparent handling of your data
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataSafe;
