import { MapPin, ChevronDown, CircleHelp, CheckCircle2 } from "lucide-react";

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

function StarRating() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex h-[14px] w-[14px] items-center justify-center rounded-[2px] bg-[#00B67A] text-[9px] text-white"
        >
          ★
        </div>
      ))}
    </div>
  );
}

function FilterRow({ label, hasBorder = true, icon = false }) {
  return (
    <div
      className={`flex items-center justify-between py-3 text-[12px] text-[#4B5563] ${
        hasBorder ? "border-b border-[#ECECEC]" : ""
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span>{label}</span>
        {icon && (
          <CircleHelp className="h-[13px] w-[13px] text-[#B9B9B9]" strokeWidth={1.8} />
        )}
      </div>
      <span className="text-[#C5C5C5]">|</span>
    </div>
  );
}

function CompanyCard({ item }) {
  return (
    <div className="rounded-[14px] bg-[#F3F5F7] px-5 py-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div
            className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] ${item.logoBg} text-center text-[8px] font-semibold uppercase leading-[1.05] text-[#23324A]`}
          >
            <span className="whitespace-pre-line">{item.logoText}</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <StarRating />
              <CheckCircle2 className="h-4 w-4 fill-[#00B67A] text-white" />
            </div>

            <h3 className="mt-1.5 text-[15px] font-semibold leading-none text-[#23324A]">
              {item.name}
            </h3>

            <p className="mt-1 text-[11px] text-[#7A8597]">{item.website}</p>
          </div>
        </div>

        <button className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#596274] shadow-sm">
          Most Relevant
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#7A8597]">
        <p>
          TrustScore <span className="font-semibold text-[#23324A]">{item.score}</span>
        </p>
        <p>{item.reviews}</p>
      </div>

      <div className="mt-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-[#7A8597]">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
          <span>{item.location}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <div className="text-[#9AA3B2]">Pet Supply Store</div>
          <button className="flex items-center gap-1 text-[#3B82F6]">
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
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl bg-white px-4 pb-12 pt-5 shadow-sm sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center">
          <p className="text-[10px] text-[#9CA3AF]">
            Homepage &gt; Categories &gt; Animals &amp; Pets
          </p>

          <h1 className="mt-2 text-[28px] font-bold leading-[1.1] text-[#1F2A44] sm:text-[34px]">
            Best in Animals &amp; Pets
          </h1>

          <p className="mt-2 text-[13px] text-[#6B7280]">
            Compare the best companies in this category
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">
          <aside>
            <div className="rounded-[6px] border border-[#E8E8E8] bg-[#FAFAFA]">
              <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-3">
                <span className="text-[12px] font-semibold text-[#1F2A44]">Filters</span>
                <button className="text-[9px] font-medium text-[#EF4444]">
                  Clear all filters
                </button>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  <button className="rounded-full border border-[#D9DDE3] bg-white px-2.5 py-1 text-[9px] text-[#4B5563]">
                    Any
                  </button>
                  <button className="rounded-full border border-[#BFE8D8] bg-[#E8F8F1] px-2.5 py-1 text-[9px] text-[#00B67A]">
                    3.0+
                  </button>
                  <button className="rounded-full border border-[#BFE8D8] bg-[#E8F8F1] px-2.5 py-1 text-[9px] text-[#00B67A]">
                    4.0+
                  </button>
                  <button className="rounded-full border border-[#BFE8D8] bg-[#E8F8F1] px-2.5 py-1 text-[9px] text-[#00B67A]">
                    4.5+
                  </button>
                </div>

                <div className="mt-4 rounded-[6px] border border-[#E4E7EB] bg-white px-3 py-2.5 text-[11px] text-[#374151]">
                  <div className="flex items-center justify-between">
                    <span>United States</span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#7B8494]" />
                  </div>
                </div>

                <div className="mt-2 rounded-[6px] border border-[#E4E7EB] bg-white px-3 py-2.5 text-[11px] text-[#9CA3AF]">
                  <div className="flex items-center justify-between">
                    <span>🔍 City or ZIP code</span>
                  </div>
                </div>

                <div className="mt-4">
                  <FilterRow label="Verified" icon />
                  <FilterRow label="Claimed" icon />
                  <FilterRow label="Animal Health" />
                  <FilterRow label="Cats & Dogs" />
                  <FilterRow label="Pet Store" />
                  <FilterRow label="Animal Parks & Zoo" hasBorder={false} />
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-[#6B7280]">1–20 of 1,770 results</p>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#6B7280]">Sort by</span>
                <button className="flex items-center gap-5 rounded-[6px] border border-[#E4E7EB] bg-white px-3 py-2 text-[11px] text-[#374151]">
                  Most relevant
                  <ChevronDown className="h-3.5 w-3.5 text-[#7B8494]" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {companies.map((item) => (
                <CompanyCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-[#6B7280]">
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

        <div className="mt-14 text-center">
          <h2 className="text-[22px] font-semibold text-[#1F2A44]">Popular Searches</h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
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
                className="rounded-full border border-[#D7DBE2] bg-white px-4 py-2 text-[11px] text-[#374151]"
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