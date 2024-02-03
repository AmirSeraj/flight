import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";

const Selector = () => {
  const [flightType, setFlightType] = useState("First class");
  const [open, setOpen] = useState(false);
  const flights = [
    "First class",
    "Economy",
    "Premium economy",
    "Business class",
  ];
  const handleSelect = (index) => {
    setFlightType(flights[index]);
    setOpen(false);
  };
  return (
    <div className="relative w-[200px]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded="false"
        className="w-auto rounded-full px-3 gap-2 text-[0.78rem] border-2 border-slate-700 py-1 flex justify-center items-center bg-[#ecf4fd] py"
      >
        {flightType}
        <IoIosArrowDown />
      </button>
      {open && (
        <div className="rounded-lg shadow-xl py-3 absolute top-9 w-auto z-[999] bg-white">
          {flights?.map((item, index) => (
            <div
              onClick={() => handleSelect(index)}
              key={index}
              className="hover:bg-[#b9c4e7] py-3 cursor-pointer flex gap-2 items-center pr-3"
            >
              <span className="pl-4 pr-2 text-sm">{item}</span>
              {item === flightType && <IoCheckmarkOutline />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
