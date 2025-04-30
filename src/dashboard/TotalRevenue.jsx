import React, { useState, useEffect } from "react";
import { Lock, CreditCard, Truck, Cloud, User, Clipboard, CheckCircle, Activity, HelpCircle } from "lucide-react"; // Icons for new events
import Card from "../components/ui/Card";


const Dashboard = () => {
  const [successfulPayments, setSuccessfulPayments] = useState(250);
  const [pendingPayments, setPendingPayments] = useState(50);
  const [totalVehicles, setTotalVehicles] = useState(120);
  const [acVehicles, setAcVehicles] = useState(30);
  const [failedPayments, setFailedPayments] = useState(5);
  const [newUsers, setNewUsers] = useState(10);
  const [supportTickets, setSupportTickets] = useState(2);
  const [completedOrders, setCompletedOrders] = useState(180);
  const [activeSessions, setActiveSessions] = useState(25);

  useEffect(() => {
    // Simulating data changes with animation effect
    const interval = setInterval(() => {
      setSuccessfulPayments((prev) => prev + Math.floor(Math.random() * 10));
      setPendingPayments((prev) => prev + Math.floor(Math.random() * 2));
      setTotalVehicles((prev) => prev + Math.floor(Math.random() * 5));
      setAcVehicles((prev) => prev + Math.floor(Math.random() * 3));
      setFailedPayments((prev) => prev + Math.floor(Math.random() * 3));
      setNewUsers((prev) => prev + Math.floor(Math.random() * 5));
      setSupportTickets((prev) => prev + Math.floor(Math.random() * 1));
      setCompletedOrders((prev) => prev + Math.floor(Math.random() * 10));
      setActiveSessions((prev) => prev + Math.floor(Math.random() * 2));
    }, 3000); // Change data every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleViewAll = (section) => {
    alert(`View All clicked for ${section}`);
    // You can redirect to a detailed page or show a modal here.
  };

  return (
    <div className="dashboard">
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        <Card
          title="Successful Payments"
          count={successfulPayments}
          styleClass="bg-green-500 text-white"
          icon={<CreditCard size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Successful Payments")}
        />
        <Card
          title="Pending Payments"
          count={pendingPayments}
          styleClass="bg-yellow-500 text-white"
          icon={<Lock size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Pending Payments")}
        />
        <Card
          title="Total Vehicles"
          count={totalVehicles}
          styleClass="bg-blue-500 text-white"
          icon={<Truck size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Total Vehicles")}
        />
        <Card
          title="AC Vehicles"
          count={acVehicles}
          styleClass="bg-purple-500 text-white"
          icon={<Cloud size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("AC Vehicles")}
        />
        <Card
          title="Failed Payments"
          count={failedPayments}
          styleClass="bg-red-500 text-white"
          icon={<CreditCard size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Failed Payments")}
        />
        <Card
          title="New Users"
          count={newUsers}
          styleClass="bg-blue-600 text-white"
          icon={<User size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("New Users")}
        />
        <Card
          title="Support Tickets"
          count={supportTickets}
          styleClass="bg-orange-500 text-white"
          icon={<HelpCircle size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Support Tickets")}
        />
        <Card
          title="Completed Orders"
          count={completedOrders}
          styleClass="bg-teal-500 text-white"
          icon={<CheckCircle size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Completed Orders")}
        />
        <Card
          title="Active Sessions"
          count={activeSessions}
          styleClass="bg-indigo-500 text-white"
          icon={<Activity size={24} />}
          animation={true}
          onViewAllClick={() => handleViewAll("Active Sessions")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
