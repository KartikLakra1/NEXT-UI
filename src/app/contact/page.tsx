import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen dark:bg-black/[0.96] bg-white antialiased bg-grid-white/[0.02] dark:text-white text-black w-[100%] flex items-center justify-center">
      {/* page */}
      <div className="w-[80%] md:w-[50%] relative  flex items-center justify-center">
        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-auto w-full rounded-full border flex  justify-center items-center mb-4 border-gray-500 text-center">
            <h1 className="text-2xl md:text-4xl p-2">Contact Us</h1>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            <label>Email</label>
            <input
              type="text"
              className="bg-transparent  border-red-100 dark:text-white text-black font-light w-full "
            />
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            <label className="font-bold text-xl text-white">Message</label>
            <textarea className="w-full h-40 overflow-scroll bg-transparent dark:text-white text-black font-light border-white"></textarea>
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Submit
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default page;
