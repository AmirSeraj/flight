import React from "react";
import Origin from "./Origin";
import Destination from "./Destination";
import CalendarComp from "./CalendarComp";
import Travelers from "./Travelers";
import Search from "./Search";

const Tab2 = () => {
  return (
    <div className="flex sm:flex-row flex-col flex-wrap w-full lg:gap-4 md:gap-2 sm:gap-1 gap-2 flex-shrink">
      <Origin />
      <Destination />
      <CalendarComp />
      <Travelers />
      <Search />
    </div>
  );
};

export default Tab2;
