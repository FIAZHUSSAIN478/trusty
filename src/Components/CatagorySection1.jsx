"use client";
import { useState } from "react";
import { Search, Grid2x2 } from "lucide-react";

export default function CatagorySection1() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white py-16 md:py-18">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium text-[#7b8190]">
            Homepage <span className="mx-1">{">"}</span>
            <span className="text-[#1f2a44]">Categories</span>
          </p>

          <h1 className="mx-auto tracking-[-0.02em] text-[#1f2a44] sm:text-5xl md:text-6xl font-semibold lg:text-[50px]  md:text-[40px] text-[30px] lg:leading-[60px] md:leading-[50px] text-center capitalize">
           What are you looking for?
          </h1>

          <div className="mx-auto mt-10 flex w-full max-w-4xl items-stretch overflow-visible rounded-full border border-[#e5e7eb] bg-white shadow-sm">
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex h-full min-w-[170px] items-center justify-center gap-2 border-r border-[#e5e7eb] px-5 text-sm font-medium text-[#374151] transition hover:bg-gray-50 rounded-l-full
                    overflow-visible"
              >
                <Grid2x2 size={16} className="text-[#6b7280]" />
                <span>Categories</span>
                <svg
                  className="h-4 w-4 text-[#6b7280]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Electronics</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fashion</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Food</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-1 items-center">
              <input
                type="text"
                placeholder="Search company or product"
                className="h-16 w-full border-0 px-5 text-sm text-[rgba(42,42,42,1)] placeholder:text-[rgba(42,42,42,1)] focus:outline-none focus:ring-0"
              />
            </div>

            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center bg-[#04DA8D] text-white transition hover:bg-[#0fc67e] rounded-r-full
                   overflow-visible"
            >
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}