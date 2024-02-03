import { IoPerson } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Travelers = ({ className, className2 }) => {
  const [countAdults, setCountAdults] = useState(1);
  const [countChildren, setCountChildren] = useState(0);
  const [countInfants, setCountInfants] = useState(0);
  const [error, setError] = useState(null);
  //open close
  const [open, setOpen] = useState(false);

  // define ref
  const refOne = useRef();

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const total = countAdults + countChildren + countInfants;

  // Adults
  const handleAdd = () => {
    setCountAdults(countAdults + 1);
    if (countAdults >= 6) {
      setCountAdults(6);
    }

    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduce = () => {
    setCountAdults(() => countAdults - 1);
    if (countAdults === 1) {
      setCountAdults(1);
    }
    if (total < 6) {
      setError(null);
    }
  };
  // children
  const handleAddChildren = () => {
    setCountChildren(() => countChildren + 1);
    // if (countAdults + countChildren + countInfants >= 6) {
    //   setError("We allow up to 7 travelers per booking.");
    // }
    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduceChildren = () => {
    setCountChildren(() => countChildren - 1);
    if (countChildren === 0) {
      setCountChildren(0);
    }
    if (total < 6) {
      setError(null);
    }
  };

  // infants
  const handleAddInfants = () => {
    setCountInfants(() => countInfants + 1);
    // if (countAdults + countChildren + countInfants >= 6) {
    //   setError("We allow up to 7 travelers per booking.");
    // }
    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduceInfants = () => {
    setCountInfants(() => countInfants - 1);
    if (countInfants === 0) {
      setCountInfants(0);
    }
    // if (countAdults + countChildren + countInfants <= 6) {
    //   setError(null);
    // }
    if (total < 6) {
      setError(null);
    }
  };

  // sm:flex-1
  // w-full

  return (
    <div
      onClick={() => setOpen(true)}
      className={`min-w-[200px] w-full sm:flex-1 cursor-pointer h-[50px] border border-[#818494] rounded-md flex gap-2 items-center px-2 relative ${className}`}
    >
      <IoPerson size={20} />
      <div className="flex flex-col">
        <span className="text-[0.75rem]">Travelers</span>
        {/* <input readOnly value={calendar} /> */}
        <span className="text-sm">{total} Travelers</span>
      </div>

      {open && (
        <div
          className={`z-[999] w-[350px] h-auto p-3 flex flex-col gap-2 bg-white border border-slate-400 shadow-lg absolute top-[50px] right-0 rounded-md ${className2}`}
          ref={refOne}
        >
          {/* error */}
          {error && (
            <div className="w-full p-4 text-white bg-red-700 sm:text-[0.8rem] text-[0.7rem] rounded-full">
              {error}
            </div>
          )}

          {/* row 1 */}
          <div className="w-full flex justify-between gap-2 p-2">
            <div className="flex items-center">
              <span>Adults</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countAdults <= 0}
                onClick={handleReduce}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countAdults}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAdd}
                className="w-[34px] h-[34px] border rounded-full border-blue-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* row 2 && children */}
          <div className="w-full flex justify-between items-center gap-2 p-2">
            <div className="flex flex-col justify-center">
              <span>Children</span>
              <span className="text-[0.7rem]">Ages 2 to 17</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countChildren <= 0}
                onClick={handleReduceChildren}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countChildren}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAddChildren}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* row 3 && infants */}
          <div className="w-full flex justify-between items-center gap-2 p-2">
            <div className="flex flex-col justify-center">
              <span>Infants</span>
              <span className="text-[0.7rem]">Younger than 2</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countInfants <= 0}
                onClick={handleReduceInfants}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countInfants}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAddInfants}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travelers;
