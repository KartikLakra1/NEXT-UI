import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen dark:bg-black/[0.96] bg-white antialiased bg-grid-white/[0.02] dark:text-white w-[100%] flex items-center justify-center">
      <div className="w-[100%] border-10 border-white p-8">
        <h1 className="text-2xl text-center">CONTACT </h1>
        <form className="flex flex-col items-center justify-center h-auto mx-auto">
          <div className="flex flex-col items-start justify-start p-4">
            <label>username</label>
            <input
              type="text"
              placeholder="john doe "
              className="text-black p-1"
            />
          </div>

          <div className="flex flex-col items-start justify-start p-4">
            <label>message</label>
            <input
              type="text"
              placeholder="what a lovely site"
              className="text-black p-1"
            />
          </div>
          <Meteors number={10} />
        </form>
      </div>
      {/* Meaty part - Meteor effect */}
    </div>
  );
};

export default page;
