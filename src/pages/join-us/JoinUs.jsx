import { IoIosMail } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import Socials from '../../components/Shared/Socials';
import member2 from '../../Assets/joinus/Team/member.jpg';
import rakibul from '../../Assets/joinus/Team/rakib.png';
import sana from '../../Assets/joinus/Team/sana.jpeg';
import akash from '../../Assets/joinus/Team/akash.jpg';
import arif from '../../Assets/joinus/Team/arif2.png';
import oni from '../../Assets/joinus/Team/mushfika.jpg';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



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
      img: arif,
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

  const cards = [
    {
      title: ' Our Email',
      icon: <IoIosMail />,
      details: 'tickto.help@gmail.com'
    },
    {
      title: 'Our Address',
      icon: <FaLocationDot />,
      details: 'Plot #15, Road #103, Gulshan Avenue, Gulshan-2, Dhaka.'
    },
    {
      title: 'Call Us',
      icon: <MdCall />,
      details: '+880 1234567890'
    },
    {
      title: 'Opening Hour',
      icon: <IoMdTime />,
      details: '24/7 Customer Support. Contact us anytime.'
    },
  ]

  // emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`service_4ow6tzu`, `template_sismbzw`, form.current, {
        publicKey: `4k46wfdxA8KkBe56K`,
      })
      .then(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Email sent successfully"
          });
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Something went wrong. Try again later"
          });
        },
      );
  };

  const scrollRef = useRef();

  useGSAP(() => {
    gsap.from('.stagger-box', {
      opacity: 0,
      y: 50,
      stagger: 0.8, // Each card appears with 0.6s delay
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none none',
        scrub: true,
      },
    }),
      gsap.from('.fade-up', {
        opacity: 0,
        y: 50,
        duration: 5,
      });
  }, []);

  return (
    <div className="min-h-screen ">


      {/* bg-image */}
      <div className="hands min-h-[480px]">
        <div className='h-[480px] w-full bg-black/45 flex items-center justify-center'>
          <div className='text-center text-white space-y-3 md:w-1/2 mx-auto'>
            <h1 className='text-4xl lg:text-6xl font-bold '>Join Our Team</h1>
            <p className='w-[96%] mx-auto'>We're always looking for passionate, creative, and driven individuals to join our growing team. Whether you're a developer, designer, marketer, or customer support superstar, there's a place for you here. Come be a part of something meaningful and help us shape the future together</p>
          </div>
        </div>
      </div>


      {/* main sections start */}

      {/* contact info cards */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 max-w-screen-xl w-[96%] mx-auto -mt-22'>
        {
          cards.map((card, index) => {
            return (<div key={index} className='shadow-xl bg-white rounded-xl gap-2 p-5 md:p-7'>
              <div className='text-5xl text-[#317371] '>{card.icon}</div>
              <h3 className='text-xl font-bold my-2'>{card.title}</h3>
              <p className=''>{card.details}</p>
            </div>)
          })
        }

      </div>


      {/* map & contact form */}
      <div className=" mx-auto my-20 w-[94%] max-w-screen-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className='min-h-fit md:h-96'>
          <h2 className='text-3xl font-bold text-center mb-5'>Office Locaion</h2>
          <iframe
            className=" inset-0 h-full w-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8326310782483!2d90.41583967519636!3d23.78850327864465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c7cb2a69cb%3A0x7a6e3e62cccb186e!2sGulshan%20Pink%20City!5e0!3m2!1sen!2sbd!4v1713262201234!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className='mt-20 md:mt-0'>
          <h2 className='text-3xl font-bold text-center mb-5'>Contact Us</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="fieldset mt-5 p-1 space-y-3 md:mt-0 grid grid-cols-2">
            <input
              type="text"
              name="user_name"
              className="input h-13 w-full rounded-lg"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="user_email"
              className="input h-13 w-full rounded-lg"
              placeholder="Your Email"
            />

            <input
              type="number"
              name="user_number"
              className="input h-13 w-full rounded-lg"
              placeholder="Your Number"
            />

            <input
              type="text"
              name="mail_subject"
              className="input h-13 w-full rounded-lg"
              placeholder="Subject"
            />

            <input
              type="text"
              name='message'
              className="textarea h-42 w-full rounded-lg col-span-2"
              placeholder="Enter Your Message"
            />

            <button className="btn h-12 rounded-md border-none bg-gradient-to-br from-[#a2b9a7]/90 to-[#317371]/90 text-white col-span-2">
              Send Email
            </button>
          </form>

        </div>
      </div>



      {/* team section */}
      <div className="mx-auto mt-24 w-[94%] max-w-screen-xl pb-28">
        <h2 className="text-4xl font-bold">Our Technical Team</h2>
        <p className="py-4 pb-6 text-lg md:w-[80%]">
          Behind every great experience is a team of passionate individuals dedicated to making
          your life easy. At Tickto, our experts in technology, customer support, and event
          management work together to deliver a seamless platform for you. We believe in
          innovation, collaboration, and creating unforgettable experiences—one ticket at a
          time!
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" ref={scrollRef}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group stagger-box team-section relative mx-auto max-h-80 w-fit max-w-[440px] overflow-hidden rounded-lg bg-[#5a5a5a]/80 shadow-xl"
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
  );
};

export default JoinUs;
