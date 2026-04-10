"use client";

import Link from "next/link";

export default function TopPicksCard() {
  return (
<div className="w-full md:w-[280px] bg-[#EFF3F7] rounded-2xl p-4">
      

      <div className="bg-white h-[100px] flex items-center justify-center gap-3 rounded-xl border border-gray-200">
        <img src="/images/bank.svg" alt="logo" className="h-10 w-10" />
        <h1 className="font-bold text-2xl text-[#17253F]">
          Cloudly
        </h1>
      </div>


      <div className="mt-4">
        <h2 className="flex items-center gap-2 font-semibold text-lg text-[#17253F]">
          Trip Insure
          <img src="/images/tick.svg" alt="tick" className="h-5 w-5" />
        </h2>

        <p className="text-sm mt-2 text-gray-400">
          www.businesstoolkit.com
        </p>

    
        <div className="flex items-center gap-2 mt-3">
          <img
            className="h-4"
            src="/images/mul-star.svg"
            alt="rating"
          />
          <span className="text-sm">4.9/5.0</span>
          <span className="text-sm text-gray-400">(7891)</span>
        </div>

   <Link href="/heropage/company-details">
  <div className="flex items-center gap-2 mt-4 cursor-pointer">
    <span className="font-semibold text-[#17253F]">
      View Details
    </span>
    <img src="/images/arr.svg" alt="arrow icon" className="h-4 w-4" />
  </div>
</Link>
      </div>
    </div>
  );
}