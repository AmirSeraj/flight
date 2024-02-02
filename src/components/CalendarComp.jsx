import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useRef, useState } from "react";

const CalendarComp = () => {
  //date state
  //in order to use this in a form define this state where you want to have form
  const [calendar, setCalendar] = useState("");

  //open close
  const [open, setOpen] = useState(false);

  // define ref
  const refOne = useRef();

  useEffect(() => {
    setCalendar(format(new Date(), "dd-LLL-yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const handleSelect = (date) => {
    setCalendar(format(date, "dd-LLL-yyyy"));
  };

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
      className="min-w-[250px] sm:w-auto w-full cursor-pointer h-[50px] border border-[#818494] rounded-md flex gap-4 items-center px-2 relative"
    >
      <IoCalendarOutline size={20} />
      <div className="flex flex-col">
        <span className={`${calendar && "text-[0.75rem]"}`}>Date</span>
        {/* <input readOnly value={calendar} /> */}
        <span className="text-sm">{calendar}</span>
      </div>

      <div ref={refOne}>
        {open && (
          <Calendar
            // date={new Date()}
            onChange={handleSelect}
            className="absolute top-[50px] shadow-lg rounded-md left-0 border border-gray-400"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarComp;
