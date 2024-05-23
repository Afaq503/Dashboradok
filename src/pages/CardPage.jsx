import React from "react";
import Card from "../components/Card";
import {
  IoBagHandleOutline,
  IoBarChartOutline,
  IoPeopleOutline,
  IoWalletOutline,
} from "react-icons/io5";

const CardPage = ({ isDarkMode }) => {
  return (
    <div
      className={`container mx-auto py-8 px-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-6">
          <Card
            text="Total Revenue"
            icon={<IoWalletOutline />}
            price="$92,854"
            percentage={6.32}
            isDarkMode={isDarkMode}
            iconBgColor="linear-gradient(310deg, #7928ca, #ff0080)"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-6">
          <Card
            text="Total Customer"
            icon={<IoPeopleOutline />}
            price="$48,789"
            percentage={12.45}
            isDarkMode={isDarkMode}
            iconBgColor="linear-gradient(to top, rgb(0, 198, 251) 0%, rgb(0, 91, 234) 100%)"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-6">
          <Card
            text="Total Orders"
            icon={<IoBagHandleOutline />}
            price="$88,234"
            percentage={3.12}
            isDarkMode={isDarkMode}
            iconBgColor="linear-gradient(to right, rgb(238, 9, 121), rgb(255, 106, 0))"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-6">
          <Card
            text="Conversion Rate"
            icon={<IoBarChartOutline />}
            price="$48.76"
            percentage={8.52}
            isDarkMode={isDarkMode}
            iconBgColor="linear-gradient(310deg, #17ad37, #98ec2d)"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
