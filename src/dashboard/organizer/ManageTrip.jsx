import { Tabs } from "antd";
import "antd/dist/reset.css";
import ManageTripsCard from "./ManageTripsCard";

const ManageTrip = () => {
  

  return (
    <div className="p-4">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Upcoming" key="1">
          {/* {renderTrips("upcoming")} */}
          <ManageTripsCard status="upcoming" />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Active" key="2">
          {/* {renderTrips("active")} */}
          <ManageTripsCard status="active" />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Completed" key="3">
          <ManageTripsCard status="completed" />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ManageTrip;
