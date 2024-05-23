import React from 'react';

const Card = ({ text, icon, price, percentage, isDarkMode, iconBgColor = 'bg-blue-500' }) => {
  const iconBgStyle = iconBgColor.includes('linear-gradient') ? { background: iconBgColor } : {};
  
  return (
    <div className={`shadow-lg rounded-lg p-6 border ${isDarkMode ? 'border-gray-700 text-white bg-gray-900' : 'border-gray-200 text-gray-900 bg-white'}`}>
      <div className="flex justify-between items-center mb-4">
        <div>{text}</div>
        <div className="p-3 rounded-full text-white" style={iconBgStyle}>
          {React.cloneElement(icon, { size: 24 })}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{price}</div>
        <div className={`text-sm ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? "+" : ""}
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Card;
