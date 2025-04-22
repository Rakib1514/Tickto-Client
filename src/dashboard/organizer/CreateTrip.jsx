import React, { useContext, useState } from "react";
import { Button, Form, Input, Select, DatePicker, InputNumber, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import dayjs from "dayjs";


const { Option } = Select;

const CreateTrip = () => {
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm(); // Ant form instance to access field values

  const { data: busesData, isLoading } = useQuery({
    queryKey: ["buses", user?.uid],
    queryFn: async () => {
      const res = await axios.get(`/api/buses/${user?.uid}`);
      return res.data;
    },
  });

  const onFinish = async (values) => {
    const tripData = {
      ...values,
      organizerUid: user.uid,
      departureTime: values.departureTime.toISOString(),
      arrivalTime: values.arrivalTime.toISOString(),
      status: "upcoming",
      bookedSeats: [],
      createdAt: new Date().toISOString(),
    };
    

    try {
      const res = await axios.post("/api/trips", tripData);
      console.log("Trip created:", res.data);
      message.success("Trip created successfully!");
      form.resetFields();
    } catch (err) {
      console.error("Failed to create trip:", err);
      message.error("Failed to create trip.");
    }
  };

  // Disables all dates before today
  const disablePastDates = (current) => {
    return current && current < dayjs().startOf("day");
  };

  // Validate arrival must be after departure
  const validateArrival = (_, value) => {
    const departure = form.getFieldValue("departureTime");
    if (!value || !departure || value.isAfter(departure)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Arrival time must be after departure time"));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <Form
        form={form}
        name="createTrip"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="busId"
          label="Bus"
          rules={[{ required: true, message: "Please select a bus" }]}
        >
          <Select placeholder="Select Bus">
            {busesData.map((bus) => (
              <Option key={bus._id} value={bus._id}>
                {bus.name} - {bus.brand} ({bus.model})
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="origin"
          label="From"
          rules={[{ required: true, message: "Please enter origin" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="destination"
          label="To"
          rules={[{ required: true, message: "Please enter destination" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="departureTime"
          label="Departure"
          rules={[{ required: true, message: "Please select departure time" }]}
        >
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            disabledDate={disablePastDates}
          />
        </Form.Item>

        <Form.Item
          name="arrivalTime"
          label="Arrival"
          rules={[
            { required: true, message: "Please select arrival time" },
            { validator: validateArrival },
          ]}
        >
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            disabledDate={disablePastDates}
          />
        </Form.Item>

        <Form.Item
          name="fare"
          label="Fare (৳)"
          rules={[{ required: true, message: "Please enter fare" }]}
        >
          <InputNumber min={0} className="w-full" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create Trip
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTrip;
