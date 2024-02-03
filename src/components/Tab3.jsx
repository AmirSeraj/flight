import React, { useState } from "react";
import Travelers from "./Travelers";
import Origin from "./Origin";
import Destination from "./Destination";
import CalendarComp from "./CalendarComp";
import { IoMdAdd } from "react-icons/io";
import Search from "./Search";

const Tab3 = () => {
  const [flightCount, setFlightCount] = useState(0);
  const handleAddFlight = () => {
    setFlightCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setFlightCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <Travelers className="w-[250px] py-1" className2="!left-0" />
      {/* part 1 */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Flight 1</h1>
        <div className="flex flex-wrap gap-3">
          <Origin />
          <Destination />
          <CalendarComp />
        </div>
      </div>
      {/* part 2 */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Flight 2</h1>
        <div className="flex flex-wrap gap-3">
          <Origin />
          <Destination />
          <CalendarComp />
        </div>
      </div>
      {/* add another flight */}
      {[...Array(flightCount)].map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">{`Flight ${index + 3}`}</h1>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-400 text-[0.8rem]"
            >
              Remove
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Origin />
            <Destination />
            <CalendarComp />
          </div>
        </div>
      ))}

      {/* add & search */}
      <div className="flex justify-between items-center">
        <div
          className="flex items-center text-blue-700 gap-1 cursor-pointer"
          onClick={handleAddFlight}
        >
          <IoMdAdd />
          <span className="text-sm">Add Another Flight</span>
        </div>
        <Search className="!w-auto" />
      </div>
    </div>
  );
};

export default Tab3;
