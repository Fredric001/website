import React from 'react'

function ComparisonTable() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      <h2 className="text-center text-[#003b5c] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
        How Do CobotKids Python Diplomas Compare?
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Header Row - Hidden on mobile */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-xl">
          <div className="text-center font-semibold text-[#003b5c]"></div>
          <div className="text-center font-semibold text-[#003b5c]">
            Logiscool
            <br />
            Diploma
          </div>
          <div className="text-center font-semibold text-[#003b5c]">
            School IT
            <br />
            Certification
          </div>
          <div className="text-center font-semibold text-[#003b5c]">
            Other Coding
            <br />
            Bootcamps
          </div>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="bg-[#ededed] p-4 rounded-xl font-medium text-gray-800 order-1">
            project-based learning
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#6fbf00] order-2">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Logiscool Diploma</span>
            ✔ yes
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#009fe3] order-3">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">School IT Certification</span>
            🔒 limited
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#009fe3] order-4">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Other Coding Bootcamps</span>
            🍃 sometimes
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="bg-[#ededed] p-4 rounded-xl font-medium text-gray-800 order-1">
            proof of coding skills
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#6fbf00] order-2">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Logiscool Diploma</span>
            ✔ yes
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#009fe3] order-3">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">School IT Certification</span>
            🍃 sometimes
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#009fe3] order-4">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Other Coding Bootcamps</span>
            🍃 sometimes
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="bg-[#ededed] p-4 rounded-xl font-medium text-gray-800 order-1">
            career-ready digital skills
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#6fbf00] order-2">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Logiscool Diploma</span>
            ✔ yes
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#b00059] order-3">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">School IT Certification</span>
            ✖ no
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#6fbf00] order-4">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Other Coding Bootcamps</span>
            ✔ yes
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="bg-[#ededed] p-4 rounded-xl font-medium text-gray-800 order-1">
            no extra cost
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#6fbf00] order-2">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Logiscool Diploma</span>
            ✔ yes
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#b00059] order-3">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">School IT Certification</span>
            ✖ no
          </div>
          <div className="bg-[#f3f3f3] p-4 rounded-xl text-center font-medium text-[#b00059] order-4">
            <span className="sm:hidden block text-sm text-gray-600 mb-1">Other Coding Bootcamps</span>
            ✖ no
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable