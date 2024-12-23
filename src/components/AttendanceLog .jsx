import React, { useState } from "react";

const AttendanceLog = () => {
  const [activeTab, setActiveTab] = useState("attendance");

  const attendanceData = [
    { date: "01-10-24", status: "Present", clockIn: "10:02 Am", clockOut: "7:00 Pm", duration: "9 hrs 2 min" },
    { date: "30-09-24", status: "Present", clockIn: "10:45 Am (L)", clockOut: "7:15 Pm", duration: "9 hrs 2 min" },
    { date: "29-09-24", status: "Absent", clockIn: "--", clockOut: "--", duration: "--" },
    { date: "28-09-24", status: "Present", clockIn: "10:10 Am", clockOut: "7:30 Pm", duration: "9 hrs 2 min" },
    { date: "27-09-24", status: "Weekly Off", clockIn: "--", clockOut: "--", duration: "--" },
    { date: "26-09-24", status: "Anomaly", clockIn: "10:10 Am", clockOut: "AC", duration: "00:00" },
    { date: "25-09-24", status: "Present", clockIn: "10:10 Am", clockOut: "7:00 Pm", duration: "9 hrs 2 min" },
  ];

  return (
    <div className="p-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("attendance")}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === "attendance"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Attendance Log
          </button>
          <button
            onClick={() => setActiveTab("leave")}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === "leave"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Leave Log
          </button>
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === "attendance" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Attendance Log</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Clock In</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Clock Out</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-3 ">{row.date}</td>
                    <td className="px-6 py-3 ">{row.status}</td>
                    <td className="px-6 py-3 ">{row.clockIn}</td>
                    <td className="px-6 py-3 ">{row.clockOut}</td>
                    <td className="px-6 py-3 ">{row.duration}</td>
                    <td className="px-6 py-3 text-gary-700 hover:underline cursor-pointer underline">Get Approval</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-blue-600 text-sm cursor-pointer hover:underline">View More</div>
          </div>
        )}

        {activeTab === "leave" && (
          <div>
            <h2 className="text-lg font-semibold">Leave Log</h2>
            <p className="text-gray-600 mt-2">No leave records found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceLog;
