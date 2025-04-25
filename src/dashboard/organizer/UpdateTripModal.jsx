import React, { useContext } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

const UpdateTripModal = ({ setIsModalOpen, isModalOpen, trip = {} }) => {
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm();

  // Convert departureTime and arrivalTime to dayjs objects
  const formattedTrip = {
    ...trip,
    departureTime: trip.departureTime ? dayjs(trip.departureTime) : null,
    arrivalTime: trip.arrivalTime ? dayjs(trip.arrivalTime) : null,
  };

  const { data: busesData = [], isLoading } = useQuery({
    queryKey: ["buses", user?.uid],
    queryFn: async () => {
      const res = await axios.get(`/api/buses/${user?.uid}`);
      return res.data;
    },
  });

  const onFinish = async (values) => {
    console.log(values);
    // Handle form submission logic here
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
    <>
      <Modal
        title="Update Trip"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          name="updateTrip"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="on"
          initialValues={formattedTrip} // Use formattedTrip
        >
          <Form.Item
            name="busId"
            label="Bus"
            rules={[{ required: true, message: "Please select a bus" }]}
          >
            <Select placeholder="Select Bus">
              {busesData.map((bus) => (
                <Select.Option key={bus._id} value={bus._id}>
                  {bus.name} - {bus.brand} ({bus.model})
                </Select.Option>
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
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="departureTime"
            label="Departure"
            rules={[
              { required: true, message: "Please select departure time" },
            ]}
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
              Update Trip
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateTripModal;
