import React from 'react'

const Level = ({ level, title, start = false, children }) => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 my-12">
    {/* Level Info */}
    <div className="w-full lg:w-80 flex-shrink-0">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="bg-[#b00059] text-white p-6 rounded-xl w-36 text-center mx-auto lg:mx-0">
          <strong className="text-xl md:text-2xl block">
            LEVEL
            <br />
            {level}
          </strong>
          {start && (
            <span className="text-sm block mt-2">START</span>
          )}
        </div>
        <p className="text-[#003b5c] text-lg md:text-xl mt-4 lg:mt-0 text-center lg:text-left">
          {title}
        </p>
      </div>
    </div>

    {/* Courses */}
    <div className="flex-1">
      <div className="flex flex-wrap gap-3 md:gap-4">
        {children}
      </div>
    </div>
  </div>
)

const Course = ({ title, code, optional = false }) => (
  <div className="border-3 border-[#9cc800] rounded-xl p-4 md:p-5 min-w-[150px] text-center flex-1 md:flex-none">
    <div className="text-sm md:text-base font-medium">{title}</div>
    <b className="text-lg md:text-xl block mt-1">{code}</b>
    {optional && (
      <span className="text-xs text-gray-600 block mt-2">OPTIONAL</span>
    )}
  </div>
)

const Exam = ({ title, subtitle, color = 'green', children }) => (
  <div className={`${color === 'green' ? 'bg-[#c4d600]' : 'bg-[#00a8e8]'} text-white rounded-xl p-5 md:p-6 min-w-[180px] text-center flex-1 md:flex-none`}>
    <div className="font-semibold text-sm md:text-base">{title}</div>
    <div className="font-semibold text-lg md:text-xl">{subtitle}</div>
    <span className="text-xs md:text-sm block mt-2">{children}</span>
  </div>
)

function Roadmap() {
  const tabs = [
    '1st graders',
    '2–3rd graders',
    '4–5th graders',
    '6–8th graders',
    '9th+ graders'
  ]

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      <h2 className="text-center text-[#003b5c] text-3xl md:text-4xl font-bold mb-8">
        Our best in class programming roadmap
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-2 md:gap-6 mb-10 pb-4 border-b-3 border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all whitespace-nowrap ${
              index === 1
                ? 'text-[#00a8ff] font-semibold bg-blue-50'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h3 className="text-center text-[#003b5c] text-2xl md:text-3xl font-semibold my-10">
        2–3rd graders
      </h3>

      {/* BLOX Label - Desktop Only */}
      <div className="hidden lg:block absolute left-8 top-[460px] -rotate-90 text-6xl font-bold text-[#9cc800] opacity-80">
        BLOX
      </div>

      <div className="relative">
        <Level level="1" title="Visual coding and various digital topics for beginners" start>
          <Course title="DIGITAL DISCOVERY" code="111" />
          <Course title="DIGITAL DISCOVERY" code="112" />
          <Course title="DIGITAL DISCOVERY" code="113" />
          <Course title="DIGITAL DISCOVERY" code="114" />
          <Exam title="DIGITAL DISCOVERY" subtitle="EXAM" color="green">
            OPTIONAL
          </Exam>
        </Level>

        <Level level="2" title="Advanced level visual coding projects">
          <Course title="BLOX" code="211" />
          <Course title="BLOX" code="212" />
          <Course title="BLOX" code="213" />
          <Course title="GAME DESIGN" code="291" optional />
          <Exam title="VISUAL PROGRAMMING" subtitle="EXAM" color="blue">
            OPTIONAL
          </Exam>
        </Level>
      </div>
    </section>
  )
}

export default Roadmap