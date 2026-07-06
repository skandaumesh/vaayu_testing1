import React from "react";

const SessionsTable = ({ sessions }) => {
  return (
    <div className="space-y-20">
      {sessions.map((session, i) => (
        <div key={i} className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-white">{session.day}</h2>
            <p className="text-lg text-white">{session.date}</p>
            <p className="text-lg text-white">{session.time}</p>
            {session.sessionTitle && (
              <h3 className="text-2xl font-semibold text-white mt-4">{session.sessionTitle}</h3>
            )}
          </div>

          {session.blocks.map((block, j) => (
            <div key={j} className="max-w-6xl mx-auto space-y-2" data-aos="fade-up">
              {block.title && (
                <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4">
                  {block.title}
                </h3>
              )}
              {block.chairs && (
                <p className="text-center text-yellow-100 text-sm mb-2">Chair persons: {block.chairs}</p>
              )}

              {/* Special layout for Q&A */}
              {block.title?.toLowerCase().includes("q&a") ? (
                <div className="grid grid-cols-2 text-white text-sm md:text-base border border-white">
                  {block.points.map((point, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-[#5B6641] px-4 py-3 font-semibold border-r border-white">
                        {point.label}
                      </div>
                      <div className="bg-[#5B6641] px-4 py-3">{point.time}</div>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                // Standard 3-column session block
                <div className="grid grid-cols-3 text-white text-sm md:text-base border border-white">
                  {block.points.map((point, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-[#5B6641] px-4 py-3 font-semibold border-r border-white">
                        {point.label}
                        {point.detail && `: ${point.detail}`}
                      </div>
                      <div className="bg-[#5B6641] px-4 py-3 border-r border-white">
                        {point.speaker}
                      </div>
                      <div className="bg-[#5B6641] px-4 py-3">
                        {point.time}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SessionsTable;
