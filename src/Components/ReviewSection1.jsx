import { Search, Grid2x2 } from "lucide-react";

export default function ReviewSection1() {
  return (
    <section className="w-full bg-white py-16  md:py-18">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium text-[#7b8190]">
            Homepage <span className="mx-1">{">"}</span>
            <span className="text-[#4b5563]">Write a review</span>
          </p>

          <h1 className="mx-auto  text-4xl  tracking-[-0.02em] text-[#1f2a44] sm:text-5xl md:text-6xl font-'Poppins' font-semibold text-[50px] leading-[60px] text-center capitalize">
            Write A Review On Products
            <br />
            &amp; Services
          </h1>

          <div className="mx-auto mt-10 flex w-full max-w-4xl items-stretch overflow-hidden rounded-full border border-[#e5e7eb] bg-white shadow-sm">
            <button
              type="button"
              className="flex min-w-[170px] items-center justify-center gap-2 border-r border-[#e5e7eb] px-5 text-sm font-medium text-[#374151] transition hover:bg-gray-50"
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
            <div className="flex flex-1 items-center">
              <input
                type="text"
                placeholder="Search company or product"
                className="h-16 w-full border-0 px-5 text-sm text-[rgba(42,42,42,1)] placeholder:text-[rgba(42,42,42,1)] focus:outline-none focus:ring-0 "
              />
            </div>
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center bg-[#04DA8D] text-white transition hover:bg-[#0fc67e]"
            >
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
