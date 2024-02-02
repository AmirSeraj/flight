import React, { useEffect, useRef, useState } from "react";
import { BsGeoAltFill } from "react-icons/bs";

const Origin = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
        if (boxRef.current && !boxRef.current.contains(e.target)) {
            setOpen(false);
        }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    }
  },[])
  return (
    <div onClick={() => setOpen(true)} className="min-w-[250px] sm:w-auto w-full h-[50px] border border-[#818494] rounded-md rounded-e-xl flex gap-1 items-center pl-3 pr-1 relative cursor-pointer sm:flex-1">
      <BsGeoAltFill size={24} />
      <div className="flex flex-col">
        <span className="text-[0.75rem]">Leaving from</span>
        {/* <input readOnly value={calendar} /> */}
        <p className="text-[0.78rem] overflow-hidden w-[220px]"></p>
      </div>

      {/* search box */}
      <div ref={boxRef} className={`${open ? 'flex transition-all ease-in-out duration-1000' : 'hidden'} absolute border border-[#818494] -top-1 -left-2 w-[380px] flex-col bg-white z-[999] rounded-lg`}>
        <div className="w-full overflow-hidden h-[70px] border-b border-slate-500 flex items-center">
            <input className="w-full h-[80%] pl-3 overflow-hidden font-bold text-xl outline-none focus:outline-none text-[#818494]" placeholder="Leaving from" />
        </div>
        <div className="w-full min-h-[400px] overflow-y-scroll"></div>
      </div>
    </div>
  );
};

export default Origin;
