import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Socials from "../../components/Shared/Socials";

const JoinUs = () => {
  return (
    <div className="bg-[#fff9f1] min-h-screen">

      {/* </NavBar> */}

      <div>

        {/*TODO: bg picture in this div*/}
        <div className='bg-[#785F54] min-h-96'>

        </div>

        {/* main sections start */}
        <div>

          {/* contact through email section */}
          <div className='max-w-screen-xl w-[94%] -mt-44 bg-gray-300 mx-auto grid md:grid-cols-2 p-8 rounded-lg '>

            <div className='my-auto ml-8'>

              <h2 className='text-4xl font-bold'>Contact Us To Join</h2>
              <div className='my-4 text-lg'>
                <p className='flex items-center gap-2'><MdCall className="text-[#785F54]"/> +01799886655</p>
                <p className='flex items-center gap-2'><IoIosMail className="text-[#785F54]"/> TickBook@gmail.com</p>
              </div>
              <Socials />

            </div>

            <div>

              <fieldset className="fieldset space-y-3">

                <input type="text" name='name' className="input w-full rounded-md" placeholder="Your Name" />

                <input type="email" name='email' className="input w-full rounded-md" placeholder="Your Email" />

                <input type="text" className="textarea w-full rounded-md" placeholder="Enter Your Message" />

                <button className="btn btn-neutral mt-4 rounded-md">Send Email</button>
              </fieldset>

            </div>


          </div>

          {/* map/location section*/}
          <div>

          </div>

          {/* team section */}
          <div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinUs;