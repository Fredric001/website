import React from 'react'

function TextRoadmap() {
  return (
    <section className="relative bg-[#d9d9d9] py-12 px-6 md:px-10 lg:px-16 font-['Poppins',sans-serif] overflow-x-auto">
      {/* Vertical TEXT Label */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-6xl lg:text-7xl font-black text-[#003b5c] whitespace-nowrap">
        TEXT
      </div>

      {/* Level Info */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-10 lg:ml-32">
        <div className="bg-[#b00059] text-white p-6 rounded-xl text-center w-48">
          <div className="text-xl lg:text-2xl font-bold">
            LEVEL
            <br />
            <span className="text-3xl lg:text-4xl">4</span>
          </div>
        </div>
        <p className="text-[#003b5c] text-lg lg:text-xl max-w-md text-center lg:text-left">
          Today’s most important text-based coding languages with certificates
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        {/* Roadmap Grid */}
        <div className="lg:ml-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Row 1 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">SCOOLCODE MASTER</div>
              <b className="text-lg lg:text-xl">401</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">SCOOLCODE MASTER</div>
              <b className="text-lg lg:text-xl">402</b>
            </div>

            {/* Row 2 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-sm lg:text-base font-medium">BASICS OF AI</div>
              <b className="text-lg lg:text-xl">403</b>
            </div>

            {/* Row 3 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-sm lg:text-base font-medium">
                LEGO ROBOTICS
                <br />
                WITH PYTHON
              </div>
              <b className="text-lg lg:text-xl">405</b>
            </div>

            {/* Row 4 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">GODOT / PYTHON</div>
              <b className="text-lg lg:text-xl">411</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">GODOT / PYTHON</div>
              <b className="text-lg lg:text-xl">412</b>
            </div>

            {/* Row 5 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">UNITY</div>
              <b className="text-lg lg:text-xl">421</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">UNITY</div>
              <b className="text-lg lg:text-xl">422</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">UNITY</div>
              <b className="text-lg lg:text-xl">423</b>
            </div>

            {/* Row 6 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">PYTHON</div>
              <b className="text-lg lg:text-xl">431</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">PYTHON</div>
              <b className="text-lg lg:text-xl">432</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">PYTHON</div>
              <b className="text-lg lg:text-xl">433</b>
            </div>

            {/* Row 7 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">AI WITH PYTHON</div>
              <b className="text-lg lg:text-xl">434</b>
            </div>
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center">
              <div className="text-sm lg:text-base font-medium">AI WITH PYTHON</div>
              <b className="text-lg lg:text-xl">435</b>
            </div>

            {/* Row 8 */}
            <div className="bg-white border-3 border-[#9cc800] rounded-xl p-4 text-center col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-sm lg:text-base font-medium">DEVELOPER</div>
              <div className="text-sm lg:text-base font-medium">MASTERCLASS</div>
              <b className="text-lg lg:text-xl">491</b>
            </div>
          </div>
        </div>

        {/* Exam Card */}
        <div className="lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8 lg:mt-0">
          <div className="bg-[#003b5c] text-white rounded-xl p-6 lg:p-8 text-center w-full lg:w-56 mx-auto">
            <div className="font-semibold text-lg lg:text-xl">PYTHON</div>
            <div className="font-semibold text-xl lg:text-2xl mt-1">EXAM</div>
            <span className="text-sm lg:text-base block mt-3 opacity-90">OPTIONAL</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextRoadmap