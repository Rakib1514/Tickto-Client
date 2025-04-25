import { Button, Drawer } from 'antd';
import React from 'react';

const Drawers = ({ handleNext, setDrawerOpen, drawerOpen, selectedTrip, handleSeatClick, selectedSeats }) => {
  return (
    <div>
      <Drawer
        title="Select Your Seat"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width="80%" // Responsive width for mobile devices
        placement="right" // Right-side placement for better UI flow
        className="bg-white shadow-lg p-4" // Added background and shadow for better contrast
        footer={
          <div className="flex justify-end">
            <Button type="primary" onClick={handleNext} className="bg-primary hover:bg-primary-dark">
              Next
            </Button>
          </div>
        }
      >
        <div className="overflow-auto max-h-[60vh]"> {/* Added scroll for overflow */}
          {selectedTrip?.busDetails?.seatLayout?.map((row) => (
            <div key={row.row} className="mb-4 flex gap-4 items-center">
              <span className="text-lg font-semibold w-10 text-center">{row.row}</span>
              <div className="flex flex-wrap gap-2">
                {row.seats.map((seat) => {
                  const seatNum = seat.seatNumber;
                  const isBooked = selectedTrip.bookedSeats.includes(seatNum);
                  const isSelected = selectedSeats.includes(seatNum);

                  return (
                    <Button
                      key={seatNum}
                      size="large"
                      className={`w-12 h-12 m-1 rounded-md ${isBooked ? 'bg-gray-300 text-gray-500' : isSelected ? 'bg-primary text-white' : 'bg-secondary hover:bg-primary-light'}`}
                      disabled={isBooked}
                      type={isSelected ? 'primary' : 'default'}
                      onClick={() => handleSeatClick(seatNum)}
                    >
                      {seatNum}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Drawers;
