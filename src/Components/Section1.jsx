"use client";

import { useState } from "react";

export default function Section1() {
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      id: 1,
      badge: "Cloudly",
      title: "Trip Insure",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0 (789)",
      logo: "toggle",
    },
    {
      id: 2,
      badge: "Camera",
      title: "The Business Kit",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0 (789)",
      logo: "camera",
    },
    {
      id: 3,
      badge: "Cloudly",
      title: "Cafe Nostra Cosa",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0 (789)",
      logo: "toggle",
    },
    {
      id: 4,
      badge: "Camera",
      title: "SadaPay Banking",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0 (789)",
      logo: "camera",
    },
  ];

  const totalSlides = 4;

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-25">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold text-[#17253F] font-poppins leading-[38px]">
          Top picks for you
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {cards.map((card) => (
                  <div
                    key={`${slideIndex}-${card.id}`}
                    className="rounded-[20px] bg-[#EFF3F7] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 sm:mb-5 flex h-[58px] sm:h-[64px] items-center gap-2 sm:gap-3 rounded-[16px] border border-[#e1e6ee] bg-white px-3 sm:px-4">
                      {card.logo === "toggle" ? (
                        <div className="relative flex h-5 sm:h-6 w-10 sm:w-12 items-center rounded-full bg-[#16d287] px-1">
                          <div className="absolute right-1 h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-[#1e2a47]" />
                        </div>
                      ) : (
                        <div className="relative flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center">
                          <div className="absolute h-7 sm:h-8 w-7 sm:w-8 rounded-full border-[5px] sm:border-[6px] border-[#1e2a47] border-t-[#19d38a] border-l-[#19d38a] rotate-45" />
                        </div>
                      )}

                      <span className="text-[16px] sm:text-[18px] font-semibold text-[#1e2a47]">
                        {card.badge}
                      </span>
                    </div>

                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#121826]">
                        {card.title}
                      </h3>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16d287] text-[10px] text-white">
                        ✓
                      </div>
                    </div>

                    <p className="mb-3 text-[12px] sm:text-[13px] text-[#7d8597] break-all sm:break-normal">
                      {card.website}
                    </p>

                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-[2px] rounded bg-[#00b67a] px-1 py-[2px] text-white">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="h-3 w-3"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.951-.69l1.068-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <span className="text-[12px] sm:text-[13px] text-[#6f7787]">
                        {card.rating}
                      </span>
                    </div>

                    <button className="group inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-semibold text-[#1e2a47]">
                      View Details
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                current === i
                  ? "h-[8px] w-8 bg-[#1e2a47]"
                  : "h-[8px] w-[8px] border border-[#7f8798] bg-transparent"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}