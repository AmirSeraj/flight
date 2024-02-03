import React from "react";
import Search from "./Search";
import CalendarRangeComp from "./CalendarRangeComp";
import Origin from "./Origin";
import Destination from "./Destination";
import Travelers from "./Travelers";

const Tab1 = () => {
  return (
    <div className="flex flex-col gap-3 w-full py-5 h-auto">
      <div className="flex sm:flex-row flex-col flex-wrap w-full lg:gap-4 md:gap-2 sm:gap-1 gap-2 flex-shrink">
        <Origin />
        <Destination />
        {/* <CalendarComp /> */}
        <CalendarRangeComp />
        <Travelers />
        <Search />
      </div>
      <div className="flex gap-4 items-center mt-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-500 cursor-pointer border border-gray-300 rounded checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring focus:border-blue-300"
          />
          <span className="text-sm">Add a place to stay</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-500 cursor-pointer border border-gray-300 rounded checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring focus:border-blue-300"
          />
          <span className="text-sm">Add a car</span>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
