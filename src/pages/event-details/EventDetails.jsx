import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();

  const { data: eventData, isLoading } = useQuery({
    queryKey: ["Event", id],
    queryFn: async () => {
      // Fetch event details from API
      const res = await axios.get(`/api/event/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-center text-xl">Loading Event Details...</h2>
      </div>
    );
  }

  if (!eventData.success) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl text-red-500">{eventData.message}</h1>
      </div>
    );
  }

  // Destructure with fallback values.
  const {
    title,
    thumbnail,
    category,
    subCategory,
    Date = "2025-08-15",
    time = "7:00 PM - 10:00 PM",
    duration = "3 hours",
    ageLimit = "18+",
    vanue = {
      locationName: "FunLand Park",
      fullAddress: "456 Adventure Road, Playtown",
      googlemapsLink: "https://maps.google.com/?q=456+Adventure+Road+Playtown",
    },
    description = "Experience the thrill at FunLand Park with exhilarating rides, vibrant attractions, and magical entertainment all night long.",
    ticketInfo = {
      ticketPrice: "$50",
      availableSeat: "120 seats available",
      ticketType: "General admission",
      refundPolicy: "Refundable within 24 hrs",
    },
    Organizer = {
      name: "EventMaster Ltd",
      contactInfo: "contact@rmail.com",
    },
    specialFeatures = [
      "Live Performances",
      "Interactive Games",
      "Parade Shows",
      "Firework Display",
      "Food Stalls",
    ],
    imageGallery = [
      "https://i.ibb.co.com/k2j56Z0G/prop-image.jpg",
      "https://i.ibb.co.com/k2j56Z0G/prop-image.jpg",
      "https://i.ibb.co.com/k2j56Z0G/prop-image.jpg",
    ],
    Celebrity = ["Alice Star", "Bob Fame", "Charlie Vision"],
  } = eventData.data;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Event Image */}
        <div>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-80 object-cover rounded-lg shadow"
          />
        </div>

        {/* Right Side: Main Event Data */}
        <div className="flex flex-col space-y-6">
          {/* Title, Category, Buttons */}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 capitalize">
              {category} / {subCategory}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <Link to={"/"}>
                <button className="bg-primary text-white py-2 px-6 rounded hover:opacity-90 cursor-pointer">
                  Buy Ticket Now
                </button>
              </Link>
              <Link to={'/'}>
                <button className="border border-primary text-primary py-2 px-6 rounded hover:bg-primary hover:text-white cursor-pointer">
                  Share Event
                </button>
              </Link>
            </div>
          </div>

          {/* Date, Time, Duration & Age Limit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Date: </span>
                {Date}
              </p>
              <p>
                <span className="font-semibold">Time: </span>
                {time}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Duration: </span>
                {duration}
              </p>
              <p>
                <span className="font-semibold">Age Limit: </span>
                {ageLimit}
              </p>
            </div>
          </div>

          {/* Ticket & Organizer Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Ticket Price: </span>
                {ticketInfo.ticketPrice}
              </p>
              <p>
                <span className="font-semibold">Available Seats: </span>
                {ticketInfo.availableSeat}
              </p>
              <p>
                <span className="font-semibold">Ticket Type: </span>
                {ticketInfo.ticketType}
              </p>
              <p>
                <span className="font-semibold">Refund Policy: </span>
                {ticketInfo.refundPolicy}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Organizer: </span>
                {Organizer.name}
              </p>
              <p>
                <span className="font-semibold">Contact: </span>
                {Organizer.contactInfo}
              </p>
            </div>
          </div>

          {/* Venue Details */}
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Venue Details</h2>
            <p>
              <span className="font-semibold">Location Name: </span>
              {vanue.locationName}
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              {vanue.fullAddress}
            </p>
            {vanue.googlemapsLink && (
              <a
                href={vanue.googlemapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View on Google Maps
              </a>
            )}
          </div>

          {/* Event Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">About the Event</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>

      {/* Additional Sections: Special Features, Image Gallery, Celebrity Lineup */}
      <div className="mt-8 space-y-8">
        {specialFeatures && specialFeatures.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Special Features</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {specialFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {imageGallery && imageGallery.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Image Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {imageGallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md shadow"
                />
              ))}
            </div>
          </div>
        )}

        {Celebrity && Celebrity.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Celebrity Lineup</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {Celebrity.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
