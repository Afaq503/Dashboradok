import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const XAxisComponent = ({ dataKey }) => {
  return <XAxis dataKey={dataKey} />;
};

const YAxisComponent = ({ dataKey }) => {
  return <YAxis dataKey={dataKey} />;
};

const CardChart1 = ({ isDarkMode }) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div
      className={`shadow-lg rounded-lg p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total Traffic</h2>
        <div
          className={`flex items-center rounded-full w-8 h-8 justify-center ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <BsThreeDots size={20} color={isDarkMode ? "#FFF" : "#333"} />
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={420}>
          <BarChart
            width={500}
            height={300}
            data={data}
            layout="horizontal"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxisComponent type="number" dataKey="pv" />
            <YAxisComponent type="category" dataKey="uv" />

            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CardChart1;
