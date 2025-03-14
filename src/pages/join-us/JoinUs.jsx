import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Socials from "../../components/Shared/Socials";
import member2 from "../../Assets/joinus/Team/member.jpg"
import rakibul from '../../Assets/joinus/Team/rakib.png'
import sana from '../../Assets/joinus/Team/sana.jpeg'
import akash from '../../Assets/joinus/Team/akash.jpg'
import arif from '../../Assets/joinus/Team/arif.jpg'
import oni from '../../Assets/joinus/Team/Oni.jpg'

import './joinus.css'


const JoinUs = () => {

  const team = [
    { name: "Mst. Musfika Naznin Oni", email: "musfikanoni@gmail.com", img: oni },
    { name: "Md Rakibul Islam", email: "rkrakib1514@outlook.com", img: rakibul },
    { name: "Fariya Khan Sana", email: "fariya.webdev@gmail.com", img: sana },
    { name: "Minhaj Uddin Arif", email: "arifk62901@gmail.com", img: arif },
    { name: "Md. Nure Alam", email: "nurealam151068@gmail.com", img: member2 },
    { name: "Abdul Mazid Akash", email: "akashabdulmazid@gmail.com", img: akash },
  ]

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
          <div className='max-w-screen-xl w-[94%] -mt-64 md:-mt-48 mx-auto'>
            {/*  border-3 border-[#8a6e62] rounded-lg p-2 */}

            <div className="grid md:grid-cols-2 p-6 md:p-8 bg-gray-300 rounded-lg  ">

              <div className='my-auto lg:ml-8'>

                <h2 className='text-3xl md:text-4xl font-bold'>Contact Us</h2>
                <p className="md:w-[78%] my-3">Want to be part of something exciting? Whether you're looking to join our team, partner with us, or collaborate on events, we'd love to hear from you!</p>
                <div className='my-4 text-lg md:flex gap-3'>
                  <p className='flex items-center gap-1'><MdCall className="text-[#317371]" /> +01799886655</p>
                  <p className='flex items-center gap-1'><IoIosMail className="text-[#317371]" /> TickBook@gmail.com</p>
                </div>
                <Socials />

              </div>

              <div>

                <fieldset className="fieldset space-y-3 mt-5 md:mt-0">

                  <input type="text" name='name' className="input w-full rounded-md" placeholder="Your Name" />

                  <input type="email" name='email' className="input w-full rounded-md" placeholder="Your Email" />

                  <input type="text" className="textarea w-full rounded-md" placeholder="Enter Your Message" />

                  <button className="btn bg-[#317371] text-white mt-4 rounded-md">Send Email</button>
                </fieldset>

              </div>

            </div>


          </div>


          {/* map/location section*/}
          <div className="max-w-screen-xl w-[94%] mx-auto bg-gray-300 min-h-96 my-20 rounded-lg relative overflow-hidden">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.476727509522!2d90.39052097519573!3d23.763933778667314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf58e31de36b%3A0xd61b34a16cfecb77!2sFarmgate%2C%20Dhaka%201215!5e0!3m2!1sen!2sbd!4v1710012345678!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>


          {/* team section */}
          <div className="max-w-screen-xl w-[94%] my-24 mx-auto">
            <h2 className="text-4xl font-bold">Our Technical Team</h2>
            <p className="md:w-[80%] my-5">Behind every great experience is a team of passionate individuals dedicated to making your life easy. At Tickto, our experts in technology, customer support, and event management work together to deliver a seamless platform for you. We believe in innovation, collaboration, and creating unforgettable experiences—one ticket at a time!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              {
                team.map((member, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden group max-h-80 bg-[#8a6e62] w-fit max-w-[440px] mx-auto">
                    {/* Image with dark overlay on hover */}
                    <img
                      className="rounded-lg transition-all h-full w-full duration-300 ease-in-out group-hover:brightness-50"
                      src={member.img}
                      alt={member.name}
                    />

                    {/* Name & Email - Appears on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm">{member.email}</p>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinUs;