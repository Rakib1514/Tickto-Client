import { useQuery } from "@tanstack/react-query";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const { Option } = Select;

const CreateTrip = () => {
  const { user } = useSelector((state) => state.auth);

  const [form] = Form.useForm();

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

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
      }
      });

    try {
      const res = await axios.post("/api/trips", tripData);
      console.log("Trip created:", res.data);
      Toast.fire({
        icon: "success",
        title: "Trip created successfully!"
      });
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
    return Promise.reject(
      new Error("Arrival time must be after departure time")
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto w-full border border-gray-300 rounded-xl bg-white">
      <h1 className="text-center py-3 text-2xl font-bold">Create New Trip</h1>
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
          name="distance"
          label="Distance (km)"
          rules={[{ required: true, message: "Please enter distance" }]}
        >
          <InputNumber style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          name="departureTime"
          label="Departure"
          className="w-full"
          rules={[{ required: true, message: "Please select departure time" }]}
        >
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            disabledDate={disablePastDates}
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="arrivalTime"
          label="Arrival"
          className="w-full"
          rules={[
            { required: true, message: "Please select arrival time" },
            { validator: validateArrival },
          ]}
        >
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            disabledDate={disablePastDates}
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="fare"
          label="Fare (৳)"
          rules={[{ required: true, message: "Please enter fare" }]}
        >
          <InputNumber min={0} style={{width: '100%'}} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="!bg-primary hover:!bg-primary/75 w-full"
           type="primary" htmlType="submit" size="large">
            Create Trip
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTrip;
