import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

const Card1 = ({ isDarkMode }) => {
  const countries = [
    {
      name: "Country A",
      price: 100,
      percentage: 25,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country B",
      price: 150,
      percentage: -15,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country C",
      price: 200,
      percentage: 10,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country D",
      price: 180,
      percentage: -5,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country E",
      price: 220,
      percentage: 30,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country F",
      price: 120,
      percentage: -20,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
    {
      name: "Country G",
      price: 250,
      percentage: 15,
      imageUrl: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
    },
  ];

  return (
    <div className={`shadow-lg rounded-lg p-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Sales by Countries</h2>
        <div className={`flex items-center rounded-full w-8 h-8 justify-center ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
          <BsThreeDots size={20} color={isDarkMode ? "#FFF" : "#333"} />
        </div>
      </div>
      <div>
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={country.imageUrl} alt={country.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">${country.price}</p>
                <p className="text-sm text-gray-500">{country.name}</p>
              </div>
            </div>
            <div className={`flex items-center ${country.percentage > 0 ? "text-green-500" : "text-red-500"}`}>
              <p>{country.percentage}%</p>
              {country.percentage > 0 ? <IoIosArrowRoundUp size={20} /> : <IoIosArrowRoundDown size={20} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
