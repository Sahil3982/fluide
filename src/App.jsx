import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainFile from "./components/MainFile";

const App = () => {
  return (
    <>
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          {/* Navbar */}
          <Navbar />

          {/* Main Pages */}
          <main className="flex-grow p-6 bg-gray-100">
            <Routes>
              <Route
                path="/"
                element={
                  <MainFile/>
                }
              />
              <Route path="/attendance" element={<h1>Addenence</h1>} />
              <Route path="/leave" element={<h1>Leave</h1>} />
              <Route path="/company-details" element={<h1>Company details</h1>} />
              <Route path="/profile-settings" element={<h1>Profile & Settings</h1>} />
              <Route path="/help" element={<h1>Help</h1>} />
              <Route path="/logout" element={<h1>Logout</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
    </>
  );
};

export default App;
