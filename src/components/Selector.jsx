import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Selector = () => {
  const [flightType, setFlightType] = useState("First class");
  const [open, setOpen] = useState(false);
  const flights = ["First class", "Economy", "Premium economy", "Business class"];
  return (
    <div className="relative w-[170px]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded="false"
        className="w-auto rounded-full px-3 gap-2 text-[0.78rem] border-2 border-slate-700 py-1 flex justify-center items-center bg-[#ecf4fd] py"
      >
        {flightType}
        <IoIosArrowDown />
      </button>
      {open && (
        <div className="rounded-lg shadow-lg py-3 absolute top-9 w-full">
          {flights?.map((item, index) => (
            <div key={index} className="hover:bg-[#c0c0c0]">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
