import { Drawer } from "antd";
import { MdEventSeat } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Drawers = ({
  handleNext,
  setDrawerOpen,
  drawerOpen,
  selectedTrip,
  handleSeatClick,
  selectedSeats,
}) => {
  const bookedSeats = selectedTrip?.bookedSeats || [];
  const ticketPrice = selectedTrip?.fare || 0;
  const totalPrice = selectedSeats.length * ticketPrice;
  
  const seatCol = selectedTrip?.busDetails?.seatLayout[0].seats.length

  console.log(seatCol)

  const handleClickSeat = (seatNum) => {
    if (selectedSeats.includes(seatNum)) {
      handleSeatClick(seatNum); // deselect allowed
    } else if (selectedSeats.length < 4) {
      handleSeatClick(seatNum);
      if (selectedSeats.length === 3) {
        Swal.fire({
          icon: "info",
          title: "Seat Limit Reached",
          text: "You have selected the maximum of 4 seats.",
          confirmButtonColor: "#317371",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Maximum Seat Limit",
        text: "You can select maximum 4 seats.",
        confirmButtonColor: "#F67E04",
      });
    }
  };

  return (
    <Drawer
      title={null}
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
      closeIcon={<IoClose className="text-2xl text-gray-600" />}
      width={400}
    >
      <div className="h-full flex flex-col bg-white">
        {/* Header */}
        <h3 className="text-lg font-semibold ml-4">Select Your Seats</h3>

        {/* Trip Summary */}
        <div className="p-4 border-b">
          <div className="flex gap-3 items-center mb-3">
            <img
              src={
                selectedTrip?.busDetails?.images?.[0] ||
                "https://i.ibb.co/fHRKw9v/emad.png"
              }
              className="w-10 h-10 object-cover rounded"
              alt="Operator"
            />
            <div>
              <h2 className="text-base font-medium">
                {selectedTrip?.busDetails?.name || "Bus Operator"}
              </h2>
              <p className="text-sm text-gray-500">
                {selectedTrip?.busDetails?.brand}
              </p>
              <p className="text-xs text-gray-400">
                Reg: #{selectedTrip?.busDetails?.registrationNumber}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold">From</p>
              <p>{selectedTrip?.origin || "Unknown"}</p>
              <p className="text-xs text-gray-400">
                {new Date(selectedTrip?.departureTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="text-center text-xs text-gray-400 col-span-1 pt-2">
              Duration may vary due to traffic
            </div>
            <div className="text-right">
              <p className="font-semibold">To</p>
              <p>{selectedTrip?.destination || "Unknown"}</p>
              <p className="text-xs text-gray-400">
                {new Date(selectedTrip?.arrivalTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Seat Legend */}
        <div className="p-3 text-sm text-gray-600 flex justify-around">
          <div className="flex items-center gap-2">
            <MdEventSeat className="text-gray-400" /> Available
          </div>
          <div className="flex items-center gap-2">
            <MdEventSeat className="text-red-500" /> Booked
          </div>
          <div className="flex items-center gap-2">
            <MdEventSeat className="text-green-600" /> Selected
          </div>
        </div>

        {/* Seat Layout */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {selectedTrip?.busDetails?.seatLayout?.map((row) => (
            
            <div key={row.row} className="flex gap-2 items-center mb-3">
              
              <div className={`grid grid-cols-5 gap-2`}>
                {row.seats.map((seat, idx) => {
                  const seatNum = seat.seatNumber;
                  const isBooked = bookedSeats.includes(seatNum);
                  const isSelected = selectedSeats.includes(seatNum);

                  
                    
                  return (
                    <button
                      key={seatNum}
                      className={`w-10 h-10 rounded-full border font-semibold text-sm transition 
                        ${
                          isBooked
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : isSelected
                              ? "bg-green-500 text-white"
                              : "bg-white hover:bg-green-100 text-black"
                        } ${seatCol > 3 ? idx === 1 && "col-span-2" : "" } ${seatCol === 3 && idx === 0 ? "col-span-2":""} `}
                      disabled={isBooked}
                      onClick={() => handleClickSeat(seatNum)}
                    >
                      {seatNum}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-white">
          <div className="flex justify-between items-center mb-2 text-sm">
            <p className="text-primary">
              {selectedSeats.length} Seat(s) Selected
            </p>
            <p className="font-bold text-green-600">৳{totalPrice}</p>
          </div>

          <Link
            to="/payment"
            state={{ selectedSeats, totalPrice }}
            onClick={(e) => {
              if (selectedSeats.length === 0) {
                e.preventDefault();
                return;
              }
              handleNext();
            }}
            className={`btn w-full ${
              selectedSeats.length === 0
                ? "btn-disabled bg-gray-400 border-none text-white"
                : "bg-primary hover:bg-green-600 text-white border-none"
            }`}
          >
            Continue ৳{totalPrice}
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default Drawers;
