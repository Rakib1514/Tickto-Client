import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Socials from "../../components/Shared/Socials";
import member from "../../Assets/joinus/Team/team.jpg"

import './joinus.css'


const JoinUs = () => {
  return (
    <div className="bg-[#fff9f1] min-h-screen">

      {/* </NavBar> */}

      <div>

        {/*TODO: bg picture in this div*/}
        <div className='hands min-h-[480px]'>

        </div>



        {/* main sections start */}
        <div>



          {/* contact through email section */}
          <div className='max-w-screen-xl w-[94%] -mt-44 bg-gray-300 mx-auto grid md:grid-cols-2 p-6 md:p-8 rounded-lg '>

            <div className='my-auto lg:ml-8'>

              <h2 className='text-3xl md:text-4xl font-bold'>Contact Us</h2>
              <p className="w-[78%] my-3">Want to be part of something exciting? Whether you're looking to join our team, partner with us, or collaborate on events, we'd love to hear from you!</p>
              <div className='my-4 text-lg md:flex gap-3'>
                <p className='flex items-center gap-1'><MdCall className="text-[#785F54]" /> +01799886655</p>
                <p className='flex items-center gap-1'><IoIosMail className="text-[#785F54]" /> TickBook@gmail.com</p>
              </div>
              <Socials />

            </div>

            <div>

              <fieldset className="fieldset space-y-3 mt-5 md:mt-0">

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
          <div className="max-w-screen-xl w-[94%] my-24 mx-auto">
            <h2 className="text-4xl font-bold">Our Technical Team</h2>
            <p className="w-[80%] my-5">Behind every great experience is a team of passionate individuals dedicated to making your life easy. At Tickto, our experts in technology, customer support, and event management work together to deliver a seamless platform for you. We believe in innovation, collaboration, and creating unforgettable experiences—one ticket at a time!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="rounded-lg">

                <img
                  className="rounded-lg"
                  // src={Mushfika} 
                  src={member}
                  alt="Mushfika" />

              </div>

              <div className="rounded-lg ">

                <img
                  className="rounded-lg"
                  // src={Rakibul} 
                  src={member}
                  alt="Rakibul" />

              </div>

              <div>

                <img
                  className="rounded-lg"
                  // src={Fariya} 
                  src={member}
                  alt="Fariya" />

              </div>

              <div>

                <img
                  className="rounded-lg"
                  // src={Minhaj} 
                  src={member}
                  alt="Minhaj" />

              </div>

              <div>

                <img
                  className="rounded-lg"
                  // src={Nure} 
                  src={member}
                  alt="Nure" />

              </div>

              <div>

                <img
                  className="rounded-lg"
                  // src={Akash} 
                  src={member}
                  alt="Akash" />

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinUs;