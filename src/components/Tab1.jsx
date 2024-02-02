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
    </div>
  );
};

export default Tab1;
