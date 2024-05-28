import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";

const Card2 = ({ isDarkMode }) => {
  const products = [
    {
      id: 1,
      name: "Product A",
      date: "Apr 8, 2024",
      pictureUrl: "https://via.placeholder.com/150",
      quantity: 5,
      price: 100,
      action: "Available",
    },
    {
      id: 2,
      name: "Product B",
      date: "Apr 10, 2024",
      pictureUrl: "https://via.placeholder.com/150",
      quantity: 8,
      price: 150,
      action: "Out of Stock",
    },
    {
      id: 3,
      name: "Product C",
      date: "Apr 8, 2024",
      pictureUrl: "https://via.placeholder.com/150",
      quantity: 3,
      price: 200,
      action: "Available",
    },
    {
      id: 4,
      name: "Product D",
      date: "May 25, 2024",
      pictureUrl: "https://via.placeholder.com/150",
      quantity: 10,
      price: 180,
      action: "Available",
    },
    {
      id: 5,
      name: "Product E",
      date: "Apr 8, 2024",
      pictureUrl: "https://via.placeholder.com/150",
      quantity: 7,
      price: 220,
      action: "Out of Stock",
    },
  ];

  return (
    <div
      className={`shadow-lg  rounded-lg p-6 border ${isDarkMode ? "border-gray-700" : "border-gray-200"} ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } text-left`}
            >
              <th className="px-4 py-2">#ID</th>
              <th className="px-4 py-2">Picture</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                } border-b border-gray-300`}
              >
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img
                      src={product.pictureUrl}
                      alt={product.name}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    {product.name}
                  </div>
                </td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.date}</td>
                <td
                  className={`px-4 py-2 ${
                    product.action === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.action}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <button className="mr-2">
                      <MdModeEditOutline />
                    </button>
                    <button className="mr-2">
                      <MdDeleteOutline />
                    </button>
                    <button>
                      <IoEyeOutline />
                    </button>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card2;
