"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Grid2x2,
} from "lucide-react";

const categories = [
  { name: "Electronics", image: "/Images/heroicon1.svg" },
  { name: "Clothing", image: "/Images/heroicon2.svg" },
  { name: "Real Estate", image: "/Images/heroicon3.svg" },
  { name: "Hotels", image: "/Images/heroicon4.svg" },
  { name: "Bank", image: "/Images/heroicon5.svg" },
  { name: "Restaurants", image: "/Images/heroicon6.svg" },
  { name: "Furniture Store", image: "/Images/heroicon7.svg" },
];

function ReviewCard({ image, align = "left" }) {
  return (
    <div
      className={`absolute hidden lg:block ${align === "left" ? "left-[22px] top-[34px]" : "right-[20px] top-[192px]"
        }`}
    >
      <img
        src={image}
        alt="review card"
        className="w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain drop-shadow-[0_12px_30px_rgba(16,24,40,0.12)]"
      />
    </div>
  );
}

export default function HeroSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes marqueeRightToLeft {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .marquee-track {
        width: max-content;
        animation: marqueeRightToLeft 22s linear infinite;
      }

      .marquee-track:hover {
        animation-play-state: paused;
      }

      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[67rem] border mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#EEF8F4] via-[#F3F8F5] to-[#F8F8F8] px-4 sm:px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-16 lg:pb-0">
          <div className="absolute left-[-80px] top-[120px] w-[280px] h-[280px] bg-[#DDF3EA] rounded-full blur-3xl opacity-70" />
          <div className="absolute right-[-60px] top-[60px] w-[260px] h-[260px] bg-[#EAF7F1] rounded-full blur-3xl opacity-80" />

          <ReviewCard image="/Images/heroleft.svg" align="left" />
          <ReviewCard image="/Images/heroright.svg" align="right" />

          <div className="relative z-10 max-w-[920px] mx-auto text-center pt-6 lg:pt-10">
            <h1 className="text-[#1D2B4F] font-poppins font-semibold text-center font-extrabold tracking-[-0.03em] max-w-[760px] mx-auto text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[38px] sm:leading-[46px] md:leading-[56px] lg:leading-[70px]">
              Find Top Businesses & Services,
              <br />
              <span className="font-extrabold">Trusted by Your Reviews</span>
            </h1>

            <div className="relative w-fit mx-auto mt-3">
              <p className="text-[#475467] text-[15px] md:text-[17px] font-medium font-poppins font-normal text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px]">
                Millions of unbiased reviews. Trusted by 700 Million+ users
              </p>

              <img
                src="/Images/hero1.svg"
                alt="arrow"
                className="hidden lg:block absolute -right-[130px] -top-[70px] w-[92px] h-auto"
              />
            </div>

            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-[760px] h-[48px] sm:h-[54px] md:h-[62px] bg-white rounded-full shadow-[0_12px_32px_rgba(16,24,40,0.08)] border border-[#EAECF0] overflow-visible flex items-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="h-full px-3 sm:px-5 md:px-6 flex items-center gap-2 text-[13px] text-[#344054] border-r border-[#EAECF0] whitespace-nowrap"
                >
                  <Grid2x2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Categories</span>
                  <ChevronDown
                    className={`w-4 h-4  text-[#98A2B3]  transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0  top-[calc(100%+10px)] w-[220px] bg-white  rounded-[18px] shadow-[0_12px_32px_rgba(16,24,40,0.10)]  p-2">
                    {categories.map((item, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[12px] hover:bg-[#F7F8FA] transition text-left"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-[13px] text-[#344054] font-medium">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                <input
                  type="text"
                  placeholder="Search company or product"
                  className="flex-1 h-full px-3 sm:px-4 md:px-5 text-[12px] sm:text-[13px] text-[#344054] placeholder:text-[#98A2B3] outline-none bg-transparent"
                />

                <button className="h-full w-[56px] sm:w-[64px] md:w-[72px] bg-[#12D18E] hover:bg-[#10c684] transition flex items-center justify-center rounded-l-none rounded-r-full">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative  max-w-[1180px] mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-20 lg:ml-10">
            <div className="flex items-center justify-between gap-4 mb-7">
              <h2 className="text-[#17253F] font-extrabold tracking-[-0.02em] leading-none font-poppins font-semibold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[38px]">
                What you are looking for?
              </h2>

              <Link href="/CatagoryDetails">
                <button className="hidden sm:flex items-center gap-2 border border-[#12D18E] text-[#1D2B4F] rounded-full px-4 md:px-5 h-[36px] md:h-[40px] text-[12px] md:text-[14px] font-medium bg-white/70">
                  <span>See More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="overflow-hidden pb-3">
              <div ref={marqueeRef} className="marquee-track flex gap-3 sm:gap-4">
                {[...categories, ...categories].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="min-w-[110px] sm:min-w-[130px] md:min-w-[138px] h-[90px] sm:h-[100px] md:h-[104px] rounded-[18px] bg-white shadow-[0_8px_20px_rgba(16,24,40,0.06)] border border-[#F2F4F7] flex flex-col items-center justify-center text-center px-3"
                    >
                      <div className="mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] object-contain"
                        />
                      </div>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[#344054] leading-tight">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 border-t border-[#E4E7EC]" />
          </div>
        </div>
      </div>
    </section>
  );
}
