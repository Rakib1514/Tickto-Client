import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import { Button, Card, Drawer, Tag, message } from "antd";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import Drawers from "../../components/Drawers";

const QueryWiseTransport = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const { vehicle } = useParams();
  const origin = params.get("origin");
  const destination = params.get("destination");
  const departure = params.get("departure");

  let apiUrl = "https://tickto-server.vercel.app/api/trips/bus";

  if (origin && destination && departure) {
    apiUrl = `/api/trips/${vehicle}?origin=${origin}&destination=${destination}&departure=${departure}`;
  } else if (vehicle === "bus") {
    apiUrl = `/api/trips/${vehicle}`;
  }

  const { data: tripData, isLoading } = useQuery({
    queryKey: ["travel", vehicle],
    queryFn: async () => {
      const res = await axios.get(`https://tickto-server.vercel.app/api/trips/bus`);
      return res.data || [];
    },
  });

  console.log("Trip data:", tripData);

  if (isLoading) return <div className="mt-28 text-2xl">Loading trips...</div>;

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
    if (!selectedSeats.length)
      return message.warning("Select at least one seat");
    console.log("Proceeding to checkout with:", selectedSeats);
    message.success("Ready for checkout!");
    // pass this to a checkout component or navigate
    console.log(selectedSeats)
  };

  return (
    <div className="mt-28 max-w-4xl space-y-6 mx-auto">
      {tripData?.map((trip) => {
        const availableSeats =
          trip.busDetails.capacity - trip.bookedSeats.length;

        return (
          <div key={trip._id} className="bg-secondary p-5 rounded-xl shadow-lg">

            <div

              title={`${trip.origin} → ${trip.destination}`}
              extra={<Tag color="blue">{trip.busDetails.name}</Tag>}
              className="flex gap-4 justify-between "
            >
              <div className="flex gap-4">
                <img className="w-16 h-16 my-auto rounded-lg border border-gray-300" src="" alt="Logo" />
                <div className="max-w-40">
                  <h3 className="text-xl font-medium">Orgarizer Name</h3>
                  <p className="text-gray-600 text-sm">Some Details | Some Details | Some Details | Some Details</p>
                  {/* Departure: {new Date(trip.departureTime).toLocaleString()} <br />
                Arrival: {new Date(trip.arrivalTime).toLocaleString()} <br />
                Fare: ৳{trip.fare} */}
                </div>
              </div>

              {/* line route */}
              <div>
                <div>

                  <p className="text-center">{'distance'} km</p>
                  <div className="flex items-center text-[#78a6c4] px-2">
                    <GoDotFill /><hr className="text-primary min-w-36 -mx-1" /><GoDotFill className="" />
                  </div>

                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    {trip.origin} <br />
                    {/* {new Date(trip.departureTime).toLocaleString()} */}
                  </div>
                  <div>
                    {trip.destination} <br />
                    {/* {new Date(trip.arrivalTime).toLocaleString()} */}
                  </div>

                </div>
              </div>

              {/* price */}
              <div className="flex items-center justify-center text-2xl font-medium"><TbCurrencyTaka />{trip.fare}</div>

              {/* button & seat */}
              <div>
                <Button className=" w-full bg-[#274f7a]" onClick={() => handleSelectSeatClick(trip)}>
                  Select Seat
                </Button>
                <p className="text-sm my-2">Only <span className="text-red-500">{availableSeats}</span> seats available</p>
              </div>

            </div>

            <div className="flex flex-wrap mt-4 gap-3">
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">Refund Policy</p>
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">Refund Policy</p>
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">Refund Policy</p>

            </div>

          </div>
        );
      })}

      {/* Drawer for seat selection */}
      <Drawers 
  handleNext={handleNext}
  setDrawerOpen={setDrawerOpen}
  drawerOpen={drawerOpen}
  selectedTrip={selectedTrip}
  handleSeatClick={handleSeatClick}
  selectedSeats={selectedSeats}
/>

      
    </div>
  );
};

export default QueryWiseTransport;
