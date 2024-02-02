import { IoPerson } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Travelers = () => {
  const [countTravelers, setCountTravelers] = useState(1);
  //open close
  const [open, setOpen] = useState(false);

  // define ref
  const boxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="min-w-[200px] sm:w-auto w-full cursor-pointer h-[50px] border border-[#818494] rounded-md flex gap-2 items-center px-2 relative sm:flex-1"
    >
      <IoPerson size={20} />
      <div className="flex flex-col">
        <span className="text-[0.75rem]">Travelers</span>
        {/* <input readOnly value={calendar} /> */}
        <span className="text-sm">{countTravelers} Travelers</span>
      </div>

      {open && (
        <div
          className="w-[350px] h-auto p-3 flex gap-2 bg-white border border-slate-400 shadow-lg absolute top-[50px] right-0 rounded-md"
          ref={boxRef}
        >
          <div className="w-full flex justify-between gap-2 p-2">
            <span>Adults</span>
            <div className="flex gap-2">
              <span className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg">
                -
              </span>
              <span className="flex justify-center items-center">1</span>
              <span className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg">
                +
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travelers;
