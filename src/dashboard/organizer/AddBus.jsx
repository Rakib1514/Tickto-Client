import { Button, Form, Input, InputNumber, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddBus = () => {
  const [form] = Form.useForm();
  const [seatLayout, setSeatLayout] = useState([]);

  const { user } = useSelector((state) => state.auth);

  // Function to generate seat layout
  const generateSeatLayout = (rows, cols) => {
    const layout = [];
    for (let row = 1; row <= rows; row++) {
      const seats = [];
      for (let col = 0; col < cols; col++) {
        const seatNumber = `${row}${String.fromCharCode(65 + col)}`;
        seats.push({ seatNumber });
      }
      layout.push({ row, seats });
    }
    return layout;
  };

  const onFinish = async (values) => {
    const layout = generateSeatLayout(values.totalRows, values.seatsPerRow);

    const busData = {
      busId: values.busId,
      name: values.name,
      registrationNumber: values.registrationNumber,
      brand: values.brand,
      model: values.model,
      type: values.type,
      capacity: values.totalRows * values.seatsPerRow,
      features: values.features.split(",").map((f) => f.trim()),
      images: [values.image],
      seatLayout: layout,
      createdAt: new Date().toISOString(),
      organizerID: user?.uid,
    };

    try {
      const res = await axios.post("/api/buses", busData);
      message.success("Bus added successfully!");
      form.resetFields();
    } catch (err) {
      console.error(err);
      message.error("Failed to add bus.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Bus</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="busId" label="Bus ID" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="name" label="Bus Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="registrationNumber"
          label="Registration Number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="model" label="Model" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="type" label="Bus Type" rules={[{ required: true }]}>
          <Input placeholder="AC, Non-AC, Sleeper, etc." />
        </Form.Item>

        <Form.Item name="features" label="Features (comma separated)">
          <Input placeholder="AC, WiFi, Charging Port, etc." />
        </Form.Item>

        <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
          <Input placeholder="https://example.com/bus.jpg" />
        </Form.Item>

        <Form.Item
          name="totalRows"
          label="Total Rows"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} className="w-full" />
        </Form.Item>

        <Form.Item
          name="seatsPerRow"
          label="Seats Per Row"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} max={6} className="w-full" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Add Bus
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddBus;
