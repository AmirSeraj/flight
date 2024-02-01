"use client";
import Selector from "@/components/Selector";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const handleActiveTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
  };
  const handleActiveTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
  };
  const handleActiveTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
  };
  const active = {};
  return (
    <main className="flex min-h-screen px-80 py-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <ul className="flex border-b border-slate-400 text-sm w-[290px]">
            <li
              className={`cursor-pointer hover:border-b-2 border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab1 ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={handleActiveTab1}
            >
              Roundtrip
            </li>
            <li
              className={`cursor-pointer hover:border-b-2 border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab2 ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={handleActiveTab2}
            >
              One-way
            </li>
            <li
              className={`cursor-pointer hover:border-b-2 border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab3 ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={handleActiveTab3}
            >
              Multi-city
            </li>
          </ul>
          <Selector />
        </div>
      </div>
    </main>
  );
}
