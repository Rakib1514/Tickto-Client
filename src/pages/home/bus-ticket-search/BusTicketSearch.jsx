import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Radio,
  Button,
  Row,
  Col,
  Typography,
} from "antd";
import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import moment from "moment";

const BusTicketSearch = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Search values:", values);
    // TODO: handle search action
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 px-4"
    >
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
              <Input placeholder="From" prefix={<EnvironmentOutlined />} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={8}>
            <Form.Item
              name="to"
              label="To"
              rules={[{ required: true, message: "Please enter destination" }]}
            >
              <Input
                placeholder="To"
                prefix={<EnvironmentOutlined rotate={180} />}
              />
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
