import React from 'react'
import TotalRevenue from '../TotalRevenue'
import Chart from '../Chart'

export default function Admin_dashboard() {
  return (
    <div>
       <div>
    <div>
              <input type="text" placeholder="Type.." className="input input-neutral ml-7" />
              </div>
   <TotalRevenue />
    <Chart />
    </div>
    </div>
  )
}
