import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Typography,
  AutoComplete,
} from "antd";
import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import axios from "axios";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router";
import "../../Auth/auth.css"

const BusTicketSearch = () => {
  const [form] = Form.useForm();
  const [originSearchTerm, setOriginSearchTerm] = useState("");
  const [destinationSearchTerm, setDestinationSearchTerm] = useState("");
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  const navigate = useNavigate();

  // Fetch origin suggestions
  const { isFetching: isFetchingOrigins } = useQuery({
    queryKey: ["origins", originSearchTerm],
    queryFn: async () => {
      if (!originSearchTerm || originSearchTerm.length < 2) return [];
      const { data } = await axios.get(
        `/api/location?from=${originSearchTerm}`
      );
      setOriginOptions(data.map((origin) => ({ value: origin })));
      return data;
    },
    staleTime: 600000,
  });

  // Fetch destination suggestions
  const { isFetching: isFetchingDestinations } = useQuery({
    queryKey: ["destinations", destinationSearchTerm],
    queryFn: async () => {
      if (!destinationSearchTerm || destinationSearchTerm.length < 2) return [];
      const { data } = await axios.get(
        `/api/location?to=${destinationSearchTerm}`
      );
      setDestinationOptions(
        data.map((destination) => ({ value: destination }))
      );
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

    const departure = values.date.format("YYYY-MM-DD");

    const { from: origin, to: destination } = values;

    navigate(
      `/travel/bus?origin=${origin}&destination=${destination}&departure=${departure}`
    );
  };

  return (
    <div
      className=""
      // style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Search Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          background: "white",
          borderRadius: 8,
          padding: 20,
          minWidth: 250,
          maxWidth: 1200,
          margin: "0 auto",
        }}
        className="shadow-2xl !bg-white/60 !backdrop-blur-[6px]"
      >
        <Row gutter={[16, 16]} align="middle" className="">
          <Col xs={24} sm={8}>
            <Form.Item
              name="from"
              label="From"
              rules={[{ required: true, message: "Please enter origin" }]}
            >
              <AutoComplete
                options={originOptions}
                onSearch={handleOriginSearch}
                placeholder={'From'}
                
                notFoundContent={
                  isFetchingOrigins ? "Searching..." : "No suggestions found"
                }
              >
                <Input className="relative" prefix={<EnvironmentOutlined  className="absolute right-2 "/>} />
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
                notFoundContent={
                  isFetchingDestinations
                    ? "Searching..."
                    : "No suggestions found"
                }
              >
                <Input className="relative" prefix={<EnvironmentOutlined rotate={180} className="absolute right-2 "/>} />
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

        <Form.Item >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="!bg-primary hover:!bg-primary/75"
          >
            SEARCH
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BusTicketSearch;
