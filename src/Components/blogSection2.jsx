"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
    image: "/Images/blogimg7.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 3,
    image: "/Images/blogimg8.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 4,
    image: "/Images/blogimg9.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
];

export default function BlogSection2() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const firstCard = container.querySelector('.blog-card');
        if (firstCard) {
          const width = firstCard.offsetWidth;
          const style = window.getComputedStyle(container);
          const gap = parseFloat(style.gap) || 0;
          setCardWidth(width + gap);
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || cardWidth === 0) return;

    const scrollLeft = container.scrollLeft;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    setActiveDot(currentIndex);
  };

  const scrollToDot = (index) => {
    const container = scrollRef.current;
    if (!container || cardWidth === 0) return;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-[68rem] mx-auto px-6 sm:px-10">
        <h2 className="text-[#17253F] mb-8 text-center font-semibold text-2xl sm:text-3xl lg:text-4xl mb-14">
          Reviews Matter
        </h2>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {blogCards.map((card) => (
            <div
              key={card.id}
              className="blog-card shrink-0 snap-start w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] border border-[#C3C8D0] rounded-[25px] bg-[#E9ECEF] p-4 sm:p-5"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[200px] rounded-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Category + Date */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <div className="px-[18px]  h-[33px] px-3 rounded-full border border-[#C3C8D0] bg-white flex items-center justify-center">
                  <p className="text-[#2D2D2D] text-[14px]">
                    {card.category}
                  </p>
                </div>

                <div className="h-[33px] w-[142px] px-3 rounded-full border border-[#C3C8D0] bg-[#F7F7F7] flex items-center gap-2">
                  <p className="text-[#252525] text-[14px]">
                    {card.date}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#252525] font-semibold text-[18px] leading-[26px] mt-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#252525CC] text-[16px] leading-[24px] mt-1">
                {card.description}
              </p>

              {/* Button */}
              <button className="mt-2 inline-flex items-center gap-2 group cursor-pointer">
                <span className="text-[#04DA8D] font-semibold text-[16px]">
                  Read Article
                </span>
                <span className="transition-transform group-hover:translate-x-1 text-[#04DA8D]">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10 mb-8">
          {blogCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`transition-all duration-300 ${
                activeDot === index
                  ? "w-[30px] h-[8px] bg-[#17253F] rounded-full"
                  : "w-[8px] h-[8px] border border-[#17253F] rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}