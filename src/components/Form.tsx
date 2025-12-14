import React from 'react'

function Form() {
  return (
    <section className="min-h-screen bg-[#f6f6f6] py-10 px-4 md:px-6 font-['Poppins',sans-serif]">
      <form className="bg-white max-w-5xl mx-auto p-8 md:p-9 rounded-2xl shadow-lg">
        <h2 className="text-center text-[#003b5c] mb-8 text-2xl md:text-3xl font-semibold">
          I would like to know more, please contact me!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              First name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              Last / Sur Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              Email address <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              Mobile/Cell Number <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select your country</option>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
            </select>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base text-[#003b5c] mb-2">
              Company/School/Institute <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-full text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent"
              placeholder="Enter your organization"
            />
          </div>
        </div>

        {/* Comments - Full width */}
        <div className="mt-6 flex flex-col">
          <label className="text-sm md:text-base text-[#003b5c] mb-2">
            Comments
          </label>
          <textarea 
            // rows="4"
            className="w-full px-4 py-3 border-2 border-[#00a8ff] rounded-xl text-sm md:text-base outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent resize-none"
            placeholder="Enter your comments or questions..."
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="mt-8 mb-6 flex items-start gap-3">
          <input 
            type="checkbox" 
            required 
            className="mt-1 w-4 h-4 text-[#00a8ff] rounded focus:ring-[#00a8ff]"
          />
          <span className="text-sm md:text-base text-gray-700">
            I agree to the handling of my personal information in accordance with the
            <a href="#" className="text-[#00a8ff] hover:underline ml-1">cobotkids Privacy Policy</a> 
            <span className="text-red-500 ml-1">*</span>
          </span>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="block mx-auto bg-[#63c5ea] text-white border-none px-9 py-3 text-base md:text-lg font-semibold rounded-full cursor-pointer hover:bg-[#4ab4e0] transition-colors duration-200"
        >
          Send <span className="ml-2">✈</span>
        </button>
      </form>
    </section>
  )
}

export default Form