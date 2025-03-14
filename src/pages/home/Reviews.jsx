import { useState } from 'react';
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

  return (
    <div>
      <div><h2 className='text-center pb-12 text-5xl font-bold'>Our Best Reviews</h2>
            <div id="skills" className='bg-gray-600/10 backdrop-blur' >

                <section className='px-4 py-7 lg:px-0 max-w-7xl mx-auto'>

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
                            slidesPerView: 2,
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
                    <SwiperSlide className='rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300 w-auto" src={r1} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Miska</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r2} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Ainnan</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r3} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Raisa</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                           
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r4} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Jenni</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r2} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Zayan</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r3} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Salena</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r4} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Maddie</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r3} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Lorissa</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r2} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Dainel</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r1} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Sofia</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' rounded-lg'>
                        <div className="flex flex-col justify-center my-7 items-center">
                            <img className="h-20 border-2 rounded-full border-gray-300" src={r4} alt="" />
                            <p className="text-xl mt-3 text-black font-bold">Suzen Caika</p>
                            <p className='text-gray-500 text-sm py-3 px-3'>The global guide to Airline customer reviews and ratings for Airlines across the world, featuring passenger reviews, opinions and trip experiences.</p>
                            <div className="flex justify-center gap-2">
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                                <FaStar className='text-xl text-amber-500' />
                            </div>
                            
                        </div>
                    </SwiperSlide>
                </Swiper>

                </section>
            </div>
        </div>
    </div>
  );
};

export default Reviews;