import { IoIosMail } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import Socials from '../../components/Shared/Socials';
import member2 from '../../Assets/joinus/Team/member.jpg';
import rakibul from '../../Assets/joinus/Team/rakib.png';
import sana from '../../Assets/joinus/Team/sana.jpeg';
import akash from '../../Assets/joinus/Team/akash.jpg';
import arif from '../../Assets/joinus/Team/arif.jpg';
import oni from '../../Assets/joinus/Team/mushfika.jpg';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import './joinus.css';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const JoinUs = () => {
  const team = [
    {
      name: 'Mst. Musfika Naznin Oni',
      email: 'musfikanoni@gmail.com',
      img: oni,
      linkedIn: 'https://www.linkedin.com/in/musfikaoni',
      github: 'https://github.com/musfikanoni',
      facebook: 'https://www.facebook.com/fariyakhansana',
    },
    {
      name: 'Md Rakibul Islam',
      email: 'rkrakib1514@outlook.com',
      img: rakibul,
      linkedIn: 'https://www.linkedin.com/in/rakib1514/',
      github: 'https://github.com/Rakib1514',
      facebook: 'https://www.facebook.com/rakib1413/',
    },
    {
      name: 'Fariya Khan Sana',
      email: 'fariya.webdev@gmail.com',
      img: sana,
      linkedIn: 'https://www.linkedin.com/in/fariya-khan-sana',
      github: 'https://github.com/Fariya-Khan-Web',
      facebook: 'https://www.facebook.com/fariyakhansana',
    },
    {
      name: 'Minhaj Uddin Arif',
      email: 'arifk62901@gmail.com',
      img: member2,
      linkedIn: 'https://www.linkedin.com/in/minhaj-uddin-arif-4321b0258/',
      github: 'https://github.com/minhaj-uddin-arif-23',
      facebook: 'https://www.facebook.com/fariyakhansana',
    },

    {
      name: 'Abdul Mazid Akash',
      email: 'akashabdulmazid@gmail.com',
      img: akash,
      linkedIn: 'https://www.linkedin.com/in/abdulmazidakash/',
      github: 'https://github.com/abdulmazidakash',
      facebook: 'https://www.facebook.com/akashabdulmazid/',
    },
  ];

  const scrollRef = useRef();

  useGSAP(() => {
    gsap.from('.stagger-box', {
      opacity: 0,
      y: 50,
      stagger: 0.6, // Each card appears with 0.3s delay
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 98%',
        end: 'top 30%',
        toggleActions: 'play none none none',
        scrub: true,
      },
    }),
      gsap.from('.fade-up', {
        opacity: 0,
        y: 50,
        duration: 1,
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#fff9f1]">
      <div>
        {/*TODO: bg picture in this div*/}
        <div className="hands min-h-[480px]"></div>

        {/* main sections start */}
        <div>
          {/* contact through email section */}
          <div className="fade-up mx-auto -mt-64 w-[94%] max-w-screen-xl rounded-lg bg-white text-white md:-mt-48">
            {/*  border-3 border-[#8a6e62] rounded-lg p-2 */}

            <div className="grid rounded-lg bg-[#5a5a5a]/55 p-6 md:grid-cols-2 md:p-8">
              <div className="my-auto lg:ml-8">
                <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
                <p className="my-3 md:w-[78%]">
                  Want to be part of something exciting? Whether you're looking to join our team,
                  partner with us, or collaborate on events, we'd love to hear from you!
                </p>
                <div className="my-4 gap-3 text-lg md:flex">
                  <p className="flex items-center gap-1">
                    <MdCall className="text-[#317371]" /> +01799886655
                  </p>
                  <p className="flex items-center gap-1">
                    <IoIosMail className="text-[#317371]" /> TickBook@gmail.com
                  </p>
                </div>
                <Socials textcolor={'text-[#5a5a5a]'} />
              </div>

              <div>
                <fieldset className="fieldset mt-5 space-y-3 md:mt-0">
                  <input
                    type="text"
                    name="name"
                    className="input w-full rounded-md"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    name="email"
                    className="input w-full rounded-md"
                    placeholder="Your Email"
                  />

                  <input
                    type="text"
                    className="textarea w-full rounded-md"
                    placeholder="Enter Your Message"
                  />

                  <button className="btn mt-4 rounded-md border-none bg-gradient-to-br from-[#a2b9a7]/90 to-[#317371]/90 text-white">
                    Send Email
                  </button>
                </fieldset>
              </div>
            </div>
          </div>

          {/* map/location section*/}
          <div className="fade-up relative mx-auto my-20 min-h-96 w-[94%] max-w-screen-xl overflow-hidden rounded-lg bg-gray-300">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.476727509522!2d90.39052097519573!3d23.763933778667314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf58e31de36b%3A0xd61b34a16cfecb77!2sFarmgate%2C%20Dhaka%201215!5e0!3m2!1sen!2sbd!4v1710012345678!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* team section */}
          <div className="mx-auto mt-24 w-[94%] max-w-screen-xl pb-28">
            <h2 className="text-4xl font-bold">Our Technical Team</h2>
            <p className="py-7 text-lg md:w-[80%]">
              Behind every great experience is a team of passionate individuals dedicated to making
              your life easy. At Tickto, our experts in technology, customer support, and event
              management work together to deliver a seamless platform for you. We believe in
              innovation, collaboration, and creating unforgettable experiences—one ticket at a
              time!
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:justify-center" ref={scrollRef}>
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`group stagger-box team-section relative mx-auto max-h-80 w-fit max-w-[440px] overflow-hidden rounded-lg bg-[#5a5a5a]/80 lg:col-span-2 `}
                >
                  {/* Image with dark overlay on hover */}
                  <img
                    className="h-full w-full rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-50"
                    src={member.img}
                    alt={member.name}
                  />

                  {/* Name & Email - Appears on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.email}</p>
                    <div className="my-3 flex gap-2 text-xl">
                      <a href={member.linkedIn}>
                        <FaLinkedin className="hover:text-[#5a5a5a]" />
                      </a>
                      <a href={member.facebook}>
                        <FaFacebookF className="hover:text-[#5a5a5a]" />
                      </a>
                      <a href={member.github}>
                        <FaGithub className="hover:text-[#5a5a5a]" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
