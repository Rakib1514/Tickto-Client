import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Checkbox, Form, Input, InputNumber, message } from "antd";

const ReserveEvent = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);

  // State for tracking checkbox selection, step, person count, and guest details
  const [selected, setSelected] = useState(null); // "yes" or "no"
  const [step, setStep] = useState(1); // 1: Person Count; 2: Guest Details
  const [personCount, setPersonCount] = useState(0);
  const [guestData, setGuestData] = useState([]);

  const { data: eventData, isLoading } = useQuery({
    queryKey: ["Event", id],
    queryFn: async () => {
      const res = await axios.get(`/api/event/${id}`);
      return res.data;
    },
  });

  const handleCheckboxChange = (e) => {
    // When "yes" is selected, store it; if "no", reset to default step
    setSelected(e.target.checked ? e.target.value : null);
    if (e.target.value === "no") {
      // Optionally, complete reservation immediately if no guests are coming
      setStep(1);
    }
  };

  // Form submission for Person Count
  const onFinishPersonCount = (values) => {
    setPersonCount(values.personCount);
    setStep(2); // Move to next step: Guest Details
  };

  // Form submission for Guest Details
  const onFinishGuestDetails = (values) => {
    // values.guests will be an array with each guest's name and age
    setGuestData(values.guests);
    message.success("Reservation completed successfully!");
    console.log("Guest Data:", values.guests);
  };

  if (isLoading || loading) {
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

  const { title, thumbnail } = eventData.data;

  return (
    <div className="w-full min-h-screen mt-4 container mx-auto px-2">
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</p>
      <div className="md:grid grid-cols-2 gap-6 content-start mt-6">
        <div>
          {/* Greeting & Checkbox selection */}
          <div className="space-y-2">
            <p>
              Hello <span className="italic">{user?.displayName}</span>, please follow the steps below to complete your reservation.
            </p>
            <div className="flex justify-between">
              <span className="font-semibold">Is anyone coming with you?</span>
              <div>
                <Checkbox
                  value="yes"
                  checked={selected === "yes"}
                  onChange={handleCheckboxChange}
                >
                  Yes
                </Checkbox>
                <Checkbox
                  value="no"
                  checked={selected === "no"}
                  onChange={handleCheckboxChange}
                >
                  No
                </Checkbox>
              </div>
            </div>
          </div>

          {/* If "Yes" is selected, show the multi-step forms */}
          {selected === "yes" && step === 1 && (
            <Form
              name="personCountForm"
              layout="vertical"
              onFinish={onFinishPersonCount}
              autoComplete="off"
            >
              <Form.Item
                label="Number of Attendees"
                name="personCount"
                rules={[
                  { required: true, message: "Please input the number of attendees!" },
                  { type: "number", min: 1, message: "The number of attendees must be at least 1." },
                ]}
              >
                <InputNumber placeholder="Enter number of attendees" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              </Form.Item>
            </Form>
          )}

          {selected === "yes" && step === 2 && (
            <Form
              name="guestDetailsForm"
              layout="vertical"
              onFinish={onFinishGuestDetails}
              autoComplete="off"
            >
              {Array.from({ length: personCount }).map((_, index) => (
                <div key={index} className="border p-4 mb-4">
                  <p className="font-semibold">Guest {index + 1}</p>
                  <Form.Item
                    label="Name"
                    name={["guests", index, "name"]}
                    rules={[{ required: true, message: "Please input the guest's name." }]}
                  >
                    <Input placeholder="Guest Name" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name={["guests", index, "age"]}
                    rules={[{ required: true, message: "Please input the guest's age." }]}
                  >
                    <InputNumber placeholder="Guest Age" style={{ width: "100%" }} />
                  </Form.Item>
                </div>
              ))}
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit Reservation
                </Button>
              </Form.Item>
            </Form>
          )}

          {/* If "No" is selected, show a message */}
          {selected === "no" && (
            <p className="mt-4 font-medium">No additional guests selected. Your reservation is complete.</p>
          )}
        </div>
        <div>
          <img src={thumbnail} alt={title} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
};

export default ReserveEvent;
