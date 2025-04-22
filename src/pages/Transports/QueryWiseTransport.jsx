import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import { Button, Card, Drawer, Tag, message } from "antd";
import { useState } from "react";

const QueryWiseTransport = () => {
  const { vehicle } = useParams();
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { data: tripData, isLoading } = useQuery({
    queryKey: ["travel", vehicle],
    queryFn: async () => {
      const res = await axios.get(`/api/trips/${vehicle}`);
      return res.data;
    },
  });

  if (isLoading) return <div className="mt-28">Loading trips...</div>;

  const handleSelectSeatClick = (trip) => {
    setSelectedTrip(trip);
    setDrawerOpen(true);
    setSelectedSeats([]);
  };

  const handleSeatClick = (seatNum) => {
    if (selectedTrip.bookedSeats.includes(seatNum)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatNum)
        ? prev.filter((s) => s !== seatNum)
        : [...prev, seatNum]
    );
  };

  const handleNext = () => {
    if (!selectedSeats.length) return message.warning("Select at least one seat");
    console.log("Proceeding to checkout with:", selectedSeats);
    message.success("Ready for checkout!");
    // You can now pass this to a checkout component or navigate
  };

  return (
    <div className="mt-28 px-4 space-y-6 max-w-4xl mx-auto">
      {tripData.map((trip) => {
        const availableSeats =
          trip.busDetails.capacity - trip.bookedSeats.length;

        return (
          <Card
            key={trip._id}
            title={`${trip.origin} → ${trip.destination}`}
            extra={<Tag color="blue">{trip.busDetails.name}</Tag>}
          >
            <p>
              Departure: {new Date(trip.departureTime).toLocaleString()} <br />
              Arrival: {new Date(trip.arrivalTime).toLocaleString()} <br />
              Fare: ৳{trip.fare}
            </p>
            <p>Available Seats: {availableSeats}</p>
            <Button type="primary" onClick={() => handleSelectSeatClick(trip)}>
              Select Seat
            </Button>
          </Card>
        );
      })}

      {/* Drawer for seat selection */}
      <Drawer
        title="Select Your Seat"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={400}
        footer={
          <div className="text-right">
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        }
      >
        {selectedTrip?.busDetails?.seatLayout.map((row) => (
          <div key={row.row} className="mb-2 flex gap-2">
            <span className="w-6 text-right">{row.row}</span>
            {row.seats.map((seat) => {
              const seatNum = seat.seatNumber;
              const isBooked = selectedTrip.bookedSeats.includes(seatNum);
              const isSelected = selectedSeats.includes(seatNum);
              return (
                <Button
                  key={seatNum}
                  size="small"
                  disabled={isBooked}
                  type={isSelected ? "primary" : "default"}
                  onClick={() => handleSeatClick(seatNum)}
                >
                  {seatNum}
                </Button>
              );
            })}
          </div>
        ))}
      </Drawer>
    </div>
  );
};

export default QueryWiseTransport;
