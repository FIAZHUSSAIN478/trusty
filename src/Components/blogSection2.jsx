import Image from "next/image";

const blogCards = [
  {
    id: 1,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 2,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
];

export default function BlogSection2() {
  return (
    <section className="w-full bg-white lg:px-20 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
     
        <h2 className="text-[#17253F] text-center font-semibold text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-14">
          Reviews Matter
        </h2>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogCards.map((card) => (
            <div
              key={card.id}
              className="w-full rounded-[25px] bg-[#E9ECEF] p-4 sm:p-5"
            >
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[240px] xl:h-[280px] rounded-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <div className="h-12 px-4 rounded-full border border-[#C3C8D0] bg-[#F7F7F7] flex items-center">
                  <p className="text-[#2D2D2D] text-sm sm:text-base">
                    {card.category}
                  </p>
                </div>

                <div className="h-12 px-4 rounded-full border border-[#C3C8D0] bg-[#F7F7F7] flex items-center gap-2">
                  <p className="text-[#2D2D2D] text-sm sm:text-base">
                    {card.date}
                  </p>
                </div>
              </div>
              <h3 className="text-[#2D2D2D] font-semibold text-xl sm:text-2xl lg:text-[28px] leading-snug mt-5">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B4B4B] text-base sm:text-lg lg:text-xl mt-3">
                {card.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 group">
                <span className="text-[#00D97E] font-semibold text-lg sm:text-xl lg:text-2xl">
                  Read Article
                </span>

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}