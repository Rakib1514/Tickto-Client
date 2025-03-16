import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

// import { Pagination, Navigation } from 'swiper/modules';
import '../../styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import r1 from '../../Assets/Review/re-1.png';
import r2 from '../../Assets/Review/re-2.png';
import r3 from '../../Assets/Review/re-3.png';
import r4 from '../../Assets/Review/re-4.png';

const Reviews = () => {

    const [swiperRef, setSwiperRef] = useState(null);
    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='bg-[#317371]/50 py-20 rounded-t-4xl'>
                <h2 className='text-center pb-12 text-5xl font-bold text-white'>Our Best Reviews</h2>
                <p className='text-white'> With top-notch security and excellent customer support, we've earned the trust of thousands. See what our happy customers have to say about their smooth and stress-free ticketing journeys!</p>


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
                            390: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            //tablets
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            //small desktops
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {
                            reviews?.map(review => (
                                <SwiperSlide className='rounded-lg'>
                                    <div className='p-4'>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-1'>
                                                <img className='rounded-full w-16 h-16 border-2 border-[#317371] p-1' src={review.user_image} alt="" />
                                                <div className='text-start my-auto'>
                                                    <h3 className='font-semibold'>{review.user_name}</h3>
                                                    <p>{review.user_email}</p>
                                                </div>
                                            </div>
                                            <div className='py-1.5'> {review.date} </div>
                                        </div>
                                        <div className='my-8 text-start'>
                                            {review.testimonial}
                                        </div>
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