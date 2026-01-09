// // StatCard.jsx
// import React from 'react';


// const Card = ({ title, value, change, changeColor, icon, subtitle }) => {
//   return (
//     <div className="bg-gray-50 max-w-[1550px] ml-95 rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
//       <div className="flex items-center justify-between mb-3">
//         <div className="text-sm font-medium text-gray-600">{title}</div>
//         <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg flex items-center justify-center">
//           {icon}
//         </div>
//       </div>

//       <div className="text-2xl font-bold text-gray-800">{value}</div>

//       <div className="mt-3 flex items-center">
//         <span className={`inline-flex items-center text-xs font-medium ${changeColor}`}>
//           {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
//         </span>
//         <span className="ml-2 text-xs text-gray-500">From The Last Month</span>
//       </div>
//     </div>




//   );
// };

// export default Card;



















import {
  ShoppingBag,
  Users,
  DollarSign,
  Clock,
  RotateCcw,
} from "lucide-react";

import Order from "./Order";
import Products from "./Products";

import Persons from "./Persons";
import Billing from "./Billing";

export default function StatsCards() {
  return (
    <>
    <div className="w-full overflow-x-auto">
      <div className="flex gap-14 max-w-[1550px] ml-95">

        {/* Card 1 */}
        <div className="w-[260px] bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <h2 className="text-2xl font-bold text-gray-900">123</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr  from-pink-500 to-orange-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-green-500 font-medium">+28%</span>
            <span className="text-gray-400">From The Last Month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[260px] bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Taken</p>
              <h2 className="text-2xl font-bold text-gray-900">123</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr  from-pink-500  to-orange-400 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-red-500 font-medium">-15%</span>
            <span className="text-gray-400">From The Last Month</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[260px] bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="text-2xl font-bold text-gray-900">123</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-green-500 font-medium">+28%</span>
            <span className="text-gray-400">From The Last Month</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[260px] bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Orders</p>
              <h2 className="text-2xl font-bold text-gray-900">$1234.99</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-red-500 font-medium">-28%</span>
            <span className="text-gray-400">From The Last Month</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[260px] bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Returns</p>
              <h2 className="text-2xl font-bold text-gray-900">$1234.99</h2>
            </div>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-red-500 font-medium">-28%</span>
            <span className="text-gray-400">From The Last Month</span>
          </div>
        </div>

      </div>
    </div>

    <Order />
    <Billing />
    <Products />
    <Persons />
    </>
  );
}


