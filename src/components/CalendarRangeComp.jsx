import { IoCalendarOutline } from "react-icons/io5";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useRef, useState } from "react";

const CalendarComp = () => {
  const [direction, setDirection] = useState("horizontal");
  //date state
  //in order to use this in a form define this state where you want to have form
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log("range:", format(range[0].startDate, "dd-LLL-yyyy"));

  //open close
  const [open, setOpen] = useState(false);

  // define ref
  const refOne = useRef();

  useEffect(() => {
    const handleSize = () => {
      const screenSize = window.innerWidth;
      const direction = screenSize < 768 ? "vertical" : "horizontal";
      setDirection(direction);
    };
    handleSize();
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={() => setOpen(true)}
      className="min-w-[250px] sm:w-auto w-full cursor-pointer h-[50px] border border-[#818494] rounded-md flex gap-2 items-center px-2 md:relative sm:flex-1"
    >
      <IoCalendarOutline size={20} />
      <div className="flex flex-col">
        <span className="text-[0.75rem]">Date</span>
        {/* <input readOnly value={calendar} /> */}
        <span className="text-[0.78rem]">
          {format(range[0].startDate, "dd-LLL-yyyy")} to{" "}
          {format(range[0].endDate, "dd-LLL-yyyy")}
        </span>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            // date={new Date()}
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction={direction}
            className="absolute left-[20px] top-[50px] shadow-lg rounded-md lg:left-0 border border-gray-400"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarComp;
