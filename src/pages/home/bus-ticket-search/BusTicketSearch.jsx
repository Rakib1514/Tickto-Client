import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Form, Input, DatePicker, Button, Row, Col, Typography, AutoComplete } from "antd";
import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import axios from "axios";
import debounce from "lodash.debounce";

const BusTicketSearch = () => {
  const [form] = Form.useForm();
  const [originSearchTerm, setOriginSearchTerm] = useState("");
  const [destinationSearchTerm, setDestinationSearchTerm] = useState("");
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  // Fetch origin suggestions
  const { isFetching: isFetchingOrigins } = useQuery({
    queryKey: ["origins", originSearchTerm],
    queryFn: async () => {
      if (!originSearchTerm || originSearchTerm.length < 2) return [];
      const { data } = await axios.get(`/api/location?from=${originSearchTerm}`);
      setOriginOptions(data.map(origin => ({ value: origin })));
      return data;
    },
    staleTime: 600000,
  });

  // Fetch destination suggestions
  const { isFetching: isFetchingDestinations } = useQuery({
    queryKey: ["destinations", destinationSearchTerm],
    queryFn: async () => {
      if (!destinationSearchTerm || destinationSearchTerm.length < 2) return [];
      const { data } = await axios.get(`/api/location?to=${destinationSearchTerm}`);
      setDestinationOptions(data.map(destination => ({ value: destination })));
      return data;
    },
    staleTime: 600000,
  });

  // Debounced search handlers
  const handleOriginSearch = debounce((value) => {
    setOriginSearchTerm(value);
  }, 300);

  const handleDestinationSearch = debounce((value) => {
    setDestinationSearchTerm(value);
  }, 300);

  const onFinish = (values) => {
    console.log("Search values:", values);
    // TODO: handle search action
  };

  return (
    <div className="py-12 px-4" style={{ backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Title Section */}
      <div className="flex justify-center items-center flex-col mb-8">
        <Typography.Title level={2} className="text-white">
          Reserve Your <span className="text-primary">Bus Seat</span> Instantly
        </Typography.Title>
        <Typography.Paragraph className="text-white">
          Book tickets for your next trip in seconds – safe, easy, and right at
          your fingertips!
        </Typography.Paragraph>
      </div>

      {/* Search Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: 8,
          padding: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={8}>
            <Form.Item
              name="from"
              label="From"
              rules={[{ required: true, message: "Please enter origin" }]}
            >
              <AutoComplete
                options={originOptions}
                onSearch={handleOriginSearch}
                placeholder="From"
                notFoundContent={isFetchingOrigins ? "Searching..." : "No suggestions found"}
              >
                <Input prefix={<EnvironmentOutlined />} />
              </AutoComplete>
            </Form.Item>
          </Col>

          <Col xs={24} sm={8}>
            <Form.Item
              name="to"
              label="To"
              rules={[{ required: true, message: "Please enter destination" }]}
            >
              <AutoComplete
                options={destinationOptions}
                onSearch={handleDestinationSearch}
                placeholder="To"
                notFoundContent={isFetchingDestinations ? "Searching..." : "No suggestions found"}
              >
                <Input prefix={<EnvironmentOutlined rotate={180} />} />
              </AutoComplete>
            </Form.Item>
          </Col>

          <Col xs={24} sm={8}>
            <Form.Item
              name="date"
              label="Journey Date"
              rules={[{ required: true, message: "Please select date" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                suffixIcon={<CalendarOutlined />}
                disabledDate={(current) =>
                  current && current < moment().startOf("day")
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="!bg-primary hover:!bg-primary/90"
          >
            SEARCH
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BusTicketSearch;