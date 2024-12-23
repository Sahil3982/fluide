import React from "react";

const Holiday = () => {
  const holidays = [
    { date: "1 Jan, Mon 2025", name: "New Year's Day" },
    { date: "1 Jan, Mon 2025", name: "New Year's Day" },
    { date: "1 Jan, Mon 2025", name: "New Year's Day" },
    { date: "1 Jan, Mon 2025", name: "New Year's Day" },
  ];

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Holidays</h2>
        <button className="text-blue-600 hover:underline text-sm">View All</button>
      </div>
      <ul className="space-y-3">
        {holidays.map((holiday, index) => (
          <li key={index} className="flex justify-between text-sm text-gray-700">
            <span>{holiday.date}</span>
            <span>{holiday.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Holiday;
