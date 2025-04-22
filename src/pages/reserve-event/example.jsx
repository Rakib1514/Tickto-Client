import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";

const ReserveEvent = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { data: eventData, isLoading } = useQuery({
    queryKey: ["Event", id],
    queryFn: async () => {
      const res = await axios.get(`/api/event/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-center text-xl">Loading Event Details...</h2>
      </div>
    );
  }

  if (!eventData.success) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl text-red-500">{eventData.message}</h1>
      </div>
    );
  }

  // Destructure ticket info
  const {
    ticketInfo = {
      availableSeat: 400,
    },
    venueSetup = {
      columnCount: 20,
    },
  } = eventData.data;

  const totalSeats = parseInt(ticketInfo.availableSeat) || 0;
  const columnCount = parseInt(venueSetup.columnCount) || 10;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  return (
    <div className="w-full min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Reserve Your Seat</h2>

      {/* Horizontally scrollable container */}
      <div className="overflow-x-auto">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(32px, 1fr))`,
            width: `${columnCount * 42}px`, // width increases based on column
          }}
        >
          {Array.from({ length: totalSeats }).map((_, i) => {
            const seatNumber = i + 1;
            const isSelected = selectedSeats.includes(seatNumber);
            return (
              <button
                key={seatNumber}
                onClick={() => handleSeatClick(seatNumber)}
                className={`h-10 text-xs rounded-sm font-medium border ${
                  isSelected
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 hover:bg-gray-300"
                }`}
              >
                {seatNumber}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Selected Seats:</h3>
        <p className="text-sm text-gray-700">{selectedSeats.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default ReserveEvent;
