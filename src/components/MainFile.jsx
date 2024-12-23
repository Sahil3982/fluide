import React from "react";
import Holiday from "./Holiday";
import AttendanceLog from "./AttendanceLog ";
import DashboardStats from "./DashboardStats";
import Calendar from "./Calender";


const MainFile = () => {
  return (
    <div className="">
      {/* Dashboard Stats Section */}
      <div className="mb-8">
        <DashboardStats  />
       
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Attendance Log */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          <AttendanceLog />
        </div>

        {/* Calendar and Holidays */}
        <div>
          <Calendar />
          <div className="mt-6">
            <Holiday />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFile;
