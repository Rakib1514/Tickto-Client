import React from 'react';

export default function AboutUs_first_section() {
  return (
    <div>
      <section>
        <section className="">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-black">About Our Ticket Booking Platform</h1>
              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Welcome to our innovative online ticket booking system, where convenience meets efficiency.  
                We make booking event and travel tickets seamless, secure, and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {/* First Card - Our Vision */}
              <div>
                <div className="relative">
                  <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1470&q=80" alt="Our Vision" />
                </div>

                <h1 className="mt-6 text-xl font-semibold text-black">
                  Our Vision
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500">
                  We aim to revolutionize the way people book tickets, offering a fast, user-friendly, and secure experience for events, concerts, and travel.
                </p>
              </div>

              {/* Second Card - Why Choose Us? */}
              <div>
                <div className="relative">
                  <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1470&q=80" alt="Why Choose Us" />
                </div>

                <h1 className="mt-6 text-xl font-semibold text-black">
                  Why Choose Us?
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500">
                  With an intuitive interface, real-time updates, and multiple payment options, we ensure a smooth booking experience for all users.
                </p>
              </div>

              {/* Third Card - Meet the Founder */}
              <div>
                <div className="relative">
                  <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1470&q=80" alt="Founder" />
                </div>

                <h1 className="mt-6 text-xl font-semibold text-black">
                  Meet the Founder
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500">
                  Built by <strong className="text-black">Minhaj Uddin Arif</strong>, a passionate software engineer with expertise in full-stack development, this platform is designed to make ticket booking seamless and stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
