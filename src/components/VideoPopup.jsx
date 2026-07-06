import React from "react";

const VideoPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div className="relative w-[90%] md:w-[400px]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl"
        >
          ✕
        </button>

        {/* Video */}
        <div className="relative pb-[177%] h-0 overflow-hidden rounded-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/OEPhL7rw7FE?autoplay=1&mute=1"
            title="Vaayu Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default VideoPopup;