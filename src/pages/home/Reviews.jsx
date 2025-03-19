import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

// import { Pagination, Navigation } from 'swiper/modules';
import '../../styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

const Reviews = () => {

    const [ setSwiperRef] = useState(null);
    const [reviews, setReviews] = useState()

    useGSAP(()=>{
        gsap.from('#reviewsection', {
            // width: '70%',
            scale: 0.03,
            borderRadius: '1900%',
            scrollTrigger: {
                start: 'top 10%',
                
                scrub: true
            }
        })
    },[])

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div id='reviewsection' className='bg-[#317371]/50 py-20 rounded-t-[3%] mt-32'>
                <h2 className='text-center py-3 text-5xl font-bold text-white'>Our Best Reviews</h2>
                <p className='text-white py-3 md:text-lg text-center w-[96%] lg:w-[60%] mx-auto'> Our customers speak for us! From effortless booking to real-time seat selection and secure check-ins, our platform ensures a smooth experience every time. See why users trust us for their ticketing needs!</p>


                <section className='px-4 py-7 lg:px-0 mx-auto'>

                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        modules={[Autoplay]}
                        spaceBetween={40}
                        className="mySwiper"
                        breakpoints={{
                            //mobile devices
                            90: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            //tablets
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // desktops
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1400: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {
                            reviews?.map((review, index) => (
                                <SwiperSlide key={index} className='rounded-lg'>
                                    <div className='p-4 flex flex-col'>

                                        <div className='flex gap-1'>
                                            <img className='rounded-full w-16 h-16 border-2 border-[#317371] p-1' src={review.user_image} alt="" />
                                            <div className='text-start my-auto'>
                                                <h3 className='font-semibold'>{review.user_name}</h3>
                                                <p>{review.user_email}</p>
                                            </div>
                                        </div>


                                        <div className='mt-4 text-start flex-grow'>
                                            {review.testimonial}
                                        </div>

                                        <div className='py-1.5 text-end '> -{review.date} </div>

                                        {/* <div className="flex justify-center gap-2 mt-4">
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                            </div> */}
                                    </div>

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </section>

            </div>
        </div>
    );
};

export default Reviews;