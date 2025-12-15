import React from "react";

const Level = ({ level, start = false, children }) => (
  <div className="flex items-center gap-4 md:gap-6 lg:gap-10 mb-8 lg:mb-12">
    {/* Level Info */}
    <div className="w-32 md:w-36 lg:w-40 flex-shrink-0">
      <div className="flex justify-center">
        <div className="bg-[#b00059] text-white p-4 md:p-6 rounded-xl w-full text-center">
          <strong className="text-lg md:text-2xl block">
            LEVEL
            <br />
            {level}
          </strong>
          {start && <span className="text-sm block mt-2">START</span>}
        </div>
      </div>
    </div>

    {/* Courses - Horizontal scroll container */}
    <div className="flex-1 min-w-0">
      <div className="flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto pb-4">
        {children}
      </div>
    </div>
  </div>
);

const Course = ({ title, code, optional = false }) => (
  <div className="border-3 border-[#9cc800] rounded-xl p-4 min-w-[140px] md:min-w-[150px] lg:min-w-[160px] text-center flex-shrink-0">
    <div className="text-sm md:text-base font-medium">{title}</div>
    <b className="text-base md:text-lg lg:text-xl block mt-1">{code}</b>
    {optional && (
      <span className="text-xs text-gray-600 block mt-2">OPTIONAL</span>
    )}
  </div>
);

const Exam = ({ title, subtitle, color = "green", children }) => (
  <div
    className={`${
      color === "green" ? "bg-[#c4d600]" : "bg-[#00a8e8]"
    } text-white rounded-xl p-4 md:p-5 min-w-[160px] md:min-w-[170px] lg:min-w-[180px] text-center flex-shrink-0`}
  >
    <div className="font-semibold text-sm md:text-base">{title}</div>
    <div className="font-semibold text-base md:text-lg lg:text-xl">
      {subtitle}
    </div>
    <span className="text-xs md:text-sm block mt-2">{children}</span>
  </div>
);

function Roadmap() {
  const tabs = [
    "1st graders",
    "2–3rd graders",
    "4–5th graders",
    "6–8th graders",
    "9th+ graders",
  ];

  return (
    <section className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      <h2 className="text-center text-[#003b5c] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
        Our best in class programming roadmap
      </h2>

      {/* Tabs */}
      <div className="flex justify-start md:justify-center gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-10 pb-4 border-b-3 border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 md:px-4 py-2 rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${
              index === 1
                ? "text-[#00a8ff] font-semibold bg-blue-50"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h3 className="text-center text-[#003b5c] text-xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-10">
        2–3rd graders
      </h3>

      <div className="relative flex">
        {/* BLOX Label */}
        <div className="lg:flex items-center  justify-center w-24 ">
          <div className="-rotate-90 text-5xl font-bold text-[#9cc800] opacity-80 whitespace-nowrap mb-40" style={{fontSize:"90px"}}>
            BLOX
          </div>
        </div>

        <div className="flex-1 lg:ml-8">
          {/* Visual Coding Section */}
          <div className="flex items-start mb-10 md:mb-14">
            <div className="w-1/4 lg:w-1/5 pr-4 md:pr-6 lg:pr-8 flex-shrink-0">
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-[#003b5c]">
                Visual coding
              </h1>
            </div>
            <div className="flex-1">
              <Level level="1" start>
                <Course title="DIGITAL DISCOVERY" code="111" />
                <Course title="DIGITAL DISCOVERY" code="112" />
                <Course title="DIGITAL DISCOVERY" code="113" />
                <Course title="DIGITAL DISCOVERY" code="114" />
                <Exam title="DIGITAL DISCOVERY" subtitle="EXAM" color="green">
                  OPTIONAL
                </Exam>
              </Level>
            </div>
          </div>

          {/* Advanced Level Section */}
          <div className="flex items-start">
            <div className="w-1/4 lg:w-1/5 pr-4 md:pr-6 lg:pr-8 flex-shrink-0">
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-[#003b5c]">
                Advanced level visual coding project
              </h1>
            </div>
            <div className="flex-1 ">
              <Level level="2">
                <Course title="BLOX" code="211" />
                <Course title="BLOX" code="212" />
                <Course title="BLOX" code="213" />
                <Course title="GAME DESIGN" code="291" optional />
                <Exam title="VISUAL PROGRAMMING" subtitle="EXAM" color="blue">
                  OPTIONAL
                </Exam>
              </Level>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;