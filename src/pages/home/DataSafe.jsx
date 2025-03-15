import { FaCheck } from "react-icons/fa";
import shield from '../../Assets/icons/shield.png'

const DataSafe = () => {
  return (
    <div className='grid md:grid-cols-2 my-32'>

      <div className='bg-gradient-to-r from-[#a2b9a7]/50 to-[#317371]/50 p-32 py-44 '>
        <img className='mx-auto w-56' src={shield} alt="" />
      </div>

      <div className='bg-[#e6e9ed] text-lg p-12 py-28 lg:p-32 lg:py-44'>
        <h1 className='text-5xl font-bold'>Keeping your data safe</h1>
        <p className='text-lg my-5'>We prioritize your data privacy above all else. Our platform is designed with robust security measures to ensure that your personal information remains safe and protected at all times..</p>
        <ul className='pl-12 space-y-2'>
          <li className='flex gap-2 items-center'>
            <FaCheck />
            Data security
          </li>
          <li className='flex gap-2 items-center'>
            <FaCheck />
            Safe and protected
          </li>
          <li className='flex gap-2 items-center'>
            <FaCheck />
            Transparent handling of your data
          </li>
        </ul>
      </div>

    </div>
  );
};

export default DataSafe;