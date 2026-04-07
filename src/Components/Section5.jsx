"use client";

import Image from "next/image";
import { useState } from "react";

export default function Section5() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center px-4 text-center">
        <h2 className="max-w-[700px] text-[38px] font-bold leading-[54px] tracking-[-1px] text-[#1F2A44] md:text-[52px]">
          Brought Something Recently
        </h2>

        <p className="mt-4 max-w-[540px] text-[16px] leading-[30px] text-[#6B7280]">
          Recently made a purchase? Share your experience to help
          others &amp; provide feedback to businesses!
        </p>

        <div className="relative w-19">
          <Image
            src="/images/section5img.svg"
            alt="hero"
            width={110}
            height={60}
            className="absolute right-0 lg:top-[-100] lg:left-98 md:top-[-70] md:left-80 top-[-130] left-30"
          />
        </div>

        {/* Wrapper (IMPORTANT for dropdown + rounded UI) */}
        <div className="relative mt-3 w-full max-w-[860px]">
          
          {/* Search Bar (same design as before) */}
          <div className="flex overflow-hidden rounded-full border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            
            {/* Categories Button */}
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex min-w-[180px] items-center gap-3 border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-medium text-[#1F2A44] transition hover:bg-[#F8FAFC]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#1F2A44" strokeWidth="1.5" />
                <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="#1F2A44" strokeWidth="1.5" />
                <rect x="2" y="12" width="6" height="6" rx="1.5" stroke="#1F2A44" strokeWidth="1.5" />
                <rect x="12" y="12" width="6" height="6" rx="1.5" stroke="#1F2A44" strokeWidth="1.5" />
              </svg>

              <span>Categories</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`mt-[2px] transition-transform duration-200 ${
                  openDropdown ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M3 5L7 9L11 5"
                  stroke="#1F2A44"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Input */}
            <div className="flex flex-1 items-center">
              <input
                type="text"
                placeholder="Search company or product"
                className="h-full w-full px-6 text-[16px] text-[#1F2A44] placeholder:text-[#9CA3AF] focus:outline-none"
              />
            </div>

            {/* Search Button (UNCHANGED DESIGN) */}
            <button className="flex h-[72px] w-[90px] items-center justify-center bg-[#12D98B] transition hover:bg-[#0FC57E]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="7.5"
                  stroke="white"
                  strokeWidth="2.5"
                />
                <path
                  d="M18 18L23 23"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown (outside, so border-radius safe rahe) */}
          {openDropdown && (
            <div className="absolute left-0 top-[78px] z-20 w-[220px] rounded-[20px] border border-[#E5E7EB] bg-white p-2 text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <button className="block w-full rounded-[12px] px-4 py-3 text-[15px] text-[#1F2A44] hover:bg-[#F8FAFC]">
                Electronics
              </button>
              <button className="block w-full rounded-[12px] px-4 py-3 text-[15px] text-[#1F2A44] hover:bg-[#F8FAFC]">
                Clothing
              </button>
              <button className="block w-full rounded-[12px] px-4 py-3 text-[15px] text-[#1F2A44] hover:bg-[#F8FAFC]">
                Restaurants
              </button>
              <button className="block w-full rounded-[12px] px-4 py-3 text-[15px] text-[#1F2A44] hover:bg-[#F8FAFC]">
                Furniture
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}