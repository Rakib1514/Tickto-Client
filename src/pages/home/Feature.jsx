import React from 'react';
import { motion } from 'framer-motion';

const Feature = () => {
  return (
      <div className='w-11/12 mx-auto'>
          <motion.div
      className="p-5 bg-gray-100 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className=" mt-20 text-3xl font-bold text-gray-800 mb-6 text-start">Our Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/travel-navigation-journey-vacation-trip-laptop-concept_53876-125037.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Concert Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Concert Event</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/colorful-party-flags-yellow-bokeh-background_9975-24299.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Festival Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Festival Event</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346615.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Conference Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Conference Event</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/online-booking-traveling-plane-flight-concept_53876-133675.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Airline Ticket"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Airline Ticket</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden "
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/location-symbol-plane_23-2149764134.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Travel Destination"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Travel Destination</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Add more cards as needed */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/high-angle-smartphone-tickets_23-2149340980.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Concert Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Concert Event</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/top-view-hands-holding-food_23-2149410425.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Festival Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Food &  Wine expo</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/front-view-smiley-kid-with-binoculars_23-2149885218.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Conference Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Travel & Adventure Show </h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/technology-innovation-digital-evolution-homepage-concept_53876-165281.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Airline Ticket"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Tech conference</h3>
            <p className="text-sm text-gray-600">Book your tickets now!</p>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://img.freepik.com/free-photo/aerial-view-koh-nangyuan-island-surat-thani-thailand_335224-1198.jpg?uid=R31147662&ga=GA1.1.815387719.1738863145&semt=ais_hybrid"
            alt="Travel Destination"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Travel Destination</h3>
            <p className="text-sm text-gray-600">Island Adventure Tour</p>
          </div>
        </motion.div>

        {/* Add more cards as needed */}
      </div>
    </motion.div>
      </div>
  );
};

export default Feature;