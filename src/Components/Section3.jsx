"use client";

export default function Section3() {
  const reviews = [
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Courtney Henry",
      avatar: "/images/section3user1.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Arlene McCoy",
      avatar: "/images/section3user2.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Ralph Edwards",
      avatar: "/images/section3user3.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Brooklyn Simmons",
      avatar: "/images/section3user4.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Floyd Miles",
      avatar: "/images/section3user5.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Savannah Nguyen",
      avatar: "/images/section3user6.svg",
    },
  ];

  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(2, 6);

  const ReviewCard = ({ item, index }) => (
    <div
      key={index}
      className="w-[320px] shrink-0 rounded-[20px] border border-[#E5E7EB] bg-[#EFF3F7] px-4 py-4 shadow-none"
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="relative h-[54px] w-[54px] rounded-[10px] border border-[#D1D5DB] bg-[#F8F8F8]">
          <span className="absolute right-[-2px] top-[-2px] h-[10px] w-[10px] rounded-full border border-[#16A34A] bg-[#22C55E]"></span>
        </div>

        <div className="pt-[2px]">
          <h3 className="text-[14px] font-semibold leading-none text-[#111827]">
            {item.name}
          </h3>
          <p className="mt-[6px] text-[12px] leading-none text-[#8A8F98]">
            {item.website}
          </p>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <div className="flex items-center gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex h-[14px] w-[14px] items-center justify-center bg-[#00B67A] text-[9px] leading-none text-white"
            >
              ★
            </div>
          ))}
        </div>

        <span className="text-[12px] font-medium leading-none text-[#4B5563]">
          5.0
        </span>
      </div>

      <p className="mb-3 max-w-[250px] text-[13px] leading-[1.55] text-[#3F3F46]">
        Had a great experience with Tech Wizards when my laptop crashed. They
        were able to recover all my files and had my computer running like new
        again.....
      </p>

      <button className="mb-4 text-[13px] font-semibold leading-none text-[#00B67A]">
        Read Review →
      </button>

      <div className="mb-4 h-px w-full bg-[#E5E7EB]" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="h-[42px] w-[42px] overflow-hidden rounded-full bg-[#D1D5DB]">
            <img
              src={item.avatar}
              alt={item.user}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold leading-none text-[#2C2F36]">
              {item.user}
            </p>

            <div className="mt-[6px] flex items-center gap-1">
              <span className="text-[12px] leading-none text-[#8A8F98]">
                Top Contributor
              </span>
              <span className="text-[10px] text-[#F59E0B]">🟠</span>
            </div>
          </div>
        </div>

        <span className="shrink-0 text-[11px] leading-none text-[#A1A1AA]">
          15 mins ago
        </span>
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-white px-6 py-16 md:px-10 lg:mt-30 md:mt-20">
      <div className="w-full">
        <h2 className="mb-10 text-center text-[28px] font-semibold leading-[1.2] text-[#1F2A44] md:text-[38px]">
          Discover What People Like and Dislike
        </h2>

        <div className="space-y-6 overflow-hidden">
          {/* Row 1 - Left to Right */}
          <div className="marquee">
            <div className="marquee-track">
              {[...firstRow, ...firstRow].map((item, index) => (
                <ReviewCard item={item} index={index} key={index} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee marquee-reverse">
            <div className="marquee-track">
              {[...secondRow, ...secondRow].map((item, index) => (
                <ReviewCard item={item} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll-left 22s linear infinite;
        }

        .marquee-reverse .marquee-track {
          animation: scroll-right 22s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}