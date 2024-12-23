import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard ";

const DashboardStats = () => {
  const stats = [
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      title: "October",
      value: " ",
    },
    {
      icon: null,
      title: "Present Days",
      value: "15",
    },
    {
      icon: null,
      title: "Total Leave Balance",
      value: "02",
    },
    {
      icon: null,
      title: "Outstanding Anomalies",
      value: "03",
    },
    {
      icon: null,
      title: "Avg. Working Hours",
      value: "9hrs 30min",
    },
  ];

  return (
    <div className="flex justify-between items-center gap-2 ">
      {stats.map((stat, index) => (
        <InfoCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
