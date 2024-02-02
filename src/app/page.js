"use client";
import Selector from "@/components/Selector";
import Tab1 from "@/components/Tab1";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("tab1");
  return (
    <main className="min-h-screen lg:px-30 md:px-20 sm:px-10 px-5 py-10 w-full">
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <ul className="flex border-b border-slate-400 text-sm w-[290px]">
            <li
              className={`cursor-pointer hover:border-b-2 hover:border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab === "tab1" ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={() => setTab("tab1")}
            >
              Roundtrip
            </li>
            <li
              className={`cursor-pointer hover:border-b-2 hover:border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab === "tab2" ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={() => setTab("tab2")}
            >
              One-way
            </li>
            <li
              className={`cursor-pointer hover:border-b-2 hover:border-slate-800 transition-all duration-150 w-full text-center p-2 ${
                tab === "tab3" ? "text-blue-700 border-b-2 border-blue-700" : ""
              }`}
              onClick={() => setTab("tab3")}
            >
              Multi-city
            </li>
          </ul>
          <Selector />
        </div>
        {tab === "tab1" && <Tab1 />}
        {/* {tab === "tab2" && <tab2 />} */}
        {/* {tab === "tab3" && <Box>tab3</Box>} */}
      </div>
    </main>
  );
}
