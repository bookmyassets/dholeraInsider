import React from "react";
import "../about-us/about.css";

export default function CommonForm({title}) {
  return (
    <div>
      <section className="py-12 bg-gradient-to-r from-gray-900 to-teal-900 animate-gradient-x">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">
             {title}
            </h2>
            <p className="text-gray-300 mt-4 text-center">
             Maximize your ROI with professional market insights
            </p>

            <form className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                <label
                  htmlFor="phone"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your phone number"
                />
              </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
