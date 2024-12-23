import React from "react";

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white  rounded-md shadow-xl p-4 w-1/5 h-32">
      <div className="flex items-center space-x-2">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="text-2xl font-semibold text-gray-900 mt-2">{value}</p>
    </div>
  );
};

export default InfoCard;
