import React from 'react';
import CountUp from 'react-countup';
export default function StatCard({ title, value, icon }) {
  return (
    <div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
      <div className="text-4xl text-green-700">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">
          <CountUp end={value} duration={2.5} separator="," />
        </p>
      </div>
    </div>
    </div>
  )
}
