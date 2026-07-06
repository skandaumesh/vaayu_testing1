import React from 'react';

const RegistrationModal = ({ onClose }) => {
  return ( 
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-sm text-center relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-lg font-bold text-[#4e794c] mb-6">Please choose your category:</h2>

        <div className="space-y-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3ps4WQs-C6Zwgds1_iareUe19P0QF8BWAbWDjXnZsbuFZBg/viewform"
            className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Indian Delegate
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9L0X3Lfx1-_RQleLXxw0WRbpSK4_kvzM8bR6G31eqqlm9Tg/viewform"
            className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            US & European Delegate
          </a>
            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9L0X3Lfx1-_RQleLXxw0WRbpSK4_kvzM8bR6G31eqqlm9Tg/viewform"
            className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            APIPA & other International Delegate
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
