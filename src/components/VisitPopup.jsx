import React from "react";
import { FaTimes } from "react-icons/fa";

const VisitPopup = ({ onClose }) => {
  return (
    <div className="fixed bottom-8 right-8 bg-white shadow-lg rounded-lg p-4 z-50 w-72 border border-gray-300 animate-fade-in">
      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-lg text-gray-800">Visit Vaayu Clinic</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-600">
          <FaTimes />
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Book your visit to our expert respiratory and sleep care specialists today!
      </p>
      <a
  href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#5B6641] text-white px-4 py-2 rounded mt-2 md:mt-0">
    BOOK AN APPOINTMENT
  </button>
</a>

    </div>
  );
};

export default VisitPopup;
