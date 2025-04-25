import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import UpdateTripModal from "./UpdateTripModal";

const ManageTripsCard = (status) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { user } = useContext(AuthContext);

  const { data: trips = [], isLoading, refetch } = useQuery({
    queryKey: ["trips", user?.uid, status.status],
    queryFn: async () => {
      const res = await axios.get(
        `/api/trips?userId=${user?.uid}&status=${status.status}`
      );
      return res.data;
    },
  });

  console.log(trips);

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
      <Button
        type="primary"
        className={`mt-2 ${trip.status === "completed" || "active" ? "hidden" : ""}`}
        onClick={() => setIsModalOpen(true)}
      >
        Update Trip
      </Button>
      <UpdateTripModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        trip={trip}
        refetch={refetch}
      />
    </div>
  ));
};

export default ManageTripsCard;
