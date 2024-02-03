// import React, { useEffect, useRef, useState } from "react";
// import { BsGeoAltFill } from "react-icons/bs";

// const Destination = () => {
//   const [open, setOpen] = useState(false);
//   const boxRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//         if (boxRef.current && !boxRef.current.contains(e.target)) {
//             setOpen(false);
//         }
//     }
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//     }
//   },[])
//   return (
//     <div onClick={() => setOpen(true)} className="min-w-[250px] sm:w-auto w-full h-[50px] border border-[#818494] rounded-md rounded-l-xl flex gap-1 items-center pl-3 pr-1 relative cursor-pointer sm:flex-1">
//       <BsGeoAltFill size={24} />
//       <div className="flex flex-col">
//         <span className="text-[0.75rem]">Going to</span>
//         {/* <input readOnly value={calendar} /> */}
//         <p className="text-[0.78rem] overflow-hidden w-[220px]"></p>
//       </div>

//       {/* search box */}
//       <div ref={boxRef} className={`${open ? 'flex transition-all ease-in-out duration-1000' : 'hidden'} absolute border border-[#818494] -top-1 -left-2 w-[380px] flex-col bg-white z-[999] rounded-lg`}>
//         <div className="w-full overflow-hidden h-[70px] border-b border-slate-500 flex items-center">
//             <input className="w-full h-[80%] pl-3 overflow-hidden font-bold text-xl outline-none focus:outline-none text-[#818494]" placeholder="Going to" />
//         </div>
//         <div className="w-full min-h-[400px] overflow-y-scroll"></div>
//       </div>
//     </div>
//   );
// };

// export default Destination;

import React, { useEffect, useRef, useState } from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import Loading from "./Loading";
import SearchResultCom from "./SearchResultCom";

const Destination = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(true);
  const [searchVal, setSearchVal] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchResult(true);

    const timeOutId = setTimeout(() => {
      setSearchResult(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search]);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(true)}
        className="min-w-[250px] sm:w-auto w-full h-[50px] border border-[#818494] rounded-md rounded-e-xl flex gap-1 items-center pl-3 pr-1 cursor-pointer sm:flex-1"
      >
        <BsGeoAltFill size={24} />
        <div className="flex flex-col">
          <span className="text-[0.75rem]">Going to</span>
          <p className="text-[0.78rem] overflow-hidden w-[220px]">
            {searchVal}
          </p>
        </div>
      </div>

      {/* search box */}
      <div
        ref={boxRef}
        className={`${
          open ? "flex transition-all ease-in-out duration-1000" : "hidden"
        } absolute border border-[#818494] -top-1 -left-2 w-[380px] flex-col bg-white z-[999] rounded-lg`}
      >
        <div className="w-full overflow-hidden h-[70px] border-b border-slate-500 flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[80%] pl-3 overflow-hidden font-bold text-xl outline-none focus:outline-none text-[#818494]"
            placeholder="Going to"
          />
        </div>
        <div className="w-full h-[400px]">
          {!search && (
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <MdSearch size={28} />
              <p className="text-sm text-center mt-2">
                Search by city or airport
              </p>
            </div>
          )}
          {search &&
            (searchResult ? (
              <Loading />
            ) : (
              <SearchResultCom setOpen={setOpen} setSearchVal={setSearchVal} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
