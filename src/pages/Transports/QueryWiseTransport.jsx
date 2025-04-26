import { useQuery } from "@tanstack/react-query";
import { Button, Drawer, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import Drawers from "../../components/Drawers";
import { useLocation, useParams } from "react-router";

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

  let apiUrl = "";

  if (origin && destination && departure) {
    apiUrl = `/api/trips/${vehicle}?origin=${origin}&destination=${destination}&departure=${departure}`;
  } else if (vehicle === "bus") {
    apiUrl = `/api/trips/${vehicle}`;
  }

  const { data: tripData, isLoading } = useQuery({
    queryKey: ["travel", vehicle],
    queryFn: async () => {
      const res = await axios.get(apiUrl);
      return res.data || [];
    },
  });

  console.log(tripData);

  if (isLoading)
    return (
      <div className="text-2xl min-h-[calc(100vh-500px)] flex justify-center items-center">
        <div>Loading trips...</div>
      </div>
    );

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
    console.log(selectedSeats);
  };

  return (
    <div className="mt-30 w-[96%] max-w-4xl space-y-6 mx-auto min-h-[calc(100vh-500px)]">
      {tripData?.map((trip) => {
        const availableSeats =
          trip.busDetails.capacity - trip.bookedSeats.length;

        return (
          <div key={trip._id} className=" rounded-xl shadow-lg">
            <div
              // title={`${trip.origin} → ${trip.destination}`}
              // extra={<Tag color="blue">{trip.busDetails.name}</Tag>}
              className="md:flex gap-4 justify-between bg-secondary p-5 rounded-t-xl"
            >
              <div className="flex gap-4 my-auto">
                <img
                  className="w-16 h-16 my-auto rounded-lg border border-gray-300"
                  src={trip.busDetails.images[0]}
                  alt="Logo"
                />
                <div className="md:max-w-40">
                  <h3 className="text-xl font-medium">
                    {trip.busDetails.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {trip.busDetails.brand} {trip.busDetails.model} | &nbsp;
                    {trip.busDetails.features[0]} bus | Free{" "}
                    {trip.busDetails.features[1]}
                    {trip.busDetails.features[2] == "Charger" ? (
                      <span> | charging system</span>
                    ) : (
                      ""
                    )}
                  </p>
                  {/* Departure: {new Date(trip.departureTime).toLocaleString()} <br />
                Arrival: {new Date(trip.arrivalTime).toLocaleString()} <br />
                Fare: ৳{trip.fare} */}
                </div>
              </div>

              {/* line route */}
              <div className="my-8 md:my-0">
                <div>
                  <p className="text-center">{trip.distance} km</p>
                  <div className="flex items-center justify-center text-[#78a6c4] px-8">
                    <GoDotFill />
                    <hr className="text-primary min-w-40 -mx-1" />
                    <GoDotFill />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-center">
                  <div className="text-star">
                    {trip.origin}
                    {/* {format(new Date(trip.departureTime), "dd/MM/yyyy")} */}
                    <p className="max-w-20">
                      {new Date(trip.departureTime).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-en">
                    {trip.destination}
                    <p className="max-w-20">
                      {new Date(trip.arrivalTime).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:min-w-70 gap-4">
                {/* price */}
                <div className="flex items-center justify-center text-2xl font-medium">
                  <TbCurrencyTaka />
                  {trip.fare}
                </div>

                {/* button & seat */}
                <div className="my-10 md:my-auto text-center">
                  <Button
                    className=" w-full bg-[#274f7a]"
                    onClick={() => handleSelectSeatClick(trip)}
                  >
                    Select Seat
                  </Button>
                  <p className="text-sm my-2">
                    Only <span className="text-red-500">{availableSeats}</span>{" "}
                    seats available
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap px-4 py-4 md:py-3 gap-3 bg-secondary/30 rounded-b-xl">
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">
                Refund Policy
              </p>
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">
                Refund Policy
              </p>
              <p className="bg-green-200 rounded-2xl p-1 px-4 text-sm text-green-800">
                Refund Policy
              </p>
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
