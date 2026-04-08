"use client";
import Image from "next/image";
import { useState } from "react";

export default function Section2() {
  const [scrollIndexTravel, setScrollIndexTravel] = useState(0);
  const [scrollIndexBanks, setScrollIndexBanks] = useState(0);

  const visibleCount = 4;
  const cardWidth = 240;
  const cardGap = 20;

  const travelCompanies = [
    {
      name: "Trip Insure",
      brand: "Techlify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "techlify",
    },
    {
      name: "The Business Kit",
      brand: "Restaurant",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "restaurant",
    },
    {
      name: "Cafe Nostra Cosa",
      brand: "Techlify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "techlify",
    },
    {
      name: "SadaPay Banking",
      brand: "Restaurant",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "restaurant",
    },
  ];

  const topBanks = [
    {
      name: "Trip Insure",
      brand: "Codelify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "codelify",
    },
    {
      name: "The Business Kit",
      brand: "Techlify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "techlify",
    },
    {
      name: "Cafe Nostra Cosa",
      brand: "Codelify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "codelify",
    },
    {
      name: "SadaPay Banking",
      brand: "Techlify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "techlify",
    },
    {
      name: "SadaPay",
      brand: "Codelify",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "(7891)",
      verified: true,
      logo: "codelify",
    },
  ];

  const handlePrevTravel = () =>
    setScrollIndexTravel((prev) => Math.max(prev - 1, 0));

  const handleNextTravel = () =>
    setScrollIndexTravel((prev) =>
      Math.min(prev + 1, travelCompanies.length - visibleCount)
    );

  const handlePrevBanks = () =>
    setScrollIndexBanks((prev) => Math.max(prev - 1, 0));

  const handleNextBanks = () =>
    setScrollIndexBanks((prev) =>
      Math.min(prev + 1, topBanks.length - visibleCount)
    );

  const renderTrustStars = () => (
    <div className="flex items-center gap-[2px] rounded-[2px] bg-[#00B67A] px-[4px] py-[3px]">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-[8px] w-[8px] text-white"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.951-.69l1.068-3.292z" />
        </svg>
      ))}
    </div>
  );

  const LogoBadge = ({ type, label }) => {
    return (
      <div className="mb-[16px] flex h-[64px] items-center gap-[10px] rounded-[12px] bg-[#F3F5F7] px-[14px]">
        {type === "techlify" && (
          <div className="relative h-[22px] w-[22px] flex-shrink-0">
            <div className="absolute left-[3px] top-[2px] h-[15px] w-[5px] rounded-full bg-[#12D18E] rotate-[-35deg]" />
            <div className="absolute right-[3px] top-[3px] h-[16px] w-[5px] rounded-full bg-[#1D2B4F] rotate-[-35deg]" />
          </div>
        )}

        {type === "restaurant" && (
          <div className="relative h-[22px] w-[22px] flex-shrink-0">
            <div className="absolute left-[3px] top-[7px] h-[8px] w-[12px] rounded-[6px] border-[2px] border-[#12D18E] rotate-[-45deg]" />
            <div className="absolute left-[8px] top-[2px] h-[7px] w-[2px] rounded-full bg-[#12D18E] rotate-[-45deg]" />
          </div>
        )}

        {type === "codelify" && (
          <div className="relative flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center">
            <span className="text-[14px] font-bold text-[#12D18E]">{`</`}</span>
            <span className="ml-[-1px] text-[14px] font-bold text-[#1D2B4F]">{`>`}</span>
          </div>
        )}

        <span className="truncate text-[14px] font-semibold leading-none text-[#28345D]">
          {label}
        </span>
      </div>
    );
  };

  const CompanyCard = ({ item }) => {
    return (
      <div className="min-w-[240px] max-w-[240px] h-[260px] rounded-[12px] bg-white p-[14px] shadow-[0_2px_8px_rgba(16,24,40,0.05)]">
        <LogoBadge type={item.logo} label={item.brand} />

        <div className="mb-[8px] flex items-center gap-[6px]">
          <h3 className="truncate text-[20px] font-semibold leading-[1.2] text-[#111827]">
            {item.name}
          </h3>

          {item.verified && (
            <div className="flex h-[12px] w-[12px] flex-shrink-0 items-center justify-center rounded-full bg-[#12D18E] text-[8px] text-white">
              ✓
            </div>
          )}
        </div>

        <p className="mb-[12px] truncate text-[11px] leading-none text-[#98A2B3]">
          {item.website}
        </p>

        <div className="mb-[14px] flex items-center gap-[6px]">
          {renderTrustStars()}
          <span className="text-[10px] leading-none text-[#98A2B3]">
            {item.rating} {item.reviews}
          </span>
        </div>

        <button className="inline-flex items-center gap-[4px] text-[12px] font-semibold leading-none text-[#1D2B4F]">
          View Details
          <span>→</span>
        </button>
      </div>
    );
  };

  return (
    <section className="w-full bg-white px-4 lg:px-8 py-3">
      <div className="w-full rounded-[16px]  bg-[#E7F4EF] px-10 lg:px-20 pb-5 pt-12">
        
        <div className="mb-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold leading-none text-[#1D2B4F] md:text-[20px]">
              Best in Travel Insurance Company
            </h2>

            <div className="flex items-center gap-[6px]">
              <button
                onClick={handlePrevTravel}
                disabled={scrollIndexTravel === 0}
                className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#12D18E] text-white disabled:opacity-70"
              >
                <svg
                  className="h-[10px] w-[10px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={handleNextTravel}
                disabled={scrollIndexTravel >= travelCompanies.length - visibleCount}
                className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#1D2B4F] text-white disabled:opacity-70"
              >
                <svg
                  className="h-[10px] w-[10px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-[20px] transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${scrollIndexTravel * (cardWidth + cardGap)
                  }px)`,
              }}
            >
              {travelCompanies.map((item, idx) => (
                <CompanyCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        
        <div className="mb-9">
          <h2 className="mb-5 text-center text-[18px] font-semibold leading-none text-[#1D2B4F] md:text-[20px]">
            Top Verified Banks
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex gap-[20px] transition-transform duration-300 ease-out "
              style={{
                transform: `translateX(-${scrollIndexBanks * (cardWidth + cardGap)
                  }px)`,
              }}
            >
              {topBanks.map((item, idx) => (
                <CompanyCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>


        <div className="relative  overflow-hidden rounded-[14px] bg-[#005C3D] px-10 top-30">
          <div className="relative z-10 flex min-h-[188px] flex-col justify-between px-10 py-6 md:flex-row md:items-center md:px-7 ">
            <div className="max-w-[255px] pt-1">
              <h3 className="mb-3 text-[18px] font-semibold leading-[1.25] text-white md:text-[22px] ">
                We Provide Trusty Feedback
                <br />
                You Can Rely On
              </h3>

              <p className="mb-5 max-w-[235px] text-[9px] leading-[1.7] text-[#D7EBE4] md:text-[10px]">
                We&apos;re a review platform accessible to all. Our vision is to become a
                global symbol of trust, empowering consumers to shop confidently
                while helping businesses grow and improve.
              </p>

              <button className="rounded-full bg-[#12D18E] px-5 py-[9px] text-[9px] font-semibold text-[#064332] md:text-[10px]">
                More About Us
              </button>
            </div>

            <div className="relative  mt-6 flex h-[170px] flex-1 items-end justify-end md:mt-0">
              <div className="absolute left-[18px] top-[70px] hidden md:block">
                <div className="absolute left-[18px] top-[70px] hidden md:block z-[999]">
                  <Image
                    src="/Images/section2img.svg"
                    alt="decor"
                    width={42}
                    height={46}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute left-[300px] top-[4px] hidden md:block">
                <Image
                  src="/Images/section2card.svg"
                  alt="Section 2 Card"
                  width={160}
                  height={120}
                  className="rounded-[12px] shadow-md"
                />
              </div>

              <div className="absolute right-[8px] top-[26px] hidden rounded-full bg-[#12D18E] px-3 py-[6px]  shadow-md md:flex md:items-center">
                <div>
                  <p className="text-[6px] leading-none text-[#E8FFF6]">
                    Have Delicious!
                  </p>
                  <div className="mt-[4px] flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex h-[8px] w-[8px] items-center justify-center rounded-[1px] bg-[#00B67A] text-[5px] text-white"
                      >
                        ★
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[-4px] right-[42px] h-[108px] w-[108px] rounded-full bg-[#0F7A56] " />

              <img
                src="/Images/section2person.svg"
                alt="person"
                className="absolute bottom-[-50] right-[16px] z-10 h-[186px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
