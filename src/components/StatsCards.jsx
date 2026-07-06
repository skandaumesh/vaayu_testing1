import React, { useEffect, useState } from "react";
import { FaUserMd, FaProcedures, FaNotesMedical, FaSyringe } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Stats data with actual numeric values
const stats = [
  {
    icon: <FaUserMd size={40} />,
    value: 50,
    label: "Years of Combined Experience",
  },
  {
    icon: <FaProcedures size={40} />,
    value: 100000,
    label: "Patients Treated",
  },
  {
    icon: <FaSyringe size={40} />,
    value: 200000,
    label: "Lives Impacted",
  },
  {
    icon: <FaNotesMedical size={40} />,
    value: 15000,
    label: "Bronchoscopy/ Intervention Procedures Done",
  },
];

// Format numbers into readable format (e.g., 100000 → 100K+)
const formatValue = (val) => {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M+`;
  if (val >= 1000) return `${Math.floor(val / 1000)}K+`;
  return `${val}+`;
};

const StatCard = ({ icon, value, label, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [trigger, value]);
return (
  <div className="bg-[#5B6641] text-white min-h-[220px] px-6 py-10 rounded-md flex flex-col items-center justify-center text-center space-y-4 shadow-md transition-all duration-300 hover:scale-105">
    
    <div className="text-3xl">{icon}</div>

    <div className="text-3xl font-bold">
      {trigger ? formatValue(count) : "0"}
    </div>

    <div className="text-sm uppercase tracking-wide leading-tight px-2">
      {label}
    </div>

  </div>
);
};  // ✅ FIXED
const StatsCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
<div ref={ref} className="bg-[#e6ede0] py-10 px-5 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            trigger={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
