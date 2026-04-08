"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const blogCards = [
  {
    id: 1,
    image: "/Images/blogimg5.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 2,
    image: "/Images/blogimg15.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 3,
    image: "/Images/blogimg16.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
];

export default function BlogSection5() {
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-card]");
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 24; // gap-6
    const step = cardWidth + gap;

    const currentIndex = Math.round(container.scrollLeft / step);
    const maxIndex = Math.max(blogCards.length - 1, 0);

    setActiveSlide(Math.min(currentIndex, maxIndex));
  };

  const handleNext = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-card]");
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 24;
    const step = cardWidth + gap;

    const nextIndex = Math.min(activeSlide + 1, blogCards.length - 1);

    container.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });

    setActiveSlide(nextIndex);
  };

  const handlePrev = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-card]");
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 24;
    const step = cardWidth + gap;

    const prevIndex = Math.max(activeSlide - 1, 0);

    container.scrollTo({
      left: prevIndex * step,
      behavior: "smooth",
    });

    setActiveSlide(prevIndex);
  };

  return (
    <div className="mx-10">
    <section className="max-w-7xl mx-auto py-20 bg-[#E7F4EF] rounded-[25px]">
      <div className="max-w-[68rem] mx-auto px-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 gap-4 sm:gap-0">
          <h1 className="font-semibold text-[28px] sm:text-[38px] text-[#1E2A3B] text-center sm:text-left">
            Best in Travel Insurance Company
          </h1>          
        </div>
        <div
          ref={scrollRef}
          onScroll={updateActiveSlide}
          className="flex gap-6  overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {blogCards.map((card) => (
            <div
              key={card.id}
              data-card
              className="blog-card shrink-0 snap-start w-[320px]  border border-[#C3C8D0] rounded-[25px] bg-white p-4 sm:p-5"
            >
              <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[200px] rounded-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-5">
                <div className="w-[132px] h-[33px] px-2 py-2 gap-[6px] rounded-full border border-[#C3C8D0] bg-[#FFFFFF] flex items-center justify-center">
                  <p className="text-[#252525] text-[14px] leading-[100%] font-normal">
                    {card.category}
                  </p>
                </div>

             <div className="w-[132px] h-[33px]  rounded-full px-2 py-2 border border-[#C3C8D0] bg-[#FFFFFF] flex items-center justify-center gap-[6px]">
  

  <p className="text-[#252525] text-[14px] leading-[100%] font-normal">
    {card.date}
  </p>

</div>
              </div>

              <h3 className="text-[#252525] font-semibold text-[18px] leading-[26px] mt-3">
                {card.title}
              </h3>

              <p className="text-[#252525CC]  font-normal text-[16px] leading-[24px] mt-1 ">
                {card.description}
              </p>

              <button className="mt-1 inline-flex  items-center gap-2 group hover:cursor-pointer">
                <span className="text-[#04DA8D] font-semibold text-[16px] leading-[30px]">
                  Read Article
                </span>

                <span className="transition-transform group-hover:translate-x-1 text-[#04DA8D]">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

  );
}