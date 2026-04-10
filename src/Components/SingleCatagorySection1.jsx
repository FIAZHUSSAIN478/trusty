import { MapPin, ChevronDown, CircleHelp, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Boomerang Pet ID Tags",
    website: "www.boomerangtags.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#E8E6B8]",
    logoText: "boomerang\nTAGS",
  },
  {
    id: 2,
    name: "Tadibrothers",
    website: "www.tadibrothers.com",
    score: "4.8",
    reviews: "281 reviews",
    location: "Fresno, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#DDF0FF]",
    logoText: "TDI\nBROTHER",
  },
  {
    id: 3,
    name: "Springtime Supplements",
    website: "www.springtimeinc.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Cookeville, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#EAF6D8]",
    logoText: "SPRINGTIME",
  },
  {
    id: 4,
    name: "Honest Paws",
    website: "www.honestpet.com",
    score: "4.8",
    reviews: "1,726 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#EEE6FF]",
    logoText: "HP",
  },
  {
    id: 5,
    name: "Boomerang Pet ID Tags",
    website: "www.boomerangtags.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#E8E6B8]",
    logoText: "boomerang\nTAGS",
  },
];

function FilterRow({ label, hasBorder = true, icon = false }) {
  return (
    <div
      className={`flex items-center justify-between py-2 mt-1 text-[18px] text-[#4B5563] ${
        hasBorder ? " border border-solid border-[rgba(210,219,228,1)] rounded-2xl p-2" : ""
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span>{label}</span>
        {icon && (
          <CircleHelp className="h-[18px] w-[18px] text-[#B9B9B9]" strokeWidth={1.8} />
        )}
      </div>
      <span className="text-[#C5C5C5]">|</span>
    </div>
  );
}

function CompanyCard({ item }) {
  return (
    <div className="rounded-[14px] bg-slate-100 px-5 py-5">
      <div className="flex items-start  justify-between gap-4">
        <div className="flex gap-3">
          <div
            className={`flex h-[50px]  w-[50px] shrink-0 items-center justify-center rounded-[10px] text-center text-[8px] font-semibold uppercase leading-[1.05] text-[#23324A]`}
          >
            <Image
                    src="/Images/catagory111.svg"
                    alt="Diana S"
                    width={93}
                    height={73}
                    className="h-full w-full rounded-[12px] object-cover"
                    priority
                  />
          </div>

          <div>
            <div className="flex items-center gap-2">
             c
            </div>

            <h3 className="mt-1.5 font-poppins font-semibold text-[20px] leading-[100%] tracking-[0%] text-center [&_p]:leading-trim-cap-heighttext-black">
              {item.name}
            </h3>

            <p className="mt-1 text-[11px] font-'Poppins' font-normal not-italic text-base leading-none tracking-normal  [leading-trim:cap-height] text-black">{item.website}</p>
          </div>
        </div>

        <button className="rounded-full font-'Poppins' bg-[#D6E3EF] px-3 py-1.5 text-[12px] font-medium text-black shadow-sm">
          Most Relevant
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-[#7A8597]">
        <p>
          TrustScore <span className="font-semibold text-[rgb(24,119,242)]">{item.score}</span>
        </p>
        <p>{item.reviews}</p>
      </div>

      <div className="mt-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-[#7A8597]">
          <MapPin className="h-4.5 w-4.5" strokeWidth={2} />
          <span>{item.location}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <div className="text-[#9AA3B2]">Pet Supply Store</div>
          <button className="flex items-center gap-1 text-[rgb(24,119,242)]">
            {item.latest}
            <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SingleCatagorySection1() {
  return (
    <section className="w-full  bg-white">
      <div className="mx-auto max-w-5xl bg-white px-4 pb-12 pt-5  sm:px-6 lg:px-0 xl:px-0">
        <div className="text-center lg:mt-8">
          <p className="text-[16px] font-'Poppins' font-normal not-italic text-base leading-none tracking-normal text-center [leading-trim:cap-height] text-[#9CA3AF]">
            Homepage &gt; Categories &gt; <span className="text-[#17253F] font-'Poppins' font-normal not-italic text-base leading-none tracking-normal text-center [leading-trim:cap-height]">Animals &amp; Pets</span>
          </p>

          <h1 className="mt-2 font-'Poppins' font-semibold text-[50px] leading-[70px] text-center tracking-normal text-[#17253F] sm:text-[34px]">
            Best in Animals &amp; Pets
          </h1>

          <p className="mt-2 font-'Poppins' font-normal not-italic text-[24px] leading-none tracking-normal text-center text-[#17253F]">
            Compare the best companies in this category
          </p>
        </div>

        <div className="mt-10  grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">
          <div>
            <div className="rounded-[6px]  border border-solid border-black/20 bg-white">
              <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-3">
                <span className="font-poppins font-semibold text-[20px] leading-none text-center [leading-trim:cap-height] tracking-normal text-black">Filters</span>
                <button className="text-[14px] font-poppins text-[#EF4444]">
                  Clear all filters
                </button>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-balck">
                    Any
                  </button>
                  <button className="rounded-full border border-[#BFE8D8] bg-[#CBF0E4] px-2.5 py-1 text-[16px] text-black">
                    3.0+
                  </button>
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-black">
                    4.0+
                  </button>
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-black">
                    4.5+
                  </button>
                </div>

                <div className="mt-4 rounded-[6px] border border-solid border-[rgba(210,219,228,1)] bg-white px-3 py-2.5  font-poppins font-normal text-[18px] leading-none tracking-normal text-black">
                  <div className="flex items-center justify-between">
                    <span>United States</span>
                    <ChevronDown className="h-3.5 w-3.5 text-black/70" />
                  </div>
                </div>

                <div className="mt-2 rounded-[6px] border border-solid border-[rgba(210,219,228,1)] bg-white px-3 py-2.5 text-[16px] text-black/50">
                  <div className="flex items-center justify-between">
                    <span> City or ZIP code</span>
                  </div>
                </div>

                <div className="mt-4">
                  <FilterRow label="Verified" icon />
                  <FilterRow label="Claimed" icon />
                </div>
                <div>
                  <div className="flex gap-5">
                  <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">Animal health</button>
                  <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">Cats & Dogs</button>
                </div>
                <div className="flex gap-5">
                  <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">Pet Stores</button>
                  <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">Horses & Riding</button>
                </div>
                <div className="flex gap-5">
                  <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">Animal Parks & Zoo</button>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[14px] font-sans font-normal leading-none tracking-normal text-black">1–20 of 1,770 results</p>

              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-[14px] leading-none tracking-normal text-black">Sort by</span>
                <button className="flex items-center gap-5 rounded-[6px] border border-solid border-slate-200 bg-white px-3 py-2 text-[18px] text-black">
                  Most relevant
                  <ChevronDown className="h-5.5 w-5.5 text-black" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {companies.map((item) => (
                <CompanyCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-8  flex items-center justify-center gap-2 text-[10px] text-[#6B7280]">
              <button className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-black text-white">
                1
              </button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <span>...</span>
              <button>15</button>
              <button className="text-[#9CA3AF]">›</button>
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-[764px] mx-auto text-center ">
          <h2 className="font-'Poppins' font-semibold text-[26px] leading-[70px] tracking-[0%] text-[#17253f]">Popular Searches</h2>

          <div className="mt-5   flex flex-wrap items-center justify-center gap-2">
            {[
              "Horse & Riding",
              "Cats & Dogs",
              "Animal Parks & Zoo",
              "Animal Health",
              "Cats & Dogs",
              "Pet Stores",
              "Horse & Riding",
              "Animal Parks & Zoo",
            ].map((tag, i) => (
              <button
                key={i}
                className="rounded-full font-Poppins font-normal text-[17.91px] leading-[100%] tracking-[0%] border border-solid border-slate-200  bg-white px-4 py-2 text-black"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}