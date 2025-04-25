import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const ManageTripsCard = (status) => {

  console.log(status)

  const { user } = useContext(AuthContext);

  const { data: trips= [], isLoading } = useQuery({
    queryKey: ["trips", user?.uid, status.status],
    queryFn: async () => {
      const res = await axios.get(`/api/trips?userId=${user?.uid}&status=${status.status}`);
      return res.data;
    },
  });

  console.log(trips)

  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  
  return trips.map((trip) => (
    <div key={trip._id} className="border p-4 mb-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">
        {trip.origin} to {trip.destination}
      </h3>
      <p>Distance: {trip.distance} km</p>
      <p>Departure: {new Date(trip.departureTime).toLocaleString()}</p>
      <p>Arrival: {new Date(trip.arrivalTime).toLocaleString()}</p>
      <p>Fare: ${trip.fare}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Edit Trip
      </button>
    </div>
  ));
};

export default ManageTripsCard;
