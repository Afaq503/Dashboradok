import React from "react";
import { BsArrowUp, BsThreeDots } from "react-icons/bs";
import { IoWalletOutline, IoCartOutline, IoCashOutline } from "react-icons/io5";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const XAxisComponent = ({ dataKey }) => {
  return <XAxis dataKey={dataKey} />;
};

const YAxisComponent = ({ dataKey }) => {
  return <YAxis dataKey={dataKey} />;
};

const CardChart = ({ isDarkMode }) => {
  const data = [
    { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 2500, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 6000, pv: 9800, amt: 4290 },
    { name: "Page D", uv: 5780, pv: 3908, amt: 6000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 4181 },
    { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
    { name: "Page G", uv: 1490, pv: 4300, amt: 1100 },
  ];

  const cardItems = [
    { amount: 550, text: "Last Month Sales", change: 20, icon: <IoWalletOutline className="text-2xl" />, color: "bg-blue-500" },
    { amount: 300, text: "New Orders", change: 15, icon: <IoCartOutline className="text-2xl" />, color: "bg-green-500" },
    { amount: 750, text: "Total Revenue", change: 25, icon: <IoCashOutline className="text-2xl" />, color: "bg-yellow-500" },
  ];

  return (
    <div
      className={`shadow-lg rounded-lg p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total Earning</h2>
        <div
          className={`flex items-center rounded-full w-8 h-8 justify-center ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <BsThreeDots size={20} color={isDarkMode ? "#FFF" : "#333"} />
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={175}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxisComponent dataKey="name" />
            <YAxisComponent dataKey="uv" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-3 px-4 py-2 rounded-lg ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } mb-3`}
          >
            <div className={`flex items-center justify-center rounded-full ${item.color} text-black w-10 h-10`}>
              {item.icon}
            </div>
            <div className="flex-grow">
              <h6 className="mb-1 text-lg font-semibold">{item.amount}</h6>
              <p
                className={`mb-0 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.text}
              </p>
            </div>
            <div>
              <p className="mb-0 flex items-center text-sm text-green-500">
                <BsArrowUp className="mr-1" />
                <span>{item.change}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardChart;
